# Sticky 黏性组件

`1.2.4` 新增

Sticky 组件位于 [src/components/Sticky](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Search) 内

## 用法

```vue
<script setup lang="ts">
import { Sticky } from '@/components/Sticky'
</script>

<template>
  <Sticky :offset="90">
    <div style="padding: 10px; background-color: lightblue"> Sticky 距离顶部90px </div>
  </Sticky>
</template>

```

## Sticky 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| offset | 距离顶部或者底部的距离 | `number` | - | 0 |
| zIndex | 设置元素的堆叠顺序 | `number` | - | 999 |
| className | 设置指定的class | `string`/`number` | - | - |
| position | 定位方式，默认为(top)，表示距离顶部位置，可以设置为top或者bottom | `string` | top/bottom | top |
