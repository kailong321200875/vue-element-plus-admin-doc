# Permission 权限组件

用于颗粒级别的按钮权限组件

Permission 组件位于 [src/components/Permission](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Permission) 内

## 在线例子

[在线例子](https://element-plus-admin.cn/#/authorization/test)

## 用法

由于项目中的颗粒级别的权限，是放在路由表中，所以会判断在当前路由 `meta.permission` 是否包含传入的权限值，有的话则展示。

如果权限实现不一致的话，可以自行改造下。

### 基本用法

```vue
<template>
  <Permission permission="add">
    <ElButton type="primary"> Add </ElButton>
  </Permission>
</template>

```

### 指令形式

权限控制目前还提供了指令的使用方式，并且已经全局注册，所以可以在任意组件中使用 `v-hasPermi`

```vue
<ElButton v-hasPermi="'add'" type="primary"> Add </ElButton>

```

### 函数形式

除了以上两种，还可以使用函数的形式进行控制

``` ts
import { hasPermi } from '@/components/Permission'

```

```vue
<ElButton v-if="hasPermi('add')" type="primary"> Add </ElButton>

```

## Permission 属性<span id="Permission"></span>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| permission | 权限值 | `string` | - | - |
