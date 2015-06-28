#!/bin/bash

set -e

SCRIPT_PATH=script

. $SCRIPT_PATH/doc-upload.cfg

[ "$TRAVIS_BRANCH" = master ] || exit 0

[ "$TRAVIS_PULL_REQUEST" = false ] || exit 0

[ "$TRAVIS_RUST_VERSION" = "$DOC_RUST_VERSION" ] || exit 0

echo "Publishing docs..."

# Get SSH key and decrypt it
curl https://mvdnes.github.io/rust-docs/doc-upload-key.enc -o $HOME/doc-upload-key.enc
mkdir -p $HOME/.ssh
openssl aes-128-ofb -d -in $HOME/doc-upload-key.enc -out $HOME/.ssh/id_rsa -pass env:DEPLOY_KEY_PASS
chmod 600 $HOME/.ssh/id_rsa

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
