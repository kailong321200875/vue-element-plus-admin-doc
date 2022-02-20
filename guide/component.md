# 组件注册

## 按需引入

项目目前的组件注册机制是按需注册，是在需要用到的页面才引入。

```vue
<script setup lang="ts">
import { ElBacktop } from 'element-plus'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('backtop')
</script>

<template>
  <ElBacktop
    :class="`${prefixCls}-backtop`"
    :target="`.${variables.namespace}-layout-content-scrollbar .${variables.elNamespace}-scrollbar__wrap`"
  />
</template>

```

### tsx 文件注册

**tsx 文件内不能使用全局注册组件**，需要手动引入组件使用。

## 全局注册

如果觉得按需引入太麻烦，可以进行全局注册，在[src/components/index.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/components/index.ts)，添加需要注册的组件。

目前只有 `Icon` 组件进行了全局注册。

```ts
import type { App } from 'vue'
import { Icon } from './Icon'

export const setupGlobCom = (app: App<Element>): void => {
  app.component('Icon', Icon)
}

```

如果 `element-plus` 的组件需要全局注册，在 [src/plugins/elementPlus/index.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/plugins/elementPlus/index.ts) 添加需要注册的组件。

目前 `element-plus` 中只有 `ElLoading` 与 `ElScrollbar` 进行了全局注册。

```
import type { App } from 'vue'

// 需要全局引入一些组件，如ElScrollbar，不然一些下拉项样式有问题
import { ElLoading, ElScrollbar } from 'element-plus'

const plugins = [ElLoading]

const components = [ElScrollbar]

export const setupElementPlus = (app: App) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })

  components.forEach((component) => {
    app.component(component.name, component)
  })
}

```
