(this["webpackJsonpsyleemomo-react"]=this["webpackJsonpsyleemomo-react"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(3),s=t.n(o),i=(t(12),t(4)),a=t(5),d=t(7),h=t(6),j=(t(13),t(0));var l=function(e){var n=e.r_word,t=e.r_pos,r=e.r_seq,c=e.r_hanja,o=e.r_des;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("h3",{children:r}),Object(j.jsxs)("h4",{children:[t," - (",c,")"]}),Object(j.jsx)("p",{children:o})]})},u=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=n.call(this,e)).state={loading:!0,dics:[]},r}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("\ub728\ub2c8?"),fetch("https://dictionary-f.herokuapp.com/api/words").then((function(e){return e.json()})).then((function(n){console.log(n+"!!!!!!!!!!!!!!!!!!!");var t=n.words;console.log({words:"r_word"}.toString+"!!!!!!!!!!!!!!!"),e.setState({loading:!1,dics:t})}))}},{key:"render",value:function(){var e=this.state,n=e.loading,t=e.dics;return n?Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("h1",{children:"Loading..."})}):Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(l,{r_word:e.r_word,r_seq:e.r_seq,r_pos:e.r_pos,r_hanja:e.r_hanja,r_des:e.r_des},e._id)}))})}}]),t}(r.Component),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.1f5a816f.chunk.js.map