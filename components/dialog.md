# Dialog 弹窗组件

对 `element-plus` 的 `Dialog` 组件进行封装。

## 用法

```vue
<script setup lang="ts">
import { Dialog } from '@/components/Dialog'
import { ElButton } from 'element-plus'
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<template>
  <ElButton type="primary" @click="dialogVisible = !dialogVisible">
    open
  </ElButton>
  <Dialog v-model="dialogVisible" title="dialog">
    <div v-for="v in 10000" :key="v">{{ v }}</div>
    <template #footer>
      <el-button @click="dialogVisible = false">close</el-button>
    </template>
  </Dialog>
</template>

```

## Dialog 属性

除以下参数外，还支持 `element-plus` 的 `Dialog` 所有属性，[详见](https://element-plus.org/zh-CN/component/dialog.html#%E5%B1%9E%E6%80%A7)

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| modelValue | 是否显示弹窗，支持v-model | `boolean` | - | false |
| fullscreen | 是否显示全屏按钮 | `boolean` | - | true |
| title | 弹窗标题 | `string` | - | Dialog |
| maxHeight | 弹窗内容最大高度 | `string`/`number` | - | 500px |

## Dialog 插槽

| 插槽名 | 说明 | 子标签 |
| ---- | ---- | ---- |
| - | 弹窗内容 | - |
| title | 弹窗标题内容 | - |
| footer | 弹窗底部内容 | - |
