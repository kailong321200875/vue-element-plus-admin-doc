# 权限

项目中集成了2种权限处理方式：

1. 通过用户角色来过滤菜单(前端方式控制)，菜单由路由配置自动生成
2. 通过后台来动态生成路由表(服务端方式控制)

目前项目中提供了两种不同方式的帐号：

**admin/admin test/test**

`admin` 帐号用于模拟服务端控制权限，服务端返回什么就渲染什么

`test` 帐号用于模拟前端控制权限，服务端只返回需要显示的菜单 key，前端进行匹配渲染

## 前端控制权限

**实现原理:** 在前端固定写死路由的权限，指定路由有哪些权限可以查看。只初始化通用的路由，需要权限才能访问的路由没有被加入路由表内。在登陆后或者其他方式获取用户角色后，通过角色去遍历路由表，获取该角色可以访问的路由表，生成路由表，再通过 `router.addRoutes` 添加到路由实例，实现权限的过滤。

**缺点:** 权限相对不自由，如果服务端改动角色，前端也需要跟着改动，并且排序什么的都需要前端控制。

## 后台动态获取

**实现原理:** 是通过接口动态生成路由表，且遵循一定的数据结构返回。前端根据需要处理该数据为可识别的结构，再通过 `router.addRoutes` 添加到路由实例，实现权限的动态生成。

## 实现

1. 在[src/store/modules/permission.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/store/modules/permission.ts) 中 `generateRoutes()` 进行更改。

接收的 `type` 参数，目前只是针对于本项目的模拟情况，如果不需要或者不适用，可自行改动。

```ts
generateRoutes(
  type: 'admin' | 'test' | 'none',
  routers?: AppCustomRouteRecordRaw[] | string[]
): Promise<unknown> {
  return new Promise<void>((resolve) => {
    let routerMap: AppRouteRecordRaw[] = []
    if (type === 'admin') {
      // 模拟后端过滤菜单
      routerMap = generateRoutesFn2(routers as AppCustomRouteRecordRaw[])
    } else if (type === 'test') {
      // 模拟前端过滤菜单
      routerMap = generateRoutesFn1(cloneDeep(asyncRouterMap), routers as string[])
    } else {
      // 直接读取静态路由表
      routerMap = cloneDeep(asyncRouterMap)
    }
    // 动态路由，404一定要放到最后面
    this.addRouters = routerMap.concat([
      {
        path: '/:path(.*)*',
         redirect: '/404',
        name: '404Page',
        meta: {
           hidden: true,
          breadcrumb: false
        }
      }
    ])
    // 渲染菜单的所有路由
    this.routers = cloneDeep(constantRouterMap).concat(routerMap)
    resolve()
  })
}
```

### 前端控制实现

2. 在[src/utils/routerHelper.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/utils/routerHelper.ts) 中 `generateRoutesFn1()` 进行更改。目前本项目的前端权限控制，是根据 `path` 是否相同来进行过滤演示的，如果不符合需求，需要手动更改以下判断逻辑。

```ts
// 前端控制路由生成
export const generateRoutesFn1 = (
  routes: AppRouteRecordRaw[],
  keys: string[],
  basePath = '/'
): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = []

  for (const route of routes) {
    const meta = route.meta as RouteMeta
    // skip some route
    if (meta.hidden && !meta.showMainRoute) {
      continue
    }

    let data: Nullable<AppRouteRecordRaw> = null

    let onlyOneChild: Nullable<string> = null
    if (route.children && route.children.length === 1 && !meta.alwaysShow) {
      onlyOneChild = (
        isUrl(route.children[0].path)
          ? route.children[0].path
          : pathResolve(pathResolve(basePath, route.path), route.children[0].path)
      ) as string
    }

    // 开发者可以根据实际情况进行扩展
    for (const item of keys) {
      // 通过路径去匹配
      if (isUrl(item) && (onlyOneChild === item || route.path === item)) {
        data = Object.assign({}, route)
      } else {
        const routePath = pathResolve(basePath, onlyOneChild || route.path)
        if (routePath === item || meta.followRoute === item) {
          data = Object.assign({}, route)
        }
      }
    }

    // recursive child routes
    if (route.children && data) {
      data.children = generateRoutesFn1(route.children, keys, pathResolve(basePath, data.path))
    }
    if (data) {
      res.push(data as AppRouteRecordRaw)
    }
  }
  return res
}
```

