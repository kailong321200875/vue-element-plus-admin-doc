# useTagsView（2.1.0+）

操作标签页

useTagsView 位于 [src/hooks/web/useTagsView.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useTagsView.ts)

## 用法

```vue
<script setup lang="ts">
<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { ElButton } from 'element-plus'
import { useTagsView } from '@/hooks/web/useTagsView'
import { useRouter } from 'vue-router'

const { push } = useRouter()

const { closeAll, closeLeft, closeRight, closeOther, closeCurrent, refreshPage, setTitle } =
  useTagsView()

const closeAllTabs = () => {
  closeAll(() => {
    push('/dashboard/analysis')
  })
}

const closeLeftTabs = () => {
  closeLeft()
}

const closeRightTabs = () => {
  closeRight()
}

const closeOtherTabs = () => {
  closeOther()
}

const refresh = () => {
  refreshPage()
}

const closeCurrentTab = () => {
  closeCurrent(undefined, () => {
    push('/dashboard/analysis')
  })
}

const setTabTitle = () => {
  setTitle(new Date().getTime().toString())
}

const setAnalysisTitle = () => {
  setTitle(`分析页-${new Date().getTime().toString()}`, '/dashboard/analysis')
}
</script>

<template>
  <ContentWrap title="useTagsView">
    <ElButton type="primary" @click="closeAllTabs"> 关闭所有标签页 </ElButton>
    <ElButton type="primary" @click="closeLeftTabs"> 关闭左侧标签页 </ElButton>
    <ElButton type="primary" @click="closeRightTabs"> 关闭右侧标签页 </ElButton>
    <ElButton type="primary" @click="closeOtherTabs"> 关闭其他标签页 </ElButton>
    <ElButton type="primary" @click="closeCurrentTab"> 关闭当前标签页 </ElButton>
    <ElButton type="primary" @click="refresh"> 刷新当前标签页 </ElButton>
    <ElButton type="primary" @click="setTabTitle"> 修改当前标题 </ElButton>
    <ElButton type="primary" @click="setAnalysisTitle"> 修改分析页标题 </ElButton>
  </ContentWrap>
</template>

</script>

```

### 参数介绍

```ts
const { closeAll, closeLeft, closeRight, closeOther, closeCurrent, refreshPage, setTitle } = useTagsView()
```

**closeAll**

`closeAll` 用于关闭所有标签页

**closeLeft**

`closeLeft` 用于关闭当前左侧标签页

**closeRight**

`closeRight` 用于关闭当前右侧标签页

**closeOther**

`closeOther` 用于关闭除当前标签页外的所有标签页

**closeCurrent**

`closeCurrent` 用于关闭除当前标签页

**refreshPage**

`refreshPage` 用于刷新当前标签页

**setTitle**

`setTitle(title: string, path: string)` 用于设置某个标签页的标签，接收 标题和一个完整的path路径