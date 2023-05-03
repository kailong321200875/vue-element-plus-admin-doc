# 项目配置项

本文将介绍一些常用的项目配置，方便开发者可以根据需求进行定制化改造。

## 环境变量配置

项目的环境变量配置位于项目根目录下的，这里主要配置四个个环境变量，分别为：
- [本地开发环境](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.base)
- [开发环境](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.dev)
- [测试环境](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.test)
- [生产环境](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.pro)

在开发调试的时候，会读取 `.env.base` 里面的数据。其他环境亦是如此，根据打包命令的不同，来读取不同的环境变量。

也许你会疑惑，为什么会有多个环境变量？

以 `生产环境` 为例，当我们执行 `pnpm run build:pro` 时，输出的包是用于线上环境的，所以代码都应该是压缩，我们需要删除掉代码中的 `console.log` 和 `degubber`，保证打包后代码的整洁度和不可见性。而其他环境，所以应该保留 `console.log` 和 `degubber` 用于调试，这样才能快速定位到问题所在。

所以环境变量的作用就是为了，在不同环境下有不同的表现。

::: tip 提示

- 只有以 `VITE_ ` 开头的变量会被嵌入到项目中，你可以项目代码中这样访问它们：

```js
console.log(import.meta.env.VITE_APP_TITLE)
```

:::

### 配置项说明

### .env.base

本地开发环境适用

```bash
# 环境
NODE_ENV = development

# 接口前缀
VITE_API_BASEPATH = base

# 打包路径
VITE_BASE_PATH = /

# 标题
VITE_APP_TITLE = ElementAdmin
```

### .env.dev

开发环境适用

```bash
# 环境
NODE_ENV = production

# 接口前缀
VITE_API_BASEPATH = dev

# 打包路径
VITE_BASE_PATH = /dist-dev/

# 是否删除debugger
VITE_DROP_DEBUGGER = false

# 是否删除console.log
VITE_DROP_CONSOLE = false

# 是否sourcemap
VITE_SOURCEMAP = true

# 输出路径
VITE_OUT_DIR = dist-dev

# 标题
VITE_APP_TITLE = ElementAdmin

```

### .env.test

测试环境适用

```bash
# 环境
NODE_ENV = production

# 接口前缀
VITE_API_BASEPATH = test

# 打包路径
VITE_BASE_PATH = /dist-test/

# 是否删除debugger
VITE_DROP_DEBUGGER = false

# 是否删除console.log
VITE_DROP_CONSOLE = false

# 是否sourcemap
VITE_SOURCEMAP = true

# 输出路径
VITE_OUT_DIR = dist-test

```

### .env.pro

生产环境适用

```bash
# 环境
NODE_ENV = production

# 接口前缀
VITE_API_BASEPATH = pro

# 打包路径
VITE_BASE_PATH = /

# 是否删除debugger
VITE_DROP_DEBUGGER = true

# 是否删除console.log
VITE_DROP_CONSOLE = true

# 是否sourcemap
VITE_SOURCEMAP = false

# 输出路径
VITE_OUT_DIR = dist-pro

# 标题
VITE_APP_TITLE = ElementAdmin

```

## 项目及主题配置

::: tip 提示

项目配置文件用于配置项目内展示的内容、布局、主题色等效果。

:::

### 配置文件路径

[src/store/modules/app.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/store/modules/app.ts)

### 说明

修改完之后，会添加到全局的状态管理中，方便其他地方使用。

