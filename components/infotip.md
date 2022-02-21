# Infotip 信息提示组件

基于 `Highlight` 组件封装。

## 用法

```vue
<script setup lang="ts">
import { Infotip } from '@/components/Infotip'
</script>

<template>
  <Infotip
    title="推荐使用Iconify组件"
    :schema="[
      {
        label: 'Iconify组件基本包含所有的图标，你可以查询到你想要的任何图标。并且打包只会打包所用到的图标。',
        keys: ['Iconify']
      },
      {
        label: '访问地址',
        keys: ['访问地址']
      }
    ]"
  />
</template>

```

## Infotip 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题 | `string` | - | - |
| schema | 展示的数据内容 | `string[]`/`TipSchema[]` | - | [] |
| showIndex | 显示序号 | `boolean` | - | true |
| highlightColor | 高亮颜色 | `string` | - | var(--el-color-primary) |

## Infotip 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| click | 关键字点击事件 | key: string |
