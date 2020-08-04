#!/usr/bin/env python

import sys


def is_empty_line(line: str) -> bool:
    return line == "" or line.isspace()


def is_comment_line(line: str) -> bool:
    return line.lstrip().startswith("//")


def main() -> None:
    line: str
    for line in sys.stdin:
        if is_empty_line(line) or is_comment_line(line):
            continue
        print(line.rstrip())


if __name__ == "__main__":
    main()
