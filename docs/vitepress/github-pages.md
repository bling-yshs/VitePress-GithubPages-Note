# 部署到 Github Pages

## 一些想法

在我查看样例的时候，发现很多时候这种文档都是在项目底下新建一个名为 docs 的文件夹，然后让 Github Actions 自动部署的，我也试试吧

## 查阅文档

[VitePress 官方部署到 Github Pages 的文档](https://vitepress.dev/guide/deploy#github-pages)

## 添加 base

在 `config.ts` 里加入 base，代表你的初始地址，例如

```ts
export default defineConfig({
  base: '/VitePress-GithubPages-Note/',
  ...other-config
  })
```

VitePress-GithubPages-Note 替换成你自己的 Github 仓库名

## 将写好的 VitePress 文档加入到项目的 docs 文件夹内

![docs](/github-pages/docs.png)

## 编写 workflow

在项目目录添加 `github/workflows/deplow.yml` 文件

写入配置，这里坑超级多，注意看注释

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main] #这里改成自己的主分支名，有可能是 master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建 VitePress
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      - name: Install pnpm # 官方的安装 pnpm 的脚本有点问题，所以我自己安装了
        run: |
          npm install pnpm -g
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 默认是 npm，我用的 pnpm 所以改了
          cache-dependency-path: docs/pnpm-lock.yaml # pnpm 专属的 lock 文件的位置
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: pnpm install # 默认是 npm ci，我用的 pnpm 所以改了
        working-directory: docs #记得修改工作目录
      - name: Build with VitePress
        run: |
          pnpm docs:build # 默认是 npm run docs:build，我用的 pnpm 所以改了
        working-directory: docs #这里也是，记得修改工作目录
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  # 上传到 Github Pages
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## 调整仓库 Page 设置

"仓库设置 (Settings)" > "页面 (Pages)" > "Source" 选择 "Github Actions"

## 推送分支到仓库

推送分支到仓库，他就会自动触发构建（前提是 deploy.yml 已经推送到 Github 过了）

## 查看成果

格式 [https://your-github-username.github.io/your-repo-name/](https://bling-yshs.github.io/VitePress-GithubPages-Note/)
