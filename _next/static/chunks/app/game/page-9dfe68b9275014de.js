(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{65800:function(e,t,r){Promise.resolve().then(r.bind(r,7245))},77205:function(e,t,r){"use strict";r.d(t,{_j:function(){return Q},Jx:function(){return o},xo:function(){return l}});let A="2023-06-11";(o||(o={})).TOGGLE_THEME="toggle-theme";var o,n=r(2265);let i=n.createContext(null);i.displayName="SiteContextType";let l=()=>n.useContext(i);var s=r(43930),a=r(43233),h=r(85800),c=r(89539),u=r.n(c);function d(){return window.screen.width}function g(e){return e<h.eq.xs?"xs":e<h.eq.sm?"sm":e<h.eq.md?"md":e<h.eq.lg?"lg":e<h.eq.xl?"xl":"xlPlus"}class v{get level(){return this._level}get name(){return this._name}setLevel(e){null!=e&&(this._levle=e)}write(e){console.log(e)}debug(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];console.debug(this.format(e,r))}verbose(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];console.log(this.format(e,r))}info(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];console.info(this.format(e,r))}warn(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];console.warn(this.format(e,r))}error(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];console.error(this.format(e,r))}fatal(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];console.error(this.format(e,r))}format(e,t){let r=(0,s.A3)(this._level),A=u()().format("YYYY-MM-DD HH:mm:ss"),o="["+this.name+"]",n="string"==typeof e?e:"",i=[];if("string"!=typeof e){let t=this.formatData(e);i.push(t)}for(let e of t){let t=this.formatData(e);i.push(t)}let l=0,a=i.length>0?n.replace(this._placeholderRegex,e=>{let t=i[l];return l+=1,void 0===t?e:t}):n;for(let e=l;e<i.length;++e)a+=" "+i[e];return A+" "+r+" "+o+" "+a}formatData(e){var t,r;let A=this._inline,o="function"==typeof e?e():"function"==typeof(null==e?void 0:e.toJSON)?e.toJSON():e;if(null===o)return"null";if(void 0===o)return"undefined";switch(typeof o){case"string":return A?o.replace(/\s*\n\s*/g," "):o;case"boolean":return o?"true":"false";case"number":return String(o)}return o instanceof Error?null!==(r=null!==(t=o.stack)&&void 0!==t?t:o.message)&&void 0!==r?r:o.name:A?JSON.stringify(o,null,0):JSON.stringify(o,null,2)}constructor(e){let{level:t,name:r,inline:A=!0,placeholderRegex:o=RegExp("(?<!\\\\)\\{\\}","g")}=e;this._level=t,this._name=r,this._inline=A,this._placeholderRegex=o}}let m=new v({name:"waw",level:a.H.ERROR}),p={author:{name:"guanghechen",motto:"有花满渚、有酒盈瓯",avatar:"",github:"https://github.com/guanghechen",rss:"/rss.xml",about:"/about"},copyright:{date:"2017-".concat(new Date().getFullYear())},description:"guanghechen's personal site",reporter:m,screenWidth:d(),screenBreakpoint:g(d()),siteUrl:"https://guanghechen.github.io",theme:h.Q2.light,title:"guanghechen"};var f=r(26813);class E{constructor(e){this.toggleTheme=e=>{this.viewmodel.theme$.next(e)},this.viewmodel=e.viewmodel}}class x extends f.jz{constructor(e){super(),this.getSnapshot=()=>({author:{...this.author$.getSnapshot()},copyright:{...this.copyright$.getSnapshot()},description:this.description$.getSnapshot(),reporter:this.reporter$.getSnapshot(),screenWidth:this.screenWidth$.getSnapshot(),screenBreakpoint:this.screenBreakpoint$.getSnapshot(),siteUrl:this.siteUrl$.getSnapshot(),theme:this.theme$.getSnapshot(),title:this.title$.getSnapshot()}),this.dispatch=e=>{let t=B[e.type];t?t(this._controller,e):console.error(this.constructor.name,"Unhandled action:",e)};let{author:t,copyright:r,description:A,reporter:o,siteUrl:n,title:i,theme:l}=e;this.author$=new f.ZM({...t}),this.copyright$=new f.ZM({...r}),this.description$=new f.ZM(A),this.reporter$=new f.ZM(o),this.screenWidth$=new f.ZM(d()),this.siteUrl$=new f.ZM(n),this.theme$=new f.ZM(l),this.title$=new f.ZM(i),this.screenBreakpoint$=f.D0.fromObservables([this.screenWidth$],e=>{let[t]=e;return g(t)});let s=new E({viewmodel:this});this._controller=s}}let B={[o.TOGGLE_THEME]:(e,t)=>{let r=t.payload;e.toggleTheme(r)}};var w=r(94026),b=r(40308),y=r(51326);let Q=(0,h.Um)({displayName:"PersistentSiteContextProvider",version:A,disposeWhenUnmounted:!0,Provider:i.Provider,Persistent:e=>{let{viewmodel:t,storage:r,storageKey:o}=e,i=(0,f.sD)(t,["theme$"]),l=n.useMemo(()=>(0,b.P2)(()=>{let e={theme:t.theme$.getSnapshot()};return t.reporter$.getSnapshot().debug("saving {}. data:",o,e),r.save({version:A,data:e})},100),[t,r,o]);return n.useEffect(()=>void l(),[l,i]),(0,y.i7)(l,!1),(0,w.tZ)(n.Fragment,{})},SideEffect:e=>{let{viewmodel:t}=e;return n.useEffect(()=>{let e=()=>{let e=d();t.screenWidth$.next(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[t]),(0,w.tZ)(n.Fragment,{})},ViewModel:x,initContextState:function(e){var t,r,A,o,n,i,l;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,{author:a,copyright:h,title:c,description:u,siteUrl:v,theme:m,reporter:f}=null!=e?e:{};return{author:{name:null!==(t=null==a?void 0:a.name)&&void 0!==t?t:s.author.name,motto:null!==(r=null==a?void 0:a.motto)&&void 0!==r?r:s.author.motto,avatar:null!==(A=null==a?void 0:a.avatar)&&void 0!==A?A:s.author.avatar,github:null!==(o=null==a?void 0:a.github)&&void 0!==o?o:s.author.github,rss:null!==(n=null==a?void 0:a.rss)&&void 0!==n?n:s.author.rss,about:null!==(i=null==a?void 0:a.about)&&void 0!==i?i:s.author.about},copyright:{date:null!==(l=null==h?void 0:h.date)&&void 0!==l?l:s.copyright.date},description:null!=u?u:s.description,reporter:null!=f?f:s.reporter,screenWidth:d(),screenBreakpoint:g(d()),siteUrl:null!=v?v:s.siteUrl,theme:null!=m?m:s.theme,title:null!=c?c:s.title}}})},7245:function(e,t,r){"use strict";r.r(t),r.d(t,{GamePageView:function(){return a}});var A=r(94026),o=r(40663),n=r(26813);r(2265);var i=r(70710),l=r(85800),s=r(77205);let a=()=>{let e=(0,s.xo)(),t=(0,n.vc)(e.theme$);return(0,A.tZ)("div",{className:c.container,"data-theme":t,children:(0,A.tZ)("div",{className:c.cards,children:h.map((e,t)=>(0,A.tZ)(l.rU,{className:c.cardWrapper,url:e.url,children:(0,A.BX)("span",{className:c.card,children:[(0,A.tZ)("span",{className:c.cardContent,children:e.cover&&(0,A.tZ)(l.Ee,{alt:e.title,src:e.cover})}),(0,A.tZ)("span",{className:c.cardTitle,children:e.title})]})},t))})})};a.displayName="GamePageView";let h=[{title:"gomoku",url:"/game/gomoku"},{title:"sudoku",url:"/game/sudoku",cover:i.Z}],c={container:(0,o.iv)({flex:"1 1 auto",display:"flex",alignItems:"center",justifyContent:"center",height:"100%","--colorLink":"#4D7FB3","--colorLinkActive":"#4799EB","--colorLinkHover":"#85B2E0","--colorLinkVisited":"#4D7FB3",['&[data-theme="'.concat(l.Q2.darken,'"]')]:{"--colorLink":"#4D77A6","--colorLinkActive":"#4799EB","--colorLinkHover":"#85B2E0","--colorLinkVisited":"#4D77A6"}}),cards:(0,o.iv)({display:"flex",flexWrap:"wrap",alignItems:"flex-start",maxWidth:"80%"}),cardWrapper:(0,o.iv)({display:"block",boxSizing:"border-box",textDecoration:"none",color:"var(--colorLink)","&:hover":{color:"var(--colorLinkHover)"},"&:active":{color:"var(--colorLinkActive)"}}),card:(0,o.iv)({display:"flex",flexDirection:"column",boxSizing:"border-box",height:"160px",width:"120px",border:"1px solid #ccc",borderRadius:"4px",margin:"1rem",caretColor:"transparent"}),cardTitle:(0,o.iv)({flex:"0 0 auto",display:"flex",alignItems:"center",justifyContent:"center",height:"2rem",outline:"none",textTransform:"capitalize",selectors:{"&&:hover":{color:"hsl(0deg, 0%, 80%)"},"&:active":{color:"hsl(0deg, 0%, 95%)"}}}),cardContent:(0,o.iv)({flex:"1 1 auto","> img":{width:"100%",height:"100%"}})}},70710:function(e,t){"use strict";t.Z={src:"/_next/static/media/sudoku-cover.b1f07140.jpg",height:1024,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGyA//EABYQAAMAAAAAAAAAAAAAAAAAAAABAv/aAAgBAQABBQJ2f//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQEBAQAAAAAAAAAAAAAAABEBAGH/2gAIAQEAAT8hOUr13//aAAwDAQACAAMAAAAQC//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/EFv/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxAL/8QAGRABAAIDAAAAAAAAAAAAAAAAARGhACEx/9oACAEBAAE/EEhBZlbKvKrP/9k=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[74,32,800,971,69,744],function(){return e(e.s=65800)}),_N_E=e.O()}]);