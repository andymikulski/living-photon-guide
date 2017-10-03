webpackJsonp([32,206],{1111:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The simplest usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/rate/demo/basic.md",id:"components-rate-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement(a.Rate,null)}}},1112:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u5c06\u661f\u661f\u66ff\u6362\u4e3a\u5176\u4ed6\u5b57\u7b26\uff0c\u6bd4\u5982\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u5b57\u4f53\u56fe\u6807\u751a\u81f3\u4e2d\u6587\u3002"]],"en-US":[["p","Replace the default star to other character like alphabet, digit, iconfont or even Chinese word."]]},meta:{order:4,title:{"zh-CN":"\u5176\u4ed6\u5b57\u7b26","en-US":"Other Character"},filename:"components/rate/demo/character.md",id:"components-rate-demo-character"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>heart<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> allowHalf <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u597d<span class="token punctuation">"</span></span> <span class="token attr-name">allowHalf</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement("div",null,n.createElement(a.Rate,{character:n.createElement(a.Icon,{type:"heart"}),allowHalf:!0}),n.createElement("br",null),n.createElement(a.Rate,{character:"A",allowHalf:!0,style:{fontSize:36}}),n.createElement("br",null),n.createElement(a.Rate,{character:"\u597d",allowHalf:!0}))}}},1113:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u53ea\u8bfb\uff0c\u65e0\u6cd5\u8fdb\u884c\u9f20\u6807\u4ea4\u4e92\u3002"]],"en-US":[["p","Read only, can't use mouse to interact."]]},meta:{order:3,title:{"zh-CN":"\u53ea\u8bfb","en-US":"Read only"},filename:"components/rate/demo/disabled.md",id:"components-rate-demo-disabled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement(a.Rate,{disabled:!0,defaultValue:2})}}},1114:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u652f\u6301\u9009\u4e2d\u534a\u661f\u3002"]],"en-US":[["p","Support select half star."]]},meta:{order:1,title:{"zh-CN":"\u534a\u661f","en-US":"Half star"},filename:"components/rate/demo/half.md",id:"components-rate-demo-half"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2.5</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement(a.Rate,{allowHalf:!0,defaultValue:2.5})}}},1115:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u7ed9\u8bc4\u5206\u7ec4\u4ef6\u52a0\u4e0a\u6587\u6848\u5c55\u793a\u3002"]],"en-US":[["p","Add copywriting in rate components."]]},meta:{order:2,title:{"zh-CN":"\u6587\u6848\u5c55\u73b0","en-US":"Show copywriting"},filename:"components/rate/demo/text.md",id:"components-rate-demo-text"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Rater</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    count<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">{</span>value <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-rate-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> stars<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rater</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function a(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function t(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function e(a,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(a,s):n(a,s))}var p=s(1),o=(s(2),s(3)),c=function(n){function s(){var e,p,o;a(this,s);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return e=p=t(this,n.call.apply(n,[this].concat(l))),p.state={value:3,count:null},p.handleChange=function(n){p.setState({value:n})},o=e,t(p,o)}return e(s,n),s.prototype.render=function(){var n=this.state.value;return p.createElement("span",null,p.createElement(o.Rate,{onChange:this.handleChange,value:n}),n&&p.createElement("span",{className:"ant-rate-text"},n," stars"))},s}(p.Component);return p.createElement(c,null)}}},1355:function(n,a,s){n.exports={basic:s(1111),character:s(1112),disabled:s(1113),half:s(1114),text:s(1115)}}});