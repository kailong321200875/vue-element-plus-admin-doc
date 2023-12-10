# Table 表格组件

对 `element-plus` 的 `Table` 组件进行封装，只需传入 `columns` 与 `data` 参数，即可渲染出响应的表格出来。

Table 组件位于 [src/components/Table](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Table) 内

::: warning 注意
推荐使用 tsx 来使用 `Table` 组件。
:::

## 用法

### 基础用法

```vue
<script setup lang="ts">
import { reactive } from 'vue'
import { Table, TableColumn } from '@/components/Table'

const columns = reactive<TableColumn[]>([
  {
    field: 'title',
    label: 'title'
  },
  {
    field: 'author',
    label: 'author'
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
    title: 'title3',
    author: 'author3'
  }
])
</script>

<template>
  <Table :columns="columns" :data="data" />
</template>

```

### useTable

推荐配合 `useTable` 来使用

复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/table/use-table)

```vue
<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Table, TableColumn, TableSlotDefault } from '@/components/Table'
import { getTreeTableListApi } from '@/api/table'
import { reactive, unref } from 'vue'
import { ElTag, ElButton } from 'element-plus'
import { useTable } from '@/hooks/web/useTable'

const { tableRegister, tableState } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTreeTableListApi({
      pageIndex: unref(currentPage),
      pageSize: unref(pageSize)
    })
    return {
      list: res.data.list,
      total: res.data.total
    }
  }
})
const { loading, dataList, total, currentPage, pageSize } = tableState

const { t } = useI18n()

const columns = reactive<TableColumn[]>([
  {
    field: 'selection',
    type: 'selection'
  },
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index'
  },
  {
    field: 'content',
    label: t('tableDemo.header'),
    children: [
      {
        field: 'title',
        label: t('tableDemo.title')
      },
      {
        field: 'author',
        label: t('tableDemo.author')
      },
      {
        field: 'display_time',
        label: t('tableDemo.displayTime')
      },
      {
        field: 'importance',
        label: t('tableDemo.importance'),
        formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
          return (
            <ElTag type={cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'}>
              {cellValue === 1
                ? t('tableDemo.important')
                : cellValue === 2
                ? t('tableDemo.good')
                : t('tableDemo.commonly')}
            </ElTag>
          )
        }
      },
      {
        field: 'pageviews',
        label: t('tableDemo.pageviews')
      }
    ]
  },
  {
    field: 'action',
    label: t('tableDemo.action'),
    slots: {
      default: (data) => {
        return (
          <ElButton type="primary" onClick={() => actionFn(data)}>
            {t('tableDemo.action')}
          </ElButton>
        )
      }
    }
  }
])

const actionFn = (data: TableSlotDefault) => {
  console.log(data)
}
</script>

<template>
  <ContentWrap :title="`${t('router.treeTable')} ${t('tableDemo.example')}`">
    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="columns"
      :data="dataList"
      row-key="id"
      :loading="loading"
      sortable
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>
</template>

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
const { tableRegister, tableState, tableMethods } = useTable(props: UseTableConfig)
```

**props**

在使用 `useTable` 的时候，需要传入 `fetchDataApi`，为了保证可定制，需要自行在 `fetchDataApi` 中完成请求逻辑，之后返回结果 { list: Array, total?: number }，后续分页，就可以自动请求数据。

如果需要删除，同样需要传入 `fetchDelApi` ，返回一个 `Boolean` 来判断是否删除完成，后续 `useTable` 将自行刷新表格。

**tableRegister**

`tableRegister` 用于注册 `useTable`，如果需要使用 `useTable` 提供的 `api`，必须将 `tableRegister` 传入组件的 `onRegister`

**tableState**

表格状态

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| pageSize | 每页显示多少条 | `number` | - | 10 |
| currentPage | 当前页 | `number` | - | 1 |
| total | 总条数 | `number` | - | - |
| dataList | 表格数据 | `any[]` | - | [] |
| loading | 表格是否加载中 | `boolean` | - | false |

**tableMethods**

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setProps | 用于表格组件属性 | (props: Recordable) => void |
| getList | 获取表格数据 | `() => Promise<void>` |
| setColumn | 设置表头结构 | (columnProps: TableSetProps[]) => void |
| addColumn | 新增表头结构 | (tableColumn: TableColumn, index?: number) => void |
| delColumn | 删除表头结构 | (field: string) => void |
| getElTableExpose | 获取 ElTable 实例 | `() => Promise<typeof ElTable>` |
| refresh | 刷新表格 | () => void |
| delList | 删除数据 | `(idsLength: number) => Promise<void>` |

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
| showAction | 是否显示表格操作 | `boolean` | - | false |
| preview | 需要展示图片或者视频的字段 | `string[]` | - | - |
| customContent | 是否自定义内容 | `boolean` | - | false |
| cardBodyStyle | 卡片内容样式 | `CSSProperties` | - | - |
| cardBodyClass | 卡片内容类名 | `string` | - | - |
| cardWrapStyle | 卡片容器样式 | `CSSProperties` | - | - |
| cardWrapClass | 卡片容器类名 | `string` | - | - |

### Columns<span id="Columns"></span>

除了以下属性，还支持 `element-plus` 的 `TableColumn` 属性。

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| field | 唯一值，如需展示正确的数据，需要与 data 中的属性名对应 | `string` | - | - |
| label | 表头名称 | `string` | - | - |
| hidden | 是否隐藏 | `boolean` | - | - |
| slots | 插槽对象 | `object` | - | - |
| children | 子项，用于多级表头 | `TableColumn[]` | - | - |

### Pagination<span id="Pagination"></span>

支持 `element-plus` 的 `Pagination` 所有属性，[详见](https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7)

## Table 方法

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setProps | 用于设置表格属性 | (props: Recordable) => void |
| setColumn | 用于修改表头结构 | (columnProps: TableSetPropsType[]) => void |
| addColumn | 新增表头结构 | (tableColumn: TableColumn, index?: number) => void |
| delColumn | 删除表头结构 | (field: string) => void |
