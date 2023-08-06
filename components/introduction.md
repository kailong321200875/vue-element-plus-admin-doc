# 前言

本项目中集成了很多常用的功能组件，方便开发者使用。如果你开发项目中自带的组件不满足你的需求，可以不使用或者自行改造，这都是可以的。

目前本项目中基本上都是采用按需引入的方式，只有 `Icon` 和 `Permission` 进行了全局注册。

如果不喜欢按需引入，可以自行去集成 [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import)