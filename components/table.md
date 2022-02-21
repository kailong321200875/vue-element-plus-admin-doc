# Table 表格组件

对 `element-plus` 的 `Table` 组件进行封装，只需传入 `columns` 与 `data` 参数，即可渲染出响应的表格出来。

Table 组件位于 [src/components/Table](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Table) 内

## 用法

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const columns = reactive<TableColumn[]>([
  {
    field: 'index',
    label: 'index',
    type: 'index'
  },
  {
    field: 'title',
    label: 'title'
  },
  {
    field: 'author',
    label: 'author'
  },
  {
    field: 'action',
    label: 'action'
  }
])

const data = reactive([
  {
    title: 'title1',
    author: 'author1'
  },
  {
    title: 'title2',
    author: 'author2'
  },
  {
    title: 'title2',
    author: 'author2'
  }
])
</script>

<template>
  <Table :columns="columns" :data="data" />
</template>

```

### refTable

如果只使用 `refTable`，所有参数都需要手动传入到 `Table` 组件中，推荐配合 `useTable` 使用。

### useTable

复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/table/use-table)

```vue
<script setup lang="ts">
import { Table } from '@/components/Table'
import { getTableListApi } from '@/api/table'
import { TableData } from '@/api/table/types'
import { reactive } from 'vue'
import { useTable } from '@/hooks/web/useTable'

const columns = reactive<TableColumn[]>([
  {
    field: 'index',
    label: 'index',
    type: 'index'
  },
  {
    field: 'title',
    label: 'title'
  },
  {
    field: 'author',
    label: 'author'
  },
  {
    field: 'display_time',
    label: 'displayTime'
  },
  {
    field: 'pageviews',
    label: 'pageviews'
  },
  {
    field: 'action',
    label: 'action'
  }
])

const { register, tableObject, methods } = useTable<
  {
    total: number
    list: TableData[]
  },
  TableData
>({
  getListApi: getTableListApi,
  response: {
    list: 'list',
    total: 'total'
  },
  props: {
    columns
  }
})

const { getList } = methods

getList()
</script>

<template>
  <Table
    v-model:pageSize="tableObject.pageSize"
    v-model:currentPage="tableObject.currentPage"
    :data="tableObject.tableList"
    :loading="tableObject.loading"
    :pagination="{
      total: tableObject.total
    }"
    @register="register"
  />
</template>

```

#### 参数介绍

```ts

interface Response {
  total: number
  list: TableData[]
}

