# useClipboard

剪切板

useClipboard 位于 [src/hooks/web/useClipboard.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useClipboard.ts)

## 用法

```vue
<script setup lang="ts">
import { useClipboard } from '@/hooks/web/useClipboard'

const { copy } = useClipboard()

copy('复制内容')
</script>

```

### 参数介绍

```ts
const { copy, copied, text, isSupported } = useClipboard()
```

**copy**

`copy` 复制，参数传入一个需要复制的内容

**copied**

`copied` 是否已复制

**text**

`text` 复制的内容

**isSupported**

`isSupported` 浏览器是否支持复制
