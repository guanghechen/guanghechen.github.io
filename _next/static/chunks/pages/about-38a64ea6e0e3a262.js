(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{39212:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(83131)}])},23871:function(e,t,r){"use strict";r.d(t,{ql:function(){return i},Ee:function(){return s},rU:function(){return g},BD:function(){return c},yj:function(){return d}});var n=r(9008);let i=r.n(n)();var o=r(25675),a=r.n(o),l=r(67294);class s extends l.PureComponent{render(){return l.createElement(a(),this.props)}}let c=[{regex:/^@kyokuya\/_demo\/([\s\S]+)$/,importFunc:e=>()=>r(74243)("./".concat(e[1]))}];var u=r(11163);let d=()=>{let{asPath:e}=(0,u.useRouter)();return l.useMemo(()=>{var t;let r=null!==(t=e.split("#")[1])&&void 0!==t?t:null;return{path:e,hash:r}},[e])};var m=r(41664),p=r.n(m);class g extends l.PureComponent{render(){return l.createElement(p(),{...this.props,legacyBehavior:!1})}}},19345:function(e,t,r){"use strict";r.d(t,{DV:function(){return c},TS:function(){return p},Tl:function(){return x}});var n=r(35944),i=r(18872),o=r(99765),a=r(23871),l=r(93101),s=r(67294);let c=e=>{let t=(0,o.mY)(e=>e.author$);return(0,n.tZ)(a.rU,{className:(0,i.cx)(u.container,e.className),href:t.about,title:"about",onClick:l.UW,children:(0,n.tZ)(a.Ee,{alt:"avatar",src:t.avatar})})},u={container:(0,i.iv)({display:"inline-block",boxSizing:"border-box",transition:"all 0.3s",padding:0,borderRadius:"50%",margin:0,overflow:"hidden",textAlign:"center",userSelect:"none","&&:hover":{transform:"scale(1.1) rotate(360deg)"},"&>img":{boxSizing:"border-box",display:"inline-block",width:"100%",height:"100%"}})};var d=r(45697),m=r.n(d);let p=e=>{let t=(0,o.mY)(e=>e.title$),r=(0,o.mY)(e=>e.description$),i=(0,o.mY)(e=>e.author$),{description:a=r,title:l}=e;return(0,n.tZ)(g,{title:l,siteTitle:t,description:a,authorName:i.name})};p.propTypes={title:m().string.isRequired,description:m().string};class g extends s.PureComponent{render(){let{title:e,siteTitle:t,authorName:r,description:i}=this.props;return(0,n.BX)(a.ql,{children:[(0,n.BX)("title",{children:[e," | ",t]}),(0,n.tZ)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport"),(0,n.tZ)("meta",{name:"author",content:r},"author"),(0,n.tZ)("meta",{name:"description",content:i},"description"),(0,n.tZ)("meta",{property:"og:title",content:e},"og:title"),(0,n.tZ)("meta",{property:"og:description",content:i},"og:description"),(0,n.tZ)("meta",{property:"og:type",content:"website"},"og:type")]})}}g.displayName="$SeoPageDescription",g.propTypes={title:m().string.isRequired,siteTitle:m().string.isRequired,authorName:m().string.isRequired,description:m().string.isRequired};var h=r(48734),f=r(96044),v=r(14651),b=r(24366);let x=e=>{let t=(0,o.O5)(),r=(0,o.mY)(e=>e.theme$)===f.Q2.darken,a=(0,h.$0)(e=>{e.stopPropagation(),t({type:o.Jx.TOGGLE_THEME,payload:r?f.Q2.light:f.Q2.darken})}),l=r?b.Z:v.Z;return(0,n.tZ)("div",{className:(0,i.cx)(k.container,e.className),children:(0,n.tZ)(l,{className:k.icon,onClick:a})})};x.propTypes={className:m().string};let k={container:(0,i.iv)({cursor:"pointer"}),icon:(0,i.iv)({height:24,width:24,color:"hsl(55deg, 40%, 60%)"})}},83131:function(e,t,r){"use strict";r.r(t);var n=r(35944),i=r(18872),o=r(96044),a=r(99765),l=r(23871),s=r(19345),c=r(67294);t.default=()=>{let e=(0,a.mY)(e=>e.author$);return(0,n.BX)("div",{className:d.container,children:[(0,n.tZ)(s.TS,{title:"关于我",description:"光和尘的个人站点"}),(0,n.BX)("div",{className:d.main,children:[(0,n.BX)("header",{className:d.header,children:[(0,n.tZ)("span",{className:d.avatar,children:(0,n.tZ)(l.Ee,{alt:"avatar",src:e.avatar})}),(0,n.tZ)("h1",{className:d.author,children:e.name}),(0,n.tZ)("p",{className:d.motto,children:e.motto})]}),(0,n.tZ)("div",{className:d.nav,children:u.map((e,t)=>(0,n.BX)(c.Fragment,{children:[t>0&&(0,n.tZ)("span",{className:d.tileSplit}),(0,n.tZ)(l.rU,{className:d.tile,href:e.url,children:(0,n.tZ)("span",{children:e.title})})]},e.url))})]})]})};let u=[{title:"post",url:"/posts/1"},{title:"essay",url:"/essays/1"},{title:"game",url:"/game"}],d={container:(0,i.iv)({position:"relative",display:"block",minHeight:"100vh",backgroundColor:"#f6f6f6",backgroundImage:"url(/asset/img/home/wallpaper.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",["@media screen and ".concat(o.u3.smMinus)]:{backgroundImage:"url(/asset/img/home/wallpaper-mobile.jpg)"}}),main:(0,i.iv)({position:"relative",display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100vh",margin:"0 auto",color:"#f2f2f2",backgroundImage:"linear-gradient(90deg, rgba(246, 148, 49, 0.05) 0, rgba(243, 110, 83, 0.05) 15%, rgba(239, 78, 123, 0.05) 30%, rgba(162, 104, 172, 0.05) 44%, rgba(81, 115, 184, 0.05) 58%, rgba(16, 152, 173, 0.05) 72%, rgba(7, 176, 154, 0.05) 86%, rgba(109, 186, 130, 0.05) 100%)","::before":{content:'""',zIndex:-1,position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",opacity:.2}}),header:(0,i.iv)({flex:"0 0 auto",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"15vh"}),avatar:(0,i.iv)({display:"inline-block",transition:"all 0.3s",border:"3px solid #dee5e9",borderColor:"#e0dde7 #dedde6 #e4dbe2 #e3dbe2",height:"128px",width:"128px",borderRadius:"50%",margin:"-64px auto 0",background:"#88acdb",textAlign:"center",overflow:"hidden",userSelect:"none","&&:hover":{transform:"scale(1.1) rotate(360deg)"},"> img":{display:"inline-block",width:"100%",height:"100%"}}),author:(0,i.iv)({margin:"1rem 0 1rem",color:"#fafafa",fontWeight:400,fontSize:"2rem",["@media screen and ".concat(o.u3.smMinus)]:{color:"#CBCBCB"}}),motto:(0,i.iv)({overflow:"hidden",textOverflow:"ellipsis",lineHeight:1,fontSize:"1rem",color:"#e0e0e0",margin:"0 0 1.8rem",["@media screen and ".concat(o.u3.smMinus)]:{color:"#AFAFAF"}}),nav:(0,i.iv)({display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"1rem 0",userSelect:"none",fontSize:"22px",fontFamily:"Comic Sans MS, lucida grande, lucida sans unicode, lucida, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei, WenQuanYi Micro Hei, sans-serif"}),tile:(0,i.iv)({display:"inline-flex",flexDirection:"column",alignItems:"center",borderRadius:"4px",textDecoration:"none",outline:"none","> span":{color:"#f0f0f0"},"&&:hover > span":{color:"#ccc"},"&:active > span":{color:"#f2f2f2"}}),tileSplit:(0,i.iv)({margin:"0 0.5rem",color:"#e6e6e6","&::before":{content:"'/'"},["@media screen and ".concat(o.u3.smMinus)]:{color:"#C5C5C5"}})}},74243:function(e,t,r){var n={"./post/algorithm/dlx/sudoku-solver":[47662,662],"./post/algorithm/dlx/sudoku-solver.tsx":[47662,662],"./post/game/sudoku":[74045,264,156,440,10,728,45],"./post/game/sudoku.tsx":[74045,264,156,440,10,728,45],"./util/sudoku":[49387,387],"./util/sudoku.ts":[49387,387]};function i(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],i=t[0];return Promise.all(t.slice(1).map(r.e)).then(function(){return r(i)})}i.keys=function(){return Object.keys(n)},i.id=74243,e.exports=i}},function(e){e.O(0,[554,888,774,179],function(){return e(e.s=39212)}),_N_E=e.O()}]);