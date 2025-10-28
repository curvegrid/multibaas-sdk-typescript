#!/bin/bash -e
# Copyright (c) 2022 Curvegrid Inc.
# Modified version to use Docker OpenAPI Generator

# Generate the Typescript Multibaas SDK using Docker
cd "$(dirname "$0")"

# Determine Docker image tag based on OPENAPI_GENERATOR_VERSION or default to latest
DOCKER_TAG="latest"
if [[ -n "${OPENAPI_GENERATOR_VERSION}" && "${OPENAPI_GENERATOR_VERSION}" != "latest" && "${OPENAPI_GENERATOR_VERSION}" != "7.17.0" ]]; then
    DOCKER_TAG="v${OPENAPI_GENERATOR_VERSION}"
fi

echo "🐳 Using Docker image: openapitools/openapi-generator-cli:${DOCKER_TAG}"
echo "🔍 Checking OpenAPI Generator version..."
docker run --rm openapitools/openapi-generator-cli:${DOCKER_TAG} version

# If a package version is given as an argument, set it
VERSION="$1"
if [[ "${VERSION}" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]]; then
    perl -pi -e "s/npmVersion: [0-9]+\.[0-9]+\.[0-9]+(-.+)?/npmVersion: ${VERSION}/g" openapi-generator.yaml
fi

# Generate the SDK using Docker
docker run --rm -v "${PWD}:/local" -w /local openapitools/openapi-generator-cli:${DOCKER_TAG} batch \
    --clean \
    openapi-generator.yaml

# After OpenAPI generation, update package.json to restore our custom values
jq '.description = "MultiBaas SDK for TypeScript / JavaScript" | 
    .author = "Curvegrid" | 
    .keywords = ["curvegrid", "multibaas", "@curvegrid/multibaas-sdk"]' package.json > package.json.tmp && mv package.json.tmp package.json

# Add exports field for dual CommonJS/ESM support
jq '.exports = {
  ".": {
    "import": "./dist/esm/index.js",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"
  }
}' package.json > package.json.tmp && mv package.json.tmp package.json

jq '.exclude = [ "dist", "node_modules", "templates", "example-esm", "example-commonjs"]' tsconfig.json > tsconfig.json.tmp && mv tsconfig.json.tmp tsconfig.json

# Add explicit include array to prevent compiling example directories
jq '.include = [ "*.ts" ]' tsconfig.json > tsconfig.json.tmp && mv tsconfig.json.tmp tsconfig.json

# Remove prepare script before npm install
jq 'del(.scripts.prepare)' package.json > package.json.tmp && mv package.json.tmp package.json

npm install
npm run build

npx prettier@2.7.1 --trailing-comma none --print-width=120 --single-quote './**/*.ts' --write