(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2944:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(64938)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"m22 12-4-4v3H3v2h15v3l4-4z"}),"TrendingFlatOutlined");t.Z=o},6141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(57272)}])},24729:function(e,t,n){"use strict";n.d(t,{ql:function(){return s},Ee:function(){return c},rU:function(){return p},BD:function(){return u},yj:function(){return h}});var i=n(9008),r=n.n(i);let s=r();var o=n(25675),a=n.n(o),l=n(67294);class c extends l.PureComponent{render(){return l.createElement(a(),this.props)}}let u=[{regex:/^@kyokuya\/_demo\/([\s\S]+)$/,importFunc:e=>()=>n(74243)("./".concat(e[1]))}];var d=n(11163);let h=()=>{let{asPath:e}=(0,d.useRouter)();return l.useMemo(()=>{var t;let n=null!==(t=e.split("#")[1])&&void 0!==t?t:null;return{path:e,hash:n}},[e])};var m=n(41664),A=n.n(m);class p extends l.PureComponent{render(){return l.createElement(A(),{...this.props,legacyBehavior:!1})}}},29897:function(e,t,n){"use strict";n.d(t,{T:function(){return s}});var i=n(15658),r=n(69821);class s extends r.PS{draw(){let{context:e}=this,{width:t,height:n}=this.canvas,i=n/600,r=5e-4*i,s=5e-4*i,o=2*Math.PI;for(let i of(e.clearRect(0,0,t,n),this.bubbles))i.alpha<=0&&this.initBubble(i,t,n),i.y-=i.velocity,i.alpha-=r,i.scale+=s,e.beginPath(),e.arc(i.x,i.y,10*i.scale,0,o,!1),e.fillStyle="rgba(255,255,255,"+i.alpha+")",e.fill()}createRandomBubbles(e){let{width:t,height:n}=this.canvas;return(0,i.w6)(e).map(()=>({x:Math.random()*t,y:n*(1-.4*Math.random()),alpha:.2*Math.random(),scale:.2*Math.random(),velocity:(0,i.MX)(.5,2)}))}initBubble(e,t,n){e.x=Math.random()*t,e.y=n+(0,i.MX)(-80,20),e.alpha=.3+.3*Math.random(),e.scale=.1+.3*Math.random(),e.velocity=(0,i.MX)(.5,2)}constructor(e,t={}){super(e);let{width:n,style:i}=this.canvas;i.zIndex="-1",this.bubbles=this.createRandomBubbles(Math.ceil(.6*n*Math.max(1,n/1366)))}}t.Z=s},69821:function(e,t,n){"use strict";n.d(t,{PS:function(){return o},Cn:function(){return b}});let i=null!==(a=null!=globalThis?globalThis:window)&&void 0!==a?a:{},r=null!==(h=null!==(d=null!==(u=null!==(c=null!==(l=i.requestAnimationFrame)&&void 0!==l?l:i.webkitRequestAnimationFrame)&&void 0!==c?c:i.mozRequestAnimationFrame)&&void 0!==u?u:i.msRequestAnimationFrame)&&void 0!==d?d:i.oRequestAnimationFrame)&&void 0!==h?h:function(e){return window.setTimeout(e,1e3/60)};null!==(v=null!==(g=null!==(p=null!==(A=null!==(m=i.cancelAnimationFrame)&&void 0!==m?m:i.webkitCancelAnimationFrame)&&void 0!==A?A:i.mozCancelAnimationFrame)&&void 0!==p?p:i.msCancelAnimationFrame)&&void 0!==g?g:i.oCancelAnimationFrame)&&void 0!==v||i.clearTimeout;let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"static"===getComputedStyle(e).position&&(e.style.position="relative");let n=document.createElement("canvas");return n.width=e.clientWidth,n.height=e.clientHeight,Object.assign(n.style,{display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden","pointer-events":"none",opacity:.5,...t}),e.prepend(n),n};class o{start(){this.running||(this.running=!0,this._requestFrame(this._drawAnimation))}stop(){this.running=!1}destroy(){var e;null!=this.timer&&cancelAnimationFrame(this.timer),window.removeEventListener("resize",this._onresize),null===(e=this.canvas.parentNode)||void 0===e||e.removeChild(this.canvas)}_requestFrame(e){this.running&&(this.timer=r(e))}constructor(e){this.toggleVisibility=e=>{e?(this.canvas.style.display="block",this.canvas.style.visibility="visible",this.start()):(this.canvas.style.display="none",this.canvas.style.visibility="hidden",this.stop())},this._drawAnimation=()=>{this.draw(),this._requestFrame(this._drawAnimation)},this._onresize=()=>{let{canvas:e,container:t}=this;e.width=t.clientWidth,e.height=t.clientHeight},this.container=e,this.canvas=s(e),this.context=this.canvas.getContext("2d"),this.running=!1,this.timer=null,window.addEventListener("resize",this._onresize)}}var a,l,c,u,d,h,m,A,p,g,v,f=n(55402),x=n(67294);function b(e,t,n){let i=!(arguments.length>3)||void 0===arguments[3]||arguments[3],[r,s]=x.useState(null);(0,f.KW)(()=>{if(null==e||null==e.current)return;let i=new t(e.current,n);return s(i),i.start(),()=>void i.destroy()},[e,n,t]),x.useEffect(()=>{null!=r&&r.toggleVisibility(i)},[r,i])}},36435:function(e,t,n){"use strict";n.d(t,{DV:function(){return u},TS:function(){return A},Tl:function(){return f}});var i=n(85893),r=n(18872),s=n(36674),o=n(24729),a=n(15658),l=n(49894),c=n(67294);let u=e=>{let t=(0,s.mY)(e=>e.author$);return(0,i.jsx)(l.Z,{className:(0,r.cx)(d.container,e.className),url:t.about,title:"about",onClick:a.UW,children:(0,i.jsx)(o.Ee,{alt:"avatar",src:t.avatar})})},d={container:(0,r.iv)({display:"inline-block",boxSizing:"border-box",transition:"all 0.3s",padding:0,borderRadius:"50%",margin:0,overflow:"hidden",background:"#88acdb",textAlign:"center",userSelect:"none","&&:hover":{transform:"scale(1.1) rotate(360deg)"},"&>img":{boxSizing:"border-box",display:"inline-block",width:"100%",height:"100%"}})};var h=n(45697),m=n.n(h);let A=e=>{let t=(0,s.mY)(e=>e.title$),n=(0,s.mY)(e=>e.description$),r=(0,s.mY)(e=>e.author$),{description:a=n,title:l}=e;return(0,i.jsxs)(o.ql,{children:[(0,i.jsxs)("title",{children:[l," | ",t]}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport"),(0,i.jsx)("meta",{name:"author",content:r.name},"author"),(0,i.jsx)("meta",{name:"description",content:a},"description"),(0,i.jsx)("meta",{property:"og:title",content:l},"og:title"),(0,i.jsx)("meta",{property:"og:description",content:a},"og:description"),(0,i.jsx)("meta",{property:"og:type",content:"website"},"og:type")]})};A.propTypes={title:m().string.isRequired,description:m().string};var p=n(94101),g=n(14651),v=n(24366);let f=e=>{let t=(0,s.O5)(),n=(0,s.mY)(e=>e.theme$),o=n===p.Q2.darken,a=c.useCallback(e=>{e.stopPropagation(),t({type:s.Jx.TOGGLE_THEME,payload:o?p.Q2.light:p.Q2.darken})},[t,o]),l=o?v.Z:g.Z;return(0,i.jsx)("div",{className:(0,r.cx)(x.container,e.className),children:(0,i.jsx)(l,{className:x.icon,onClick:a})})};f.propTypes={className:m().string};let x={container:(0,r.iv)({cursor:"pointer"}),icon:(0,r.iv)({height:24,width:24,color:"hsl(55deg, 40%, 60%)"})}},49894:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(85893),r=n(67294),s=n(18872),o=n(56517);let a={link:(0,s.iv)({padding:"0.2rem 0",color:o.TV.colorLink,textDecoration:"none",background:"linear-gradient(90deg, hsla(358deg, 100%, 62%, 0.8), hsla(048deg, 100%, 50%, 0.8), hsla(196deg, 100%, 53%, 0.8))",backgroundSize:"0 3px",backgroundRepeat:"no-repeat",backgroundPosition:"50% 100%",transition:"all 0.3s ease-in-out","&:visited":{color:o.TV.colorLink},"&&:hover":{color:o.TV.colorLinkHover,backgroundSize:"100% 3px",backgroundPositionX:0}})};class l extends r.PureComponent{render(){let{children:e,className:t,url:n,rel:r="noopener,noreferrer",target:o="_blank",title:l,...c}=this.props;return(0,i.jsx)("a",{...c,className:(0,s.cx)(a.link,t),href:n,title:l,target:o,rel:r,children:e})}}var c=n(24729);class u extends r.PureComponent{render(){let{children:e,className:t,url:n,title:r,...o}=this.props;return(0,i.jsx)(c.rU,{...o,className:(0,s.cx)(a.link,t),href:n,title:r,children:e})}}var d=n(45697),h=n.n(d);let m={url:h().string.isRequired,title:h().string,children:h().node,className:h().string,rel:h().string,style:h().object,target:h().string};class A extends r.PureComponent{render(){let{url:e,title:t,children:n}=this.props;return/^#/.test(e)?(0,i.jsx)("a",{title:t,href:e,children:n}):/^(\w+:[/]{2})/.test(e)?r.createElement(l,this.props):r.createElement(u,this.props)}}A.propTypes=m;var p=A},57272:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var i=n(85893),r=n(94101),s=n(24729),o=n(15658),a=n(29897),l=n(69821),c=n(36435),u=n(2944),d=n(67294),h={src:"/_next/static/media/404.b5a1baa3.jpg",height:909,width:600,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAwADAAAAAAAAAAAAAAAAAgEDERIhsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AsFS8bLemyW3WnwABX//Z",blurWidth:5,blurHeight:8};let m={};var A=()=>{let e=d.useRef(null);return(0,l.Cn)(e,a.Z,m),(0,i.jsxs)("div",{ref:e,className:p.container,children:[(0,i.jsx)(c.TS,{title:"Page Not Found (404)"}),(0,i.jsxs)("div",{className:p.content,children:[(0,i.jsx)("div",{className:p.contentBanner,children:(0,i.jsx)(s.Ee,{src:h,alt:"404.jpg",layout:"fill",objectFit:"contain"})}),(0,i.jsx)("div",{className:p.message,children:(0,i.jsxs)("header",{className:p.header,children:[(0,i.jsx)("h1",{children:"404 Not Found"}),(0,i.jsxs)(s.rU,{href:"/",children:["Back to Home...",(0,i.jsx)(u.Z,{})]})]})})]})]})};let p=(0,o.ZC)({container:{"--bannerImageRatio":"calc(600 / 909)",position:"relative",width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center","::before":{content:'""',zIndex:-1,position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(200deg, hsl(200deg, 70%, 78%), hsl(30deg, 70%, 78%))",filter:"saturate(90%) blur(0px) brightness(85%) contrast(150%)",opacity:.5}},content:{display:"flex",flexDirection:"row",justifyContent:"stretch",width:"100vw",height:"100vh",["@media screen and ".concat(r.u3.smMinus)]:{flexDirection:"column"}},contentBanner:{position:"relative",flex:"0 1 auto",width:"calc(100vh * var(--bannerImageRatio))",height:"100vh",opacity:.5,["@media screen and ".concat(r.u3.smMinus)]:{width:"100vmin",height:0,paddingTop:"calc(100% / var(--bannerImageRatio))"}},message:{flex:"1 1 0",position:"relative",display:"flex",alignItems:"center",justifyContent:"center","::before":{content:'""',position:"absolute",zIndex:-1,top:0,left:0,height:"100%",width:"100%",background:"#ffffff",opacity:.5}},header:{h1:{margin:"0 0 1rem",lineHeight:1,fontSize:"32px",color:"#808080",["@media screen and ".concat(r.u3.smMinus)]:{margin:"0 0 0.5rem",fontSize:"32px"}},a:{display:"inline-flex",alignItems:"center",color:"#999",userSelect:"none"}}})},74243:function(e,t,n){var i={"./component/container":[28195,195],"./component/container.tsx":[28195,195],"./component/editor":[70102,102],"./component/editor.tsx":[70102,102],"./component/previewer":[36040,40],"./component/previewer.tsx":[36040,40],"./post/algorithm/dlx/sudoku-solver":[15051,51],"./post/algorithm/dlx/sudoku-solver.tsx":[15051,51],"./post/game/sudoku":[71247,596,724,997,564,747,185,247],"./post/game/sudoku.tsx":[71247,596,724,997,564,747,185,247],"./util/sudoku":[34388,388],"./util/sudoku.ts":[34388,388]};function r(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(r)})}r.keys=function(){return Object.keys(i)},r.id=74243,e.exports=r}},function(e){e.O(0,[826,774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);