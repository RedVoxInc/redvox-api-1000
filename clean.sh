#!/usr/bin/env bash

set -o nounset
set -o errexit
set -o xtrace

OUT=src/generated
rm -rf ${OUT}/java/*
rm -rf ${OUT}/js/*
rm -rf ${OUT}/obj_c/*
rm -rf ${OUT}/python/*

rm -rf docs/api/java/*
rm -rf docs/api/python/*
rm -rf docs/api/obj_c/*
