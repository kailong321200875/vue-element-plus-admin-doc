# IAgree 我同意

用于同意协议选项

IAgree 组件位于 [src/components/IAgree](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/IAgree) 内

## 用法

```vue
<template>
  <IAgree
    :link="[
      {
        text: '《隐私政策》',
        url: 'https://www.baidu.com'
      }
    ]"
    text="我同意《隐私政策》"
  />
</template>

```

## Avatars 属性<span id="Avatars"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| text | 文案 | `string` | - | - |
| link | 需要跳转的高亮数据，[详见](#link) | `LinkItem[]` | - | - |

### link<span id="link"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| url | 跳转地址，非必填 | `string` | - | - |
| text | 高亮文案 | `string` | - | - |
| onClick | 点击高亮文案执行的方法，非必填 | `() => void` | - | - |