const { register, tableObject, methods, elTableRef } = useTable<Response, TableData>(props: UseTableConfig)
```

**useTable** 可以传入自定义类型 `<T, K, L extends AxiosConfig = AxiosConfig>`

- T 代表接口返回的数据类型。
- K 代表接口返回的表格数据类型。
- L 代表接口请求参数的类型。

在实际需求中，可能会遇到分页参数命名不同的情况，请自行在 [src/hooks/web/useTable.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useTable.ts) 进行替换，搜索 `pageSize` 及 `pageIndex`。

**props**

在使用 `useTable` 的时候，可以在 `props` 中传入 `getListApi`，以及 `response`，之后就可以手动调用 `methods.getList()` 方法请求表格数据了。每次表格分页时，则会自动调用接口。

如果需要使用删除方法 `methods.delList()`，则需要在 `props` 中传入 `delListApi` 参数，用于删除时调用接口，目前本项目中单条删除或者批量删除，都是同样的接口同样的参数。如果与实际需求不符，可以自行改造。在 [src/hooks/web/useTable.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useTable.ts) 的 `delList` 以及 `delData` 中修改。

```ts
// 删除数据
delList: async (ids: string[] | number[], multiple: boolean, message = true) => {
  const tableRef = await getTable()
  if (multiple) {
    if (!tableRef?.selections.length) {
      ElMessage.warning(t('common.delNoData'))
      return
    }
  } else {
    if (!tableObject.currentRow) {
      ElMessage.warning(t('common.delNoData'))
      return
    }
  }
  const paramsObj: AxiosConfig = {
    data: {
      ids
    }
  }
  if (message) {
    ElMessageBox.confirm(t('common.delMessage'), t('common.delWarning'), {
      confirmButtonText: t('common.delOk'),
      cancelButtonText: t('common.delCancel'),
      type: 'warning'
    })
      .then(async () => {
        await delData(paramsObj, ids)
      })
      .catch(() => {})
  } else {
    await delData(paramsObj, ids)
  }
}
```

```ts
const delData = async (paramsObj: AxiosConfig, ids: string[] | number[]) => {
  const res = await (config?.delListApi && config?.delListApi(paramsObj))
  if (res) {
    ElMessage.success(t('common.delSuccess'))

    // 计算出临界点
    const currentPage =
      tableObject.total % tableObject.pageSize === ids.length || tableObject.pageSize === 1
        ? tableObject.currentPage > 1
          ? tableObject.currentPage - 1
          : tableObject.currentPage
        : tableObject.currentPage

    tableObject.currentPage = currentPage
    methods.getList()
  }
}
```

**register**

`register` 用于注册 `useTable`，如果需要使用 `useTable` 提供的 `api`，必须将 `register` 传入组件的 `onRegister`

**tableObject**

表格对象

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| pageSize | 每页显示多少条 | `number` | - | 10 |
| currentPage | 当前页 | `number` | - | 1 |
| total | 总条数 | `number` | - | - |
| tableList | 表格数据 | `K[]` | - | [] |
| parmasObj | AxiosConfig 配置 | `L` | - | {} |
| loading | 表格是否加载中 | `boolean` | - | false |
| currentRow | 当前选中数据 | `Nullable<K>` | - | - |

**methods**

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setProps | 用于表格组件属性 | (props: Recordable) => void |
| getList | 获取表格数据 | `() => Promise<void>` |
| setColumn | 设置表头结构 | (columnProps: TableSetPropsType[]) => void |
| setSearchParmas | 与 Search 组件配置，用于获取 Search 组件返回的查询数据 | (data: Recordable) => void |
| getSelections | 获取多选数据 | () => Promise<K[]> |
| delList | 删除数据接口 | `(ids: string[], multiple: boolean, message?: boolean) => Promise<void>` |

**elTableRef**

当前 `elTable` 实例，可使用所有 `elTable` 实例方法。

## Table 属性

除以下参数外，还支持 `element-plus` 的 `Table` 所有属性，[详见](https://element-plus.org/zh-CN/component/table.html#table-attributes)

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| pageSize | 每页显示多少条，支持 v-model 双向绑定 | `number` | - | 10 |
| currentPage | 当前页，支持 v-model 双向绑定 | `number` | - | 1 |
| selection | 是否多选 | `boolean` | - | true |
| showOverflowTooltip | 是否所有的超出隐藏，优先级低于 schema 中的 showOverflowTooltip  | `boolean` | - | true |
| columns | 表头结构，[详见](#Columns) | `TableColumn[]` | - | [] |
| expand | 是否显示展开行 | `boolean` | - | false |
| pagination | 是否展示分页，[详见](#Pagination) | `Pagination`/`undefined` | - | - |
| reserveSelection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key） | `boolean` | - | false |
| loading | 加载状态 | `boolean` | - | false |
| reserveIndex | 是否叠加索引 | `boolean` | - | false |
| align | 内容对齐方式 | `string` | `left`/`center`/`right` | left |
| headerAlign | 表头对齐方式 | `string` | `left`/`center`/`right` | left |
| data | 表格数据 | `Recordable[]` | - | [] |

### Columns<span id="Columns"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| field | 唯一值，如需展示正确的数据，需要与 data 中的属性名对应 | `string` | - | - |
| label | 表头名称 | `string` | - | - |
| children | 子项，用于多级表头 | `TableColumn[]` | - | - |

### Pagination<span id="Pagination"></span>

支持 `element-plus` 的 `Pagination` 所有属性，[详见](https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7)

## Table 方法

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setProps | 用于设置表格属性 | (props: Recordable) => void |
| setColumn | 用于修改表头结构 | (columnProps: TableSetPropsType[]) => void |

## Table 插槽

| 插槽名 | 说明 | 子标签 |
| ---- | ---- | ---- |
| append | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。| - |
| ${field} | 表格内容 | - |
| ${field}-header | 表头内容 | - |
