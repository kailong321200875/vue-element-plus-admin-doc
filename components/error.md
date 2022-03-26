# Error 缺省组件

用于各种占位图组件，如 `404`、`403`、`500` 等错误页面。

Error 组件位于 [src/components/Error](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Error) 内

## 用法

```vue
<script setup lang="ts">
import { Error } from '@/components/Error'
</script>

<template>
  <Error />
</template>

```

## Error 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 占位图类型 | `string` | - | 404 |

## Error 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| errorClick | 点击按钮后的回调 | - |

## 如何扩展新类型

目前只提供了 `404`、`403`、`500` 三种类型，如果不满足实际需求，可自行扩展。

只需在 [src/components/Error/src/Error.vue](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Error/src/Error.vue) 文件的 `errorMap` 对象扩展对应类型即可。
