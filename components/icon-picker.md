# IconPicker 图标选择器组件

用于快速选择 Iconify 图标。

IconPicker 组件位于 [src/components/IconPicker](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/IconPicker) 内

::: tip

目前只集成了 Ant Design Icons 、Element Plus、TDesign Icons 三个开源项目图标

:::

## 用法


```vue
<script lang="ts" setup>
import { IconPicker } from '@/components/IconPicker'

const currentIcon = ref('tdesign:book-open')
</script>

<template>
  <IconPicker v-model="currentIcon" />
</template>

```

## 如何添加其他开源项目的图标

可以执行 `pnpm run icon` 然后选择你想要的图标集

之后，在 [IconPicker.vue](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/IconPicker/src/IconPicker.vue) 导入，并添加到 `icons` 中即可。

## Icon 属性<span id="Icon"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| modelValue | 选中项绑定值，支持v-model | `string` | - | - |
