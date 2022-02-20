# 路由

项目路由配置存放于 [src/router/index.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/router/index.ts) 中。

为了方便阅读和查找，目前项目中并没有去对路由进行拆分，而是统一写在了一起，如果需要拆分，可自行更改。

因为路由是生成菜单关键，所以本项目中对路由提供了以下配置，方便开发者进行定制。

## 配置

``` js
/**
* redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击
* name:'router-name'          设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
* meta : {
    hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)

    alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，
                              只有一个时，会将那个子路由当做根路由显示在侧边栏，
                              若你想不管路由下面的 children 声明的个数都显示你的根路由，
                              你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，
                              一直显示根路由(默认 false)

    title: 'title'            设置该路由在侧边栏和面包屑中展示的名字

    icon: 'svg-name'          设置该路由的图标

    noCache: true             如果设置为true，则不会被 <keep-alive> 缓存(默认 false)

    breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)

    affix: true               如果设置为true，则会一直固定在tag项中(默认 false)

    noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)

    activeMenu: '/dashboard'  显示高亮的路由路径

    followAuth: '/dashboard'  跟随哪个路由进行权限过滤

    canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)
  }
**/
```

### 如何添加新配置

如果本项目中的路由配置项，满足不了你当前的开发工作，可以自行添加新的属性。

::: warning 注意

所有的路由项配置，都必须放在 `meta` 中。

:::

在 [types/router.d.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/types/router.d.ts) 中添加对应的类型，之后就可以在路由中添加你需要的配置项了。

```ts
declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    hidden?: boolean
    alwaysShow?: boolean
    title?: string
    icon?: string
    noCache?: boolean
    breadcrumb?: boolean
    affix?: boolean
    activeMenu?: string
    noTagsView?: boolean
    followAuth?: string
    canTo?: boolean

    // 添加新的配置类型
    ...
  }
}

```

### 多级路由

::: warning 注意事项

- 整个项目所有路由 `name` 不能重复
- 所有的多级路由最终都会转成二级路由，所以不能内嵌子路由
- 除了 layout 对应的 path 前面需要加 `/`，其余子路由都不要以`/`开头

:::

**示例**

```ts
{
  path: '/level',
  component: Layout,
  redirect: '/level/menu1/menu1-1/menu1-1-1',
  name: 'Level',
  meta: {
    title: t('router.level'),
    icon: 'carbon:skill-level-advanced'
  },
  children: [
    {
      path: 'menu1',
      name: 'Menu1',
      component: getParentLayout(),
      redirect: '/level/menu1/menu1-1/menu1-1-1',
      meta: {
        title: t('router.menu1')
      },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11',
          component: getParentLayout(),
          redirect: '/level/menu1/menu1-1/menu1-1-1',
          meta: {
            title: t('router.menu11'),
            alwaysShow: true
          },
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111',
              component: () => import('@/views/Level/Menu111.vue'),
              meta: {
                title: t('router.menu111')
              }
            }
          ]
        },
        {
          path: 'menu1-2',
          name: 'Menu12',
          component: () => import('@/views/Level/Menu12.vue'),
          meta: {
            title: t('router.menu12')
          }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2Demo',
      component: () => import('@/views/Level/Menu2.vue'),
      meta: {
        title: t('router.menu2')
      }
    }
  ]
}
  
```

### 外链

只需要将 `path` 设置为需要跳转的**HTTP 地址**即可。

```ts
{
  path: '/external-link',
  component: Layout,
  meta: {
    name: 'ExternalLink'
  },
  children: [
    {
      path: 'https://github.com/kailong321200875/vue-element-plus-admin-doc',
      meta: { name: 'Link', title: '文档' }
    }
  ]
}
```

## 图标

这里的 `icon` 配置，会同步到 **菜单**（icon 的值可以查看[此处](../components/icon.md)）。

## 多标签页

标签页使用的是 `keep-alive` 和 `router-view` 实现，实现切换 `tab` 后还能保存切换之前的状态。

### 如何开启页面缓存

开启缓存有 2 个条件

1. 路由设置 `name`，且**不能重复**
2. 路由对应的组件加上 `name`，与路由设置的 `name` 保持一致

```ts
{
  path: 'menu2',
  name: 'Menu2',
  component: () => import('@/views/Level/Menu2.vue'),
  meta: {
    title: t('router.menu2')
  }
}

// /@/views/Level/Menu2.vue
<script setup lang="ts">
defineOptions({
  name: 'Menu2'
})
</script>

```

:::warning 注意

keep-alive 生效的前提是：需要将路由的 `name` 属性及对应的页面的 `name` 设置成一样。因为：

**include - 字符串或正则表达式，只有名称匹配的组件会被缓存**
:::

### 如何让某个页面不缓存

可以将 `noCache` 配置成 `true` 即可关闭缓存或者组件不添加 `name` 属性。

```ts
{
  path: 'workplace',
  component: () => import('@/views/Dashboard/Workplace.vue'),
  name: 'Workplace',
  meta: {
    title: t('router.workplace'),
    noCache: true
  }
}
```

## 默认跳转地址

目前项目中，登录进来，默认是进入到当前第一个能找到的路由页面。

后续会考虑弄成一个配置项出来。
