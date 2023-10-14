# Waterfall 瀑布流组件

瀑布流组件

Waterfall 组件位于 [src/components/Waterfall](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Waterfall) 内

::: tip

data 数据必须带有高度字段，用于确保计算出正确的位置

:::

## 用法

```vue
<script lang="ts" setup>
import { Waterfall } from '@/components/Waterfall'
import Mock from 'mockjs'
import { ref, unref } from 'vue'
import { toAnyString } from '@/utils'

const data = ref<any>([])

const getList = () => {
  const list: any = []
  for (let i = 0; i < 20; i++) {
    // 随机 100, 500 之间的整数
    const height = Mock.Random.integer(100, 500)
    const width = Mock.Random.integer(100, 500)
    list.push(
      Mock.mock({
        width,
        height,
        id: toAnyString(),
        image_uri: Mock.Random.image(`${width}x${height}`)
      })
    )
  }
  data.value = [...unref(data), ...list]
  if (unref(data).length >= 60) {
    end.value = true
  }
}
getList()

const loading = ref(false)

const end = ref(false)

const loadMore = () => {
  loading.value = true
  setTimeout(() => {
    getList()
    loading.value = false
  }, 1000)
}
</script>

<template>
  <Waterfall
    :data="data"
    :loading="loading"
    :end="end"
    :props="{
      src: 'image_uri',
      height: 'height'
    }"
    @load-more="loadMore"
  />
</template>

```

## Waterfall 属性<span id="Waterfall"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| data | 要展示的数据 | `Array` | - | - |
| reset | 窗口变化是否重新布局 | `boolean` | true/false | true |
| width | 每个项的宽度 | `number` | - | 200 |
| gap | 每个项的间距 | `number` | - | 20 |
| loadingText | 加载中文字 | `string` | - | 加载中... |
| loading | 是否加载中 | `boolean` | - | false |
| end | 是否加载结束 | `boolean` | - | false |
| endText | 是否加载结束文字 | `string` | - | 没有更多了 |
| props | 字段别名 | `object` | - | { src: 'src', height: 'height' } |

## Waterfall 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| loadMore | 加载更多事件 | - |