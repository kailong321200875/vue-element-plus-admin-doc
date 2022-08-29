# Search 查询组件

基于 `Form` 组件封装，支持收缩展开。

Search 组件位于 [src/components/Search](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Search) 内

## 用法

更复杂例子，请[在线预览](https://element-plus-admin.cn/#/components/search)

```vue
<script setup lang="ts">
import { Search } from '@/components/Search'
import { reactive } from 'vue'

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'input',
    component: 'Input'
  }
])
</script>

<template>
  <Search :schema="schema" />
</template>

```

## Search 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| schema | 生成 Search 的布局结构数组，[详见](#Schema) | `FormSchema` | - | [] |
| isCol | 是否需要栅格布局 | `boolean` | - | true |
| labelWidth | 表单 label 宽度 | `string`/`number` | - | auto |
| layout | 操作按钮风格位置 | `string` | inline/bottom | inline |
| buttomPosition | 底部操作按钮的对齐方式 | `string` | left/center/right | center |
| showSearch | 是否显示查询按钮 | `boolean` | - | true |
| showReset | 是否显示重置按钮 | `boolean` | - | true |
| expand | 是否显示伸缩按钮 | `boolean` | - | false |
| expandField | 伸缩的界限字段 | `string` | - | - |
| inline | 是否是行内 | `boolean` | - | true |

## Search 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| search | 查询后的回调 | data: Recordable |
| reset | 重置后的回调 | data: Recordable |
