# InputPassword 密码输入框

对 `element-plus` 的 `Input` 组件进行封装。

InputPassword 组件位于 [src/components/InputPassword](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/InputPassword) 内

## 用法

```vue
<script setup lang="ts">
import { InputPassword } from '@/components/InputPassword'
import { ref } from 'vue'

const password = ref('')
</script>

<template>
  <InputPassword v-model="password" strength />
</template>

```

## InputPassword 属性

除以下参数外，还支持 `element-plus` 的 `Input` 所有属性，[详见](https://element-plus.org/zh-CN/component/input.html#autocomplete-%E5%B1%9E%E6%80%A7)

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| strength | 是否显示强度校验 | `boolean` | - | false |
| modelValue | 选中项绑定值，支持v-model | `string` | - | - |
