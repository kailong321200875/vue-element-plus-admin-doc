# Form 表单组件

对 `element-plus` 的 `Form` 组件进行封装，支持 `element-plus` 的所有表单组件，并额外扩展了一些功能。

Form 组件位于 [src/components/Form](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Form) 内

::: warning 注意
推荐使用 tsx 来使用 `Form` 组件。
:::

## 用法

目前支持的表单组件，你可以在 [在线预览](https://element-plus-admin.cn/#/components/form/default-form) 中看到。

### 基础用法

```vue
<script setup lang="ts">
import { Form, FormSchema } from '@/components/Form'
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

对于复杂的场景，可以配合 `useForm` 来使用。

如果想看更复杂点的例子，请[在线预览](https://element-plus-admin.cn/#/components/form/use-form)

```vue
<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive } from 'vue'
import { useForm } from '@/hooks/web/useForm'

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'input',
    component: 'Input'
  }
])

const { formRegister } = useForm()
</script>

<template>
  <Form :schema="schema" @register="formRegister" />
</template>

```

#### 参数介绍

```ts
const { formRegister, formMethods } = useForm()
```

**register**

`formRegister` 用于注册 `useForm`，如果需要使用 `useForm` 提供的 `api`，必须将 `formRegister` 传入组件的 `onRegister`

**formMethods**

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setValues | 用于设置表单值 | (data: Recordable) => void |
| setProps | 用于设置表单属性 | (props: Recordable) => void |
| delSchema | 用于删除表单结构 | (field: string) => void |
| addSchema | 用于新增表单结构 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 用于编辑表单结构 | (schemaProps: FormSetPropsType[]) => void |
| getFormData | 用于获取表单数据 | `<T = Recordable>() => Promise<T>` |
| getComponentExpose | 用于获取表单组件实例，如 ElInput 实例 | (field: string) => any |
| getFormItemExpose | 用于获取 formItem 组件实例 | `(field: string) => Promise<ComponentRef<typeof ElFormItem>>` |
| getElFormExpose | 用于获取 elForm 组件实例 | `(field: string) => Promise<ComponentRef<typeof ElForm>>` |
| getFormExpose | 用于获取二次封装的 Form 组件实例 | `() => Promise<ComponentRef<typeof Form>>` |

## Form 属性<span id="Form"></span>

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
| componentProps | 表单组件子属性，[详见](#ComponentProps) | `any` | - | - |
| formItemProps | element-plus 的 form-item 组件属性，[详见](#FormItemProps) | `FormItemProps` | - | - |
| component | 需要渲染的表单子组件 | `ComponentName` | - | - |
| value | 表单子组件初始值 | `any` | - | - |
| hidden | 表单子组件是否隐藏 | `boolean` | - | - |
| remove | 表单子组件是否隐藏，如果为true，会连同值一同删除，类似v-if | `boolean` | - | - |
| optionApi | 加载 options 方法 | `() => Promise<any>` | - | - |

### ComponentProps<span id="ComponentProps"></span>

componentProps的类型有： `InputComponentProps` `AutocompleteComponentProps` `InputNumberComponentProps` `SelectComponentProps` `SelectV2ComponentProps` `CascaderComponentProps` `SwitchComponentProps` `RateComponentProps` `ColorPickerComponentProps` `TransferComponentProps` `RadioGroupComponentProps` `RadioButtonComponentProps` `DividerComponentProps` `DatePickerComponentProps` `DateTimePickerComponentProps` `TimePickerComponentProps` `InputPasswordComponentProps` `TreeSelectComponentProps` `UploadComponentProps` `any`

基本上每个表单组件都有 `slots` 的插槽对象，用于自定义插槽，如 InputComponentProps ：

```ts
slots?: {
  prefix?: (...args: any[]) => JSX.Element | null
  suffix?: (...args: any[]) => JSX.Element | null
  prepend?: (...args: any[]) => JSX.Element | null
  append?: (...args: any[]) => JSX.Element | null
}
```

如果需要监听组件事件，如 change 事件，每个 `ComponentProps` 基本上都有 `on` 对象用来接收事件，如 InputComponentProps ：

```ts
on?: {
  blur?: (event: FocusEvent) => void
  focus?: (event: FocusEvent) => void
  change?: (value: string | number) => void
  clear?: () => void
  input?: (value: string | number) => void
}

```

### FormItemProps<span id="FormItemProps"></span>

除了以下属性，还支持 `element-plus` 中的 `FormItem` 的所有属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| slots | FormItem的插槽 | `Object` | - | - |
| style | 子表单项的样式 | `CSSProperties` | - | - |

## Form 方法

| 方法名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| setValues | 用于设置表单值 | (data: Recordable) => void |
| setProps | 用于设置表单属性 | (props: Recordable) => void |
| delSchema | 用于删除表单结构 | (field: string) => void |
| addSchema | 用于新增表单结构 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 用于编辑表单结构 | (schemaProps: FormSetPropsType[]) => void |
| getComponentExpose | 用于获取表单子组件的实例，如 ElInput 实例 | (field: string) => any |
| getFormItemExpose | 用于获取 FormItem 组件的实例 | `() => Promise<typeof FormItem>` |


## 如何新增表单子组件

当项目中内置的表单组件不满足需求时，可以自行添加组件进去。

1. 在 [src/components/Form/src/types/index.ts](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Form/src/types/index.ts) 的 `ComponentName` 添加你组件名称。
2. 在 [src/components/Form/src/helper/componentMap.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/components/Form/src/helper/componentMap.ts) 引入你自己的组件，并在 `componentMap` 对象中添加键值对即可。
3. 如果想要更好的类型提示，可以把自定义组件的类型也添加到 `componentProps`