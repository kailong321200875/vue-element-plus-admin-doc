# useStorage（2.1.0+）

用于操作 localStorage 和 sessionStorage

useStorage 位于 [src/hooks/web/useStorage.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useStorage（2.ts)

默认使用 `sessionStorage`，如需要使用 `localStorage` ，只需要传入 `localStorage` 即可，如：useStorage('localStorage')

支持非字符串类型存取值

## 用法

```vue
<script setup lang="ts">
import { useStorage } from '@/hooks/web/useStorage'

const { setStorage, getStorage, removeStorage, clear } = useStorage()

setStorage('key', { name: 'Jok' })

getStorage('key')

removeStorage('key')

clear()
</script>

```

### 参数介绍

```ts
const { setStorage, getStorage, removeStorage, clear } = useStorage('localStorage')
```

**setStorage**

`setStorage` 存储数据


**getStorage**

`getStorage` 获取某个存储数据

**removeStorage**

`removeStorage` 清除某个存储数据

**clear**

`clear` 清除所有缓存数据，如果需要排除某些数据，可以传入 excludes 来排除，如：clear(['key'])，这样 `key` 就不会被清除
