# VideoViewer 图片预览组件（2.5.0+）

将 `VideoPlayer` 组件函数化，通过函数方便创建组件。

VideoViewer 组件位于 [src/components/VideoViewer](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/VideoViewer) 内

## 用法

```vue
<script setup lang="ts">
import { createVideoViewer } from '@/components/VideoPlayer'

const open = () => {
  createVideoViewer({
    url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
    poster: '//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg'
  })
}
</script>

<template>
  <ElButton type="primary" @click="open">预览</ElButton>
</template>

```

## VideoViewer

### 参数

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| url | 视频的地址 | `string` | - | - |
| poster | 视频的封面 | `string` | - | - |
