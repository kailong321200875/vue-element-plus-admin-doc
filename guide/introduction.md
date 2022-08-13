# 介绍

## 简介

[vue-element-plus-admin](https://github.com/kailong321200875/vue-element-plus-admin) 是一个基于 [element-plus](https://element-plus.org/) 免费开源的中后台模版。使用了最新的 [Vue3](https://github.com/vuejs/vue-next)，[Vite3](https://github.com/vitejs/vite)，[Typescript](https://www.typescriptlang.org/)等主流技术开发，开箱即用的中后台前端解决方案，可以用来作为项目的启动模版，也可用于学习参考。并且时刻关注着最新技术动向，尽可能的第一时间更新。

[vue-element-plus-admin](https://github.com/kailong321200875/vue-element-plus-admin) 的定位是后台集成方案，因为集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目不关注这方面的问题，也可以直接基于它进行二次开发。

::: warning 注意

- 由于精力有限，[template](https://github.com/kailong321200875/vue-element-plus-admin/tree/template) 分支将不再维护，如果需要精简版，请自行删除不需要的文件及代码。

:::

<!-- 如需要基础模版，请切换到 [template](https://github.com/kailong321200875/vue-element-plus-admin/tree/template) 分支，[template](https://github.com/kailong321200875/vue-element-plus-admin/tree/template) 只简单集成了一些如：布局、动态菜单等常用布局功能，更适合开发者进行二次开发。 -->

## 需要掌握的基础知识

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。

为了能快速上手本项目，请先大致浏览一遍文档及在线示例。

建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [Vue3](https://v3.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-router](https://next.router.vuejs.org/)
- [Element-plus](https://element-plus.org/)
- [Es6](https://es6.ruanyifeng.com/)
- [Vitejs](https://vitejs.dev/)
- [WindiCss](https://windicss.netlify.app/)
- [Axios](https://axios-http.com/)

## 目录结构

```
.
├── .github # github workflows 相关
├── .husky # husky 配置
├── .vscode # vscode 配置
├── mock # 自定义 mock 数据及配置
├── public # 静态资源
├── src # 项目代码
│   ├── api # api接口管理
│   ├── assets # 静态资源
│   ├── components # 公用组件
│   ├── hooks # 常用hooks
│   ├── layout # 布局组件
│   ├── locales # 语言文件
│   ├── plugins # 外部插件
│   ├── router # 路由配置
│   ├── store # 状态管理
│   ├── styles # 全局样式
│   ├── utils # 全局工具类
│   ├── views # 路由页面
│   ├── App.vue # 入口vue文件
│   ├── main.ts # 主入口文件
│   └── permission.ts # 路由拦截
├── types # 全局类型
├── .env.base # 本地开发环境 环境变量配置
├── .env.dev # 打包到开发环境 环境变量配置
├── .env.gitee # 针对 gitee 的环境变量 可忽略
├── .env.pro # 打包到生产环境 环境变量配置
├── .env.test # 打包到测试环境 环境变量配置
├── .eslintignore # eslint 跳过检测配置
├── .eslintrc.js # eslint 配置
├── .gitignore # git 跳过配置
├── .prettierignore # prettier 跳过检测配置
├── .stylelintignore # stylelint 跳过检测配置
├── .versionrc 自动生成版本号及更新记录配置
├── CHANGELOG.md # 更新记录
├── commitlint.config.js # git commit 提交规范配置
├── index.html # 入口页面
├── package.json
├── .postcssrc.js # postcss 配置
├── prettier.config.js # prettier 配置
├── README.md # 英文 README
├── README.zh-CN.md # 中文 README
├── stylelint.config.js # stylelint 配置
├── tsconfig.json # typescript 配置
├── vite.config.ts # vite 配置
└── windi.config.ts # windicss 配置
```

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器。

由于 Vue 3 不再支持 IE11，本项目也不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## IDE推荐

- [VSCode](https://code.visualstudio.com/)
