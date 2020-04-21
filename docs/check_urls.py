#!/usr/bin/env python3

"""
Checks all URLs found in the markdown files to make sure they actually point to something.

See https://urllib3.readthedocs.io/en/latest/user-guide.html#ssl if you plan on running this.
"""

from dataclasses import dataclass
import glob
import os.path
import re
from typing import List
import urllib3

import certifi


@dataclass
class Link:
    """
    Encapsulates a url and metadata associated with it.
    """
    url: str
    filename: str
    row: int
    col: int


def identify_markdown_paths(base_path: str = "./") -> List[str]:
    """
    Returns a list of paths to markdown files. Files are found recursively from the base_path.
    :param base_path: The base path to start searching for markdown files (optional)
    :return: A list of paths to markdown files.
    """
    return glob.glob(os.path.join(base_path, "**", "*.md"), recursive=True)


def extract_url_at_idx(line: str, idx: int) -> str:
    """
    Poor man's URL extractor. Given a line and a starting index (the index at which http was found in the line), parse
    the rest of the URL. The end index of the URL is found by searching for a space or a ")" character which ends many
    URLs in markdown. If this doesn't work for you, you'll likely need to switch to regex.
    :param line: The line of text to extract the URL from.
    :param idx: The starting index of the URL.
    :return: The extracted URL.
    """
    for i, c in enumerate(line[idx:]):
        if c in {" ", ")"}:
            return line[idx:idx + i]

    return line[idx:]


def extract_links(markdown_paths: List[str]) -> List[Link]:
    """
    Extracts links from markdown files.
    :param markdown_paths: Paths to the markdown files to extract links from.
    :return: A list of found links.
    """
    links: List[Link] = []

    for markdown_path in markdown_paths:
        with open(markdown_path, "r") as markdown_in:
            content: str = markdown_in.read()
            lines: List[str] = list(map(lambda line: line.strip(), content.splitlines(keepends=False)))

            for line_no, line in enumerate(lines):
                for match in re.finditer("http", line):
                    idx: int = match.start()
                    if idx >= 0:
                        url: str = extract_url_at_idx(line, idx)
                        link: Link = Link(url, markdown_path, line_no + 1, idx)
                        links.append(link)

    return links


def check_links(links: List[Link]) -> List[Link]:
    """
    Checks that links return an HTTP 200 response.
    :param links: Links to check.
    :return: A list of any links that did not return an HTTP 200 response.
    """
    bad_links: List[Link] = []
    http = urllib3.PoolManager(cert_reqs="CERT_REQUIRED", ca_certs=certifi.where())
    for link in links:
        resp: urllib3.response.HTTPResponse = http.request('GET', link.url)

        status: int = resp.status
        if status != 200:
            bad_links.append(link)
            continue

        # So, it turns out that BitBucket doesn't return a 4XX error when you ask for a missing page. Instead,
        # it returns a 200 with a message "Hmm... can't find that one". How freaking stupid is that? We have standard
        # HTTP response codes for a reason.
        try:
            body: str = resp.data.decode()
            print(body)
            # if "Hmm... can't find that one" in body:
            #     bad_links.append(link)
        except:
            pass

    return bad_links


def main():
    markdown_paths: List[str] = identify_markdown_paths()
    links: List[Link] = extract_links(markdown_paths)
    broken_links: List[Link] = check_links(links)

    print(f"{len(broken_links)} broken links found out of {len(links)} total links")
    for i, broken_link in enumerate(broken_links):
        print(f"{i}:{broken_link.filename} {broken_link.row}:{broken_link.col} {broken_link.url}")


if __name__ == "__main__":
    main()
