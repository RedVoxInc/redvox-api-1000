#!/usr/bin/env bash

if ! [[ -x "$(command -v protoc)" ]]; then
  echo 'Error: protoc is not installed.' >&2
  exit 1
fi

if ! [[ -x "$(command -v javadoc)" ]]; then
  echo 'Error: javadoc is not installed.' >&2
  exit 1
fi

if ! [[ -x "$(command -v pdoc3)" ]]; then
  echo 'Error: pdoc3 is not installed.' >&2
  exit 1
fi

if ! [[ -x "$(command -v doxygen)" ]]; then
  echo 'Error: doxygen is not installed.' >&2
  exit 1
fi

if ! [[ -x "$(command -v git)" ]]; then
  echo 'Error: git is not installed.' >&2
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
SWIFT_OUT=${OUT}/swift

# Compile the protobuf
protoc  --java_out=${JAVA_OUT}                                  \
        --python_out=${PYTHON_OUT} --pyi_out=${PYTHON_OUT}      \
        --objc_out=${OBJ_C_OUT}                                 \
        --swift_out=${SWIFT_OUT}                                \
        ${SRC}

# Define sub_api version
python3 insert_sub_api.py

# Generate API docs
# Ensure you have the protobuf java library that matches your protoc version https://repo1.maven.org/maven2/com/google/protobuf/protobuf-java/
PROTOC_VERSION=$(protoc --version | awk '{print $2}')
javadoc -classpath protobuf-java-${PROTOC_VERSION}.jar -sourcepath ${JAVA_OUT} -d docs/api/java io.redvox.apis
pdoc3 ${PYTHON_OUT}/src/redvox_api_m/redvox_api_m_pb2.py --overwrite --html --html-dir docs/api/python -c show_type_annotations=True
doxygen Doxyfile

# Produce a stripped down version of the proto
cat ${SRC} | python3 strip.py > src/redvox_api_m/redvox_api_m.min.proto

# Here's where we try to keep the rendered API docs up-to-date
TMP_DIR="/tmp/proto_build"
rm -rf ${TMP_DIR}
REPO_ROOT="${TMP_DIR}/RedVoxInc.github.io"
API_ROOT="${REPO_ROOT}/api-m"
mkdir -p ${TMP_DIR}
BACK=$(pwd)
cd ${TMP_DIR}
git clone git@github.com:RedVoxInc/RedVoxInc.github.io.git
mkdir -p ${API_ROOT}
cd ${BACK}
rm -rf ${API_ROOT}/*
cp -R docs/api/* ${API_ROOT}/.
cd ${REPO_ROOT}
git add api-m
git commit -m"Update API M protobuf docs"
git push origin master
cd ${BACK}
rm -rf ${TMP_DIR}

# Export fully qualified names
./fqns-bin <src/redvox_api_m/redvox_api_m.min.proto
mv api_m_fqns.txt src/generated/fqns/.
mv api_m_fqns.rs src/generated/fqns/.
mv api_m_fqns.py src/generated/fqns/.
