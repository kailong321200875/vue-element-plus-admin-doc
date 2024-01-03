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

配置接口前缀，可以在对应的 `env` 文件中，修改 `VITE_API_BASE_PATH` 的值

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
import request from '@/axios'
import type { TableData } from './types'

export const getTableListApi = (params: any) => {
  return request.get({ url: '/example/list', params })
}

export const getTreeTableListApi = (params: any) => {
  return request.get({ url: '/example/treeList', params })
}

export const saveTableApi = (data: Partial<TableData>): Promise<IResponse> => {
  return request.post({ url: '/example/save', data })
}

export const getTableDetApi = (id: string): Promise<IResponse<TableData>> => {
  return request.get({ url: '/example/detail', params: { id } })
}

export const delTableListApi = (ids: string[] | number[]): Promise<IResponse> => {
  return request.post({ url: '/example/delete', data: { ids } })
}

```

## axios 配置

**axios** 请求封装存放于 [src/axios](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/axios) 中。

### 全局 axios 配置说明

axios 全局配置放在 [src/constants](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/constants) 中。

::: tip 注意

更改之后，将影响所有的请求。

:::

```ts
/**
 * 请求成功状态码
 */
export const SUCCESS_CODE = 0

/**
 * 请求contentType
 */
export const CONTENT_TYPE = 'application/json'

/**
 * 请求超时时间
 */
export const REQUEST_TIMEOUT = 60000
```

## Mock 服务

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发进程所阻塞。

本项目使用 [vite-mock-plugin](https://github.com/vbenjs/vite-plugin-mock) 来进行 mock 数据处理。**项目内 mock 服务分本地和线上**。

### 本地 Mock

本地 mock 采用 Node.js 中间件进行参数拦截（不采用 mock.js 的原因是本地开发看不到请求参数和响应结果）。

#### 如何新增 mock 接口

如果你想添加 mock 数据，只要在根目录下找到 mock 文件，添加对应的接口，对其进行拦截和模拟数据。

在 mock 文件夹内新建文件

::: tip

文件新增后会自动更新，不需要手动重启，可以在代码控制台查看日志信息 mock 文件夹内会自动注册

:::

::: tip

mock 的值可以直接使用 [mock.js](http://mockjs.com/) 的语法。

:::

#### 接口有了，如何去掉 mock

可以在对应的 `env` 文件中设置 `VITE_USE_MOCK` 为 `false` ，如果想要更彻底一点，可以在vite.config.ts中删除 `viteMockServe` 对应的代码。


### 线上 mock

由于该项目是一个展示类项目，线上也是用 mock 数据，所以在打包后同时也集成了 mock。通常项目线上一般为正式接口。

项目线上 mock 采用的是 [mock.js](http://mockjs.com/) 进行 mock 数据模拟。
