(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{51195:function(e,t,r){Promise.resolve().then(r.bind(r,63683))},77205:function(e,t,r){"use strict";r.d(t,{_j:function(){return _},Jx:function(){return i},xo:function(){return l}});let n="2023-06-11";(i||(i={})).TOGGLE_THEME="toggle-theme";var i,o=r(64090);let a=o.createContext(null);a.displayName="SiteContextType";let l=()=>o.useContext(a);var s=r(43930),c=r(43233),h=r(85800),u=r(89539),d=r.n(u);function g(){return window.screen.width}function m(e){return e<h.eq.xs?"xs":e<h.eq.sm?"sm":e<h.eq.md?"md":e<h.eq.lg?"lg":e<h.eq.xl?"xl":"xlPlus"}class p{get level(){return this._level}get name(){return this._name}setLevel(e){null!=e&&(this._levle=e)}write(e){console.log(e)}debug(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.debug(this.format(e,r))}verbose(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.log(this.format(e,r))}info(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.info(this.format(e,r))}warn(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.warn(this.format(e,r))}error(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.error(this.format(e,r))}fatal(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.error(this.format(e,r))}format(e,t){let r=(0,s.A3)(this._level),n=d()().format("YYYY-MM-DD HH:mm:ss"),i="["+this.name+"]",o="string"==typeof e?e:"",a=[];if("string"!=typeof e){let t=this.formatData(e);a.push(t)}for(let e of t){let t=this.formatData(e);a.push(t)}let l=0,c=a.length>0?o.replace(this._placeholderRegex,e=>{let t=a[l];return l+=1,void 0===t?e:t}):o;for(let e=l;e<a.length;++e)c+=" "+a[e];return n+" "+r+" "+i+" "+c}formatData(e){var t,r;let n=this._inline,i="function"==typeof e?e():"function"==typeof(null==e?void 0:e.toJSON)?e.toJSON():e;if(null===i)return"null";if(void 0===i)return"undefined";switch(typeof i){case"string":return n?i.replace(/\s*\n\s*/g," "):i;case"boolean":return i?"true":"false";case"number":return String(i)}return i instanceof Error?null!==(r=null!==(t=i.stack)&&void 0!==t?t:i.message)&&void 0!==r?r:i.name:n?JSON.stringify(i,null,0):JSON.stringify(i,null,2)}constructor(e){let{level:t,name:r,inline:n=!0,placeholderRegex:i=RegExp("(?<!\\\\)\\{\\}","g")}=e;this._level=t,this._name=r,this._inline=n,this._placeholderRegex=i}}let f=new p({name:"waw",level:c.H.ERROR}),v={author:{name:"guanghechen",motto:"有花满渚、有酒盈瓯",avatar:"",github:"https://github.com/guanghechen",rss:"/rss.xml",about:"/about"},copyright:{date:"2017-".concat(new Date().getFullYear())},description:"guanghechen's personal site",reporter:f,screenWidth:g(),screenBreakpoint:m(g()),siteUrl:"https://guanghechen.github.io",theme:h.Q2.light,title:"guanghechen"};var b=r(96827);class w{constructor(e){this.toggleTheme=e=>{this.viewmodel.theme$.next(e)},this.viewmodel=e.viewmodel}}class x extends b.jz{constructor(e){super(),this.getSnapshot=()=>({author:{...this.author$.getSnapshot()},copyright:{...this.copyright$.getSnapshot()},description:this.description$.getSnapshot(),reporter:this.reporter$.getSnapshot(),screenWidth:this.screenWidth$.getSnapshot(),screenBreakpoint:this.screenBreakpoint$.getSnapshot(),siteUrl:this.siteUrl$.getSnapshot(),theme:this.theme$.getSnapshot(),title:this.title$.getSnapshot()}),this.dispatch=e=>{let t=y[e.type];t?t(this._controller,e):console.error(this.constructor.name,"Unhandled action:",e)};let{author:t,copyright:r,description:n,reporter:i,siteUrl:o,title:a,theme:l}=e;this.author$=new b.ZM({...t}),this.copyright$=new b.ZM({...r}),this.description$=new b.ZM(n),this.reporter$=new b.ZM(i),this.screenWidth$=new b.ZM(g()),this.siteUrl$=new b.ZM(o),this.theme$=new b.ZM(l),this.title$=new b.ZM(a),this.screenBreakpoint$=b.D0.fromObservables([this.screenWidth$],e=>{let[t]=e;return m(t)});let s=new w({viewmodel:this});this._controller=s}}let y={[i.TOGGLE_THEME]:(e,t)=>{let r=t.payload;e.toggleTheme(r)}};var S=r(94026),$=r(40308),k=r(51326),M=r(26813);let _=(0,h.Um)({displayName:"PersistentSiteContextProvider",version:n,disposeWhenUnmounted:!0,Provider:a.Provider,Persistent:e=>{let{viewmodel:t,storage:r,storageKey:i}=e,a=(0,M.sD)(t,["theme$"]),l=o.useMemo(()=>(0,$.P2)(()=>{let e={theme:t.theme$.getSnapshot()};return t.reporter$.getSnapshot().debug("saving {}. data:",i,e),r.save({version:n,data:e})},100),[t,r,i]);return o.useEffect(()=>void l(),[l,a]),(0,k.i7)(l,!1),(0,S.tZ)(o.Fragment,{})},SideEffect:e=>{let{viewmodel:t}=e;return o.useEffect(()=>{let e=()=>{let e=g();t.screenWidth$.next(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[t]),(0,S.tZ)(o.Fragment,{})},ViewModel:x,initContextState:function(e){var t,r,n,i,o,a,l;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,{author:c,copyright:h,title:u,description:d,siteUrl:p,theme:f,reporter:b}=null!=e?e:{};return{author:{name:null!==(t=null==c?void 0:c.name)&&void 0!==t?t:s.author.name,motto:null!==(r=null==c?void 0:c.motto)&&void 0!==r?r:s.author.motto,avatar:null!==(n=null==c?void 0:c.avatar)&&void 0!==n?n:s.author.avatar,github:null!==(i=null==c?void 0:c.github)&&void 0!==i?i:s.author.github,rss:null!==(o=null==c?void 0:c.rss)&&void 0!==o?o:s.author.rss,about:null!==(a=null==c?void 0:c.about)&&void 0!==a?a:s.author.about},copyright:{date:null!==(l=null==h?void 0:h.date)&&void 0!==l?l:s.copyright.date},description:null!=d?d:s.description,reporter:null!=b?b:s.reporter,screenWidth:g(),screenBreakpoint:m(g()),siteUrl:null!=p?p:s.siteUrl,theme:null!=f?f:s.theme,title:null!=u?u:s.title}}})},63683:function(e,t,r){"use strict";r.r(t),r.d(t,{AboutPageView:function(){return c}});var n=r(94026),i=r(40663),o=r(26813),a=r(64090),l=r(85800),s=r(77205);let c=()=>{let e=(0,s.xo)(),t=(0,o.vc)(e.author$);return(0,n.tZ)("div",{className:u.container,children:(0,n.BX)("div",{className:u.main,children:[(0,n.BX)("header",{className:u.header,children:[(0,n.tZ)("span",{className:u.avatar,children:(0,n.tZ)(l.Ee,{alt:"avatar",src:t.avatar})}),(0,n.tZ)("h1",{className:u.author,children:t.name}),(0,n.tZ)("p",{className:u.motto,children:t.motto})]}),(0,n.tZ)("div",{className:u.nav,children:h.map((e,t)=>(0,n.BX)(a.Fragment,{children:[t>0&&(0,n.tZ)("span",{className:u.tileSplit}),(0,n.tZ)(l.rU,{className:u.tile,url:e.url,children:(0,n.tZ)("span",{children:e.title})})]},e.url))})]})})};c.displayName="AboutPageView";let h=[{title:"post",url:"/posts/1"},{title:"essay",url:"/essays/1"},{title:"game",url:"/game"}],u={container:(0,i.iv)({position:"relative",display:"block",minHeight:"100vh",backgroundColor:"#f6f6f6",backgroundImage:"url(".concat("/_next/static/media/wallpaper.9869248f.jpg",")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",["@media screen and ".concat(l.u3.smMinus)]:{backgroundImage:"url(".concat("/_next/static/media/wallpaper-mobile.29c8110f.jpg",")")}}),main:(0,i.iv)({position:"relative",display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100vh",margin:"0 auto",color:"#f2f2f2",backgroundImage:"linear-gradient(90deg, rgba(246, 148, 49, 0.05) 0, rgba(243, 110, 83, 0.05) 15%, rgba(239, 78, 123, 0.05) 30%, rgba(162, 104, 172, 0.05) 44%, rgba(81, 115, 184, 0.05) 58%, rgba(16, 152, 173, 0.05) 72%, rgba(7, 176, 154, 0.05) 86%, rgba(109, 186, 130, 0.05) 100%)","::before":{content:'""',zIndex:-1,position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",opacity:.2}}),header:(0,i.iv)({flex:"0 0 auto",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"15vh"}),avatar:(0,i.iv)({display:"inline-block",transition:"all 0.3s",border:"3px solid #dee5e9",borderColor:"#e0dde7 #dedde6 #e4dbe2 #e3dbe2",height:"128px",width:"128px",borderRadius:"50%",margin:"-64px auto 0",background:"#88acdb",textAlign:"center",overflow:"hidden",userSelect:"none","&&:hover":{transform:"scale(1.1) rotate(355deg)"},"> img":{display:"inline-block",width:"100%",height:"100%"}}),author:(0,i.iv)({margin:"1rem 0 1rem",color:"#fafafa",fontWeight:400,fontSize:"2rem",["@media screen and ".concat(l.u3.smMinus)]:{color:"#CBCBCB"}}),motto:(0,i.iv)({overflow:"hidden",textOverflow:"ellipsis",lineHeight:1,fontSize:"1rem",color:"#e0e0e0",margin:"0 0 1.8rem",["@media screen and ".concat(l.u3.smMinus)]:{color:"#AFAFAF"}}),nav:(0,i.iv)({display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"1rem 0",userSelect:"none",fontSize:"22px",fontFamily:"Comic Sans MS, lucida grande, lucida sans unicode, lucida, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei, WenQuanYi Micro Hei, sans-serif"}),tile:(0,i.iv)({display:"inline-flex",flexDirection:"column",alignItems:"center",borderRadius:"4px",textDecoration:"none",outline:"none","> span":{color:"#f0f0f0"},"&&:hover > span":{color:"#ccc"},"&:active > span":{color:"#f2f2f2"}}),tileSplit:(0,i.iv)({margin:"0 0.5rem",color:"#e6e6e6","&::before":{content:"'/'"},["@media screen and ".concat(l.u3.smMinus)]:{color:"#C5C5C5"}})}}}]);