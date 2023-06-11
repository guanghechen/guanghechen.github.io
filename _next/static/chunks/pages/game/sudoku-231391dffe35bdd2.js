(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{64645:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/sudoku",function(){return n(68382)}])},24729:function(e,t,n){"use strict";n.d(t,{ql:function(){return i},Ee:function(){return u},rU:function(){return h},BD:function(){return l},yj:function(){return m}});var o=n(9008),r=n.n(o);let i=r();var s=n(25675),a=n.n(s),c=n(67294);class u extends c.PureComponent{render(){return c.createElement(a(),this.props)}}let l=[{regex:/^@kyokuya\/_demo\/([\s\S]+)$/,importFunc:e=>()=>n(74243)("./".concat(e[1]))}];var d=n(11163);let m=()=>{let{asPath:e}=(0,d.useRouter)();return c.useMemo(()=>{var t;let n=null!==(t=e.split("#")[1])&&void 0!==t?t:null;return{path:e,hash:n}},[e])};var p=n(41664),x=n.n(p);class h extends c.PureComponent{render(){return c.createElement(x(),{...this.props,legacyBehavior:!1})}}},47289:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});var o=n(85893),r=n(39824),i=n(24729),s=n(45697),a=n.n(s);n(67294);let c=e=>{let t=(0,r.mY)(e=>e.title$),n=(0,r.mY)(e=>e.description$),s=(0,r.mY)(e=>e.author$),{description:a=n,title:c}=e;return(0,o.jsxs)(i.ql,{children:[(0,o.jsxs)("title",{children:[c," | ",t]}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport"),(0,o.jsx)("meta",{name:"author",content:s.name},"author"),(0,o.jsx)("meta",{name:"description",content:a},"description"),(0,o.jsx)("meta",{property:"og:title",content:c},"og:title"),(0,o.jsx)("meta",{property:"og:description",content:a},"og:description"),(0,o.jsx)("meta",{property:"og:type",content:"website"},"og:type")]})};c.propTypes={title:a().string.isRequired,description:a().string}},64712:function(e,t,n){"use strict";n.d(t,{V:function(){return u}});var o=n(85893),r=n(39824),i=n(16378),s=n(10075),a=n(47289),c=n(67294);let u=e=>{let t=(0,r.mY)(e=>e.author$),n=(0,r.mY)(e=>e.copyright$);return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)(a.T,{title:e.title,description:e.description}),(0,o.jsxs)("div",{className:l.container,children:[(0,o.jsxs)("header",{className:l.header,children:[(0,o.jsx)("h1",{children:e.title}),(0,o.jsx)(r.vx,{className:l.brightnessSlider})]}),(0,o.jsx)("main",{className:l.main,children:(0,o.jsx)("div",{className:l.content,children:e.children})}),(0,o.jsx)("footer",{className:l.footer,children:(0,o.jsxs)("div",{className:l.copyright,children:[(0,o.jsxs)("span",{children:["\xa9 ",n.date," ",t.name]},"date"),(0,o.jsx)("span",{children:t.motto},"motto")]})})]})]})},l=(0,s.ZC)({container:{position:"relative",boxSizing:"border-box",display:"flex",flexDirection:"column",width:"100vw",minHeight:"100vh",background:i.nk.colorBgBody},header:{flex:"0 0 auto",boxSizing:"border-box",background:i.nk.colorBgHeader,h1:{color:"#696969",textAlign:"center",fontFamily:"'lucida grande', 'lucida sans unicode', lucida, helvetica, 'Hiragino Sans GB',\n          'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif",margin:"1rem 0"}},brightnessSlider:{position:"absolute",top:12,right:12},main:{flex:"1 0 auto",boxSizing:"border-box",width:"100%",marginBottom:"2rem",background:i.nk.colorBgBody},footer:{flex:"0 0 auto",boxSizing:"border-box",width:"100%",padding:"1rem",lineHeight:"2",color:"hsla(0deg, 0%, 85%, 0.8)",background:"hsl(0deg, 0%, 20%)",fontSize:"max(0.8rem, 12px)",fontFamily:"'Andale Mono', 'lucida grande', 'lucida sans unicode', lucida, helvetica,\n        'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif",textShadow:"0 1px #333"},content:{flex:"1 0 auto",boxSizing:"border-box",display:"flex",justifyContent:"center"},copyright:{display:"flex",justifyContent:"space-between",maxWidth:400,margin:"auto",userSelect:"none"}})},68382:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(31387),i=n(64712);n(67294),t.default=()=>(0,o.jsx)(i.V,{title:"Sudoku Game",children:(0,o.jsx)(r.ZP,{storageKey:"@game/sudoku/context0"})})},74243:function(e,t,n){var o={"./component/container":[28195,195],"./component/container.tsx":[28195,195],"./component/editor":[70102,102],"./component/editor.tsx":[70102,102],"./component/previewer":[36040,40],"./component/previewer.tsx":[36040,40],"./post/algorithm/dlx/sudoku-solver":[15051,51],"./post/algorithm/dlx/sudoku-solver.tsx":[15051,51],"./post/game/sudoku":[71247,490,170,413,387,247],"./post/game/sudoku.tsx":[71247,490,170,413,387,247],"./util/sudoku":[34388,388],"./util/sudoku.ts":[34388,388]};function r(e){if(!n.o(o,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(r)})}r.keys=function(){return Object.keys(o)},r.id=74243,e.exports=r}},function(e){e.O(0,[279,490,170,413,387,774,888,179],function(){return e(e.s=64645)}),_N_E=e.O()}]);