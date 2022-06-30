#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# window 全局下载  npm i rimraf -g
rimraf dist
# mac 可使用(慎用)
# rm -rf dist
# 生成静态文件
yarn build 

# 进入生成的打包文件夹
cd dist

echo "
uitima-sun.netlify.app
" > README.md

git init 

git config --local user.name "源代码"
git config --local user.email "1942459198@qq.com"

note=`git status`

git add -A
git commit -m "$note"

git remote add github-origin git@github.com:sg996/uitima-sun.git

git branch -M gh-pages
git push -f github-origin gh-pages

cd /