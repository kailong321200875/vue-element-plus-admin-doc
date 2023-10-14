# useNetwork

监听网络状态

useNetwork 位于 [src/hooks/web/useNetwork.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useNetwork.ts)

## 用法

```vue
<script setup lang="ts">
import { useNetwork } from '@/hooks/web/useNetwork'

const { online } = useNetwork()

console.log(online)
</script>

```

### 参数介绍

```ts
const { online } = useNetwork()
```

**online**

`online` 网络是否已连接
