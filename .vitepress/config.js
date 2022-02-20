// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/',
  title: 'vue-element-plus-admin',
  lang: 'zh-CN',
  description: '一套基于vue3、element-plus、typesScript4、vite2的后台集成方案',
  head: createHead(),
  themeConfig: {
    repo: 'kailong321200875/vue-element-plus-adminc',
    docsRepo: 'kailong321200875/vue-element-plus-admin-doc',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Archer' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vue-element-plus-admin, vitejs, vite, element-plus, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vue-element-plus-admin-doc' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '指南',
      link: '/guide/',
      items: [
        {
          text: '指南',
          link: '/guide/introduction',
        },
        {
          text: '深入',
          link: '/dep/i18n',
        },
      ],
    },
    {
      text: '组件',
      link: '/components/',
      items: [
        {
          text: '介绍',
          link: '/components/introduction',
        },
        {
          text: '功能组件',
          link: '/components/icon',
        },
      ],
    },
    {
      text: '相关链接',
      items: [
        {
          text: '完整版预览',
          link: 'https://element-plus-admin.cn/',
        },
        {
          text: '完整版源码',
          link: 'https://github.com/kailong321200875/vue-element-plus-admin',
        },
        {
          text: '文档源码',
          link: 'https://github.com/kailong321200875/vue-element-plus-admin-doc',
        },
        {
          text: '更新日志',
          link: 'https://github.com/kailong321200875/vue-element-plus-admin/blob/master/CHANGELOG.zh_CN.md',
        },
      ],
    },
  ];
}

function createSidebar() {
  return {
    '/components/': [
      {
        text: '组件',
        children: [
          {
            text: '前言',
            link: '/components/introduction',
          },
        ],
      },
      {
        text: '全局组件',
        children: [
          {
            text: 'Icon 图标组件',
            link: '/components/icon',
          },
        ],
      },
      {
        text: '常用组件',
        children: [
          {
            text: 'Form 表单组件',
            link: '/components/form',
          },
        ],
      },
    ],
    '/': [
      {
        text: '指南',
        children: [
          {
            text: '介绍',
            link: '/guide/introduction',
          },
          {
            text: '开始',
            link: '/guide/',
          },
          {
            text: '项目配置',
            link: '/guide/settings',
          },
          {
            text: '路由',
            link: '/guide/router',
          },
          {
            text: '权限',
            link: '/guide/auth',
          },
          {
            text: 'Mock&联调',
            link: '/guide/mock',
          },
          {
            text: '组件注册',
            link: '/guide/component',
          },
          {
            text: '样式',
            link: '/guide/design',
          },
          {
            text: '构建&部署',
            link: '/guide/deploy',
          },
        ],
      },
      {
        text: '深入',
        children: [
          {
            text: '国际化',
            link: '/dep/i18n',
          },
          {
            text: '项目规范',
            link: '/dep/lint',
          },
          {
            text: '黑暗主题',
            link: '/dep/dark',
          },
        ],
      },
    ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }
