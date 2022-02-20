# Form 表单组件

对 `element-plus` 的 `Form` 组件进行封装，支持 `element-plus` 的所有表单组件，并额外扩展了一些功能。

Form 组件位于 [src/components/Form](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Form) 内

## 用法

### refForm

refForm 的简单用法，如果想看更复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/form/ref-form)

```vue
<script setup lang="ts">
import { Form } from '@/components/Form'
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
  <Form :schema="schema" />
</template>

```

### useForm

除了使用 `refFrom` 的方式外，还可以使用 `useForm` 进行渲染，如果想看更复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/form/use-form)

```vue
<script setup lang="ts">
import { Form } from '@/components/Form'
import { reactive } from 'vue'
import { useForm } from '@/hooks/web/useForm'

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'input',
    component: 'Input'
  }
])

const { register } = useForm({
  schema
})
</script>

<template>
  <Form />
</template>

```

#### 参数介绍

```ts
const { register, elFormRef, methods } = useForm(props)
```

**register**

`register` 用于注册 `useForm`，如果需要使用 `useForm` 提供的 `api`，必须将 `register` 传入组件的 `onRegister`

**elFormRef**

当前 `elForm` 实例，可是用所有 `elForm` 实例方法。

**methods**

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setValues | 用于设置表单值 | (data: Recordable) => void |
| setProps | 用于设置表单属性 | (props: Recordable) => void |
| delSchema | 用于删除表单结构 | (field: string) => void |
| addSchema | 用于新增表单结构 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 用于编辑表单结构 | (schemaProps: FormSetPropsType[]) => void |
| getFormData | 用于获取表单数据 | <T = Recordable | undefined>() => Promise<T> |

## Form 属性

除以下参数外，还支持 `element-plus` 的 `Form` 所有属性，[详见](https://element-plus.org/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7)

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| schema | 生成 Form 的布局结构数组，[详见](#Schema) | `FormSchema` | - | [] |
| isCol | 是否需要栅格布局 | `boolean` | - | true |
| model | 表单数据对象 | `Recordable` | - | {} |
| autoSetPlaceholder | 是否自动设置 placeholder | `boolean` | - | true |
| isCustom | 是否自定义内容 | `boolean` | - | false |
| labelWidth | 表单 label 宽度 | `string`/`number` | - | auto |

### Schema<span id="Schema"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| field | 唯一值，必填项 | `string` | - | - |
| label | 标题 | `string` | - | - |
| colProps | element-plus 的 col 组件属性 | `ColProps` | - | - |
| componentProps | 表单组件子属性，[详见](#ComponentProps) | `{ slots?: Recordable } & ComponentProps` | - | - |
| formItemProps | element-plus 的 form-item 组件属性，[详见](#FormItemProps) | `FormItemProps` | - | - |
| component | 需要渲染的表单子组件 | `ComponentName` | - | - |
| value | 表单子组件初始值 | `FormValueType` | - | - |
| hidden | 表单子组件是否隐藏 | `boolean` | - | - |

### ComponentProps<span id="ComponentProps"></span>

除以下属性外，还支持 `component` 对应的组件所有属性。

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| optionsAlias | options 别名 | `ComponentOptionsAlias` | - | - |
| options | options 数据 | `ComponentOptions` | - | - |
| optionsSlot | options 插槽 | `boolean` | - | - |

### FormItemProps<span id="FormItemProps"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| labelWidth | 标题的宽度 | `string`/`number` | - | - |
| required | 是否必填 | `boolean` | - | - |
| rules | 自定义表单验证 | `Recordable` | - | - |
| error | 验证不通过展示的提示 | `string` | - | - |
| showMessage | 验证不通过是否展示提示 | `boolean` | - | - |
| inlineMessage | 是否以行内形式展示验证提示 | `boolean` | - | - |
| style | 子表单项的样式 | `CSSProperties` | - | - |

## Form 方法

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setValues | 用于设置表单值 | (data: Recordable) => void |
| setProps | 用于设置表单属性 | (props: Recordable) => void |
| delSchema | 用于删除表单结构 | (field: string) => void |
| addSchema | 用于新增表单结构 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 用于编辑表单结构 | (schemaProps: FormSetPropsType[]) => void |
| getElFormRef | 用于获取 `element-plus` 的 `Form` 组件实例 | `() => ComponentRef<typeof ElForm>` |

## Form 插槽

| 插槽名 | 说明 | 子标签 |
| ---- | ---- | ---- |
| - | 存放所有的 form-item 内容，或者其他标签内容 | FormItem |
| ${field} | form-item 的内容，可用于自定义表单项组件内容 | - |
| ${field}-label | form-item 标题上显示的自定义内容。| - |
| ${field}-error | form-item 自定义内容以显示验证消息。| - |

## 如何新增表单子组件

当项目中内置的表单组件不满足需求时，可以自行添加组件进去。

1. 在 [src/types/componentType/form.d.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/types/componentType/form.d.ts) 的 `ComponentName` 添加你组件名称。
2. 在 [src/components/Form/src/componentMap.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/components/Form/src/componentMap.ts) 引入你自己的组件，并在 `componentMap` 对象中添加键值对即可。