# Qrcode 二维码组件

基于 `qrcode` 封装。

## 用法

更复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/qrcode)

```vue
<script setup lang="ts">
import { Qrcode } from '@/components/Qrcode'
</script>

<template>
  <Qrcode text="vue-element-plus-admin" />
</template>

```

## Qrcode 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| tag | 以什么标签生成二维码 | `string` | canvas/img | canvas |
| text | 二维码内容 | `string`/`Array` | - | - |
| options | qrcode.js 配置项 | `QRCodeRenderersOptions` | - | {} |
| width | 二维码宽度 | `number` | - | 200 |
| logo | 二维码 logo | `QrcodeLogo`/`string` | - | - |
| disabled | 二维码是否过期 | `boolean` | - | false |
| disabledText | 二维码过期提示内容 | `string` | - | - |

## Qrcode 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| done | 生成二维码后的回调 | - |
| click | 二维码点击事件 | - |
| disabled-click | 二维码过期后点击事件 | - |
