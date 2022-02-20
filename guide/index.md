# 开始

本文将快速的帮助你从头运行并启动项目。

## 环境准备

本地环境需要安装 [Pnpm](https://pnpm.io/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

为什么使用 [Pnpm](https://pnpm.io/)，而不是用其他包管理器，大家可以搜索一下，这里就不做过多的阐述了。

::: warning 注意

- [Node.js](http://nodejs.org/) 版本要求`14.x`以上，这里推荐 `16.x` 及以上。

:::

## 工具配置

如果你使用的 IDE 是[vscode](https://code.visualstudio.com/)的话，可以安装以下工具来提高开发效率及代码格式化：

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://gitee.com/link?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Djohnsoncodehk.volar) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 代码获取

::: warning 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 从 GitHub 获取代码

```bash
# clone 代码
git clone https://github.com/kailong321200875/vue-element-plus-admin.git

```

### 从 Gitee 获取代码

```bash
git clone https://gitee.com/kailong110120130/vue-element-plus-admin.git
```

::: tip 代码同步

不用担心 [Gitee](https://gitee.com/kailong110120130/vue-element-plus-admin) 代码库和 [Github](https://github.com/kailong321200875/vue-element-plus-admin) 代码库不同步，每次版本提交发布，都会及时同步到 [Gitee](https://gitee.com/kailong110120130/vue-element-plus-admin) 上。

:::

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它，推荐 `16.x` 及以上

**验证**

```bash
# 验证 npm 是否安装成功
npm -v

# 验证 node 是否安装成功
node -v
```

如果你需要同时存在多个 `node` 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

#### Pnpm 安装

推荐使用 [Pnpm](https://pnpm.io/)进行依赖安装（若其他包管理器安装不了需要自行处理）。

如果未安装 `Pnpm`，可以用下面命令来进行全局安装

```bash
# 全局安装 pnpm
npm i -g pnpm

# 验证
pnpm -v
```

#### 安装依赖

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
pnpm i
```

::: tip 安装依赖时 husky 安装失败

请查看你的源码是否从 [Github](https://github.com/kailong321200875/vue-element-plus-admin) 或者 [Gitee](https://gitee.com/kailong110120130/vue-element-plus-admin) 直接下载的，直接下载是没有 `.git` 文件夹的，而 `husky` 需要依赖 `git` 才能安装。此时需使用 `git init` 初始化项目，再尝试重新安装即可。

:::

当依赖安装完成后，执行以下命令即可启动项目：

```bash
pnpm run dev
```

## npm script

```bash
"scripts": {
  # 安装依赖
  "i": "pnpm install",
  # 本地开发环境运行
  "dev": "vite --mode base",
  # typeScript 检测
  "ts:check": "vue-tsc --noEmit",
  # 打包生产环境
  "build:pro": "vite build --mode pro",
  # 打包开发环境
  "build:dev": "npm run ts:check && vite build --mode dev",
  # 打包测试环境
  "build:test": "npm run ts:check && vite build --mode test",
  # 本地预览 已打包的生产环境项目包
  "serve:pro": "vite preview --mode pro",
  # 本地预览 已打包的开发环境项目包
  "serve:dev": "vite preview --mode dev",
  # 本地预览 已打包的测试环境项目包
  "serve:test": "vite preview --mode test",
  # 检测可更新依赖
  "npm:check": "npx npm-check-updates",
  # 删除 node_modules
  "clean": "npx rimraf node_modules",
  # 删除 缓存
  "clean:cache": "npx rimraf node_modules/.cache",
  # eslint 检测
  "lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
  # eslint 格式化
  "lint:format": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,vue,html,md}\"",
  # stylelint 格式化
  "lint:style": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  "lint:pretty": "pretty-quick --staged",
  "postinstall": "husky install"
},
```
