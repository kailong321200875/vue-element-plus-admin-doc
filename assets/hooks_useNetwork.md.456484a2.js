import{o as n,c as s,a}from"./app.c38d1953.js";const t='{"title":"useNetwork","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"参数介绍","slug":"参数介绍"}],"relativePath":"hooks/useNetwork.md","lastUpdated":1721206001124}',e={},o=a('<h1 id="usenetwork"><a class="header-anchor" href="#usenetwork" aria-hidden="true">#</a> useNetwork</h1><p>监听网络状态</p><p>useNetwork 位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useNetwork.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useNetwork.ts</a></p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useNetwork <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useNetwork&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> online <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useNetwork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>online<span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> online <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useNetwork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>online</strong></p><p><code>online</code> 网络是否已连接</p>',9);e.render=function(a,t,e,p,c,l){return n(),s("div",null,[o])};export default e;export{t as __pageData};