### 后台动态获取

3. 在[src/utils/routerHelper.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/utils/routerHelper.ts) 中 `generateRoutesFn2()` 进行更改。

```ts
// 后端控制路由生成
export const generateRoutesFn2 = (routes: AppCustomRouteRecordRaw[]): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = []

  for (const route of routes) {
    const data: AppRouteRecordRaw = {
      path: route.path,
      name: route.name,
      redirect: route.redirect,
      meta: route.meta
    }
    if (route.component) {
      const comModule = modules[`../${route.component}.vue`] || modules[`../${route.component}.tsx`]
      const component = route.component as string
      if (!comModule && !component.includes('#')) {
        console.error(`未找到${route.component}.vue文件或${route.component}.tsx文件，请创建`)
      } else {
        // 动态加载路由文件，可根据实际情况进行自定义逻辑
        data.component =
          component === '#' ? Layout : component.includes('##') ? getParentLayout() : comModule
      }
    }
    // recursive child routes
    if (route.children) {
      data.children = generateRoutesFn2(route.children)
    }
    res.push(data as AppRouteRecordRaw)
  }
  return res
}
```

### 公用部分修改

4. 在[src/views/Login/components/LoginForm.vue](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/views/Login/components/LoginForm.vue) 中 `getRole()` 进行更改。

需要开发者自行根据需求进行代码变更。

```ts
// 获取角色信息
const getRole = async () => {
  // 模拟获取角色信息，开发者需要自行更改以下逻辑。
  const { getFormData } = methods
  const formData = await getFormData<UserLoginType>()
  const params = {
    roleName: formData.username
  }
  // admin - 模拟后端过滤菜单
  // test - 模拟前端过滤菜单
  const res =
    formData.username === 'admin'
      ? await getAdminRoleApi({ params })
      : await getTestRoleApi({ params })
  if (res) {
    const { wsCache } = useCache()
    const routers = res.data.list || []
    wsCache.set('roleRouters', routers)
    
    // 不管最终要使用什么方式进行权限过滤，都需要调用 permissionStore.generateRoutes()
    formData.username === 'admin'
      ? await permissionStore.generateRoutes('admin', routers).catch(() => {})
      : await permissionStore.generateRoutes('test', routers).catch(() => {})
    
    // 过滤完路由之后，需要动态注册路由
    permissionStore.getAddRouters.forEach((route) => {
      addRoute(route as RouteRecordRaw) // 动态添加可访问路由表
    })
    permissionStore.setIsAddRouters(true)
    push({ path: redirect.value || permissionStore.addRouters[0].path })
  }
}
```

5. 在[src/permission.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/permission.ts)，以下这种情况，是考虑到手动刷新，所以需要获取到缓存中的动态菜单重新渲染。

```ts
// 开发者可根据实际情况进行修改
const roleRouters = wsCache.get('roleRouters') || []
const userInfo = wsCache.get(appStore.getUserInfo)

userInfo.role === 'admin'
  ? await permissionStore.generateRoutes('admin', roleRouters as AppCustomRouteRecordRaw[])
  : await permissionStore.generateRoutes('test', roleRouters as string[])

permissionStore.getAddRouters.forEach((route) => {
  router.addRoute(route as unknown as RouteRecordRaw) // 动态添加可访问路由表
})
const redirectPath = from.query.redirect || to.path
const redirect = decodeURIComponent(redirectPath as string)
const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
permissionStore.setIsAddRouters(true)
next(to.path === '/' ? { path: permissionStore.addRouters[0]?.path as string } : nextData)
```
