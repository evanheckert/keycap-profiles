#!/bin/bash

find . -type f -name "*.js" | while read filename; do
    mv "$filename" "${filename%.js}.tsx"
done
