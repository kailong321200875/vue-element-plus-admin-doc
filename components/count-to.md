# CountTo 数字动画组件

基于 `vue-count-to` 改造

## 用法

更复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/count-to)

```vue
<script setup lang="ts">
import { CountTo } from '@/components/CountTo'
</script>

<template>
  <CountTo :start-val="0" :end-val="35225" />
</template>

```

## CountTo 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| startVal | 初始值 | `number` | - | 0 |
| endVal | 最后展示的值 | `number` | - | 2021 |
| duration | 动画时间 | `number` | - | 3000 |
| autoplay | 是否自动播放 | `boolean` | - | true |
| decimals | 小位数 | `number` | - | 0 |
| decimal | 小位数分割符号 | `string` | - | . |
| separator | 分割符号 | `string` | - | , |
| prefix | 前缀 | `string` | - | - |
| suffix | 后缀 | `string` | - | - |
| useEasing | 过渡动画 | `boolean` | - | true |
| easingFn | 自定义动画效果 | `(t: number, b: number, c: number, d: number) => number` | - | - |
