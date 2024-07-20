#!/bin/bash


set -e

# remove old package files
rm -rf dist

# Comment out the second line doc_hide_components
sed -i "" -e '2 s/^/\/\/ /' src/index.ts

# build packaing
yarn build

# restore the second line doc_hide_components
sed -i "" 's/\/\/ //' src/index.ts

## publish
npm publish
