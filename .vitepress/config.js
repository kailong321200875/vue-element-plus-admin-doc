// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: (process.argv[3] && process.argv[3] === '--gitee') ? '/vue-element-plus-admin-doc/' : '/',
  title: 'vue-element-plus-admin',
  lang: 'zh-CN',
  description: '一套基于vue3、element-plus、typesScript4、vite2的后台集成方案',
  head: createHead(),
  themeConfig: {
    repo: 'kailong321200875/vue-element-plus-adminc',
    docsRepo: 'kailong321200875/vue-element-plus-admin-doc',
    logo: '/logo.png',
    docsBranch: 'master',
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
          text: '全局组件',
          link: '/components/icon',
        },
        {
          text: '功能组件',
          link: '/components/form',
        },
        {
          text: '函数式组件',
          link: '/components/image-viewer',
        },
      ],
    },
    {
      text: '常用Hooks',
      link: '/hooks/',
      items: [
        {
          text: 'useWatermark',
          link: '/hooks/useWatermark',
        },
      ],
    },
    {
      text: '相关链接',
      items: [
        {
          text: 'Github 站点预览',
          link: 'https://element-plus-admin.cn/',
        },
        {
          text: 'Github 源码',
          link: 'https://github.com/kailong321200875/vue-element-plus-admin',
        },
        {
          text: 'Github 文档源码',
          link: 'https://github.com/kailong321200875/vue-element-plus-admin-doc',
        },
        {
          text: 'Github 更新日志',
          link: 'https://github.com/kailong321200875/vue-element-plus-admin/blob/master/CHANGELOG.md',
        },
        {
          text: 'Gitee 站点预览',
          link: 'https://kailong110120130.gitee.io/vue-element-plus-admin',
        },
        {
          text: 'Gitee 源码',
          link: 'https://gitee.com/kailong110120130/vue-element-plus-admin',
        },
        {
          text: 'Gitee 文档源码',
          link: 'https://gitee.com/kailong110120130/vue-element-plus-admin-doc',
        },
        {
          text: 'Gitee 更新日志',
          link: 'https://gitee.com/kailong110120130/vue-element-plus-admin/blob/master/CHANGELOG.md',
        },
      ],
    },
  ];
}

function createSidebar() {
  return {
    '/hooks/': [
      {
        text: 'useWatermark',
        link: '/hooks/useWatermark',
      },
    ],
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
        text: '功能组件',
        children: [
          {
            text: 'Form 表单组件',
            link: '/components/form',
          },
          {
            text: 'Table 表格组件',
            link: '/components/table',
          },
          {
            text: 'Editor 富文本组件',
            link: '/components/editor',
          },
          {
            text: 'Search 查询组件',
            link: '/components/search',
          },
          {
            text: 'Descriptions 描述组件',
            link: '/components/descriptions',
          },
          {
            text: 'Dialog 弹窗组件',
            link: '/components/dialog',
          },
          {
            text: 'Echart 图表组件',
            link: '/components/echart',
          },
          {
            text: 'CountTo 数字动画组件',
            link: '/components/count-to',
          },
          {
            text: 'Qrcode 二维码组件',
            link: '/components/qrcode',
          },
          {
            text: 'Highlight 高亮组件',
            link: '/components/highlight',
          },
          {
            text: 'Infotip 信息提示组件',
            link: '/components/infotip',
          },
          {
            text: 'Error 缺省组件',
            link: '/components/error',
          },
          {
            text: 'InputPassword 密码输入框组件',
            link: '/components/input-password',
          },
          {
            text: 'Footer 页脚组件',
            link: '/components/footer',
          },
        ],
      },
      {
        text: '函数式组件',
        children: [
          {
            text: 'ImageViewer 图片预览组件',
            link: '/components/image-viewer',
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
