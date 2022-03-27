# useWatermark

为元素设置水印

useWatermark 位于 [src/hooks/web/useWatermark.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useWatermark.ts)

## 用法

```vue
<script setup lang="ts">
import { useWatermark } from '@/hooks/web/useWatermark'
import { onBeforeUnmount } from 'vue'

const { setWatermark, clear } = useWatermark()

const { t } = useI18n()

setWatermark('ElementPlusAdmin')

onBeforeUnmount(() => {
  clear()
})
</script>

```

### 参数介绍

```ts
const { setWatermark, clear } = useWatermark()
```

**setWatermark**

`setWatermark` 用于设置水印文案，接收一个 `string` 类型的参数

**clear**

`clear` 用于清除水印
