import{o as n,c as a,b as s,d as t}from"./app.51e46c58.js";const e='{"title":"国际化","description":"","frontmatter":{},"headers":[{"level":2,"title":"I18n-ally 插件","slug":"i18n-ally-插件"},{"level":2,"title":"配置默认语言","slug":"配置默认语言"},{"level":2,"title":"语言文件","slug":"语言文件"},{"level":2,"title":"语言导入逻辑说明","slug":"语言导入逻辑说明"},{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"切换语言","slug":"切换语言"},{"level":2,"title":"新增","slug":"新增"},{"level":3,"title":"语言文件","slug":"语言文件-1"},{"level":3,"title":"新增语言","slug":"新增语言"},{"level":2,"title":"远程读取语言数据","slug":"远程读取语言数据"},{"level":3,"title":"useLocale","slug":"uselocale"}],"relativePath":"dep/i18n.md","lastUpdated":1721205967753}',o={},l=s("h1",{id:"国际化"},[s("a",{class:"header-anchor",href:"#国际化","aria-hidden":"true"},"#"),t(" 国际化")],-1),c=s("p",null,[t("如果你使用的 vscode 开发工具，则推荐安装 "),s("a",{href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",target:"_blank",rel:"noopener noreferrer"},"I18n-ally"),t(" 这个插件")],-1),p=s("h2",{id:"i18n-ally-插件"},[s("a",{class:"header-anchor",href:"#i18n-ally-插件","aria-hidden":"true"},"#"),t(" I18n-ally 插件")],-1),u=s("p",null,"安装了该插件后，你的代码内可以实时看到对应的语言内容",-1),r=s("p",null,[s("img",{src:"/images/i18n.png",alt:""})],-1),i=s("h2",{id:"配置默认语言"},[s("a",{class:"header-anchor",href:"#配置默认语言","aria-hidden":"true"},"#"),t(" 配置默认语言")],-1),k=s("p",null,[t("在 "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/locale.ts",target:"_blank",rel:"noopener noreferrer"},"src/config/locale.ts"),t(" 内配置 "),s("code",null,"currentLocale"),t(" 为其他语言。")],-1),d=s("div",{class:"language-ts"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),t(),s("span",{class:"token punctuation"},"{"),t(" useCache "),s("span",{class:"token punctuation"},"}"),t(),s("span",{class:"token keyword"},"from"),t(),s("span",{class:"token string"},"'@/hooks/web/useCache'"),t("\n"),s("span",{class:"token keyword"},"import"),t(" zhCn "),s("span",{class:"token keyword"},"from"),t(),s("span",{class:"token string"},"'element-plus/lib/locale/lang/zh-cn'"),t("\n"),s("span",{class:"token keyword"},"import"),t(" en "),s("span",{class:"token keyword"},"from"),t(),s("span",{class:"token string"},"'element-plus/lib/locale/lang/en'"),t("\n\n"),s("span",{class:"token keyword"},"const"),t(),s("span",{class:"token punctuation"},"{"),t(" wsCache "),s("span",{class:"token punctuation"},"}"),t(),s("span",{class:"token operator"},"="),t(),s("span",{class:"token function"},"useCache"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),t("\n\n"),s("span",{class:"token keyword"},"export"),t(),s("span",{class:"token keyword"},"const"),t(" elLocaleMap "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token punctuation"},"{"),t("\n  "),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token operator"},":"),t(" zhCn"),s("span",{class:"token punctuation"},","),t("\n  en"),s("span",{class:"token operator"},":"),t(" en\n"),s("span",{class:"token punctuation"},"}"),t("\n"),s("span",{class:"token keyword"},"export"),t(),s("span",{class:"token keyword"},"interface"),t(),s("span",{class:"token class-name"},"LocaleState"),t(),s("span",{class:"token punctuation"},"{"),t("\n  currentLocale"),s("span",{class:"token operator"},":"),t(" LocaleDropdownType\n  localeMap"),s("span",{class:"token operator"},":"),t(" LocaleDropdownType"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),t("\n"),s("span",{class:"token punctuation"},"}"),t("\n\n"),s("span",{class:"token keyword"},"export"),t(),s("span",{class:"token keyword"},"const"),t(" localeModules"),s("span",{class:"token operator"},":"),t(" LocaleState "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token punctuation"},"{"),t("\n  currentLocale"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token punctuation"},"{"),t("\n    lang"),s("span",{class:"token operator"},":"),t(" wsCache"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"get"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'lang'"),s("span",{class:"token punctuation"},")"),t(),s("span",{class:"token operator"},"||"),t(),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token punctuation"},","),t("\n    elLocale"),s("span",{class:"token operator"},":"),t(" elLocaleMap"),s("span",{class:"token punctuation"},"["),t("wsCache"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"get"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'lang'"),s("span",{class:"token punctuation"},")"),t(),s("span",{class:"token operator"},"||"),t(),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token punctuation"},"]"),t("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),t("\n  "),s("span",{class:"token comment"},"// 多语言"),t("\n  localeMap"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token punctuation"},"["),t("\n    "),s("span",{class:"token punctuation"},"{"),t("\n      lang"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token punctuation"},","),t("\n      name"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'简体中文'"),t("\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),t("\n    "),s("span",{class:"token punctuation"},"{"),t("\n      lang"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'en'"),s("span",{class:"token punctuation"},","),t("\n      name"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'English'"),t("\n    "),s("span",{class:"token punctuation"},"}"),t("\n  "),s("span",{class:"token punctuation"},"]"),t("\n"),s("span",{class:"token punctuation"},"}"),t("\n\n")])])],-1),g=s("h2",{id:"语言文件"},[s("a",{class:"header-anchor",href:"#语言文件","aria-hidden":"true"},"#"),t(" 语言文件")],-1),h=s("p",null,[t("在 "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/locales",target:"_blank",rel:"noopener noreferrer"},"src/locales"),t(" 可以配置具体的语言，目前项目中的语言都是没有拆分的，全部放一起，后续会考虑拆分出来，比较好维护。")],-1),m=s("h2",{id:"语言导入逻辑说明"},[s("a",{class:"header-anchor",href:"#语言导入逻辑说明","aria-hidden":"true"},"#"),t(" 语言导入逻辑说明")],-1),f=s("p",null,[t("在 "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/plugins/vueI18n/index.ts",target:"_blank",rel:"noopener noreferrer"},"src/plugins/vueI18n/index.ts"),t(" 内可以看到")],-1),y=s("div",{class:"language-ts"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"const"),t(" defaultLocal "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"await"),t(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},"../../locales/"),s("span",{class:"token interpolation"},[s("span",{class:"token interpolation-punctuation punctuation"},"${"),t("locale"),s("span",{class:"token punctuation"},"."),t("lang"),s("span",{class:"token interpolation-punctuation punctuation"},"}")]),s("span",{class:"token string"},".ts"),s("span",{class:"token template-punctuation string"},"`")]),s("span",{class:"token punctuation"},")"),t("\n")])])],-1),w=s("p",null,[t("这会导入 "),s("code",null,"src/locales"),t(" 文件语言包。")],-1),b=s("h2",{id:"使用"},[s("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),t(" 使用")],-1),L=s("p",null,[t("引入项目自带的 "),s("code",null,"useI18n"),t(),s("strong",null,"注意不要引入 vue-i18n 的 useI18n")],-1),v=s("div",{class:"language-ts"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),t(),s("span",{class:"token punctuation"},"{"),t(" useI18n "),s("span",{class:"token punctuation"},"}"),t(),s("span",{class:"token keyword"},"from"),t(),s("span",{class:"token string"},"'/@/hooks/web/useI18n'"),t("\n\n"),s("span",{class:"token keyword"},"const"),t(),s("span",{class:"token punctuation"},"{"),t(" t "),s("span",{class:"token punctuation"},"}"),t(),s("span",{class:"token operator"},"="),t(),s("span",{class:"token function"},"useI18n"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),t("\n\n"),s("span",{class:"token keyword"},"const"),t(" title "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token function"},"t"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'common.menu'"),s("span",{class:"token punctuation"},")"),t("\n")])])],-1),I=s("h2",{id:"切换语言"},[s("a",{class:"header-anchor",href:"#切换语言","aria-hidden":"true"},"#"),t(" 切换语言")],-1),C=s("p",null,[t("切换语言需要使用 "),s("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/useLocale.ts",target:"_blank",rel:"noopener noreferrer"},"src/locales/useLocale.ts")],-1),M=s("div",{class:"language-ts"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),t(),s("span",{class:"token punctuation"},"{"),t(" useLocale "),s("span",{class:"token punctuation"},"}"),t(),s("span",{class:"token keyword"},"from"),t(),s("span",{class:"token string"},"'@/hooks/web/useLocale'"),t("\n"),s("span",{class:"token keyword"},"const"),t(),s("span",{class:"token punctuation"},"{"),t(" changeLocale "),s("span",{class:"token punctuation"},"}"),t(),s("span",{class:"token operator"},"="),t(),s("span",{class:"token function"},"useLocale"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),t("\n\n"),s("span",{class:"token function"},"changeLocale"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'en'"),s("span",{class:"token punctuation"},")"),t("\n")])])],-1),_=s("h2",{id:"新增"},[s("a",{class:"header-anchor",href:"#新增","aria-hidden":"true"},"#"),t(" 新增")],-1),x=s("h3",{id:"语言文件-1"},[s("a",{class:"header-anchor",href:"#语言文件-1","aria-hidden":"true"},"#"),t(" 语言文件")],-1),z=s("p",null,[t("在 "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/locales",target:"_blank",rel:"noopener noreferrer"},"src/locales"),t(" 增加对应语言的文件即可")],-1),S=s("h3",{id:"新增语言"},[s("a",{class:"header-anchor",href:"#新增语言","aria-hidden":"true"},"#"),t(" 新增语言")],-1),N=s("p",null,[t("目前项目自带的语言只有 "),s("code",null,"zh_CN"),t(" 和 "),s("code",null,"en"),t(" 两种")],-1),T=s("p",null,"如果需要新增，按以下操作即可",-1),O=s("ol",null,[s("li",null,[t("在 "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/locales",target:"_blank",rel:"noopener noreferrer"},"src/locales"),t(" 下语言文件")]),s("li",null,[t("在 "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/tree/master/types/global.d.ts",target:"_blank",rel:"noopener noreferrer"},"types/global.d.ts"),t(" 给 "),s("code",null,"LocaleType"),t(" 添加对应的类型")]),s("li",null,[t("在 "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/locale.ts",target:"_blank",rel:"noopener noreferrer"},"src/config/locale.ts"),t(),s("code",null,"localeMap"),t(" 中添加对应语言")])],-1),W=s("h2",{id:"远程读取语言数据"},[s("a",{class:"header-anchor",href:"#远程读取语言数据","aria-hidden":"true"},"#"),t(" 远程读取语言数据")],-1),P=s("p",null,[t("目前项目会在 "),s("code",null,"src/main.ts"),t(" 内等待 "),s("code",null,"setupI18n"),t(" 这个函数执行完之后才会渲染界面，所以只需在 setupI18n 内的 "),s("code",null,"createI18nOptions"),t(" 发送 ajax 请求，将对应的数据设置到 i18n 实例上即可。")],-1),$=s("div",{class:"language-ts"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"const"),t(" createI18nOptions "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"async"),t(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token builtin"},"Promise"),s("span",{class:"token operator"},"<"),t("I18nOptions"),s("span",{class:"token operator"},">"),t(),s("span",{class:"token operator"},"=>"),t(),s("span",{class:"token punctuation"},"{"),t("\n  "),s("span",{class:"token keyword"},"const"),t(" localeStore "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token function"},"useLocaleStoreWithOut"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),t("\n  "),s("span",{class:"token keyword"},"const"),t(" locale "),s("span",{class:"token operator"},"="),t(" localeStore"),s("span",{class:"token punctuation"},"."),t("getCurrentLocale\n  "),s("span",{class:"token keyword"},"const"),t(" localeMap "),s("span",{class:"token operator"},"="),t(" localeStore"),s("span",{class:"token punctuation"},"."),t("getLocaleMap\n  "),s("span",{class:"token comment"},"// 这里改为远程请求即可。"),t("\n  "),s("span",{class:"token keyword"},"const"),t(" defaultLocal "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"await"),t(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},"../../locales/"),s("span",{class:"token interpolation"},[s("span",{class:"token interpolation-punctuation punctuation"},"${"),t("locale"),s("span",{class:"token punctuation"},"."),t("lang"),s("span",{class:"token interpolation-punctuation punctuation"},"}")]),s("span",{class:"token string"},".ts"),s("span",{class:"token template-punctuation string"},"`")]),s("span",{class:"token punctuation"},")"),t("\n  "),s("span",{class:"token keyword"},"const"),t(" message "),s("span",{class:"token operator"},"="),t(" defaultLocal"),s("span",{class:"token punctuation"},"."),t("default "),s("span",{class:"token operator"},"??"),t(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),t("\n\n  "),s("span",{class:"token function"},"setHtmlPageLang"),s("span",{class:"token punctuation"},"("),t("locale"),s("span",{class:"token punctuation"},"."),t("lang"),s("span",{class:"token punctuation"},")"),t("\n\n  localeStore"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"setCurrentLocale"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),t("\n    lang"),s("span",{class:"token operator"},":"),t(" locale"),s("span",{class:"token punctuation"},"."),t("lang\n    "),s("span",{class:"token comment"},"// elLocale: elLocal"),t("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),t("\n\n  "),s("span",{class:"token keyword"},"return"),t(),s("span",{class:"token punctuation"},"{"),t("\n    legacy"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),t("\n    locale"),s("span",{class:"token operator"},":"),t(" locale"),s("span",{class:"token punctuation"},"."),t("lang"),s("span",{class:"token punctuation"},","),t("\n    fallbackLocale"),s("span",{class:"token operator"},":"),t(" locale"),s("span",{class:"token punctuation"},"."),t("lang"),s("span",{class:"token punctuation"},","),t("\n    messages"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token punctuation"},"{"),t("\n      "),s("span",{class:"token punctuation"},"["),t("locale"),s("span",{class:"token punctuation"},"."),t("lang"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token operator"},":"),t(" message\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),t("\n    availableLocales"),s("span",{class:"token operator"},":"),t(" localeMap"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"map"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"("),t("v"),s("span",{class:"token punctuation"},")"),t(),s("span",{class:"token operator"},"=>"),t(" v"),s("span",{class:"token punctuation"},"."),t("lang"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),t("\n    sync"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),t("\n    silentTranslationWarn"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),t("\n    missingWarn"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),t("\n    silentFallbackWarn"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"true"),t("\n  "),s("span",{class:"token punctuation"},"}"),t("\n"),s("span",{class:"token punctuation"},"}"),t("\n")])])],-1),j=s("h3",{id:"uselocale"},[s("a",{class:"header-anchor",href:"#uselocale","aria-hidden":"true"},"#"),t(" useLocale")],-1),D=s("p",null,[t("代码: "),s("a",{href:"https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/hooks/web/useLocale.ts",target:"_blank",rel:"noopener noreferrer"},"src/hooks/web/useLocale/")],-1),A=s("p",null,[t("当手动切换语言的时候会触发 "),s("code",null,"useLocale"),t(" 函数，useLocale 也是异步函数，只需等待接口返回响应的数据后，再进行设置即可")],-1),E=s("div",{class:"language-ts"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"export"),t(),s("span",{class:"token keyword"},"const"),t(),s("span",{class:"token function-variable function"},"useLocale"),t(),s("span",{class:"token operator"},"="),t(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),t(),s("span",{class:"token operator"},"=>"),t(),s("span",{class:"token punctuation"},"{"),t("\n  "),s("span",{class:"token comment"},"// Switching the language will change the locale of useI18n"),t("\n  "),s("span",{class:"token comment"},"// And submit to configuration modification"),t("\n  "),s("span",{class:"token keyword"},"const"),t(),s("span",{class:"token function-variable function"},"changeLocale"),t(),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"async"),t(),s("span",{class:"token punctuation"},"("),t("locale"),s("span",{class:"token operator"},":"),t(" LocaleType"),s("span",{class:"token punctuation"},")"),t(),s("span",{class:"token operator"},"=>"),t(),s("span",{class:"token punctuation"},"{"),t("\n    "),s("span",{class:"token keyword"},"const"),t(" globalI18n "),s("span",{class:"token operator"},"="),t(" i18n"),s("span",{class:"token punctuation"},"."),t("global\n    \n    "),s("span",{class:"token comment"},"// 改为远程获取"),t("\n    "),s("span",{class:"token keyword"},"const"),t(" langModule "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"await"),t(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},"../../locales/"),s("span",{class:"token interpolation"},[s("span",{class:"token interpolation-punctuation punctuation"},"${"),t("locale"),s("span",{class:"token interpolation-punctuation punctuation"},"}")]),s("span",{class:"token string"},".ts"),s("span",{class:"token template-punctuation string"},"`")]),s("span",{class:"token punctuation"},")"),t("\n\n    globalI18n"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"setLocaleMessage"),s("span",{class:"token punctuation"},"("),t("locale"),s("span",{class:"token punctuation"},","),t(" langModule"),s("span",{class:"token punctuation"},"."),t("default"),s("span",{class:"token punctuation"},")"),t("\n\n    "),s("span",{class:"token function"},"setI18nLanguage"),s("span",{class:"token punctuation"},"("),t("locale"),s("span",{class:"token punctuation"},")"),t("\n  "),s("span",{class:"token punctuation"},"}"),t("\n\n  "),s("span",{class:"token keyword"},"return"),t(),s("span",{class:"token punctuation"},"{"),t("\n    changeLocale\n  "),s("span",{class:"token punctuation"},"}"),t("\n"),s("span",{class:"token punctuation"},"}"),t("\n")])])],-1);o.render=function(s,t,e,o,F,H){return n(),a("div",null,[l,c,p,u,r,i,k,d,g,h,m,f,y,w,b,L,v,I,C,M,_,x,z,S,N,T,O,W,P,$,j,D,A,E])};export default o;export{e as __pageData};
