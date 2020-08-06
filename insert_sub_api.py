from datetime import datetime
from typing import List


def read_sub_api() -> float:
    with open("sub_api_version.txt", "r") as fin:
        line: str = fin.readline(1).strip()
        return float(line)


def insert_front(to_insert: str, file_path: str) -> None:
    with open(file_path, "r") as fin:
        file_contents: str = fin.read()
        if file_contents.startswith(to_insert):
            return

    with open(file_path, "w") as fout:
        fout.write(to_insert + file_contents)


def insert_after(to_insert: str, after: str, file_path: str) -> None:
    with open(file_path, "r") as fin:
        file_lines: List[str] = fin.readlines()
        after_idx: int = -1
        idx: int
        line: str
        for idx, line in enumerate(file_lines):
            if after in line:
                after_idx = idx

            if to_insert in line:
                return

    if after_idx < 0:
        return

    file_lines.insert(after_idx + 1, to_insert)

    with open(file_path, "w") as fout:
        fout.writelines(file_lines)


def main() -> None:
    sub_api: float = read_sub_api()

    attr: str = f"redvox-api-1000 -> build_protos.sh -> insert_sub_api.py on {datetime.utcnow()}"

    c_str: str = f"#define SUB_API {sub_api}  // {attr}\n\n"
    java_str = f"  public final static float SUB_API = {sub_api}f;  // {attr}\n\n"
    python_str = f"SUB_API: float = {sub_api}  # {attr}\n\n"

    insert_front(c_str, "src/generated/obj_c/src/redvox_api_m/RedvoxApiM.pbobjc.h")
    insert_front(python_str, "src/generated/python/src/redvox_api_m/redvox_api_m_pb2.py")
    insert_after(java_str, "public final class RedvoxApiM {", "src/generated/java/io/redvox/apis/RedvoxApiM.java")


if __name__ == "__main__":
    main()
