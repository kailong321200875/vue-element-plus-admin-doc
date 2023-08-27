# 权限

项目中集成了 2 种权限处理方式：

1. 第一种是由前端来控制菜单，即服务端只返回有权限的 keys，由前端自行去匹配
2. 第二种是通过服务端返回的路由数据结构来动态生成路由表

目前项目中提供了测试的帐号：

**admin/admin**

## 前端控制权限

**实现原理：** 在前端固定写死路由的权限，指定路由有哪些权限可以查看。只初始化通用的路由，需要权限才能访问的路由没有被加入路由表内。在登陆后或者其他方式获取对应的路由 keys 后，遍历路由表去匹配 keys，过滤生成可以访问的路由表，再通过 `router.addRoutes` 添加到路由实例，实现权限的过滤。

**缺点：** 权限相对不自由，因为路由表的控制在前端，不管是要排序还是修改，都需要前端去修改，服务端只提供有权限的路由 keys

## 后台动态获取

**实现原理：** 是通过接口动态生成路由表，且遵循一定的数据结构返回。前端根据需要处理该数据为可识别的结构，再通过 `router.addRoutes` 添加到路由实例，实现权限的动态生成。

**优点：** 所有的菜单控制都是通过服务端的接口返回，前端只负责渲染，后期维护成本降低，优先推荐此方式。

## 实现

1. 在[src/store/modules/permission.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/store/modules/permission.ts) 中 `generateRoutes()` 进行更改。

接收的 `type` 参数，目前只是针对于本项目的模拟情况，如果不需要或者不适用，可自行改动。

```ts
generateRoutes(
  type: 'server' | 'frontEnd' | 'static',
  routers?: AppCustomRouteRecordRaw[] | string[]
): Promise<unknown> {
  return new Promise<void>((resolve) => {
    let routerMap: AppRouteRecordRaw[] = []
    if (type === 'server') {
      // 模拟后端过滤菜单
      routerMap = generateRoutesByServer(routers as AppCustomRouteRecordRaw[])
    } else if (type === 'frontEnd') {
      // 模拟前端过滤菜单
      routerMap = generateRoutesByFrontEnd(cloneDeep(asyncRouterMap), routers as string[])
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

2. 在[src/utils/routerHelper.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/utils/routerHelper.ts) 中 `generateRoutesByFrontEnd ()` 进行更改。目前本项目的前端权限控制，是根据 `path` 是否相同来进行过滤演示的，如果不符合需求，需要手动更改以下判断逻辑。

```ts
// 前端控制路由生成
export const generateRoutesByFrontEnd  = (
  routes: AppRouteRecordRaw[],
  keys: string[],
  basePath = '/'
): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = [];

  for (const route of routes) {
    const meta = route.meta as RouteMeta;
    // skip some route
    if (meta.hidden && !meta.showMainRoute) {
      continue;
    }

    let data: Nullable<AppRouteRecordRaw> = null;

    let onlyOneChild: Nullable<string> = null;
    if (route.children && route.children.length === 1 && !meta.alwaysShow) {
      onlyOneChild = (
        isUrl(route.children[0].path)
          ? route.children[0].path
          : pathResolve(pathResolve(basePath, route.path), route.children[0].path)
      ) as string;
    }

    // 开发者可以根据实际情况进行扩展
    for (const item of keys) {
      // 通过路径去匹配
      if (isUrl(item) && (onlyOneChild === item || route.path === item)) {
        data = Object.assign({}, route);
      } else {
        const routePath = pathResolve(basePath, onlyOneChild || route.path);
        if (routePath === item || meta.followRoute === item) {
          data = Object.assign({}, route);
        }
      }
    }

    // recursive child routes
    if (route.children && data) {
      data.children = generateRoutesByFrontEnd (route.children, keys, pathResolve(basePath, data.path));
    }
    if (data) {
      res.push(data as AppRouteRecordRaw);
    }
  }
  return res;
};
```

### 后台动态获取

3. 在[src/utils/routerHelper.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/utils/routerHelper.ts) 中 `generateRoutesByServer ()` 进行更改。

```ts
// 后端控制路由生成
export const generateRoutesByServer  = (routes: AppCustomRouteRecordRaw[]): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = [];

  for (const route of routes) {
    const data: AppRouteRecordRaw = {
      path: route.path,
      name: route.name,
      redirect: route.redirect,
      meta: route.meta,
    };
    if (route.component) {
      const comModule =
        modules[`../${route.component}.vue`] || modules[`../${route.component}.tsx`];
      const component = route.component as string;
      if (!comModule && !component.includes('#')) {
        console.error(`未找到${route.component}.vue文件或${route.component}.tsx文件，请创建`);
      } else {
        // 动态加载路由文件，可根据实际情况进行自定义逻辑
        data.component =
          component === '#' ? Layout : component.includes('##') ? getParentLayout() : comModule;
      }
    }
    // recursive child routes
    if (route.children) {
      data.children = generateRoutesByServer (route.children);
    }
    res.push(data as AppRouteRecordRaw);
  }
  return res;
};
```

### 公用部分修改

4. 在[src/views/Login/components/LoginForm.vue](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/views/Login/components/LoginForm.vue) 中 `getRole()` 进行更改。

需要开发者自行根据需求进行代码变更。

```ts
// 获取角色信息
const getRole = async () => {
  const formData = await getFormData<UserType>()
  const params = {
    roleName: formData.username
  }
  const res =
    appStore.getDynamicRouter && appStore.getServerDynamicRouter
      ? await getAdminRoleApi(params)
      : await getTestRoleApi(params)
  if (res) {
    const routers = res.data || []
    setStorage('roleRouters', routers)
    appStore.getDynamicRouter && appStore.getServerDynamicRouter
      ? await permissionStore.generateRoutes('server', routers).catch(() => {})
      : await permissionStore.generateRoutes('frontEnd', routers).catch(() => {})

    permissionStore.getAddRouters.forEach((route) => {
      addRoute(route as RouteRecordRaw) // 动态添加可访问路由表
    })
    permissionStore.setIsAddRouters(true)
    push({ path: redirect.value || permissionStore.addRouters[0].path })
  }
};
```

5. 在[src/permission.ts](https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/permission.ts)，以下这种情况，是考虑到手动刷新，所以需要获取到缓存中的动态菜单重新渲染。

```ts
// 开发者可根据实际情况进行修改
const roleRouters = getStorage('roleRouters') || []

// 是否使用动态路由
if (appStore.getDynamicRouter) {
  appStore.serverDynamicRouter
    ? await permissionStore.generateRoutes('server', roleRouters as AppCustomRouteRecordRaw[])
    : await permissionStore.generateRoutes('frontEnd', roleRouters as string[])
  } else {
  await permissionStore.generateRoutes('static')
}

permissionStore.getAddRouters.forEach((route) => {
  router.addRoute(route as unknown as RouteRecordRaw) // 动态添加可访问路由表
})
const redirectPath = from.query.redirect || to.path
const redirect = decodeURIComponent(redirectPath as string)
const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
permissionStore.setIsAddRouters(true)
next(nextData)
```

## 静态路由（无权限）

有时候，我们并不需要动态路由，那么可以在 `src/config/app.ts` 中把 `dynamicRouter` 设置为 `false`，这样我们取得都是项目中的静态路由表了。

内部逻辑已经处理了静态路由的部分，所以可以无需关心其他。
