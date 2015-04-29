#!/bin/sh

# License: CC0 1.0 Universal
# https://creativecommons.org/publicdomain/zero/1.0/legalcode

set -e

SCRIPT_PATH=script

. $SCRIPT_PATH/doc-upload.cfg

[ "$BRANCH" = master ] || exit 0

[ "$PULL_REQUEST" = false ] || exit 0

[ "$RUST_VERSION" = "$DOC_RUST_VERSION" ] || exit 0

echo "Publishing docs..."

git clone -q --branch gh-pages git@github.com:$DOCS_REPO deploy_docs

cd deploy_docs
git config user.name "doc upload bot"
git config user.email "nobody@example.com"
rm -rf $PROJECT_NAME
mv ../target/doc $PROJECT_NAME
git add -A $PROJECT_NAME
git commit -m "doc upload for $PROJECT_NAME" || true

for i in {1..5}; do
    git push -q origin gh-pages && break # if successful, break loop
    echo "Rebasing... attempt $i"
    git pull -q -r # otherwise try a rebase
done

echo "Doc upload completed"
