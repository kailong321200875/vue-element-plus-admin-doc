# Icon 图标组件

用于项目内组件的展示，基本支持所有图标库（支持按需加载，只打包所用到的图标），支持使用本地 svg 和 Iconify 图标。

Icon 组件位于 [src/components/Icon](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Icon) 内

::: tip

在 [Iconify](https://iconify.design) 上，你可以查询到你想要的所有图标并使用，不管是不是 `element-plus` 的图标库。

:::

## 用法

如果以`svg-icon:` 开头，则会在本地中找到该 `svg` 图标，否则，会加载 `Iconify` 图标。

```vue
<template>
  <!-- 加载本地 svg -->
  <Icon icon="svg-icon:peoples" />
  
  <!-- 加载 Iconify -->
  <Icon icon="ep:aim" />
</template>

```

## Icon 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| icon | 图标名 | `string` | - | - |
| color | 图标颜色 | `string` | - | - |
| size | 图标大小 | `number` | - | 16 |
