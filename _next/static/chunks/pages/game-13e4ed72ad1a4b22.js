(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{41478:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return r(14797)}])},24729:function(e,t,r){"use strict";r.d(t,{ql:function(){return s},Ee:function(){return l},rU:function(){return h},BD:function(){return u},yj:function(){return p}});var n=r(9008),o=r.n(n);let s=o();var i=r(25675),a=r.n(i),c=r(67294);class l extends c.PureComponent{render(){return c.createElement(a(),this.props)}}let u=[{regex:/^@kyokuya\/_demo\/([\s\S]+)$/,importFunc:e=>()=>r(74243)("./".concat(e[1]))}];var d=r(11163);let p=()=>{let{asPath:e}=(0,d.useRouter)();return c.useMemo(()=>{var t;let r=null!==(t=e.split("#")[1])&&void 0!==t?t:null;return{path:e,hash:r}},[e])};var m=r(41664),g=r.n(m);class h extends c.PureComponent{render(){return c.createElement(g(),{...this.props,legacyBehavior:!1})}}},36435:function(e,t,r){"use strict";r.d(t,{DV:function(){return u},TS:function(){return g},Tl:function(){return v}});var n=r(85893),o=r(18872),s=r(36674),i=r(24729),a=r(98501),c=r(49894),l=r(67294);let u=e=>{let t=(0,s.mY)(e=>e.author$);return(0,n.jsx)(c.Z,{className:(0,o.cx)(d.container,e.className),url:t.about,title:"about",onClick:a.UW,children:(0,n.jsx)(i.Ee,{alt:"avatar",src:t.avatar})})},d={container:(0,o.iv)({display:"inline-block",boxSizing:"border-box",transition:"all 0.3s",padding:0,borderRadius:"50%",margin:0,overflow:"hidden",background:"#88acdb",textAlign:"center",userSelect:"none","&:hover":{transform:"scale(1.1) rotate(360deg)"},"&>img":{boxSizing:"border-box",display:"inline-block",width:"100%",height:"100%"}})};var p=r(45697),m=r.n(p);let g=e=>{let t=(0,s.mY)(e=>e.title$),r=(0,s.mY)(e=>e.description$),o=(0,s.mY)(e=>e.author$),{description:a=r,title:c}=e;return(0,n.jsxs)(i.ql,{children:[(0,n.jsxs)("title",{children:[c," | ",t]}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport"),(0,n.jsx)("meta",{name:"author",content:o.name},"author"),(0,n.jsx)("meta",{name:"description",content:a},"description"),(0,n.jsx)("meta",{property:"og:title",content:c},"og:title"),(0,n.jsx)("meta",{property:"og:description",content:a},"og:description"),(0,n.jsx)("meta",{property:"og:type",content:"website"},"og:type")]})};g.propTypes={title:m().string.isRequired,description:m().string};var h=r(50579),x=r(14651),k=r(24366);let v=e=>{let t=(0,s.O5)(),r=(0,s.mY)(e=>e.theme$),i=r===h.Q2.DARKEN,a=l.useCallback(e=>{e.stopPropagation(),t({type:s.Jx.TOGGLE_THEME,payload:i?h.Q2.LIGHT:h.Q2.DARKEN})},[t,i]),c=i?k.Z:x.Z;return(0,n.jsx)("div",{className:(0,o.cx)(_.container,e.className),children:(0,n.jsx)(c,{className:_.icon,onClick:a})})};v.propTypes={className:m().string};let _={container:(0,o.iv)({cursor:"pointer"}),icon:(0,o.iv)({height:24,width:24,color:"hsl(55deg, 40%, 60%)"})}},49894:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(85893),o=r(67294),s=r(18872),i=r(8190);let a={link:(0,s.iv)({padding:"0.2rem 0",color:i.nk.colorLink,textDecoration:"none",background:"linear-gradient( 90deg, hsla(358deg, 100%, 62%, 0.8), hsla(048deg, 100%, 50%, 0.8), hsla(196deg, 100%, 53%, 0.8))",backgroundSize:"0 3px",backgroundRepeat:"no-repeat",backgroundPosition:"50% 100%",transition:"all 0.3s ease-in-out","&:visited":{color:i.nk.colorLink},"&:hover":{color:i.nk.colorLinkHover,backgroundSize:"100% 3px",backgroundPositionX:0}})};class c extends o.PureComponent{render(){let{children:e,className:t,url:r,rel:o="noopener,noreferrer",target:i="_blank",title:c,...l}=this.props;return(0,n.jsx)("a",{...l,className:(0,s.cx)(a.link,t),href:r,title:c,target:i,rel:o,children:e})}}var l=r(24729);class u extends o.PureComponent{render(){let{children:e,className:t,url:r,title:o,...i}=this.props;return(0,n.jsx)(l.rU,{...i,className:(0,s.cx)(a.link,t),href:r,title:o,children:e})}}var d=r(45697),p=r.n(d);let m={url:p().string.isRequired,title:p().string,children:p().node,className:p().string,rel:p().string,style:p().object,target:p().string};class g extends o.PureComponent{render(){let{url:e,title:t,children:r}=this.props;return/^#/.test(e)?(0,n.jsx)("a",{title:t,href:e,children:r}):/^(\w+:[/]{2})/.test(e)?o.createElement(c,this.props):o.createElement(u,this.props)}}g.propTypes=m;var h=g},14797:function(e,t,r){"use strict";r.r(t);var n=r(85893),o=r(24729),s=r(36435),i=r(67294),a=r(80857);t.default=()=>(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(s.TS,{title:"Games",description:"Game list page"}),(0,n.jsx)("div",{className:a.container,children:(0,n.jsx)("div",{className:a.cards,children:c.map((e,t)=>(0,n.jsx)(o.rU,{className:a.cardWrapper,href:e.url,children:(0,n.jsxs)("span",{className:a.card,children:[(0,n.jsx)("span",{className:a.cardContent}),(0,n.jsx)("span",{className:a.cardTitle,children:e.title})]})},t))})})]});let c=[{title:"gomoku",url:"/game/gomoku"},{title:"sudoku",url:"/game/sudoku"}]},80857:function(e){e.exports={container:"game_container__GF28c",cards:"game_cards__dJzBk",cardWrapper:"game_cardWrapper__srLhy",card:"game_card__z_UvM",cardTitle:"game_cardTitle__wIAqI",cardContent:"game_cardContent__wURrT"}},74243:function(e,t,r){var n={"./component/container":[28195,195],"./component/container.tsx":[28195,195],"./component/editor":[70102,102],"./component/editor.tsx":[70102,102],"./component/previewer":[36040,40],"./component/previewer.tsx":[36040,40],"./post/algorithm/dlx/sudoku-solver":[15051,51],"./post/algorithm/dlx/sudoku-solver.tsx":[15051,51],"./post/game/sudoku":[71247,988,170,413,387,247],"./post/game/sudoku.tsx":[71247,988,170,413,387,247],"./util/sudoku":[34388,388],"./util/sudoku.ts":[34388,388]};function o(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then(function(){return r(o)})}o.keys=function(){return Object.keys(n)},o.id=74243,e.exports=o}},function(e){e.O(0,[826,774,888,179],function(){return e(e.s=41478)}),_N_E=e.O()}]);