(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{39212:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(60570)}])},24729:function(t,e,n){"use strict";n.d(e,{ql:function(){return s},Ee:function(){return l},rU:function(){return h},BD:function(){return c},yj:function(){return m}});var r=n(9008),o=n.n(r);let s=o();var i=n(25675),a=n.n(i),u=n(67294);class l extends u.PureComponent{render(){return u.createElement(a(),this.props)}}let c=[{regex:/^@kyokuya\/_demo\/([\s\S]+)$/,importFunc:t=>()=>n(74243)("./".concat(t[1]))}];var p=n(11163);let m=()=>{let{asPath:t}=(0,p.useRouter)();return u.useMemo(()=>{var e;let n=null!==(e=t.split("#")[1])&&void 0!==e?e:null;return{path:t,hash:n}},[t])};var d=n(41664),_=n.n(d);class h extends u.PureComponent{render(){return u.createElement(_(),{...this.props,legacyBehavior:!1})}}},47289:function(t,e,n){"use strict";n.d(e,{T:function(){return u}});var r=n(85893),o=n(39824),s=n(24729),i=n(45697),a=n.n(i);n(67294);let u=t=>{let e=(0,o.mY)(t=>t.title$),n=(0,o.mY)(t=>t.description$),i=(0,o.mY)(t=>t.author$),{description:a=n,title:u}=t;return(0,r.jsxs)(s.ql,{children:[(0,r.jsxs)("title",{children:[u," | ",e]}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport"),(0,r.jsx)("meta",{name:"author",content:i.name},"author"),(0,r.jsx)("meta",{name:"description",content:a},"description"),(0,r.jsx)("meta",{property:"og:title",content:u},"og:title"),(0,r.jsx)("meta",{property:"og:description",content:a},"og:description"),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type")]})};u.propTypes={title:a().string.isRequired,description:a().string}},60570:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(39824),s=n(24729),i=n(47289),a=n(67294),u=n(79667);e.default=()=>{let t=(0,o.mY)(t=>t.author$);return(0,r.jsxs)("div",{className:u.container,children:[(0,r.jsx)(i.T,{title:"关于我",description:"光和尘的个人站点"}),(0,r.jsxs)("div",{className:u.main,children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("span",{className:u.avatar,children:(0,r.jsx)(s.Ee,{alt:"avatar",src:t.avatar})}),(0,r.jsx)("h1",{className:u.author,children:t.name}),(0,r.jsx)("p",{className:u.motto,children:t.motto})]}),(0,r.jsx)("div",{className:u.nav,children:l.map((t,e)=>(0,r.jsxs)(a.Fragment,{children:[e>0&&(0,r.jsx)("span",{className:u.tileSplit}),(0,r.jsx)(s.rU,{className:u.tile,href:t.url,children:(0,r.jsx)("span",{children:t.title})})]},t.url))})]})]})};let l=[{title:"post",url:"/posts/1"},{title:"essay",url:"/essays/1"},{title:"game",url:"/game"}]},79667:function(t){t.exports={container:"about_container__Vn3fr",main:"about_main__bTb_G",avatar:"about_avatar__xhmYJ",author:"about_author__jTXil",motto:"about_motto__uflkL",nav:"about_nav__nFE1f",tile:"about_tile__clXuS",tileSplit:"about_tileSplit__8IfCx"}},74243:function(t,e,n){var r={"./component/container":[28195,195],"./component/container.tsx":[28195,195],"./component/editor":[70102,102],"./component/editor.tsx":[70102,102],"./component/previewer":[36040,40],"./component/previewer.tsx":[36040,40],"./post/algorithm/dlx/sudoku-solver":[15051,51],"./post/algorithm/dlx/sudoku-solver.tsx":[15051,51],"./post/game/sudoku":[71247,490,170,413,387,247],"./post/game/sudoku.tsx":[71247,490,170,413,387,247],"./util/sudoku":[34388,388],"./util/sudoku.ts":[34388,388]};function o(t){if(!n.o(r,t))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then(function(){return n(o)})}o.keys=function(){return Object.keys(r)},o.id=74243,t.exports=o}},function(t){t.O(0,[279,774,888,179],function(){return t(t.s=39212)}),_N_E=t.O()}]);