# Search 查询组件

基于 `Form` 组件封装，支持收缩展开。

Search 组件位于 [src/components/Search](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Search) 内

::: warning 注意
推荐使用 `tsx` 来使用 `Search` 组件
:::

## 用法

### 基础用法

更复杂例子，请[在线预览](https://element-plus-admin.cn/#/components/search)

```vue
<script setup lang="ts">
import { Search } from '@/components/Search'
import { FormSchema } from '@/components/Form'
import { reactive } from 'vue'

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'input',
    component: 'Input'
  }
])
</script>

<template>
  <Search :schema="schema" />
</template>

```

### useSearch

对于复杂的场景，可以配合 `useSearch` 来使用。

```vue
<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Search } from '@/components/Search'
import { reactive, ref, unref } from 'vue'
import { ElButton } from 'element-plus'
import { getDictOneApi } from '@/api/common'
import { FormSchema } from '@/components/Form'
import { useSearch } from '@/hooks/web/useSearch'

const { t } = useI18n()

const { searchRegister, searchMethods } = useSearch()
const { setSchema, setProps, setValues } = searchMethods

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field2',
    label: t('formDemo.select'),
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'option1',
          value: '1'
        },
        {
          label: 'option2',
          value: '2'
        }
      ],
      on: {
        change: (value: string) => {
          console.log(value)
        }
      }
    }
  },
  {
    field: 'field3',
    label: t('formDemo.radio'),
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ]
    }
  },
  {
    field: 'field5',
    component: 'DatePicker',
    label: t('formDemo.datePicker'),
    componentProps: {
      type: 'date'
    }
  },
  {
    field: 'field6',
    component: 'TimeSelect',
    label: t('formDemo.timeSelect')
  },
  {
    field: 'field8',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field9',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field10',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field11',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field12',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field13',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field14',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field15',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field16',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field17',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field18',
    label: t('formDemo.input'),
    component: 'Input'
  }
])

const isGrid = ref(false)

const changeGrid = (grid: boolean) => {
  setProps({
    isCol: grid
  })
  // isGrid.value = grid
}

const layout = ref('inline')

const changeLayout = () => {
  layout.value = unref(layout) === 'inline' ? 'bottom' : 'inline'
}

const buttonPosition = ref('left')

const changePosition = (position: string) => {
  layout.value = 'bottom'
  buttonPosition.value = position
}

const getDictOne = async () => {
  const res = await getDictOneApi()
  if (res) {
    setSchema([
      {
        field: 'field2',
        path: 'componentProps.options',
        value: res.data
      }
    ])
  }
}

const handleSearch = (data: any) => {
  console.log(data)
}

const delRadio = () => {
  setSchema([
    {
      field: 'field3',
      path: 'remove',
      value: true
    }
  ])
}

const restoreRadio = () => {
  setSchema([
    {
      field: 'field3',
      path: 'remove',
      value: false
    }
  ])
}

const setValue = () => {
  setValues({
    field1: 'Joy'
  })
}

const searchLoading = ref(false)
const changeSearchLoading = () => {
  searchLoading.value = true
  setTimeout(() => {
    searchLoading.value = false
  }, 2000)
}

const resetLoading = ref(false)
const changeResetLoading = () => {
  resetLoading.value = true
  setTimeout(() => {
    resetLoading.value = false
  }, 2000)
}
</script>

<template>
  <ContentWrap
    :title="`${t('searchDemo.search')} ${t('searchDemo.operate')}`"
    style="margin-bottom: 20px"
  >
    <ElButton @click="changeGrid(true)">{{ t('searchDemo.grid') }}</ElButton>
    <ElButton @click="changeGrid(false)">
      {{ t('searchDemo.restore') }} {{ t('searchDemo.grid') }}
    </ElButton>

    <ElButton @click="changeLayout">
      {{ t('searchDemo.button') }} {{ t('searchDemo.position') }}
    </ElButton>

    <ElButton @click="changePosition('left')">
      {{ t('searchDemo.bottom') }} {{ t('searchDemo.position') }}-{{ t('searchDemo.left') }}
    </ElButton>
    <ElButton @click="changePosition('center')">
      {{ t('searchDemo.bottom') }} {{ t('searchDemo.position') }}-{{ t('searchDemo.center') }}
    </ElButton>
    <ElButton @click="changePosition('right')">
      {{ t('searchDemo.bottom') }} {{ t('searchDemo.position') }}-{{ t('searchDemo.right') }}
    </ElButton>
    <ElButton @click="getDictOne">
      {{ t('formDemo.select') }} {{ t('searchDemo.dynamicOptions') }}
    </ElButton>
    <ElButton @click="delRadio">{{ t('searchDemo.deleteRadio') }}</ElButton>
    <ElButton @click="restoreRadio">{{ t('searchDemo.restoreRadio') }}</ElButton>
    <ElButton @click="setValue">{{ t('formDemo.setValue') }}</ElButton>

    <ElButton @click="changeSearchLoading">
      {{ t('searchDemo.search') }} {{ t('searchDemo.loading') }}
    </ElButton>
    <ElButton @click="changeResetLoading">
      {{ t('searchDemo.reset') }} {{ t('searchDemo.loading') }}
    </ElButton>
  </ContentWrap>

  <ContentWrap :title="t('searchDemo.search')" :message="t('searchDemo.searchDes')">
    <Search
      :schema="schema"
      :is-col="isGrid"
      :layout="layout"
      :button-position="buttonPosition"
      :search-loading="searchLoading"
      :reset-loading="resetLoading"
      show-expand
      expand-field="field6"
      @search="handleSearch"
      @reset="handleSearch"
      @register="searchRegister"
    />
  </ContentWrap>
</template>

```

#### 参数介绍

```ts
const { searchRegister, searchMethods } = useSearch()
```

**register**

`searchRegister` 用于注册 `useSearch`，如果需要使用 `useSearch` 提供的 `api`，必须将 `searchRegister` 传入组件的 `onRegister`

**formMethods**

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setValues | 用于设置表单值 | (data: Recordable) => void |
| setProps | 用于设置表单属性 | (props: Recordable) => void |
| delSchema | 用于删除表单结构 | (field: string) => void |
| addSchema | 用于新增表单结构 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 用于编辑表单结构 | (schemaProps: FormSetPropsType[]) => void |
| getFormData | 用于获取表单数据 | `<T = Recordable>() => Promise<T>` |

## Search 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| schema | 生成 Search 的布局结构数组，[详见](#Schema) | `FormSchema` | - | [] |
| isCol | 是否需要栅格布局 | `boolean` | - | true |
| labelWidth | 表单 label 宽度 | `string`/`number` | - | auto |
| layout | 操作按钮风格位置 | `string` | inline/bottom | inline |
| buttomPosition | 底部操作按钮的对齐方式 | `string` | left/center/right | center |
| showSearch | 是否显示查询按钮 | `boolean` | - | true |
| showReset | 是否显示重置按钮 | `boolean` | - | true |
| expand | 是否显示伸缩按钮 | `boolean` | - | false |
| expandField | 伸缩的界限字段 | `string` | - | - |
| inline | 是否是行内 | `boolean` | - | true |
| removeNoValueItem | 是否自动去除空值 | `boolean`| - | true |
| model | 初始化数据 | `object` | - | - |
| searchLoading | 查询按钮加载状态 | `boolean` | - | false |
| resetLoading | 重置按钮加载状态 | `boolean` | - | false |

## Search 事件

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| search | 查询后的回调 | data: Recordable |
| reset | 重置后的回调 | data: Recordable |

## Search 方法

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setValues | 用于设置表单值 | (data: Recordable) => void |
| setProps | 用于设置表单属性 | (props: Recordable) => void |
| delSchema | 用于删除表单结构 | (field: string) => void |
| addSchema | 用于新增表单结构 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 用于编辑表单结构 | (schemaProps: FormSetPropsType[]) => void |
| getElFormExpose | 用于获取 Form 组件的实例 | `() => Promise<typeof ElForm>` |
