webpackJsonp([190,206],{876:function(n,a){n.exports={content:["section",["p","\u663e\u793a\u5f53\u524d\u9875\u9762\u5728\u7cfb\u7edf\u5c42\u7ea7\u7ed3\u6784\u4e2d\u7684\u4f4d\u7f6e\uff0c\u5e76\u80fd\u5411\u4e0a\u8fd4\u56de\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["ul",["li",["p","\u5f53\u7cfb\u7edf\u62e5\u6709\u8d85\u8fc7\u4e24\u7ea7\u4ee5\u4e0a\u7684\u5c42\u7ea7\u7ed3\u6784\u65f6\uff1b"]],["li",["p","\u5f53\u9700\u8981\u544a\u77e5\u7528\u6237\u300e\u4f60\u5728\u54ea\u91cc\u300f\u65f6\uff1b"]],["li",["p","\u5f53\u9700\u8981\u5411\u4e0a\u5bfc\u822a\u7684\u529f\u80fd\u65f6\u3002"]]]],meta:{category:"Components",subtitle:"\u9762\u5305\u5c51",type:"Navigation",title:"Breadcrumb",filename:"components/breadcrumb/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u53ef\u9009\u503c"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","routes"],["td","router \u7684\u8def\u7531\u6808\u4fe1\u606f"],["td","object[]"],["td"],["td","-"]],["tr",["td","params"],["td","\u8def\u7531\u7684\u53c2\u6570"],["td","object"],["td"],["td","-"]],["tr",["td","separator"],["td","\u5206\u9694\u7b26\u81ea\u5b9a\u4e49"],["td","string","|","ReactNode"],["td"],["td","'/'"]],["tr",["td","itemRender"],["td","\u81ea\u5b9a\u4e49\u94fe\u63a5\u51fd\u6570\uff0c\u548c react-router \u914d\u7f6e\u4f7f\u7528"],["td","(route, params, routes, paths) => ReactNode"],["td"],["td","-"]]]],["blockquote",["p","2.0 \u4e4b\u540e\uff0c",["code","linkRender"]," \u548c ",["code","nameRender"]," \u88ab\u79fb\u9664\uff0c\u8bf7\u4f7f\u7528 ",["code","itemRender"]," \u6765\u4ee3\u66ff\u3002"]],["h3","\u548c browserHistory \u914d\u5408"],["p","\u548c react-router \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u9ed8\u8ba4\u751f\u6210\u7684 url \u8def\u5f84\u662f\u5e26\u6709 ",["code","#"]," \u7684\uff0c\u5982\u679c\u548c browserHistory \u4e00\u8d77\u4f7f\u7528\u7684\u8bdd\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",["code","itemRender"]," \u5c5e\u6027\u5b9a\u4e49\u9762\u5305\u5c51\u94fe\u63a5\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">itemRender</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> params<span class="token punctuation">,</span> routes<span class="token punctuation">,</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> last <span class="token operator">=</span> routes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">===</span> routes<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> last <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>paths<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">itemRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>itemRender<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","import { Link } from 'react-router';\n\nfunction itemRender(route, params, routes, paths) {\n  const last = routes.indexOf(route) === routes.length - 1;\n  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;\n}\n\nreturn <Breadcrumb itemRender={itemRender} />;"]]]}}});