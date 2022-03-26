# Highlight 高亮组件

Highlight 组件位于 [src/components/Highlight](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Highlight) 内

## 用法

组件只能接收纯文本。

```vue
<script setup lang="ts">
import { Highlight } from '@/components/Highlight'
</script>

<template>
  <Highlight :keys="['十年前', '现在']">
    种一棵树最好的时间是十年前，其次就是现在。
  </Highlight>
</template>

```

## Highlight 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| tag | 包裹标签 | `string` | - | span |
| keys | 高亮的关键字 | `string[]` | - | [] |
| color | 高亮的颜色 | `string` | - | var(--el-color-primary) |

## Highlight 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| click | 关键字点击事件 | key: string |
