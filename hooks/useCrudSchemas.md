# useCrudSchemas

统一生成 `Search` 、 `Form` 、 `Descriptions` 、 `Table` 组件所需要的数据结构。

由于以上四个组件都需要 `Sechema` 或者 `columns` 的字段，如果每个组件都写一遍的话，会造成大量重复代码，所以提供 `useCrudSchemas` 来进行统一的数据生成。

useCrudSchemas 位于 [src/hooks/web/useCrudSchemas.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useCrudSchemas.ts)

## 用法

::: tip

如果不需要某个字段，如 `formSchema` 不需要 `field` 为 `index` 的字段，可以使用 `form: { show: false }` 进行过滤，其他组件同理。

:::

如果想看更复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/hooks/useCrudSchemas)

```vue
<script setup lang="ts">
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  },
  {
    field: 'title',
    label: t('tableDemo.title'),
    search: {
      show: true
    },
    form: {
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'author',
    label: t('tableDemo.author')
  },
  {
    field: 'display_time',
    label: t('tableDemo.displayTime'),
    form: {
      component: 'DatePicker',
      componentProps: {
        type: 'datetime',
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
      }
    }
  },
  {
    field: 'importance',
    label: t('tableDemo.importance'),
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return h(
        ElTag,
        {
          type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
        },
        () =>
          cellValue === 1
            ? t('tableDemo.important')
            : cellValue === 2
            ? t('tableDemo.good')
            : t('tableDemo.commonly')
      )
    },
    form: {
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '重要',
            value: 3
          },
          {
            label: '良好',
            value: 2
          },
          {
            label: '一般',
            value: 1
          }
        ]
      }
    }
  },
  {
    field: 'pageviews',
    label: t('tableDemo.pageviews'),
    form: {
      component: 'InputNumber',
      value: 0
    }
  },
  {
    field: 'content',
    label: t('exampleDemo.content'),
    table: {
      show: false
    },
    form: {
      component: 'Editor',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'action',
    width: '260px',
    label: t('tableDemo.action'),
    form: {
      show: false
    },
    detail: {
      show: false
    }
  }
])

const { allSchemas } = useCrudSchemas(crudSchemas)
</script>

```

### 参数介绍

```ts
const { allSchemas } = useCrudSchemas(crudSchemas)
```

**allSchemas**

`allSchemas` 存放着四个组件所需要的数据结果


***allSchemas.fromSchema***

`Form` 组件的 `Sechema`

***allSchemas.searchSchema***

`Search` 组件的 `Sechema`

***allSchemas.detailSchema***

`Descriptions` 组件的 `Sechema`

***allSchemas.tableColumns***

`Table` 组件的 `columns`

## CrudSchema

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| search | 用于设置 `searchSchema` | `CrudSearchParams` | - | - |
| table | 用于设置 `tableColumns` | `CrudTableParams` | - | - |
| form | 用于设置 `fromSchema` | `CrudFormParams` | - | - |
| detail | 用于设置 `DescriptionsSchema` | `CrudDescriptionsParams` | - | - |
| children | 如果是 `Table` 组件，则可能会有多表头的情况存在 | `CrudSchema[]` | - | - |
