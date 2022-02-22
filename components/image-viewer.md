# ImageViewer 图片预览组件

将 `element-plus` 的 `ImageViewer` 组件函数化，通过函数方便创建组件。

ImageViewer 组件位于 [src/components/ImageViewer](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/ImageViewer) 内

## 用法

```vue
<script setup lang="ts">
import { createImageViewer } from '@/components/ImageViewer'
import { ElButton } from 'element-plus'

const open = () => {
  createImageViewer({
    urlList: [
      'https://img1.baidu.com/it/u=657828739,1486746195&fm=26&fmt=auto&gp=0.jpg',
      'https://img0.baidu.com/it/u=3114228356,677481409&fm=26&fmt=auto&gp=0.jpg',
      'https://img1.baidu.com/it/u=508846955,3814747122&fm=26&fmt=auto&gp=0.jpg',
      'https://img1.baidu.com/it/u=3536647690,3616605490&fm=26&fmt=auto&gp=0.jpg',
      'https://img1.baidu.com/it/u=4087287201,1148061266&fm=26&fmt=auto&gp=0.jpg',
      'https://img2.baidu.com/it/u=3429163260,2974496379&fm=26&fmt=auto&gp=0.jpg'
    ]
  })
}
</script>

<template>
  <ElButton type="primary" @click="open">预览</ElButton>
</template>

```

## createImageViewer

### 参数

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| urlList | 图片列表 | `string[]` | - | - |
| zIndex | 层级 | `number` | - | - |
| initialIndex | 默认展示第几张 | `number` | - | 1 |
| infinite | 是否可以循环切换 | `boolean` | - | true |
| hideOnClickModal | 点击蒙版是否关闭 | `boolean` | - | false |
| appendToBody | 是否添加到 body 中 | `boolean` | - | false |
| show | 是否显示图片预览 | `boolean` | - | false |
