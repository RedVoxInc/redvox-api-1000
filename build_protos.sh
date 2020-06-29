#!/usr/bin/env bash

if ! [[ -x "$(command -v protoc)" ]]; then
  echo 'Error: protoc is not installed.' >&2
  exit 1
fi

if ! [[ -x "$(command -v protoc-gen-mypy)" ]]; then
  echo 'Error: protoc-gen-mypy is not installed.' >&2
  exit 1
fi

set -o nounset
set -o errexit
set -o xtrace

SRC=src/redvox_api_m/redvox_api_m.proto

OUT=src/generated
JAVA_OUT=${OUT}/java
PYTHON_OUT=${OUT}/python
OBJ_C_OUT=${OUT}/obj_c
JS_OUT=${OUT}/js

protoc  --java_out=${JAVA_OUT}                                  \
        --python_out=${PYTHON_OUT} --mypy_out=${PYTHON_OUT}     \
        --objc_out=${OBJ_C_OUT}                                 \
        --js_out=${JS_OUT}                                      \
        ${SRC}
