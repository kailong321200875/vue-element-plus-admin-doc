# Editor 富文本组件

基于 [wangeditor](https://www.wangeditor.com/) 封装。

目前项目中的 `editor` 只是做了简单的封装，需要开发者根据实际情况，自行配置 `editorConfig` 属性，如，上传图片功能。

可自行阅读 [wangeditor文档](https://www.wangeditor.com/v5/)

## 用法

```vue
<script setup lang="ts">
import { Editor } from '@/components/Editor'
import { ref} from 'vue'

const defaultHtml = ref('<p>hello <strong>world</strong></p>')
</script>

<template>
  <Editor :defaultHtml="defaultHtml" />
</template>

```

## Editor 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| editorId | 富文本组件唯一值，必填项 | `string` | - | wangeEditor-1 |
| height | 高度 | `string`/`number` | - | 500px |
| editorConfig | wangeditor 组件的所有配置项 | `IEditorConfig` | - | - |
| defaultHtml | 初始内容 | `string` | - | - |

## Editor 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| change | 内容改变时，返回 editor 实例 | editor: IDomEditor |

## Editor 方法

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| getEditorRef | 获取 editor 实例 | `() => Promise<IDomEditor>` |
