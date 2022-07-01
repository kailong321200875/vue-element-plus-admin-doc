# 数据mock&联调

## 开发环境

如果前端应用和后端接口服务器没有运行在同一个主机上，你需要在开发环境下将接口请求代理到接口服务器。

如果是同一个主机，可以直接请求具体的接口地址。

### 跨域设置

在 `vite.config.ts` 配置文件中，提供了 server 的 proxy 功能，用于代理 API 请求。

```ts
server: {
  proxy: {
    "/api":{
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
    }
  },
},
```

之后在 [src/config/axios/config.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/axios/config.ts) 中更改 `base_url.base` 为你所配置的代理即可。

```ts
const config: {
  base_url: {
    base: string
    dev: string
    pro: string
    test: string
  }
  result_code: number | string
  default_headers: AxiosHeaders
  request_timeout: number
} = {
  /**
   * api请求基础路径
   */
  base_url: {
    // 开发环境接口前缀
    base: '/api',

    // 打包开发环境接口前缀
    dev: '',

    // 打包生产环境接口前缀
    pro: '',

    // 打包测试环境接口前缀
    test: ''
  },

  /**
   * 接口成功返回状态码
   */
  result_code: '0000',

  /**
   * 接口请求超时时间
   */
  request_timeout: 60000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json'
}

export { config }

```

::: tip 注意

该配置只能作用于 本地开发环境。

从浏览器控制台的 Network 看，请求是 `http://localhost:3000/api/xxx`，这是因为 proxy 配置不会改变本地请求的 url。

:::

## 接口请求

在本项目中，所有的接口数据都是使用 `Mock` 模拟

接口统一存放于 [src/api/](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/api) 下面管理

以获取列表接口为例:

在 **src/api/** 内新建模块文件，其中参数与返回值最好定义一下类型，方便校验。虽然麻烦，但是后续维护字段很方便。

::: tip 提示

类型定义文件可以抽取出去统一管理，具体参考项目

:::

```ts
import { useAxios } from '@/hooks/web/useAxios'
import type { TableData } from './types'

const request = useAxios()

export const getTableListApi = async (params: any): Promise<IResponse> => {
  const res = await request.get({ url: '/example/list', params })
  return res && res.data
}

export const saveTableApi = async (data: Partial<TableData>): Promise<IResponse> => {
  const res = await request.post({ url: '/example/save', data })
  return res && res.data
}

export const getTableDetApi = async (id: string): Promise<IResponse<TableData>> => {
  const res = await request.get({ url: '/example/detail', params: { id } })
  return res && res.data
}

export const delTableListApi = async (ids: string[] | number[]): Promise<IResponse> => {
  const res = await request.post({ url: '/example/delete', data: { ids } })
  return res && res.data
}

```

## axios 配置

**axios** 请求封装存放于 [src/hooks/web/useAxios.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/hooks/web/useAxios.ts) 中。

其他的配置，则存放在 [src/config/axios/](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/config/axios)

```js

├── config.ts // axios 配置
├── index.ts // 接口返回统一处理

```

### config.ts 配置说明

::: tip 注意

更改之后，将影响所有的请求。

:::

```ts
const config: {
  base_url: {
    base: string
    dev: string
    pro: string
    test: string
  }
  result_code: number | string
  default_headers: AxiosHeaders
  request_timeout: number
} = {
  /**
   * api请求基础路径
   */
  base_url: {
    // 开发环境接口前缀
    base: '/api',

    // 打包开发环境接口前缀
    dev: '',

    // 打包生产环境接口前缀
    pro: '',

    // 打包测试环境接口前缀
    test: ''
  },

  /**
   * 接口成功返回状态码
   */
  result_code: '0000',

  /**
   * 接口请求超时时间
   */
  request_timeout: 60000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json'
}

export { config }

```

## Mock 服务

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发进程所阻塞。

本项目使用 [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) 来进行 mock 数据处理。**项目内 mock 服务分本地和线上**。

### 本地 Mock

本地 mock 采用 Node.js 中间件进行参数拦截（不采用 mock.js 的原因是本地开发看不到请求参数和响应结果）。

#### 如何新增 mock 接口

如果你想添加 mock 数据，只要在根目录下找到 mock 文件，添加对应的接口，对其进行拦截和模拟数据。

在 mock 文件夹内新建文件

::: tip

文件新增后会自动更新，不需要手动重启，可以在代码控制台查看日志信息 mock 文件夹内会自动注册，排除以\_开头的文件夹及文件

:::

::: tip

mock 的值可以直接使用 [mockjs](https://github.com/nuysoft/Mock/wiki) 的语法。

:::

#### 接口有了，如何去掉 mock

当后台接口已经开发完成，只需要将相应的 `mock` 函数去掉即可。


### 线上 mock

由于该项目是一个展示类项目，线上也是用 mock 数据，所以在打包后同时也集成了 mock。通常项目线上一般为正式接口。

项目线上 mock 采用的是 [mockjs](https://github.com/nuysoft/Mock/wiki) 进行 mock 数据模拟。
