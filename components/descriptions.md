# Descriptions 描述组件

对 `element-plus` 的 `Descriptions` 组件进行封装。

## 用法

更复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/descriptions)

```vue
<script setup lang="ts">
import { Descriptions } from '@/components/Descriptions'
import { reactive } from 'vue'

const data = reactive({
  username: 'chenkl',
  nickName: '梦似花落。',
  age: 26,
  phone: '13655971xxxx',
  email: '502431556@qq.com',
  addr: '这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的地址',
  sex: '男',
  certy: '3505831994xxxxxxxx'
})

const schema = reactive<DescriptionsSchema[]>([
  {
    field: 'username',
    label: 'username'
  },
  {
    field: 'nickName',
    label: 'nickName'
  },
  {
    field: 'phone',
    label: 'phone'
  },
  {
    field: 'email',
    label: 'email'
  },
  {
    field: 'addr',
    label: 'addr',
    span: 24
  }
])
</script>

<template>
  <Descriptions
    title="descriptions"
    message="message"
    :data="data"
    :schema="schema"
  />
</template>

```

## Descriptions 属性

除以下参数外，还支持 `element-plus` 的 `Descriptions` 所有属性，[详见](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-%E5%B1%9E%E6%80%A7)

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题 | `string` | - | - |
| message | 提示 | `string` | - | - |
| collapse | 是否显示展开按钮 | `boolean` | - | true |
| autoSetPlaceholder | 是否自动设置 placeholder | `boolean` | - | true |
| schema | 布局结构数据，[详见](#Schema) | `DescriptionsSchema[]` | - | [] |
| data | 展示的数据 | `Recordable` | - | {} |

### Schema<span id="Schema"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| span | 栅格占比 | `number` | - | - |
| field | 字段名，唯一值，需要与 data 中的属性名对应 | `string` | - | - |
| label | 列表标题 | `string` | - | - |
| width | 列表宽度 | `string`/`number` | - | - |
| minWidth | 列表最小宽度 | `string`/`number` | - | - |
| align | 内容对齐方式 | `string` | left/center/right | left |
| labelAlign | 标题对齐方式 | `string` | left/center/right | left |
| className | 自定义内容标签类名 | `string` | - | - |
| labelClassName | 自定义标题标签类名 | `string` | - | - |

## Descriptions 插槽

| 插槽名 | 说明 | 子标签 |
| ---- | ---- | ---- |
| ${field} | 自定义内容 | - |
| ${field}-label | 自定义标题| - |
