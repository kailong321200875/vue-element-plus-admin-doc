# VideoPlayer 视频播放器组件（2.5.0+）

基于 `xgplayer` 二次封装的视频播放器

VideoPlayer 组件位于 [src/components/VideoPlayer](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/VideoPlayer) 内


## 用法


```vue
<script lang="ts" setup>
import { VideoPlayer } from '@/components/VideoPlayer'
</script>

<template>
  <VideoPlayer
    url="//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4"
    poster="//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg"
  />
</template>

```

## VideoPlayer 属性<span id="VideoPlayer"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| url | 视频的地址 | `string` | - | - |
| poster | 视频的封面 | `string` | - | - |
