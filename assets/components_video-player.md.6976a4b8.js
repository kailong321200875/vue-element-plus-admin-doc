import{o as a,c as t,a as n}from"./app.51e46c58.js";const s='{"title":"VideoPlayer 视频播放器组件（2.5.0+）","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"VideoPlayer 属性","slug":"videoplayer-属性"}],"relativePath":"components/video-player.md","lastUpdated":1721205967753}',e={},p=n('<h1 id="videoplayer-视频播放器组件（2-5-0-）"><a class="header-anchor" href="#videoplayer-视频播放器组件（2-5-0-）" aria-hidden="true">#</a> VideoPlayer 视频播放器组件（2.5.0+）</h1><p>基于 <code>xgplayer</code> 二次封装的视频播放器</p><p>VideoPlayer 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/VideoPlayer" target="_blank" rel="noopener noreferrer">src/components/VideoPlayer</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> VideoPlayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/VideoPlayer&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VideoPlayer</span>\n    <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="videoplayer-属性"><a class="header-anchor" href="#videoplayer-属性" aria-hidden="true">#</a> VideoPlayer 属性<span id="VideoPlayer"></span></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>视频的地址</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>poster</td><td>视频的封面</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>',7);e.render=function(n,s,e,o,l,c){return a(),t("div",null,[p])};export default e;export{s as __pageData};
