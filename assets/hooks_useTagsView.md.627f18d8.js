import{o as n,c as s,a}from"./app.51e46c58.js";const t='{"title":"useTagsView（2.1.0+）","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"参数介绍","slug":"参数介绍"}],"relativePath":"hooks/useTagsView.md","lastUpdated":1721205967753}',p={},o=a('<h1 id="usetagsview（2-1-0-）"><a class="header-anchor" href="#usetagsview（2-1-0-）" aria-hidden="true">#</a> useTagsView（2.1.0+）</h1><p>操作标签页</p><p>useTagsView 位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useTagsView.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useTagsView.ts</a></p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ContentWrap&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useTagsView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useTagsView&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> push <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> closeAll<span class="token punctuation">,</span> closeLeft<span class="token punctuation">,</span> closeRight<span class="token punctuation">,</span> closeOther<span class="token punctuation">,</span> closeCurrent<span class="token punctuation">,</span> refreshPage<span class="token punctuation">,</span> setTitle <span class="token punctuation">}</span> <span class="token operator">=</span>\n  <span class="token function">useTagsView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeAllTabs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">closeAll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeLeftTabs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">closeLeft</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeRightTabs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">closeRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeOtherTabs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">closeOther</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">refresh</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">refreshPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCurrentTab</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">closeCurrent</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">setTabTitle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">setAnalysisTitle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">分析页-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentWrap</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>useTagsView<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeAllTabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 关闭所有标签页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeLeftTabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 关闭左侧标签页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeRightTabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 关闭右侧标签页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeOtherTabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 关闭其他标签页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeCurrentTab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 关闭当前标签页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 刷新当前标签页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setTabTitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 修改当前标题 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setAnalysisTitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 修改分析页标题 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentWrap</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> closeAll<span class="token punctuation">,</span> closeLeft<span class="token punctuation">,</span> closeRight<span class="token punctuation">,</span> closeOther<span class="token punctuation">,</span> closeCurrent<span class="token punctuation">,</span> refreshPage<span class="token punctuation">,</span> setTitle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTagsView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>closeAll</strong></p><p><code>closeAll</code> 用于关闭所有标签页</p><p><strong>closeLeft</strong></p><p><code>closeLeft</code> 用于关闭当前左侧标签页</p><p><strong>closeRight</strong></p><p><code>closeRight</code> 用于关闭当前右侧标签页</p><p><strong>closeOther</strong></p><p><code>closeOther</code> 用于关闭除当前标签页外的所有标签页</p><p><strong>closeCurrent</strong></p><p><code>closeCurrent</code> 用于关闭除当前标签页</p><p><strong>refreshPage</strong></p><p><code>refreshPage</code> 用于刷新当前标签页</p><p><strong>setTitle</strong></p><p><code>setTitle(title: string, path: string)</code> 用于设置某个标签页的标签，接收 标题和一个完整的path路径</p>',21);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
