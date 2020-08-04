#!/usr/bin/env python

import sys


def is_empty_line(line: str) -> bool:
    return line == "" or line.isspace()


def is_comment_line(line: str) -> bool:
    return line.lstrip().startswith("//")


def strip_after_semi(line: str) -> str:
    idx: int = line.rfind(";")
    if idx >= 0:
        return line[:(idx + 1)]

    return line


def main() -> None:
    line: str
    for line in sys.stdin:
        if is_empty_line(line) or is_comment_line(line):
            continue
        line = strip_after_semi(line.rstrip())
        print(line)


if __name__ == "__main__":
    main()
