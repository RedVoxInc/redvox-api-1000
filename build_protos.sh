#!/usr/bin/env bash

if ! [[ -x "$(command -v protoc)" ]]; then
  echo 'Error: protoc is not installed.' >&2
  exit 1
fi

protoc  --java_out=./src/java \
        --python_out=./src/python --mypy_out=./src/python \
        --objc_out=./src/obj-c \
        --js_out=./src/js src/redvox-api-1000.proto
