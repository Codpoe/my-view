(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JtbQ:function(e,n,t){"use strict";t.r(n),t.d(n,"Item",(function(){return d})),t.d(n,"_frontmatter",(function(){return u})),t.d(n,"default",(function(){return h}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("lQyR"),t("YhIr");var i=t("mXGw"),o=t.n(i),r=t("/FXl"),a=t("TjRS"),c=t("ZFoC"),s=t("k6sF");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function d(e){return Object(r.b)("div",{style:{borderBottom:"1px solid #e1e1e1",lineHeight:"50px",textAlign:"center"}},e.children)}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"Item",filename:"src/list/README.mdx"}});var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/list/README.mdx"}});var f={Item:d,_frontmatter:u},b=a.a;function h(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(b,l({},f,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"用于展示长列表，当滚动到底部时会触发加载事件。"),Object(r.b)("h2",{id:"演示"},"演示"),Object(r.b)("h3",{id:"简单示例"},"简单示例"),Object(r.b)(c.c,{__position:0,__code:"() => {\n  const [loading, changeLoading] = React.useState(false)\n  const [finished, changeFinished] = React.useState(false)\n  const [length, changeLength] = React.useState(0)\n  const onLoad = () => {\n    changeLoading(true)\n    setTimeout(() => {\n      const l = length + 4\n      changeLength(l)\n      changeLoading(false)\n      if (l >= 8) {\n        changeFinished(true)\n      }\n    }, 2000)\n  }\n  return (\n    <List loading={loading} finished={finished} onLoad={onLoad}>\n      {Array.from({ length }, (_, index) => (\n        <div\n          key={index}\n          style={{\n            borderBottom: '1px solid #e1e1e1',\n            lineHeight: '50px',\n            textAlign: 'center',\n          }}\n        >\n          {index}\n        </div>\n      ))}\n    </List>\n  )\n}",__scope:{props:t,DefaultLayout:a.a,Playground:c.c,List:s.a},mdxType:"Playground"},(function(){var e=o.a.useState(!1),n=e[0],t=e[1],i=o.a.useState(!1),a=i[0],c=i[1],l=o.a.useState(0),d=l[0],u=l[1];return Object(r.b)(s.a,{loading:n,finished:a,onLoad:function(){t(!0),setTimeout((function(){var e=d+4;u(e),t(!1),e>=8&&c(!0)}),2e3)},mdxType:"List"},Array.from({length:d},(function(e,n){return Object(r.b)("div",{key:n,style:{borderBottom:"1px solid #e1e1e1",lineHeight:"50px",textAlign:"center"}},n)})))})),Object(r.b)("h2",{id:"api"},"API"))}h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/list/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-list-readme-mdx-eae8a1e13ae7470315f4.js.map