```js
export const appModules: AppState = {
  userInfo: 'userInfo', // 登录信息存储字段-建议每个项目换一个字段，避免与其他项目冲突
  sizeMap: ['default', 'large', 'small'],
  mobile: false, // 是否是移动端
  title: import.meta.env.VITE_APP_TITLE as string, // 标题
  pageLoading: false, // 路由跳转loading

  breadcrumb: true, // 面包屑
  breadcrumbIcon: true, // 面包屑图标
  collapse: false, // 折叠菜单
  hamburger: true, // 折叠图标
  screenfull: true, // 全屏图标
  size: true, // 尺寸图标
  locale: true, // 多语言图标
  tagsView: true, // 标签页
  logo: true, // logo
  fixedHeader: true, // 固定toolheader
  footer: true, // 显示页脚
  greyMode: false, // 是否开始灰色模式，用于特殊悼念日

  layout: wsCache.get('layout') || 'classic', // layout布局
  isDark: wsCache.get('isDark') || false, // 是否是暗黑模式
  currentSize: wsCache.get('default') || 'default', // 组件尺寸
  theme: wsCache.get('theme') || {
    // 主题色
    elColorPrimary: '#409eff',
    // 左侧菜单边框颜色
    leftMenuBorderColor: 'inherit',
    // 左侧菜单背景颜色
    leftMenuBgColor: '#001529',
    // 左侧菜单浅色背景颜色
    leftMenuBgLightColor: '#0f2438',
    // 左侧菜单选中背景颜色
    leftMenuBgActiveColor: 'var(--el-color-primary)',
    // 左侧菜单收起选中背景颜色
    leftMenuCollapseBgActiveColor: 'var(--el-color-primary)',
    // 左侧菜单字体颜色
    leftMenuTextColor: '#bfcbd9',
    // 左侧菜单选中字体颜色
    leftMenuTextActiveColor: '#fff',
    // logo字体颜色
    logoTitleTextColor: '#fff',
    // logo边框颜色
    logoBorderColor: 'inherit',
    // 头部背景颜色
    topHeaderBgColor: '#fff',
    // 头部字体颜色
    topHeaderTextColor: 'inherit',
    // 头部悬停颜色
    topHeaderHoverColor: '#f6f6f6',
    // 头部边框颜色
    topToolBorderColor: '#eee'
  }
}
```

### 如何添加新属性

如果想要添加新的全局配置属性，需要在 [src/config/app.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/app.ts) 中 `AppState` 添加对应的类型，并在 `appModules` 对象中，赋予新属性的默认值。

## 缓存配置

统一项目中的写法。

### 说明

在项目中，你可以看到很多地方都使用了 `wsCache.set` 或者 `wsCache.get`，这是基于 [web-storage-cache](https://github.com/wuchangming/web-storage-cache) 进行封装，采用 `hook` 的形式。

该插件对HTML5 `localStorage` 和 `sessionStorage` 进行了扩展，添加了超时时间，序列化方法。可以直接存储 `json` 对象，同时可以非常简单的进行超时时间的设置。

本项目默认是采用 `sessionStorage` 的存储方式，如果更改，可以直接在 [src/hooks/web/useCache.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/hooks/web/useCache.ts) 中把 `type: CacheType = 'sessionStorage'` 改为 `type: CacheType = 'localStorage'`，这样项目中的所有用到的地方，都会变成该方式进行数据存储。

如果只想单个更改，可以传入存储类型 `const { wsCache } = useCache('localStorage')`，既可只适用当前存储对象。

::: warning 注意

更改完默认存储方式后，需要清除浏览器缓存并重新登录，以免造成不可描述的问题。

:::

## 多语言配置

用于配置多语言信息

在 [src/config/locale.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/locale.ts) 内配置

```ts
import { useCache } from '@/hooks/web/useCache'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const { wsCache } = useCache()

export const elLocaleMap = {
  'zh-CN': zhCn,
  en: en
}
export interface LocaleState {
  currentLocale: LocaleDropdownType
  localeMap: LocaleDropdownType[]
}

export const localeModules: LocaleState = {
  currentLocale: {
    lang: wsCache.get('lang') || 'zh-CN',
    elLocale: elLocaleMap[wsCache.get('lang') || 'zh-CN']
  },
  // 多语言
  localeMap: [
    {
      lang: 'zh-CN',
      name: '简体中文'
    },
    {
      lang: 'en',
      name: 'English'
    }
  ]
}

```

## 样式配置

### css 前缀设置

用于修改项目内组件及 `element-plus` 组件的 `class` 前缀。

由于 `element-plus` 的组件还没有全部采用动态配置前缀，所以目前还是使用 `el` 前缀。

- 在 [src/styles/variables.module.less](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/styles/variables.module.less) 内配置

```less
// 命名空间
@namespace: v;
// el命名空间
@elNamespace: el;

// 导出变量
:export {
  namespace: @namespace;
  elNamespace: @elNamespace;
}

```

### 前缀使用

**在 css 内**

```vue
<style lang="less" scoped>
  /* namespace已经全局注入，不需要额外在引入 */
  @prefix-cls: ~'@{namespace}-app';

  .@{prefix-cls} {
    width: 100%;
  }
</style>
```

**在 vue/ts 内**

```ts
import { useDesign } from '/@/hooks/web/useDesign'

const { prefixCls } = useDesign('app')

// prefixCls => v-app
```
