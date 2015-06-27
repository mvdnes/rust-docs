#!/bin/bash

set -e

SCRIPT_PATH=script

. $SCRIPT_PATH/doc-upload.cfg

[ "$TRAVIS_BRANCH" = master ] || exit 0

[ "$TRAVIS_PULL_REQUEST" = false ] || exit 0

[ "$TRAVIS_RUST_VERSION" = "$DOC_RUST_VERSION" ] || exit 0

echo "Publishing docs..."

export GIT_SSH=$HOME/git-doc

chmod 600 $SCRIPT_PATH/travis-doc-upload.pem

cat << EOS > $HOME/git-doc
#!/bin/bash

/usr/bin/expect <<EOD
spawn ssh -i $SCRIPT_PATH/travis-doc-upload.pem "\$@"
expect "passphrase"
send -- "\$DEPLOY_KEY_PASS\n"
expect eof
EOD

EOS
chmod a+x $HOME/git-doc

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
