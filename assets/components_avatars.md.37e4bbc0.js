import{o as a,c as n,a as s}from"./app.c38d1953.js";const t='{"title":"Avatars 头像列表","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Avatars 属性","slug":"avatars-属性"},{"level":3,"title":"data","slug":"data"}],"relativePath":"components/avatars.md","lastUpdated":1721206001124}',p={},o=s('<h1 id="avatars-头像列表"><a class="header-anchor" href="#avatars-头像列表" aria-hidden="true">#</a> Avatars 头像列表</h1><p>展示多个头像集合</p><p>Avatars 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Avatars" target="_blank" rel="noopener noreferrer">src/components/Avatars</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatars <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Avatars&#39;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> ref<span class="token operator">&lt;</span>AvatarItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Lily&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459374?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Amanda&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459375?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Daisy&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459376?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Olivia&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459377?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Tina&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459378?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Kitty&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459323?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Helen&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459324?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Sophia&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459325?v=4&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Wendy&#39;</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459326?v=4&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatars</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="avatars-属性"><a class="header-anchor" href="#avatars-属性" aria-hidden="true">#</a> Avatars 属性<span id="Avatars"></span></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>头像尺寸</td><td><code>ComponentSize、number</code></td><td>-</td><td>-</td></tr><tr><td>max</td><td>最大展示个数</td><td><code>number</code></td><td>-</td><td>5</td></tr><tr><td>data</td><td>头像数据，<a href="#data">详见</a></td><td><code>AvatarItem[]</code></td><td>-</td><td>-</td></tr><tr><td>showTooltip</td><td>是否展示名称tip</td><td><code>boolean</code></td><td>-</td><td>true</td></tr></tbody></table><h3 id="data"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data<span id="data"></span></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>头像图片地址</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>name</td><td>名称，非必填</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>',9);p.render=function(s,t,p,e,c,r){return a(),n("div",null,[o])};export default p;export{t as __pageData};
