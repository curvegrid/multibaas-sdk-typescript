#!/bin/bash -e
# Copyright (c) 2022 Curvegrid Inc.

# Generate the Python Multibaas SDK
cd "$(dirname "$0")"

# Set the openapi-generator version
if [[ -n "${OPENAPI_GENERATOR_VERSION}" ]]; then
    npx @openapitools/openapi-generator-cli version-manager set ${OPENAPI_GENERATOR_VERSION}
fi

# If a package version is given as an argument, set it
VERSION="$1"
if [[ "${VERSION}" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]]; then
    perl -pi -e "s/npmVersion: [0-9]+\.[0-9]+\.[0-9]+(-.+)?/npmVersion: ${VERSION}/g" openapi-generator.yaml
fi

# preserve package.json file
mkdir no-overwrite
cp package.json no-overwrite/package.json

# Generate the SDK
npx @openapitools/openapi-generator-cli batch \
    openapi-generator.yaml \
    --clean \ 

npm install
npm run build
npx prettier@2.7.1 --trailing-comma none --print-width=120 --single-quote './**/*.ts' --write

# copy package.json file
mv no-overwrite/package.json package.json
rm -rf no-overwrite