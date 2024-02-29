# Avatars 头像列表

展示多个头像集合

Avatars 组件位于 [src/components/Avatars](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Avatars) 内

## 用法


```vue
<script lang="ts" setup>
import { Avatars } from '@/components/Avatars'

const data = ref<AvatarItem[]>([
  {
    name: 'Lily',
    url: 'https://avatars.githubusercontent.com/u/3459374?v=4'
  },
  {
    name: 'Amanda',
    url: 'https://avatars.githubusercontent.com/u/3459375?v=4'
  },
  {
    name: 'Daisy',
    url: 'https://avatars.githubusercontent.com/u/3459376?v=4'
  },
  {
    name: 'Olivia',
    url: 'https://avatars.githubusercontent.com/u/3459377?v=4'
  },
  {
    name: 'Tina',
    url: 'https://avatars.githubusercontent.com/u/3459378?v=4'
  },
  {
    name: 'Kitty',
    url: 'https://avatars.githubusercontent.com/u/3459323?v=4'
  },
  {
    name: 'Helen',
    url: 'https://avatars.githubusercontent.com/u/3459324?v=4'
  },
  {
    name: 'Sophia',
    url: 'https://avatars.githubusercontent.com/u/3459325?v=4'
  },
  {
    name: 'Wendy',
    url: 'https://avatars.githubusercontent.com/u/3459326?v=4'
  }
])
</script>

<template>
  <Avatars :data="data" />
</template>

```

## Avatars 属性<span id="Avatars"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| size | 头像尺寸 | `ComponentSize、number` | - | - |
| max | 最大展示个数 | `number` | - | 5 |
| data | 头像数据，[详见](#data) | `AvatarItem[]` | - | - |
| showTooltip | 是否展示名称tip | `boolean` | - | true |

### data<span id="data"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| url | 头像图片地址 | `string` | - | - |
| name | 名称，非必填 | `string` | - | - |
