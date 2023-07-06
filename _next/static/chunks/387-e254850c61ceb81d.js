"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{9171:function(e,t,n){n.d(t,{D:function(){return l}});var s=n(55402),a=n(95050),o=n(67294);let i=[["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"],["#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"]],r=()=>{let e=i.length;return i[Math.min(e-1,Math.floor(Math.random()*e))]},l=()=>{let e=o.useRef(!1),t=o.useRef(null);o.useEffect(()=>(t.current=new a.Z,()=>{t.current=null}),[]);let n=(0,s.$0)(async()=>{if(null==t.current)return;let n=t.current,s=r(),a=window.screen.width<=900;e.current=!0;try{await n.addConfetti({confettiColors:s,confettiRadius:a?4:8,confettiNumber:a?100:300})}finally{e.current=!1}});return n}},34781:function(e,t,n){n.d(t,{p:function(){return r},X:function(){return a}}),(s=a||(a={}))[s.PENDING=1]="PENDING",s[s.RUNNING=2]="RUNNING",s[s.PAUSED=4]="PAUSED",s[s.END=8]="END";var s,a,o=n(76955),i=n(15658);class r extends o.jz{constructor(e){super();let t=new o.ZM(e.status),n=new o.ZM(e.elapsedTime),s=Date.now(),r=(e,t)=>{let o=Date.now();if(t===a.RUNNING){let e=o-s;n.setState(t=>t+e)}else e===a.PENDING&&n.setState(0);s=o};t.subscribe({next:(e,t)=>r(e,t),complete:()=>{}});let l=(0,i.iP)(()=>{let e=t.getSnapshot();r(e,e)});this.status$=t,this.elapsedTime$=n,this._disposables.push(new o.JT(l))}}},31387:function(e,t,n){n.d(t,{vk:function(){return U},oh:function(){return i},tR:function(){return eG},aK:function(){return eH},ZP:function(){return eB},vD:function(){return g},eK:function(){return k}});var s,a,o,i,r=n(85893),l=n(45697),u=n.n(l),c=n(67294),d=n(60459),h=n(55402),p=n(59976),f=n(15658),m=n(45684),x=n(13339);let b="2023-06-06";(s=o||(o={})).ERASE="ERASE",s.HINT="HINT",s.WRITE="WRITE",(a=i||(i={})).RESTART="RESTART",a.RESET="RESET",a.START="START",a.PAUSE="PAUSE",a.RESUME="RESUME",a.ACTIVE="ACTIVE",a.HINT="HINT",a.TOGGLE_CHEAT_VISIBILITY="TOGGLE_CHEAT_VISIBILITY",a.INPUT="INPUT";let S=c.createContext(null);S.displayName="SudokuContextType";let g=()=>{let e=c.useContext(S);return e.dispatch},k=e=>{let t=c.useContext(S),n=e(t);return(0,p.vc)(n)};var v=n(43118),_=n(34781);let y={},$={},T=e=>{let t=$[e];return void 0===t&&(t=new v.$X(e),$[e]=t),t},N=e=>{let t=y[e];return void 0===t&&(t=new v.wY({childMatrixWidth:e}),y[e]=t),t};function C(e,t,n){let{BOARD:s}=e;for(let e=0;e<s;++e)if(t[e]!==n[e])return!1;return!0}function E(e,t){if(t<0)return{r:-1,c:-1};let{MATRIX:n}=e;return{r:Math.floor(t/n),c:t%n}}let I=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R,{SUDOKU_SIZE_SQRT:s=n.SUDOKU_SIZE_SQRT,difficulty:a=n.difficulty,score:i=n.score,radix:r=n.radix,activatedPos:l=null!==(t=n.activatedPos)&&void 0!==t?t:-1,gameTick:u=n.gameTick,puzzle:c=n.puzzle,solution:d=n.solution,instructions:h=n.instructions.slice(),elapsedTime:p=n.elapsedTime}=null!=e?e:{},{puzzle:f,solution:m}=null!=c&&null!=d?{puzzle:c,solution:d}:N(s).createSudoku(a/100),x=T(s),b=(0,v.s0)(x);(0,v._g)(f,b,x),function(e,t,n){for(let s of n)switch(s.type){case o.ERASE:{let{r:n,c:a}=s.payload,o=n*e.MATRIX+a;t[o]=-1;break}case o.WRITE:{let{r:n,c:a,v:o}=s.payload,i=n*e.MATRIX+a;t[i]=o}}}(x,b,h);let S=C(x,b,m)?_.X.END:p>0||!C(x,b,f)?_.X.PAUSED:_.X.PENDING;return{status:S,elapsedTime:p,SUDOKU_SIZE_SQRT:s,difficulty:a,radix:r,score:i,attempt:b,instructions:h,puzzle:f,solution:m,activatedPos:l,hintPos:-1,cheatVisible:!1,gameTick:u,attemptTick:0,hintTick:0}},R={status:_.X.PENDING,elapsedTime:0,SUDOKU_SIZE_SQRT:3,difficulty:20,radix:10,score:0,puzzle:null,solution:null,attempt:null,instructions:[],activatedPos:-1,hintPos:-1,cheatVisible:!1,gameTick:0,attemptTick:0,hintTick:0};var j=n(35369);let w=(e,t,n,s)=>{let{BOARD:a}=e;for(let e=0;e<a;++e)if(-1===t[e])return e;for(let e=0;e<a;++e)if(-1===n[e]&&t[e]!==s[e])return e;return -1};class D{constructor(e){var t=this;this.restart=()=>{let e=this.viewmodel,t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),n=e.difficulty$.getSnapshot(),s=N(t),{puzzle:a,solution:o}=s.createSudoku(n),i=(0,v.s0)(s.size);(0,v._g)(a,i,s.size),e.status$.next(_.X.PENDING),e.gameTick$.setState(e=>e+1),e.puzzle$.next(a),e.solution$.next(o),e.attempt$.next(i),e.instructions$.next(j.aV.of()),e.hintPos$.next(-1),e.hintTick$.next(0),e.attemptTick$.next(0)},this.reset=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.viewmodel,{difficulty:s=n.difficulty$.getSnapshot(),SUDOKU_SIZE_SQRT:a=n.SUDOKU_SIZE_SQRT$.getSnapshot(),radix:o=n.radix$.getSnapshot()}=e,i=N(a),{puzzle:r,solution:l}=i.createSudoku(s/100),u=(0,v.s0)(i.size);(0,v._g)(r,u,i.size),n.status$.next(_.X.PENDING),n.SUDOKU_SIZE_SQRT$.next(a),n.difficulty$.next(s),n.radix$.next(o),n.puzzle$.next(r),n.solution$.next(l),n.attempt$.next(u),n.instructions$.next(j.aV.of()),n.hintPos$.next(-1),n.cheatVisible$.next(!1),n.gameTick$.setState(e=>e+1),n.attemptTick$.next(0),n.hintTick$.next(0)},this.start=()=>{let e=this.viewmodel;e.status$.getSnapshot()===_.X.PENDING&&e.status$.next(_.X.RUNNING)},this.pause=()=>{let e=this.viewmodel;e.status$.getSnapshot()===_.X.RUNNING&&e.status$.next(_.X.PAUSED)},this.resume=()=>{let e=this.viewmodel;e.status$.getSnapshot()===_.X.PAUSED&&e.status$.next(_.X.RUNNING)},this._end=()=>{let e=this.viewmodel;if(e.status$.getSnapshot()===_.X.RUNNING){let t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),n=T(t),s=e.attempt$.getSnapshot(),a=e.solution$.getSnapshot();if(!C(n,s,a))return;let o=0,i=e.difficulty$.getSnapshot(),r=e.elapsedTime$.getSnapshot(),l=t**4*1e3;if(r<l){let e=t**4*i/100;o=(l-r)*e/1e3}let u=Math.max(5,Math.round(o));e.status$.next(_.X.END),e.score$.setState(e=>e+u)}},this.activePos=e=>{let{r:t,c:n}=e,s=this.viewmodel,a=T(s.SUDOKU_SIZE_SQRT$.getSnapshot()),o=t*a.MATRIX+n;s.activatedPos$.next(o)},this.hint=()=>{let e=this.viewmodel,t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),n=e.puzzle$.getSnapshot(),s=e.solution$.getSnapshot(),a=e.attempt$.getSnapshot(),i=e.activatedPos$.getSnapshot(),r=T(t),l=-1===i||-1!==n[i]?w(r,a,n,s):i,u=E(r,l);e.hintPos$.next(l),e.hintTick$.setState(e=>e+1),e.instructions$.setState(e=>e.push({type:o.HINT,payload:u,timestamp:new Date().toISOString()}))},this.toggleCheatVisibility=e=>{let t=this.viewmodel;t.cheatVisible$.setState(t=>null!=e?e:!t)},this.input=e=>{let t=this.viewmodel;if(t.status$.getSnapshot()!==_.X.RUNNING)return;let n=t.SUDOKU_SIZE_SQRT$.getSnapshot(),{size:s}=N(n);if(!Number.isInteger(e)||e<-1||e>=s.BOARD)return;let a=t.activatedPos$.getSnapshot();if(-1===a)return;let i=t.puzzle$.getSnapshot();if(-1!==i[a])return;let r=t.attempt$.getSnapshot();if(r[a]===e)return;let l=(0,v.s0)(s);(0,v._g)(r,l,s),l[a]=e;let{r:u,c}=E(s,a);t.attempt$.next(l),t.attemptTick$.setState(e=>e+1),t.hintPos$.setState(e=>a===e?-1:e),t.instructions$.setState(t=>t.push({type:o.WRITE,payload:{r:u,c,v:e},timestamp:new Date().toISOString()}))},this.viewmodel=e.viewmodel,this.viewmodel.attempt$.subscribeStateChange(()=>this._end())}}class Z extends _.p{_consume(e){let t=this._controller;switch(e.type){case i.RESTART:t.restart();break;case i.RESET:t.reset(e.payload);break;case i.START:t.start();break;case i.PAUSE:t.pause();break;case i.RESUME:t.resume();break;case i.ACTIVE:t.activePos(e.payload);break;case i.HINT:t.hint();break;case i.TOGGLE_CHEAT_VISIBILITY:t.toggleCheatVisibility(e.payload);break;case i.INPUT:t.input(e.payload);break;default:console.error(this.constructor.name,"Bad action:",e)}}constructor(e){super(e),this.getSnapshot=()=>({status:this.status$.getSnapshot(),elapsedTime:this.elapsedTime$.getSnapshot(),SUDOKU_SIZE_SQRT:this.SUDOKU_SIZE_SQRT$.getSnapshot(),difficulty:this.difficulty$.getSnapshot(),radix:this.radix$.getSnapshot(),score:this.score$.getSnapshot(),puzzle:this.puzzle$.getSnapshot(),solution:this.solution$.getSnapshot(),attempt:this.attempt$.getSnapshot(),instructions:Array.from(this.instructions$.getSnapshot()),activatedPos:this.activatedPos$.getSnapshot(),hintPos:this.hintPos$.getSnapshot(),cheatVisible:this.cheatVisible$.getSnapshot(),gameTick:this.gameTick$.getSnapshot(),attemptTick:this.attemptTick$.getSnapshot(),hintTick:this.hintTick$.getSnapshot()}),this.SUDOKU_SIZE_SQRT$=new p.ZM(e.SUDOKU_SIZE_SQRT),this.difficulty$=new p.ZM(e.difficulty),this.radix$=new p.ZM(e.radix),this.score$=new p.ZM(e.score),this.puzzle$=new p.ZM(e.puzzle),this.solution$=new p.ZM(e.solution),this.attempt$=new p.ZM(e.attempt),this.instructions$=new p.ZM(j.aV.of(...e.instructions)),this.activatedPos$=new p.ZM(e.activatedPos),this.hintPos$=new p.ZM(e.hintPos),this.cheatVisible$=new p.ZM(e.cheatVisible),this.gameTick$=new p.ZM(e.gameTick),this.attemptTick$=new p.ZM(e.attemptTick),this.hintTick$=new p.ZM(e.hintTick);let t=new D({viewmodel:this});this._controller=t}}let U=e=>{let{storageKey:t,LoadingComponent:n=m.gb}=e,[s,a]=c.useState(void 0),o=c.useMemo(()=>t?(0,x.Yu)(t):void 0,[t]),i=c.useRef(e.initialData);return(c.useEffect(()=>{e();async function e(){let e=await i.current;if(o){let t=await o.load();null==t||t.version!==b?a(new Z(I(e))):a(new Z(I({...t.data,...e})))}else a(new Z(I(e)))}},[o]),c.useEffect(()=>{if(s)return()=>{console.log("[waw] unmounting sudoku viewmodel."),s.dispose()}},[s]),s)?(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(S.Provider,{value:s,children:e.children}),o&&(0,r.jsx)(P,{viewmodel:s,storage:o,storageKey:t})]}):(0,r.jsx)(n,{})},P=e=>{let{viewmodel:t,storage:n,storageKey:s}=e,a=(0,p.sD)(t,["SUDOKU_SIZE_SQRT$","difficulty$","radix$","score$","puzzle$","solution$","instructions$","activatedPos$","gameTick$"]),o=c.useMemo(()=>(0,d.P2)(()=>{let e={elapsedTime:t.elapsedTime$.getSnapshot(),SUDOKU_SIZE_SQRT:t.SUDOKU_SIZE_SQRT$.getSnapshot(),difficulty:t.difficulty$.getSnapshot(),radix:t.radix$.getSnapshot(),score:t.score$.getSnapshot(),puzzle:t.puzzle$.getSnapshot(),solution:t.solution$.getSnapshot(),instructions:Array.from(t.instructions$.getSnapshot()),activatedPos:t.activatedPos$.getSnapshot(),gameTick:t.gameTick$.getSnapshot()};return f.kg.log("saving ".concat(s,". data:"),e),n.save({version:b,data:e})},200),[t,n,s]);return c.useEffect(()=>void o(),[o,a]),(0,h.i7)(()=>o.flushSync(),[],!1),(0,r.jsx)(c.Fragment,{})};var z=n(6260),A=n(72908),M=n(78262),X=n(9581),G=n(98271),O=n(31425),K=n(83321);let V=e=>{let{radix:t,container:n,initialValue:s,visible:a,label:o,onCancel:i,onConfirm:l}=e,[u,d]=c.useState(s);return c.useEffect(()=>d(s),[s,a]),(0,r.jsxs)(M.Z,{container:n,open:a,onClose:i,"aria-labelledby":"sudoku-input-dialog",children:[(0,r.jsx)(X.Z,{children:(0,r.jsx)(G.Z,{autoFocus:!0,margin:"dense",label:o,type:t<=10?"number":"input",fullWidth:!0,value:u,onChange:e=>d(e.target.value),onFocus:e=>e.target.select(),onKeyDown:e=>{"Enter"===e.key&&l(u)}})}),(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(K.Z,{color:"inherit",onClick:i,children:"Cancel"}),(0,r.jsx)(K.Z,{color:"primary",onClick:()=>l(u),children:"Confirm"})]})]})};var Q=n(18872),H=n(9171),B=n(41616),W=n(70655),L=n(1849);let F=c.memo(()=>{let e=g(),t=k(e=>e.status$),n=(0,H.D)(),s=(0,h.rc)(t);c.useEffect(()=>{s!==t&&t===_.X.END&&n()},[s,t,n]);let a=c.useMemo(()=>({start:()=>e({type:i.START}),resume:()=>e({type:i.RESUME}),restart:()=>e({type:i.RESTART})}),[e]);switch(t){case _.X.PENDING:return(0,r.jsx)("div",{className:Y.overlay,children:(0,r.jsx)(K.Z,{className:Y.button,variant:"contained",color:"primary",startIcon:(0,r.jsx)(W.Z,{}),onClick:a.start,children:"Start"})});case _.X.PAUSED:return(0,r.jsx)("div",{className:Y.overlay,children:(0,r.jsx)(K.Z,{className:Y.button,variant:"contained",color:"primary",startIcon:(0,r.jsx)(B.Z,{}),onClick:a.resume,children:"Resume"})});case _.X.END:return(0,r.jsx)("div",{className:Y.overlay,children:(0,r.jsxs)("div",{className:Y.finishedBanner,children:[(0,r.jsx)("p",{children:"You win \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89"}),(0,r.jsx)(K.Z,{className:Y.button,variant:"contained",color:"primary",startIcon:(0,r.jsx)(L.Z,{}),onClick:a.restart,children:"New"})]})});default:return null}}),Y={overlay:(0,Q.iv)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",userSelect:"none"}),confettiCanvas:(0,Q.iv)({position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"}),button:(0,Q.iv)({"&&, &&:hover":{boxShadow:"4px 4px 16px 0px hsl(0deg 0% 0% / 0.75)"}}),finishedBanner:(0,Q.iv)({position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",padding:0,margin:0,fontSize:32}),playerName:(0,Q.iv)({color:"#e200e2"})};var q=n(45018),J=n(55819),ee=n(45929);let et=()=>{let e=g(),t=k(e=>e.status$),n=k(e=>e.SUDOKU_SIZE_SQRT$),s=k(e=>e.difficulty$),a=k(e=>e.radix$),o=t===_.X.PENDING,l=c.useMemo(()=>({onSizeChange:t=>{e({type:i.RESET,payload:{SUDOKU_SIZE_SQRT:Number(t.target.value)}})},onRadixChange:t=>{e({type:i.RESET,payload:{radix:Number(t.target.value)}})},onDifficultyChange:(t,n)=>{e({type:i.RESET,payload:{difficulty:n}})}}),[e]);return(0,r.jsxs)("div",{className:en.settings,children:[(0,r.jsxs)("div",{className:en.item,children:[(0,r.jsx)("span",{children:"Size:"}),(0,r.jsxs)(q.Z,{variant:"standard",value:n,disabled:!o,onChange:l.onSizeChange,children:[(0,r.jsx)(J.Z,{value:2,children:"4x4"}),(0,r.jsx)(J.Z,{value:3,children:"9x9"}),(0,r.jsx)(J.Z,{value:4,children:"16x16"})]})]}),(0,r.jsxs)("div",{className:en.item,children:[(0,r.jsx)("span",{children:"Radix:"}),(0,r.jsxs)(q.Z,{variant:"standard",value:a,disabled:!o,onChange:l.onRadixChange,children:[(0,r.jsx)(J.Z,{value:10,children:"Decimal (x10)"}),(0,r.jsx)(J.Z,{value:16,children:"Hexadecimal (x16)"})]})]}),(0,r.jsxs)("div",{className:(0,Q.cx)(en.item,en.difficulty),children:[(0,r.jsx)("span",{children:"Difficulty:"}),(0,r.jsx)(ee.ZP,{value:s,disabled:!o,step:1,min:0,max:100,valueLabelDisplay:"auto","aria-labelledby":"sudoku-difficulty",onChange:l.onDifficultyChange})]})]})},en=(0,f.ZC)({settings:{display:"block",maxWidth:"min(90vw, 400px)",margin:"auto"},item:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",margin:"1rem 0","& > *":{marginRight:"1rem"}},difficulty:{flexWrap:"nowrap","& > span":{"&:first-child":{flex:"0 0 auto"}}}});var es=n(75303),ea=n(53247),eo=n(22961),ei=n(76997),er=n(93946),el=n(27484),eu=n.n(el),ec=n(1646),ed=n.n(ec),eh=n(65464);eu().extend(ed());let ep=c.memo(()=>{let e=k(e=>e.elapsedTime$),t=eu().duration(e).format("HH:mm:ss");return(0,r.jsxs)("div",{className:ef.elapsedTime,children:[(0,r.jsx)(ei.Z,{title:"Time used",children:(0,r.jsx)(eh.Z,{})}),"\xa0\xa0",(0,r.jsx)("span",{children:t})]},"elapsed-time")}),ef=(0,f.ZC)({elapsedTime:{flex:"0 1 auto",display:"flex",alignItems:"center",fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif",color:"#595959",userSelect:"none"}});eu().extend(ed());let em=e=>{let{containerRef:t}=e,n=g(),s=k(e=>e.status$),a=k(e=>e.score$),[o,l]=c.useState(!1),u=c.useMemo(()=>({showCheat:()=>{n({type:i.TOGGLE_CHEAT_VISIBILITY,payload:!0})},restartGame:()=>{l(!1),n({type:i.RESTART})},pauseGame:()=>{n({type:i.PAUSE})},hint:()=>{n({type:i.HINT})},closeRestartDialog:()=>{l(!1)}}),[n]);return(0,r.jsxs)("div",{className:ex.toolbar,children:[(0,r.jsxs)("div",{className:(0,Q.cx)(ex.item,ex.buttons),children:[(0,r.jsx)(K.Z,{variant:"contained",color:"inherit",startIcon:(0,r.jsx)(L.Z,{}),onClick:()=>s===_.X.PENDING||s===_.X.END?u.restartGame():l(!0),children:"New"}),(0,r.jsx)(K.Z,{variant:"contained",color:"inherit",disabled:s!==_.X.RUNNING,startIcon:(0,r.jsx)(es.Z,{}),onClick:u.hint,children:"HINT"}),(0,r.jsx)(K.Z,{variant:"contained",color:"secondary",disabled:s!==_.X.RUNNING,startIcon:(0,r.jsx)(eo.Z,{}),onClick:u.showCheat,children:"Cheat"})]}),(0,r.jsxs)("div",{className:(0,Q.cx)(ex.item,ex.state),children:[(0,r.jsx)("div",{className:ex.stateButtons,children:s===_.X.RUNNING&&(0,r.jsx)(ei.Z,{title:"Pause",children:(0,r.jsx)(er.Z,{color:"primary",onClick:u.pauseGame,children:(0,r.jsx)(ea.Z,{})})})},"state-buttons"),(0,r.jsx)(ep,{}),(0,r.jsxs)("div",{className:ex.score,children:["Score: ",a]},"score")]}),(0,r.jsxs)(M.Z,{container:t.current,open:o,onClose:u.closeRestartDialog,"aria-labelledby":"confirm-to-restart",children:[(0,r.jsx)(X.Z,{children:"Are you sure you want to start a new game?"}),(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(K.Z,{color:"inherit",onClick:u.closeRestartDialog,children:"Cancel"}),(0,r.jsx)(K.Z,{color:"primary",onClick:u.restartGame,children:"Confirm"})]})]})]})};em.propTypes={containerRef:u().any.isRequired};let ex=(0,f.ZC)({toolbar:{display:"block",maxWidth:"min(90vw, 400px)",margin:"auto"},item:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",margin:"1rem 0","> *":{marginRight:"1rem"}},buttons:{justifyContent:"space-around","> button":{margin:"0 4px"}},state:{justifyContent:"center",margin:"2rem 0 0",height:"48px"},stateButtons:{flex:"0 1 auto",display:"flex",alignItems:"center",justifyContent:"center",margin:"0",userSelect:"none"},score:{flex:"0 1 auto",color:"green",overflow:"hidden",textOverflow:"ellipsis",fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif"}});var eb=n(82729);let eS=e=>{let{SUDOKU_SIZE_SQRT:t}=e,n=t*t,s=[];for(let e=t,a=-1;e<n;e+=t,++a){let t="calc(".concat(e," * var(--sudoku__board-cell-size) + ").concat(e+a,"px)");s.push((0,r.jsx)("div",{className:(0,Q.cx)(ek.boarder,ek.horizontalBoarder),style:{top:t}},"h-".concat(e))),s.push((0,r.jsx)("div",{className:(0,Q.cx)(ek.boarder,ek.verticalBorder),style:{left:t}},"v-".concat(e)))}return(0,r.jsx)(c.Fragment,{children:s})},eg=c.memo(eS);eS.propTypes={SUDOKU_SIZE_SQRT:u().number.isRequired};let ek=(0,f.ZC)({boarder:{position:"absolute",boxSizing:"content-box",background:"var(--sudoku__board-border-thickness-color)"},horizontalBoarder:{left:"0",right:"0",bottom:"unset",width:"calc(100% + 2px)",height:"var(--sudoku__board-border-thickness)"},verticalBorder:{top:"0",bottom:"0",right:"unset",height:"calc(100% + 2px)",width:"var(--sudoku__board-border-thickness)"}});function ev(e,t){let{BOARD:n,MATRIX:s,BASE_1:a,BASE_3:o}=e,i=Array(n).fill(!1),r=Array(s).fill(0);for(let e=0;e<n;e+=s){r.fill(0);for(let n=e,a=e+s;n<a;++n){let e=t[n];-1!==e&&(r[e]+=1)}for(let n=e,a=e+s;n<a;++n){let e=t[n];-1!==e&&r[e]>1&&(i[n]=!0)}}for(let e=0;e<s;++e){r.fill(0);for(let a=e;a<n;a+=s){let e=t[a];-1!==e&&(r[e]+=1)}for(let a=e;a<n;a+=s){let e=t[a];-1!==e&&r[e]>1&&(i[a]=!0)}}for(let e=0;e<n;e+=o)for(let n=0;n<s;n+=a){r.fill(0);for(let i=e,l=e+o;i<l;i+=s)for(let e=i+n,s=e+a;e<s;++e){let n=t[e];-1!==n&&(r[n]+=1)}for(let l=e,u=e+o;l<u;l+=s)for(let e=l+n,s=e+a;e<s;++e){let n=t[e];-1!==n&&r[n]>1&&(i[e]=!0)}}return i}function e_(){let e=(0,eb._)(["\n        --sudoku__board-bg: #d3d8e2;\n        --sudoku__board-cell-bg: #fff;\n        --sudoku__board-cell-size: 32px;\n        --sudoku__board-cell-font-size: 16px;\n        --sudoku__board-cell-border-thickness: 1px;\n        --sudoku__board-border-thickness: 2px;\n        --sudoku__board-border-thickness-color: #111;\n        --sudoku__board-border-thickness-plus: 3px;\n        --sudoku__board-border-thickness-plus-color: #111;\n        position: relative;\n        box-sizing: content-box;\n        display: inline-block;\n        width: fit-content;\n        padding: 0;\n        border: var(--sudoku__board-border-thickness-plus) solid var(--sudoku__board-border-thickness-plus-color);\n        margin: 0;\n        background-color: var(--sudoku__board-bg);\n        font-family: Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif;\n        [data-sudoku-size=\"4x4\"] && {\n          --sudoku__board-cell-size: 48px;\n          --sudoku__board-cell-font-size: 20px;\n        }\n      "]);return e_=function(){return e},e}function ey(){let e=(0,eb._)(['\n        z-index: 2;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: none;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        background: linear-gradient(\n          45deg,\n          hsl(30deg 20% 90% / 0.2),\n          hsl(210deg 20% 100% / 0.3)\n        );\n        [data-sudoku-status="','"] && {\n          display: block;\n          backdrop-filter: blur(1px);\n        }\n        [data-sudoku-status="','"] && {\n          display: none;\n        }\n        [data-sudoku-status="','"] && {\n          display: block;\n          backdrop-filter: blur(16px);\n        }\n        [data-sudoku-status="','"] && {\n          display: block;\n          backdrop-filter: blur(4px);\n          color: #ff00ff;\n          animation: 1s 0s '," ease-in-out;\n        }\n      "]);return ey=function(){return e},e}function e$(){let e=(0,eb._)(['\n        display: flex;\n        flex-direction: column;\n        font-size: var(--sudoku__board-cell-font-size);\n        [data-sudoku-status="','"] && {\n          border-color: transparent;\n        }\n        [data-sudoku-status="','"] && {\n          border-color: transparent;\n        }\n        [data-sudoku-status="','"] && {\n          border-color: transparent;\n        }\n      ']);return e$=function(){return e},e}function eT(){let e=(0,eb._)(["\n        display: flex;\n      "]);return eT=function(){return e},e}function eN(){let e=(0,eb._)(["\n        flex: 0 0 auto;\n        overflow: hidden;\n        display: inline-block;\n        box-sizing: border-box;\n        width: var(--sudoku__board-cell-size);\n        height: var(--sudoku__board-cell-size);\n        margin: var(--sudoku__board-cell-border-thickness) 0 0 var(--sudoku__board-cell-border-thickness);\n        background-color: var(--sudoku__board-cell-bg);\n        user-select: none;\n        cursor: pointer;\n      "]);return eN=function(){return e},e}function eC(){let e=(0,eb._)(['\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        height: 100%;\n        width: 100%;\n        padding: 4px;\n        margin: 0;\n        [data-sudoku-hint="true"] && {\n          animation: 0.5s 0s '," linear 1 both normal;\n        }\n      "]);return eC=function(){return e},e}function eE(){let e=(0,eb._)(["\n        && {\n          margin-left: 0;\n        }\n      "]);return eE=function(){return e},e}function eI(){let e=(0,eb._)(["\n        && {\n          margin-left: var(--sudoku__board-border-thickness);\n        }\n      "]);return eI=function(){return e},e}function eR(){let e=(0,eb._)(["\n        && {\n          margin-top: 0;\n        }\n      "]);return eR=function(){return e},e}function ej(){let e=(0,eb._)(["\n        && {\n          margin-top: var(--sudoku__board-border-thickness);\n        }\n      "]);return ej=function(){return e},e}function ew(){let e=(0,eb._)(["\n        && {\n          color: #333;\n        }\n      "]);return ew=function(){return e},e}function eD(){let e=(0,eb._)(["\n        && {\n          color: #ffa500;\n        }\n      "]);return eD=function(){return e},e}function eZ(){let e=(0,eb._)(["\n        && {\n          color: #0080ff;\n        }\n      "]);return eZ=function(){return e},e}function eU(){let e=(0,eb._)(["\n        && {\n          background: #ff6a00;\n        }\n      "]);return eU=function(){return e},e}function eP(){let e=(0,eb._)(["\n        && {\n          background: #6eb2f7;\n        }\n      "]);return eP=function(){return e},e}function ez(){let e=(0,eb._)(["\n        && {\n          background: #e2ebf3;\n        }\n      "]);return ez=function(){return e},e}function eA(){let e=(0,eb._)(["\n        && {\n          background: #bbdefb;\n        }\n      "]);return eA=function(){return e},e}function eM(){let e=(0,eb._)(["\n    0% {\n      transform: translate(0, -100px);\n    }\n    80% {\n      transform: translate(0, 20px);\n    }\n    90% {\n      transform: translate(0, -10px);\n    }\n    95% {\n      transform: translate(0, 2px);\n    }\n    100% {\n      transform: translate(0, 0);\n    }\n  "]);return eM=function(){return e},e}function eX(){let e=(0,eb._)(["\n    0% {\n      transform: scale(1) rotate(0deg);\n    }\n\n    50% {\n      transform: scale(2) rotate(200deg);\n    }\n\n    100% {\n      transform: scale(1.3) rotate(360deg);\n    }\n  "]);return eX=function(){return e},e}let eG=e=>{let t;let{attempt:n,hintPos:s,className:a,overlay:o,onCellClick:l}=e,u=g(),d=k(e=>e.SUDOKU_SIZE_SQRT$),p=k(e=>e.puzzle$),f=k(e=>e.solution$),m=k(e=>e.radix$),x=k(e=>e.activatedPos$),b=k(e=>e.hintTick$),S=c.useMemo(()=>new v.$X(d),[d]),_=eO(),y={onCellClick:(0,h.$0)((e,t)=>{null!=l&&l(e,t),u({type:i.ACTIVE,payload:{r:e,c:t}})})},$=(0,v.iN)(S),{r:T,c:N}=E(S,x),C=$[x],I=-1===x?-1:n[x],{r:R=-1,c:j=-1}=E(S,s),w=-1===s?-1:f[s];{let e=-1!==s&&-1===p[s];if(e){let e=n[s];n[s]=f[s],t=ev(S,n),n[s]=e}else t=ev(S,n)}let D=[];for(let e=0,s=0;e<S.MATRIX;++e){let a=[];for(let o=0;o<S.MATRIX;++o,++s){let i=n[s],l=e===R&&o===j,u=e===T&&o===N,c=!u&&(e===T||o===N||$[s]===C),h=-1!==I&&i===I&&!c&&!u,f=!!t[s],x=l?w:i,S=(0,r.jsx)("span",{className:(0,Q.cx)(_.boardCell,{[_.boardCellLeftSeamless]:0===o,[_.boardCellLeft]:o>0&&o%d==0,[_.boardCellTopSeamless]:0===e,[_.boardCellTop]:e>0&&e%d==0,[_.boardCellPreset]:-1!==i,[_.boardCellAttempt]:i!==p[s],[_.boardCellDuplicated]:!l&&f,[_.boardCellHint]:l,[_.boardCellActivated]:!f&&u,[_.boardCellRelated]:!f&&c,[_.boardCellSame]:!f&&h}),"data-sudoku-hint":l,children:(0,r.jsx)("span",{className:_.boardCellContent,onClick:()=>y.onCellClick(e,o),children:-1===x?"":(x+1).toString(m)})},l?"".concat(o,"-hint-").concat(b):o);a.push(S)}D.push((0,r.jsx)("div",{className:_.boardRow,children:a},e))}return(0,r.jsxs)("div",{className:"".concat(_.container," ").concat(a),children:[(0,r.jsx)("div",{className:_.overlay,children:o},"overlay"),(0,r.jsx)(eg,{SUDOKU_SIZE_SQRT:d}),(0,r.jsx)("div",{className:_.boardWrapper,children:D},"wrapper")]})};eG.propTypes={attempt:u().array.isRequired,className:u().string,overlay:u().node,onCellClick:u().func};let eO=()=>c.useMemo(()=>({container:(0,Q.iv)(e_()),overlay:(0,Q.iv)(ey(),_.X.PENDING,_.X.RUNNING,_.X.PAUSED,_.X.END,eK.finished),boardWrapper:(0,Q.iv)(e$(),_.X.PENDING,_.X.PAUSED,_.X.END),boardRow:(0,Q.iv)(eT()),boardCell:(0,Q.iv)(eN()),boardCellContent:(0,Q.iv)(eC(),eK.hint),boardCellLeftSeamless:(0,Q.iv)(eE()),boardCellLeft:(0,Q.iv)(eI()),boardCellTopSeamless:(0,Q.iv)(eR()),boardCellTop:(0,Q.iv)(ej()),boardCellPreset:(0,Q.iv)(ew()),boardCellHint:(0,Q.iv)(eD()),boardCellAttempt:(0,Q.iv)(eZ()),boardCellDuplicated:(0,Q.iv)(eU()),boardCellActivated:(0,Q.iv)(eP()),boardCellRelated:(0,Q.iv)(ez()),boardCellSame:(0,Q.iv)(eA())}),[]),eK={finished:(0,Q.F4)(eM()),hint:(0,Q.F4)(eX())},eV=()=>{let e=g(),t=k(e=>e.status$),n=k(e=>e.SUDOKU_SIZE_SQRT$),s=k(e=>e.puzzle$),a=k(e=>e.solution$),o=k(e=>e.attempt$),l=k(e=>e.radix$),u=k(e=>e.hintPos$),d=k(e=>e.cheatVisible$),p=T(n),m=c.useRef(null),x=c.useRef(""),[b,S]=c.useState(!1),v={closeCheat:(0,h.$0)(()=>{e({type:i.TOGGLE_CHEAT_VISIBILITY,payload:!1})}),handleInput:(0,h.$0)(t=>{S(!1),x.current=t;let n=/^\s*$/.test(t)?0:Number.parseInt(t,l);Number.isInteger(n)&&e({type:i.INPUT,payload:n-1})}),handleCellClick:(0,h.$0)((e,t)=>{if(-1===e||-1===t)return;let n=e*p.MATRIX+t;-1===s[n]&&S(!0)})};(0,h.TK)(()=>e({type:i.PAUSE}),[e]),(0,z.Z)(n>=2&&n<=7,"`childMatrixSize` must be an integer in the range [2, 7].");let _=n*n;return(0,r.jsxs)("div",{ref:m,className:eQ.sudoku,"data-sudoku-status":t,"data-sudoku-size":"".concat(_,"x").concat(_),children:[(0,r.jsxs)("div",{className:eQ.sudokuWrapper,children:[(0,r.jsx)(et,{}),(0,r.jsx)(em,{containerRef:m}),(0,r.jsx)("div",{className:eQ.sudokuMain,children:(0,r.jsxs)("div",{className:eQ.sudokuMainWrapper,children:[(0,r.jsx)(eG,{className:eQ.sudokuBoardPuzzle,attempt:o,hintPos:u,overlay:(0,r.jsx)(F,{}),onCellClick:v.handleCellClick}),(0,r.jsx)(A.Z,{open:d,container:m.current,keepMounted:!0,disableAutoFocus:!0,BackdropProps:{timeout:500},closeAfterTransition:!0,onClose:v.closeCheat,children:(0,r.jsxs)("div",{className:eQ.sudokuSolution,onClick:v.closeCheat,children:[(0,r.jsx)("span",{className:eQ.sudokuSolutionClose,children:"\xd7"}),(0,r.jsx)("div",{onClick:f.UW,children:(0,r.jsx)(eG,{attempt:a,hintPos:-1})})]})})]})})]}),(0,r.jsx)(V,{radix:l,container:m.current,initialValue:x.current,visible:b,label:"A ".concat(10===l?"decimal":"hexadecimal"," number"),onCancel:()=>S(!1),onConfirm:v.handleInput})]})},eQ=(0,f.ZC)({sudoku:{display:"block",transform:"scale(1)",caretColor:"transparent",background:"transparent","--sudoku__font-size":"18px",'&[data-sudoku-size="4x4"]':{"--sudoku__font-size":"24px"}},sudokuSolution:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"#eddede"},sudokuSolutionClose:{position:"absolute",top:"0",right:"0",bottom:"unset",left:"unset",display:"inline-block",height:"48px",width:"48px",lineHeight:"48px",fontSize:"32px",textAlign:"center",verticalAlign:"center",color:"#333",cursor:"pointer"},sudokuWrapper:{display:"block",maxWidth:"90vw",margin:"auto"},sudokuMain:{display:"flex",justifyContent:"center",padding:"1rem",margin:"0"},sudokuMainWrapper:{display:"block",overflow:"auto",fontSize:"16px"},sudokuBoardPuzzle:{['[data-sudoku-status="'.concat(_.X.PENDING,'"] &&')]:{"--sudoku__board-border-thickness-color":"transparent","--sudoku__board-border-thickness-plus-color":"transparent"},["'[data-sudoku-status=\"".concat(_.X.PAUSED,"\"] &&'")]:{"--sudoku__board-border-thickness-color":"transparent","--sudoku__board-border-thickness-plus-color":"transparent"},["'[data-sudoku-status=\"".concat(_.X.END,"\"] &&'")]:{"--sudoku__board-border-thickness-color":"transparent","--sudoku__board-border-thickness-plus-color":"transparent"}}}),eH=e=>(0,r.jsx)(U,{storageKey:e.storageKey,initialData:e.initialData,children:(0,r.jsx)(eV,{})});eH.propTypes={storageKey:u().string,initialData:u().any};var eB=eH}}]);