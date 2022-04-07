# ContentDetailWrap 详情包裹组件

`1.2.4` 新增

用于展示详情，自带返回按钮。

ContentDetailWrap 组件位于 [src/components/ContentDetailWrap](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/ContentDetailWrap) 内

## 用法

```vue
<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
</script>

<template>
  <ContentDetailWrap title="详情" @back="push('/example/example-page')">
    Details
  </ContentDetailWrap>
</template>

```

## ContentDetailWrap 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题 | `string` | - | - |

## ContentDetailWrap 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| back | 返回事件 | - |

## ContentDetailWrap 插槽

| 插槽名 | 说明 | 子标签 |
| ---- | ---- | ---- |
| - | 默认展示内容 | - |
| title | 自定义标题内容 | - |
| right | 自定义右侧内容 | - |
