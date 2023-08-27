# JsonEditor JSON编辑器组件（2.2.0+）

基于 [vue-json-pretty](https://leezng.github.io/vue-json-pretty/) 封装。

可自行阅读 [vue-json-pretty文档](https://github.com/leezng/vue-json-pretty)

JsonEditor 组件位于 [src/components/JsonEditor](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/JsonEditor) 内

## 用法

```vue
<script setup lang="ts">
<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { JsonEditor } from '@/components/JsonEditor'
import { useI18n } from '@/hooks/web/useI18n'
import { ref, watch } from 'vue'

const { t } = useI18n()

const defaultData = ref({
  title: '标题',
  content: '内容'
})

watch(
  () => defaultData.value,
  (val) => {
    console.log(val)
  },
  {
    deep: true
  }
)

setTimeout(() => {
  defaultData.value = {
    title: '异步标题',
    content: '异步内容'
  }
}, 4000)
</script>

<template>
  <ContentWrap :title="t('richText.jsonEditor')" :message="t('richText.jsonEditorDes')">
    <JsonEditor v-model="defaultData" />
  </ContentWrap>
</template>

```

## JsonEditor 属性

可查看 [vue-json-pretty文档](https://github.com/leezng/vue-json-pretty)

## Editor 事件

可查看 [vue-json-pretty文档](https://github.com/leezng/vue-json-pretty)
