#!/bin/bash

# License: CC0 1.0 Universal
# https://creativecommons.org/publicdomain/zero/1.0/legalcode

set -e

SCRIPT_PATH=script

. $SCRIPT_PATH/doc-upload.cfg

[ "$TRAVIS_BRANCH" = master ] || exit 0

[ "$TRAVIS_PULL_REQUEST" = false ] || exit 0

[ "$TRAVIS_RUST_VERSION" = "$DOC_RUST_VERSION" ] || exit 0

echo "Publishing docs..."

export DISPLAY=' '
export SSH_ASKPASS=$HOME/ssh-askpass
export GIT_SSH_COMMAND="setsid -w ssh -i $SCRIPT_PATH/travis-doc-upload.pem"

cat << EOS > $HOME/ssh-askpass
#!/bin/bash

echo -n \$DEPLOY_KEY_PASS
EOS
chmod a+x $HOME/ssh-askpass

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

unset DISPLAY
unset SSH_ASKPASS
unset GIT_SSH_COMMAND

echo "Doc upload completed"
