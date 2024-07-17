import{o as n,c as a,a as s}from"./app.51e46c58.js";const t='{"title":"useWatermark","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"参数介绍","slug":"参数介绍"}],"relativePath":"hooks/useWatermark.md","lastUpdated":1721205967753}',p={},e=s('<h1 id="usewatermark"><a class="header-anchor" href="#usewatermark" aria-hidden="true">#</a> useWatermark</h1><p>为元素设置水印</p><p>useWatermark 位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useWatermark.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useWatermark.ts</a></p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useWatermark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useWatermark&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> setWatermark<span class="token punctuation">,</span> clear <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">setWatermark</span><span class="token punctuation">(</span><span class="token string">&#39;ElementPlusAdmin&#39;</span><span class="token punctuation">)</span>\n\n<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> setWatermark<span class="token punctuation">,</span> clear <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>setWatermark</strong></p><p><code>setWatermark</code> 用于设置水印文案，接收一个 <code>string</code> 类型的参数</p><p><strong>clear</strong></p><p><code>clear</code> 用于清除水印</p>',11);p.render=function(s,t,p,o,c,r){return n(),a("div",null,[e])};export default p;export{t as __pageData};
