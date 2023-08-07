"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9171:function(e,t,o){o.d(t,{D:function(){return n}});var r=o(55402),s=o(95050),i=o(67294);let a=[["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"],["#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"]],l=()=>{let e=a.length;return a[Math.min(e-1,Math.floor(Math.random()*e))]},n=()=>{let e=(0,i.useRef)(!1),t=(0,i.useRef)(null);(0,i.useEffect)(()=>(t.current=new s.Z,()=>{var e;null===(e=t.current)||void 0===e||e.clearCanvas(),t.current=null}),[]);let o=(0,r.$0)(async()=>{if(null==t.current)return;let o=t.current,r=l(),s=window.screen.width<=900;e.current=!0;try{await o.addConfetti({confettiColors:r,confettiRadius:s?4:8,confettiNumber:s?100:300})}finally{e.current=!1}});return o}},34781:function(e,t,o){o.d(t,{p:function(){return d},X:function(){return s}}),(r=s||(s={}))[r.PENDING=1]="PENDING",r[r.RUNNING=2]="RUNNING",r[r.PAUSED=4]="PAUSED",r[r.END=8]="END";var r,s,i=o(90916),a=o(17936),l=o(38820),n=o(54362);class d extends i.j{constructor(e){super();let t=new a.Z(e.status),o=new a.Z(e.elapsedTime),r=Date.now(),i=(e,t)=>{let i=Date.now();if(t===s.RUNNING){let e=i-r;o.setState(t=>t+e)}else e===s.PENDING&&o.setState(0);r=i};t.subscribe({next:(e,t)=>i(e,t),complete:()=>{}});let d=(0,n.iP)(()=>{let e=t.getSnapshot();i(e,e)});this.status$=t,this.elapsedTime$=o,this.registerDisposable((0,l.Y)(d))}}},34185:function(e,t,o){o.d(t,{vk:function(){return M},oh:function(){return d},tR:function(){return eU},aK:function(){return eH},X2:function(){return eQ},ZP:function(){return eV},vD:function(){return T},eK:function(){return R}});var r,s,i,a,l,n,d,c,u,p,h=o(85893),m=o(26692),S=o(45697),B=o.n(S),g=o(67294),f=o(83235),x=o(55402),C=o(28735),v=o(54362),b=o(73062);let k="2023-06-06";(r=n||(n={})).ERASE="ERASE",r.HINT="HINT",r.WRITE="WRITE",(s=d||(d={})).RESTART="RESTART",s.RESET="RESET",s.START="START",s.PAUSE="PAUSE",s.RESUME="RESUME",s.ACTIVE="ACTIVE",s.HINT="HINT",s.TOGGLE_CHEAT="TOGGLE_CHEAT",s.INPUT="INPUT";let y=g.createContext(null);y.displayName="SudokuContextType";let T=()=>{let e=g.useContext(y);return e.dispatch},R=e=>{let t=g.useContext(y),o=e(t);return(0,C.vc)(o)};var $=o(43118),N=o(34781);let E={},z={},_=e=>{let t=z[e];return void 0===t&&(t=new $.$X(e),z[e]=t),t},D=e=>{let t=E[e];return void 0===t&&(t=new $.wY({childMatrixWidth:e}),E[e]=t),t};function j(e,t,o){let{BOARD:r}=e;for(let e=0;e<r;++e)if(t[e]!==o[e])return!1;return!0}function U(e,t){if(t<0)return{r:-1,c:-1};let{MATRIX:o}=e;return{r:Math.floor(t/o),c:t%o}}let I={status:N.X.PENDING,elapsedTime:0,SUDOKU_SIZE_SQRT:3,difficulty:20,radix:10,score:0,puzzle:null,solution:null,attempt:null,instructions:[],activatedPos:-1,hintPos:-1,cheatVisible:!1,gameTick:0,attemptTick:0,hintTick:0};var P=o(35369),A=o(73935);let Z=(e,t,o,r)=>{let{BOARD:s}=e;for(let e=0;e<s;++e)if(-1===t[e])return e;for(let e=0;e<s;++e)if(-1===o[e]&&t[e]!==r[e])return e;return -1};class w{constructor(e){var t=this;this.restart=()=>{let e=this.viewmodel,t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),o=e.difficulty$.getSnapshot(),r=D(t),{puzzle:s,solution:i}=r.createSudoku(o),a=(0,$.s0)(r.size);(0,$._g)(s,a,r.size),e.status$.next(N.X.PENDING),e.gameTick$.setState(e=>e+1),e.puzzle$.next(s),e.solution$.next(i),e.attempt$.next(a),e.instructions$.next(P.aV.of()),e.hintPos$.next(-1),e.hintTick$.next(0),e.attemptTick$.next(0)},this.reset=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.viewmodel.SUDOKU_SIZE_SQRT$.getSnapshot(),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.viewmodel.difficulty$.getSnapshot(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.viewmodel.radix$.getSnapshot(),s=t.viewmodel,i=D(e),{puzzle:a,solution:l}=i.createSudoku(o/100),n=(0,$.s0)(i.size);(0,$._g)(a,n,i.size),s.status$.next(N.X.PENDING),s.SUDOKU_SIZE_SQRT$.next(e),s.difficulty$.next(o),s.radix$.next(r),s.puzzle$.next(a),s.solution$.next(l),s.attempt$.next(n),s.instructions$.next(P.aV.of()),s.hintPos$.next(-1),s.cheatVisible$.next(!1),s.gameTick$.setState(e=>e+1),s.attemptTick$.next(0),s.hintTick$.next(0)},this.start=()=>{let e=this.viewmodel;e.status$.getSnapshot()===N.X.PENDING&&e.status$.next(N.X.RUNNING)},this.pause=()=>{let e=this.viewmodel;e.status$.getSnapshot()===N.X.RUNNING&&e.status$.next(N.X.PAUSED)},this.resume=()=>{let e=this.viewmodel;e.status$.getSnapshot()===N.X.PAUSED&&e.status$.next(N.X.RUNNING)},this._end=()=>{let e=this.viewmodel;if(e.status$.getSnapshot()===N.X.RUNNING){let t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),o=_(t),r=e.attempt$.getSnapshot(),s=e.solution$.getSnapshot();if(!j(o,r,s))return;let i=0,a=e.difficulty$.getSnapshot(),l=e.elapsedTime$.getSnapshot(),n=t**4*1e3;if(l<n){let e=t**4*a/100;i=(n-l)*e/1e3}let d=Math.max(5,Math.round(i));e.status$.next(N.X.END),e.score$.setState(e=>e+d)}},this.activePos=(e,t)=>{let o=this.viewmodel,r=_(o.SUDOKU_SIZE_SQRT$.getSnapshot()),s=e*r.MATRIX+t;o.activatedPos$.next(s)},this.hint=()=>{let e=this.viewmodel,t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),o=e.puzzle$.getSnapshot(),r=e.solution$.getSnapshot(),s=e.attempt$.getSnapshot(),i=e.activatedPos$.getSnapshot(),a=_(t),l=-1===i||-1!==o[i]?Z(a,s,o,r):i,d=U(a,l);e.hintPos$.next(l),e.hintTick$.setState(e=>e+1),e.instructions$.setState(e=>e.push({type:n.HINT,payload:d,timestamp:new Date().toISOString()}))},this.toggleCheatVisibility=e=>{let t=this.viewmodel;t.cheatVisible$.setState(t=>null!=e?e:!t)},this.input=e=>{let t=this.viewmodel;if(t.status$.getSnapshot()!==N.X.RUNNING)return;let o=t.SUDOKU_SIZE_SQRT$.getSnapshot(),{size:r}=D(o);if(!Number.isInteger(e)||e<-1||e>=r.BOARD)return;let s=t.activatedPos$.getSnapshot();if(-1===s)return;let i=t.puzzle$.getSnapshot();if(-1!==i[s])return;let a=t.attempt$.getSnapshot();if(a[s]===e)return;let l=(0,$.s0)(r);(0,$._g)(a,l,r),l[s]=e;let{r:d,c}=U(r,s);t.attempt$.next(l),t.attemptTick$.setState(e=>e+1),t.hintPos$.setState(e=>s===e?-1:e),t.instructions$.setState(t=>t.push({type:n.WRITE,payload:{r:d,c,v:e},timestamp:new Date().toISOString()}))},this.viewmodel=e.viewmodel,this.viewmodel.attempt$.subscribeStateChange(()=>this._end())}}class X extends N.p{constructor(e){super(e),this.getSnapshot=()=>({status:this.status$.getSnapshot(),elapsedTime:this.elapsedTime$.getSnapshot(),SUDOKU_SIZE_SQRT:this.SUDOKU_SIZE_SQRT$.getSnapshot(),difficulty:this.difficulty$.getSnapshot(),radix:this.radix$.getSnapshot(),score:this.score$.getSnapshot(),puzzle:this.puzzle$.getSnapshot(),solution:this.solution$.getSnapshot(),attempt:this.attempt$.getSnapshot(),instructions:Array.from(this.instructions$.getSnapshot()),activatedPos:this.activatedPos$.getSnapshot(),hintPos:this.hintPos$.getSnapshot(),cheatVisible:this.cheatVisible$.getSnapshot(),gameTick:this.gameTick$.getSnapshot(),attemptTick:this.attemptTick$.getSnapshot(),hintTick:this.hintTick$.getSnapshot()}),this.dispatch=e=>{let t=G[e.type];t?(0,A.unstable_batchedUpdates)(()=>{t(this._controller,e)}):console.error(this.constructor.name,"Unhandled action:",e)},this.SUDOKU_SIZE_SQRT$=new C.ZM(e.SUDOKU_SIZE_SQRT),this.difficulty$=new C.ZM(e.difficulty),this.radix$=new C.ZM(e.radix),this.score$=new C.ZM(e.score),this.puzzle$=new C.ZM(e.puzzle),this.solution$=new C.ZM(e.solution),this.attempt$=new C.ZM(e.attempt),this.instructions$=new C.ZM(P.aV.of(...e.instructions)),this.activatedPos$=new C.ZM(e.activatedPos),this.hintPos$=new C.ZM(e.hintPos),this.cheatVisible$=new C.ZM(e.cheatVisible),this.gameTick$=new C.ZM(e.gameTick),this.attemptTick$=new C.ZM(e.attemptTick),this.hintTick$=new C.ZM(e.hintTick);let t=new w({viewmodel:this});this._controller=t}}let G={[d.RESTART]:e=>{e.restart()},[d.RESET]:(e,t)=>{var o;let{SUDOKU_SIZE_SQRT:r,difficulty:s,radix:i}=null!==(o=t.payload)&&void 0!==o?o:{};e.reset(r,s,i)},[d.START]:e=>{e.start()},[d.PAUSE]:e=>{e.pause()},[d.RESUME]:e=>{e.resume()},[d.ACTIVE]:(e,t)=>{let{r:o,c:r}=t.payload;e.activePos(o,r)},[d.HINT]:e=>{e.hint()},[d.TOGGLE_CHEAT]:(e,t)=>{let o=t.payload;e.toggleCheatVisibility(o)},[d.INPUT]:(e,t)=>{let o=t.payload;e.input(o)}},M=(0,b.U)({displayName:"PersistentSudokuContextProvider",version:k,disposeWhenUnmounted:!0,Provider:y.Provider,Persistent:e=>{let{viewmodel:t,storage:o,storageKey:r}=e,s=(0,C.sD)(t,["SUDOKU_SIZE_SQRT$","difficulty$","radix$","score$","puzzle$","solution$","instructions$","activatedPos$","gameTick$"]),i=g.useMemo(()=>(0,f.P2)(()=>{let e={elapsedTime:t.elapsedTime$.getSnapshot(),SUDOKU_SIZE_SQRT:t.SUDOKU_SIZE_SQRT$.getSnapshot(),difficulty:t.difficulty$.getSnapshot(),radix:t.radix$.getSnapshot(),score:t.score$.getSnapshot(),puzzle:t.puzzle$.getSnapshot(),solution:t.solution$.getSnapshot(),instructions:Array.from(t.instructions$.getSnapshot()),activatedPos:t.activatedPos$.getSnapshot(),gameTick:t.gameTick$.getSnapshot()};return v.kg.log("saving ".concat(r,". data:"),e),o.save({version:k,data:e})},200),[t,o,r]);return g.useEffect(()=>void i(),[i,s]),(0,x.i7)(()=>i.flushSync(),!1),(0,h.jsx)(g.Fragment,{})},SideEffect:()=>(0,h.jsx)(g.Fragment,{}),ViewModel:X,initContextState:function(e){var t,o;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,{SUDOKU_SIZE_SQRT:s=r.SUDOKU_SIZE_SQRT,difficulty:i=r.difficulty,score:a=r.score,radix:l=r.radix,activatedPos:d=null!==(t=r.activatedPos)&&void 0!==t?t:-1,gameTick:c=r.gameTick,puzzle:u=r.puzzle,solution:p=r.solution,instructions:h=r.instructions.slice(),elapsedTime:m=r.elapsedTime}=null!=e?e:{},{puzzle:S,solution:B}=null!=u&&null!=p?{puzzle:u,solution:p}:D(s).createSudoku(i/100),g=_(s),f=(0,$.s0)(g);(0,$._g)(S,f,g),function(e,t,o){for(let r of o)switch(r.type){case n.ERASE:{let{r:o,c:s}=r.payload,i=o*e.MATRIX+s;t[i]=-1;break}case n.WRITE:{let{r:o,c:s,v:i}=r.payload,a=o*e.MATRIX+s;t[a]=i}}}(g,f,h);let x=null!==(o=null==e?void 0:e.status)&&void 0!==o?o:j(g,f,B)?N.X.END:m>0||!j(g,f,S)?N.X.PAUSED:N.X.PENDING;return{status:x,elapsedTime:m,SUDOKU_SIZE_SQRT:s,difficulty:i,radix:l,score:a,attempt:f,instructions:h,puzzle:S,solution:B,activatedPos:d,hintPos:-1,cheatVisible:!1,gameTick:c,attemptTick:0,hintTick:0}}});var O=o(18872),K=o(6260),q=o(72908),Q=o(9171),F=o(41616),H=o(70655),V=o(1849),W=o(83321);(i=c||(c={})).fontSize="--sudoku_fontSize",i.fontSizeBoardCell="--sudoku_fontSizeBoardCell",i.fontSizeFinishedBanner="--sudoku_fontSizeFinishedBanner",i.sizeBoardCell="--sudoku_sizeBoardCell",i.sizeBorderBoard1="--sudoku_sizeBorderBoard1",i.sizeBorderBoard2="--sudoku_sizeBorderBoard2",i.sizeBorderBoard3="--sudoku_sizeBorderBoard3",(a=u||(u={})).colorBgBoard="--sudoku_colorBgBoard",a.colorBgBoardCell="--sudoku_colorBgBoardCell",a.colorBgBoardCellActivated="--sudoku_colorBgBoardCellActivated",a.colorBgBoardCellDuplicated="--sudoku_colorBgBoardCellDuplicated",a.colorBgBoardCellRelated="--sudoku_colorBgBoardCellRelated",a.colorBgBoardCellSame="--sudoku_colorBgBoardCellSame",a.colorBoardCellActivated="--sudoku_colorBoardCellActivated",a.colorBoardCellAttempt="--sudoku_colorBoardCellAttempt",a.colorBoardCellHint="--sudoku_colorBoardCellHint",a.colorBoardCellPreset="--sudoku_colorBoardCellPreset",a.colorBoardCellSame="--sudoku_colorBoardCellSame",a.colorBody="--sudoku_colorBody",a.colorBorderBoard2="--sudoku_colorBorderBoard2",a.colorBorderBoard3="--sudoku_colorBorderBoard3",a.colorElapsedTime="--sudoku_colorElapsedTime",a.colorScore="--sudoku_colorScore",(l=p||(p={}))[l.colorBgBoard="var(--sudoku_colorBgBoard)"]="colorBgBoard",l[l.colorBgBoardCell="var(--sudoku_colorBgBoardCell)"]="colorBgBoardCell",l[l.colorBgBoardCellActivated="var(--sudoku_colorBgBoardCellActivated)"]="colorBgBoardCellActivated",l[l.colorBgBoardCellDuplicated="var(--sudoku_colorBgBoardCellDuplicated)"]="colorBgBoardCellDuplicated",l[l.colorBgBoardCellRelated="var(--sudoku_colorBgBoardCellRelated)"]="colorBgBoardCellRelated",l[l.colorBgBoardCellSame="var(--sudoku_colorBgBoardCellSame)"]="colorBgBoardCellSame",l[l.colorBoardCellActivated="var(--sudoku_colorBoardCellActivated)"]="colorBoardCellActivated",l[l.colorBoardCellAttempt="var(--sudoku_colorBoardCellAttempt)"]="colorBoardCellAttempt",l[l.colorBoardCellHint="var(--sudoku_colorBoardCellHint)"]="colorBoardCellHint",l[l.colorBoardCellPreset="var(--sudoku_colorBoardCellPreset)"]="colorBoardCellPreset",l[l.colorBoardCellSame="var(--sudoku_colorBoardCellSame)"]="colorBoardCellSame",l[l.colorBody="var(--sudoku_colorBody)"]="colorBody",l[l.colorBorderBoard2="var(--sudoku_colorBorderBoard2)"]="colorBorderBoard2",l[l.colorBorderBoard3="var(--sudoku_colorBorderBoard3)"]="colorBorderBoard3",l[l.colorElapsedTime="var(--sudoku_colorElapsedTime)"]="colorElapsedTime",l[l.colorScore="var(--sudoku_colorScore)"]="colorScore",l[l.fontSize="var(--sudoku_fontSize)"]="fontSize",l[l.fontSizeBoardCell="var(--sudoku_fontSizeBoardCell)"]="fontSizeBoardCell",l[l.fontSizeFinishedBanner="var(--sudoku_fontSizeFinishedBanner)"]="fontSizeFinishedBanner",l[l.sizeBoardCell="var(--sudoku_sizeBoardCell)"]="sizeBoardCell",l[l.sizeBorderBoard1="var(--sudoku_sizeBorderBoard1)"]="sizeBorderBoard1",l[l.sizeBorderBoard2="var(--sudoku_sizeBorderBoard2)"]="sizeBorderBoard2",l[l.sizeBorderBoard3="var(--sudoku_sizeBorderBoard3)"]="sizeBorderBoard3";class L extends g.Component{shouldComponentUpdate(e){let t=this.props;return t.status!==e.status}render(){let{status:e}=this.props,{start:t,resume:o,restart:r}=this;switch(e){case N.X.PENDING:return(0,h.jsx)("div",{className:Y.overlay,children:(0,h.jsx)(W.Z,{className:Y.button,variant:"contained",color:"primary",startIcon:(0,h.jsx)(H.Z,{}),onClick:t,children:"Start"})});case N.X.PAUSED:return(0,h.jsx)("div",{className:Y.overlay,children:(0,h.jsx)(W.Z,{className:Y.button,variant:"contained",color:"primary",startIcon:(0,h.jsx)(F.Z,{}),onClick:o,children:"Resume"})});case N.X.END:return(0,h.jsx)("div",{className:Y.overlay,children:(0,h.jsxs)("div",{className:Y.finishedBanner,children:[(0,h.jsx)("p",{children:"You win \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89"}),(0,h.jsx)(W.Z,{className:Y.button,variant:"contained",color:"primary",startIcon:(0,h.jsx)(V.Z,{}),onClick:r,children:"New"})]})});default:return(0,h.jsx)(g.Fragment,{})}}componentDidUpdate(e){let t=this.props.status,o=e.status;o!==t&&t===N.X.END&&this.props.throwConfetti()}constructor(...e){super(...e),this.start=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.START})},this.resume=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.RESUME})},this.restart=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.RESTART})}}}L.displayName="GameOverlayComponent",L.propTypes={status:B().any.isRequired,dispatchSudokuAction:B().func.isRequired,throwConfetti:B().func.isRequired};let Y={overlay:(0,O.iv)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",userSelect:"none"}),confettiCanvas:(0,O.iv)({position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"}),button:(0,O.iv)({"&&, &&:hover":{boxShadow:"4px 4px 16px 0px hsl(0deg 0% 0% / 0.75)"}}),finishedBanner:(0,O.iv)({position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",padding:0,margin:0,fontSize:p.fontSizeFinishedBanner}),playerName:(0,O.iv)({color:"#e200e2"})},J=()=>{let e=T(),t=R(e=>e.status$),o=(0,Q.D)();return(0,h.jsx)(L,{status:t,dispatchSudokuAction:e,throwConfetti:o})};var ee=o(45018),et=o(55819),eo=o(45929);class er extends g.PureComponent{render(){let{status:e,SUDOKU_SIZE_SQRT:t,difficulty:o,radix:r}=this.props,{onSizeChange:s,onRadixChange:i,onDifficultyChange:a}=this,l=e===N.X.PENDING;return(0,h.jsxs)("div",{className:es.settings,children:[(0,h.jsxs)("div",{className:es.item,children:[(0,h.jsx)("span",{children:"Size:"}),(0,h.jsxs)(ee.Z,{variant:"standard",value:t,disabled:!l,onChange:s,children:[(0,h.jsx)(et.Z,{value:2,children:"4x4"}),(0,h.jsx)(et.Z,{value:3,children:"9x9"}),(0,h.jsx)(et.Z,{value:4,children:"16x16"})]})]}),(0,h.jsxs)("div",{className:es.item,children:[(0,h.jsx)("span",{children:"Radix:"}),(0,h.jsxs)(ee.Z,{variant:"standard",value:r,disabled:!l,onChange:i,children:[(0,h.jsx)(et.Z,{value:10,children:"Decimal (x10)"}),(0,h.jsx)(et.Z,{value:16,children:"Hexadecimal (x16)"})]})]}),(0,h.jsxs)("div",{className:(0,O.cx)(es.item,es.difficulty),children:[(0,h.jsx)("span",{children:"Difficulty:"}),(0,h.jsx)(eo.ZP,{value:o,disabled:!l,step:1,min:0,max:100,valueLabelDisplay:"auto","aria-labelledby":"sudoku-difficulty",onChange:a})]})]})}constructor(...e){super(...e),this.onSizeChange=e=>{let{dispatchSudokuAction:t}=this.props;t({type:d.RESET,payload:{SUDOKU_SIZE_SQRT:Number(e.target.value)}})},this.onRadixChange=e=>{let{dispatchSudokuAction:t}=this.props;t({type:d.RESET,payload:{radix:Number(e.target.value)}})},this.onDifficultyChange=(e,t)=>{let{dispatchSudokuAction:o}=this.props;o({type:d.RESET,payload:{difficulty:t}})}}}er.displayName="GameSettingsComponent",er.propTypes={status:B().any.isRequired,SUDOKU_SIZE_SQRT:B().number.isRequired,difficulty:B().number.isRequired,radix:B().number.isRequired,dispatchSudokuAction:B().func.isRequired};let es={settings:(0,O.iv)({display:"block",maxWidth:"min(90vw, 400px)",margin:"auto"}),item:(0,O.iv)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",margin:"1rem 0","& > *":{marginRight:"1rem"}}),difficulty:(0,O.iv)({flexWrap:"nowrap","& > span":{"&:first-child":{flex:"0 0 auto"}}})},ei=()=>{let e=T(),t=R(e=>e.status$),o=R(e=>e.SUDOKU_SIZE_SQRT$),r=R(e=>e.difficulty$),s=R(e=>e.radix$);return(0,h.jsx)(er,{status:t,SUDOKU_SIZE_SQRT:o,difficulty:r,radix:s,dispatchSudokuAction:e})};var ea=o(27484),el=o.n(ea),en=o(1646),ed=o.n(en),ec=o(75303),eu=o(53247),ep=o(22961),eh=o(76997),em=o(93946),eS=o(78262),eB=o(9581),eg=o(31425),ef=o(65464);class ex extends g.PureComponent{render(){let{elapsedTime:e}=this.props;return(0,h.jsxs)("div",{className:eC.elapsedTime,children:[(0,h.jsx)(eh.Z,{title:"Time used",children:(0,h.jsx)(ef.Z,{})}),"\xa0\xa0",(0,h.jsx)("span",{children:e})]},"elapsed-time")}}ex.displayName="ElapsedTimeComponent",ex.propTypes={elapsedTime:B().string.isRequired};let eC={elapsedTime:(0,O.iv)({flex:"0 1 auto",display:"flex",alignItems:"center",fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif",color:p.colorElapsedTime,userSelect:"none"})};el().extend(ed());let ev=()=>{let e=R(e=>e.elapsedTime$),t=el().duration(e).format("HH:mm:ss");return(0,h.jsx)(ex,{elapsedTime:t})};class eb extends g.Component{render(){let{containerRef:e,status:t,score:o}=this.props,{isRestartDialogVisible:r}=this.state,{closeRestartDialog:s,hint:i,pauseGame:a,restartGame:l,showCheat:n,startGame:d}=this;return(0,h.jsxs)("div",{className:ek.toolbar,children:[(0,h.jsxs)("div",{className:(0,O.cx)(ek.item,ek.buttons),children:[(0,h.jsx)(W.Z,{variant:"contained",color:"inherit",startIcon:(0,h.jsx)(V.Z,{}),onClick:d,children:"New"}),(0,h.jsx)(W.Z,{variant:"contained",color:"inherit",disabled:t!==N.X.RUNNING,startIcon:(0,h.jsx)(ec.Z,{}),onClick:i,children:"HINT"}),(0,h.jsx)(W.Z,{variant:"contained",color:"secondary",disabled:t!==N.X.RUNNING,startIcon:(0,h.jsx)(ep.Z,{}),onClick:n,children:"Cheat"})]}),(0,h.jsxs)("div",{className:(0,O.cx)(ek.item,ek.state),children:[(0,h.jsx)("div",{className:ek.stateButtons,children:t===N.X.RUNNING&&(0,h.jsx)(eh.Z,{title:"Pause",children:(0,h.jsx)(em.Z,{color:"primary",onClick:a,children:(0,h.jsx)(eu.Z,{})})})},"state-buttons"),(0,h.jsx)(ev,{}),(0,h.jsxs)("div",{className:ek.score,children:["Score: ",o]},"score")]}),(0,h.jsxs)(eS.Z,{container:e.current,open:r,onClose:s,"aria-labelledby":"confirm-to-restart",children:[(0,h.jsx)(eB.Z,{children:"Are you sure you want to start a new game?"}),(0,h.jsxs)(eg.Z,{children:[(0,h.jsx)(W.Z,{color:"inherit",onClick:s,children:"Cancel"}),(0,h.jsx)(W.Z,{color:"primary",onClick:l,children:"Confirm"})]})]})]})}constructor(e){super(e),this.closeRestartDialog=()=>{this.setState({isRestartDialogVisible:!1})},this.hint=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.HINT})},this.pauseGame=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.PAUSE})},this.restartGame=()=>{let{dispatchSudokuAction:e}=this.props;this.setState({isRestartDialogVisible:!1}),e({type:d.RESTART})},this.showCheat=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.TOGGLE_CHEAT,payload:!0})},this.startGame=()=>{let{status:e}=this.props;e===N.X.PENDING||e===N.X.END?this.restartGame():this.setState({isRestartDialogVisible:!0})},this.state={isRestartDialogVisible:!1}}}eb.displayName="GameToolbarComponent",eb.propTypes={containerRef:B().object.isRequired,status:B().any.isRequired,score:B().number.isRequired,dispatchSudokuAction:B().func.isRequired};let ek={toolbar:(0,O.iv)({display:"block",maxWidth:"min(90vw, 400px)",margin:"auto"}),item:(0,O.iv)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",margin:"1rem 0","> *":{marginRight:"1rem"}}),buttons:(0,O.iv)({justifyContent:"space-around","> button":{margin:"0 4px"}}),state:(0,O.iv)({justifyContent:"center",margin:"2rem 0 0",height:"48px"}),stateButtons:(0,O.iv)({flex:"0 1 auto",display:"flex",alignItems:"center",justifyContent:"center",margin:"0",userSelect:"none"}),score:(0,O.iv)({flex:"0 1 auto",color:p.colorScore,overflow:"hidden",textOverflow:"ellipsis",fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif"})};el().extend(ed());let ey=e=>{let{containerRef:t}=e,o=T(),r=R(e=>e.status$),s=R(e=>e.score$);return(0,h.jsx)(eb,{containerRef:t,status:r,score:s,dispatchSudokuAction:o})};class eT extends g.Component{shouldComponentUpdate(e){let t=this.props;return t.SUDOKU_SIZE_SQRT!==e.SUDOKU_SIZE_SQRT}render(){let{SUDOKU_SIZE_SQRT:e}=this.props,t=e*e,o=[];for(let r=e,s=-1;r<t;r+=e,++s){let e="calc((".concat(r," * ").concat(p.sizeBoardCell,") + ").concat(r+s,"px)");o.push((0,h.jsx)("div",{className:eR.horizontalBoarder,style:{top:e}},"h-".concat(r))),o.push((0,h.jsx)("div",{className:eR.verticalBorder,style:{left:e}},"v-".concat(r)))}return(0,h.jsx)(g.Fragment,{children:o})}}eT.displayName="SudokuBoardBorders",eT.propTypes={SUDOKU_SIZE_SQRT:B().number.isRequired};let eR={horizontalBoarder:(0,O.iv)({position:"absolute",boxSizing:"content-box",left:"0",right:"0",bottom:"unset",width:"calc(100% + 2px)",height:p.sizeBorderBoard2,background:p.colorBorderBoard2}),verticalBorder:(0,O.iv)({position:"absolute",boxSizing:"content-box",top:"0",bottom:"0",right:"unset",height:"calc(100% + 2px)",width:p.sizeBorderBoard2,background:p.colorBorderBoard2})};function e$(e,t){let{BOARD:o,MATRIX:r,BASE_1:s,BASE_3:i}=e,a=Array(o).fill(!1),l=Array(r).fill(0);for(let e=0;e<o;e+=r){l.fill(0);for(let o=e,s=e+r;o<s;++o){let e=t[o];-1!==e&&(l[e]+=1)}for(let o=e,s=e+r;o<s;++o){let e=t[o];-1!==e&&l[e]>1&&(a[o]=!0)}}for(let e=0;e<r;++e){l.fill(0);for(let s=e;s<o;s+=r){let e=t[s];-1!==e&&(l[e]+=1)}for(let s=e;s<o;s+=r){let e=t[s];-1!==e&&l[e]>1&&(a[s]=!0)}}for(let e=0;e<o;e+=i)for(let o=0;o<r;o+=s){l.fill(0);for(let a=e,n=e+i;a<n;a+=r)for(let e=a+o,r=e+s;e<r;++e){let o=t[e];-1!==o&&(l[o]+=1)}for(let n=e,d=e+i;n<d;n+=r)for(let e=n+o,r=e+s;e<r;++e){let o=t[e];-1!==o&&l[o]>1&&(a[e]=!0)}}return a}class eN extends g.PureComponent{render(){let e;let{SUDOKU_SIZE_SQRT:t,radix:o,puzzle:r,solution:s,attempt:i}=this.props,{activatedPos:a,hintTick:l,hintPos:n,onCellClick:d}=this.props;t!==this.size.BASE_1&&(this.size=new $.$X(t),this.matrixCoordinateMap=(0,$.iN)(this.size));let{size:c,matrixCoordinateMap:u}=this,{r:p,c:m}=U(c,a),S=u[a],B=-1===a?-1:i[a],{r:f=-1,c:x=-1}=U(c,n),C=-1===n?-1:s[n];{let t=-1!==n&&-1===r[n];if(t){let t=i[n];i[n]=s[n],e=e$(c,i),i[n]=t}else e=e$(c,i)}let v=[];for(let s=0,a=0;s<c.MATRIX;++s){let n=[];for(let g=0;g<c.MATRIX;++g,++a){let c=i[a],v=s===f&&g===x,b=s===p&&g===m,k=!b&&(s===p||g===m||u[a]===S),y=-1!==B&&c===B&&!k&&!b,T=!!e[a],R=v?C:c,$=(0,h.jsx)("span",{className:(0,O.cx)(ez.boardCell,{[ez.boardCellLeftSeamless]:0===g,[ez.boardCellLeft]:g>0&&g%t==0,[ez.boardCellTopSeamless]:0===s,[ez.boardCellTop]:s>0&&s%t==0,[ez.boardCellPreset]:-1!==c,[ez.boardCellAttempt]:c!==r[a],[ez.boardCellDuplicated]:!v&&T,[ez.boardCellHint]:v,[ez.boardCellActivated]:!T&&b,[ez.boardCellRelated]:!T&&k,[ez.boardCellSame]:!T&&y}),children:(0,h.jsx)("span",{className:ez.boardCellContent,"data-sudoku-hint":v,onClick:()=>d(s,g),children:-1===R?"":(R+1).toString(o)})},v?"".concat(g,"-hint-").concat(l):g);n.push($)}v.push((0,h.jsx)("div",{className:ez.boardRow,children:n},s))}return(0,h.jsx)(g.Fragment,{children:v})}constructor(e){super(e),this.size=new $.$X(e.SUDOKU_SIZE_SQRT),this.matrixCoordinateMap=(0,$.iN)(this.size)}}eN.displayName="SudokuBoardCells",eN.propTypes={SUDOKU_SIZE_SQRT:B().number.isRequired,radix:B().number.isRequired,puzzle:B().array.isRequired,solution:B().array.isRequired,attempt:B().array.isRequired,activatedPos:B().number.isRequired,hintTick:B().number.isRequired,hintPos:B().number.isRequired,onCellClick:B().func};let eE={hint:(0,O.F4)({"0%":{transform:"scale(1) rotate(0deg)"},"50%":{transform:"scale(2) rotate(200deg)"},"100%":{transform:"scale(1.3) rotate(360deg)"}})},ez={boardRow:(0,O.iv)({display:"flex"}),boardCell:(0,O.iv)({flex:"0 0 auto",overflow:"hidden",display:"inline-block",boxSizing:"content-box",width:p.sizeBoardCell,height:p.sizeBoardCell,borderColor:"transparent",borderStyle:"solid",borderTopWidth:p.sizeBorderBoard1,borderRightWidth:0,borderBottomWidth:0,borderLeftWidth:p.sizeBorderBoard1,backgroundColor:p.colorBgBoardCell,backgroundClip:"content-box",userSelect:"none",cursor:"pointer"}),boardCellContent:(0,O.iv)({display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",height:"100%",width:"100%",padding:"4px",margin:0,'&[data-sudoku-hint="true"]':{animation:"0.5s 0s ".concat(eE.hint," linear 1 both normal")}}),boardCellLeftSeamless:(0,O.iv)({borderLeftWidth:0}),boardCellLeft:(0,O.iv)({borderLeftWidth:p.sizeBorderBoard2}),boardCellTopSeamless:(0,O.iv)({borderTopWidth:0}),boardCellTop:(0,O.iv)({borderTopWidth:p.sizeBorderBoard2}),boardCellPreset:(0,O.iv)({color:p.colorBoardCellPreset}),boardCellHint:(0,O.iv)({"&&":{color:p.colorBoardCellHint}}),boardCellAttempt:(0,O.iv)({color:p.colorBoardCellAttempt}),boardCellDuplicated:(0,O.iv)({background:p.colorBgBoardCellDuplicated,borderColor:p.colorBgBoard}),boardCellActivated:(0,O.iv)({color:p.colorBoardCellActivated,background:p.colorBgBoardCellActivated,borderColor:p.colorBgBoard}),boardCellRelated:(0,O.iv)({background:p.colorBgBoardCellRelated,borderColor:p.colorBgBoard}),boardCellSame:(0,O.iv)({color:p.colorBoardCellSame,background:p.colorBgBoardCellSame,borderColor:p.colorBgBoard})};class e_ extends g.PureComponent{render(){let{SUDOKU_SIZE_SQRT:e,radix:t,puzzle:o,solution:r,attempt:s,status:i,activatedPos:a,hintTick:l,hintPos:n,overlay:d}=this.props,{onCellClick:c}=this;return(0,h.jsxs)("div",{className:ej.container,children:[(0,h.jsx)("div",{className:ej.overlay,"data-sudoku-status":i,children:d}),(0,h.jsx)(eT,{SUDOKU_SIZE_SQRT:e}),(0,h.jsx)("div",{className:ej.boardWrapper,"data-sudoku-status":i,children:(0,h.jsx)(eN,{SUDOKU_SIZE_SQRT:e,puzzle:o,solution:r,radix:t,activatedPos:a,hintTick:l,attempt:s,hintPos:n,onCellClick:c})})]})}constructor(...e){super(...e),this.onCellClick=(e,t)=>{let{dispatchSudokuAction:o,onCellClick:r}=this.props;null==r||r(e,t),o({type:d.ACTIVE,payload:{r:e,c:t}})}}}e_.displayName="SudokuBoardComponent",e_.propTypes={SUDOKU_SIZE_SQRT:B().number.isRequired,radix:B().number.isRequired,puzzle:B().array.isRequired,solution:B().array.isRequired,attempt:B().array.isRequired,status:B().any.isRequired,activatedPos:B().number.isRequired,hintTick:B().number.isRequired,hintPos:B().number.isRequired,overlay:B().node,dispatchSudokuAction:B().func.isRequired,onCellClick:B().func};let eD={finished:(0,O.F4)({"0%":{transform:"translate(0, -100px)"},"80%":{transform:"translate(0, 20px)"},"90%":{transform:"translate(0, -10px)"},"95%":{transform:"translate(0, 2px)"},"100%":{transform:"translate(0, 0)"}})},ej={container:(0,O.iv)({position:"relative",boxSizing:"content-box",display:"inline-block",width:"fit-content",padding:0,border:"".concat(p.sizeBorderBoard3," solid ").concat(p.colorBorderBoard3),margin:0,backgroundColor:p.colorBgBoard,fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif"}),overlay:(0,O.iv)({zIndex:2,position:"absolute",top:0,left:0,right:0,bottom:0,display:"none",width:"100%",height:"100%",overflow:"hidden",background:"linear-gradient(45deg, hsla(30deg,20%,90%,0.2), hsla(210deg,20%,100%,0.3))",['&[data-sudoku-status="'.concat(N.X.PENDING,'"]')]:{display:"block",backdropFilter:"blur(1px)"},['&[data-sudoku-status="'.concat(N.X.RUNNING,'"]')]:{display:"none"},['&[data-sudoku-status="'.concat(N.X.PAUSED,'"]')]:{display:"block",backdropFilter:"blur(16px)"},['&[data-sudoku-status="'.concat(N.X.END,'"]')]:{display:"block",backdropFilter:"blur(4px)",color:"#FF00FF",animation:"1s 0s ".concat(eD.finished," ease-in-out")}}),boardWrapper:(0,O.iv)({display:"flex",flexDirection:"column",fontSize:p.fontSizeBoardCell,['&[data-sudoku-status="'.concat(N.X.PENDING,'"]')]:{borderColor:"transparent"},['&[data-sudoku-status="'.concat(N.X.PAUSED,'"]')]:{borderColor:"transparent"},['&[data-sudoku-status="'.concat(N.X.END,'"]')]:{borderColor:"transparent"}})},eU=e=>{let{attempt:t,hintPos:o,overlay:r,onCellClick:s}=e,i=T(),a=R(e=>e.SUDOKU_SIZE_SQRT$),l=R(e=>e.radix$),n=R(e=>e.puzzle$),d=R(e=>e.solution$),c=R(e=>e.status$),u=R(e=>e.activatedPos$),p=R(e=>e.hintTick$);return(0,h.jsx)(e_,{SUDOKU_SIZE_SQRT:a,radix:l,puzzle:n,solution:d,attempt:t,status:c,activatedPos:u,hintTick:p,hintPos:o,overlay:r,dispatchSudokuAction:i,onCellClick:s})};var eI=o(98271);class eP extends g.Component{render(){let{inputRef:e,radix:t}=this.props,{text:o}=this.state,{onChange:r,onKeyDown:s,onFocus:i}=this;return(0,h.jsx)(eI.Z,{inputRef:e,autoFocus:!0,autoComplete:"off",margin:"dense",label:"A ".concat(10===t?"decimal":"hexadecimal"," number"),type:t<=10?"number":"input",fullWidth:!0,value:o,multiline:!1,onChange:r,onFocus:i,onKeyDown:s})}shouldComponentUpdate(e,t){let o=this.props,r=this.state;return t.text!==r.text||e.size!==o.size||e.radix!==o.radix||e.initialValue!==o.initialValue}constructor(e){super(e),this.onChange=e=>{let{radix:t,size:o,onConfirm:r}=this.props,s=this.state.text,i=e.target.value;if(this.setState({text:i}),s.length<=i.length&&o<t){let e=Number.parseInt(i,t);e>0&&e<=o&&r(e)}},this.onKeyDown=e=>{if("Enter"===e.key){let{radix:e,size:t,onConfirm:o}=this.props,r=this.state.text,s=Number.parseInt(r,e);s>=0&&s<=t&&o(s)}},this.onFocus=e=>{e.target.select()};let{radix:t,initialValue:o}=e;this.state={text:o>0?o.toString(t):""}}}eP.displayName="SudokuInputComponent",eP.propTypes={inputRef:B().object.isRequired,size:B().number.isRequired,radix:B().number.isRequired,initialValue:B().number.isRequired,onConfirm:B().func.isRequired};let eA=e=>{let{size:t,container:o,cellPos:r,visible:s,onCancel:i}=e,a=R(e=>e.radix$),l=R(e=>e.attempt$),n=g.useRef(null),d=r>=0?l[r]+1:0,c=(0,x.$0)(o=>{o>=0&&o<=t&&e.onConfirm(o)}),u=(0,x.$0)(()=>{var e;let t=null===(e=n.current)||void 0===e?void 0:e.value;if("string"==typeof t){let e=Number.parseInt(t,a);c(e)}});return(0,h.jsxs)(eS.Z,{container:o,open:s,onClose:i,"aria-labelledby":"sudoku-input-dialog",children:[(0,h.jsx)(eB.Z,{children:(0,h.jsx)(eP,{inputRef:n,size:t,radix:a,initialValue:d,onConfirm:c},r)}),(0,h.jsxs)(eg.Z,{children:[(0,h.jsx)(W.Z,{color:"inherit",onClick:i,children:"Cancel"}),(0,h.jsx)(W.Z,{color:"primary",onClick:u,children:"Confirm"})]})]})},eZ={backdrop:{timeout:500}},ew=()=>{let e=T(),t=R(e=>e.SUDOKU_SIZE_SQRT$),o=R(e=>e.puzzle$),r=R(e=>e.solution$),s=R(e=>e.attempt$),i=R(e=>e.hintPos$),a=R(e=>e.cheatVisible$),l=_(t),n=g.useRef(null),c=g.useRef(-1),[u,p]=g.useState(!1),m={closeCheat:(0,x.$0)(()=>{e({type:d.TOGGLE_CHEAT,payload:!1})}),handleInput:(0,x.$0)(t=>{p(!1),e({type:d.INPUT,payload:t-1})}),handleCellClick:(0,x.$0)((e,t)=>{if(-1===e||-1===t)return;let r=e*l.MATRIX+t;-1===o[r]&&(c.current=r,p(!0))})};return(0,x.TK)(()=>e({type:d.PAUSE}),[e]),(0,K.Z)(t>=2&&t<=7,"`childMatrixSize` must be an integer in the range [2, 7]."),(0,h.jsxs)("div",{ref:n,children:[(0,h.jsxs)("div",{className:eX.sudokuWrapper,children:[(0,h.jsx)(ei,{}),(0,h.jsx)(ey,{containerRef:n}),(0,h.jsx)("div",{className:eX.sudokuMain,children:(0,h.jsxs)("div",{className:eX.sudokuMainWrapper,children:[(0,h.jsx)(eU,{attempt:s,hintPos:i,overlay:(0,h.jsx)(J,{}),onCellClick:m.handleCellClick}),(0,h.jsx)(q.Z,{open:a,container:n.current,keepMounted:!0,disableAutoFocus:!0,slotProps:eZ,closeAfterTransition:!0,onClose:m.closeCheat,children:(0,h.jsxs)("div",{className:eX.sudokuSolution,onClick:m.closeCheat,children:[(0,h.jsx)("span",{className:eX.sudokuSolutionClose,children:"\xd7"}),(0,h.jsx)("div",{onClick:v.UW,children:(0,h.jsx)(eU,{attempt:r,hintPos:-1})})]})})]})})]}),(0,h.jsx)(eA,{size:l.BASE_2,container:n.current,cellPos:c.current,visible:u,onCancel:()=>p(!1),onConfirm:m.handleInput})]})},eX={sudokuSolution:(0,O.iv)({position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"#eddede"}),sudokuSolutionClose:(0,O.iv)({position:"absolute",top:"0",right:"0",bottom:"unset",left:"unset",display:"inline-block",height:"48px",width:"48px",lineHeight:"48px",fontSize:"32px",textAlign:"center",verticalAlign:"center",color:"#333",cursor:"pointer"}),sudokuWrapper:(0,O.iv)({display:"block",maxWidth:"90vw",margin:"auto"}),sudokuMain:(0,O.iv)({display:"flex",justifyContent:"center",padding:"1rem",margin:"0"}),sudokuMainWrapper:(0,O.iv)({display:"block",overflow:"auto",fontSize:"16px"})};var eG=o(94101),eM=o(5354);let eO={[c.fontSize]:"18px",[c.fontSizeBoardCell]:"16px",[c.fontSizeFinishedBanner]:"32px",[c.sizeBoardCell]:"32px",[c.sizeBorderBoard1]:"1px",[c.sizeBorderBoard2]:"2px",[c.sizeBorderBoard3]:"3px"},eK={[u.colorBgBoard]:"hsl(0deg, 0%, 50%)",[u.colorBgBoardCell]:"hsl(0deg, 0%, 10%)",[u.colorBgBoardCellActivated]:"hsl(150deg, 50%, 40%)",[u.colorBgBoardCellDuplicated]:"hsl(0deg, 80%, 50%)",[u.colorBgBoardCellRelated]:"hsl(210deg, 31%, 37%)",[u.colorBgBoardCellSame]:"hsl(150deg, 50%, 20%)",[u.colorBoardCellActivated]:"hsl(0deg, 0%, 80%)",[u.colorBoardCellAttempt]:"hsl(210deg, 80%, 60%)",[u.colorBoardCellHint]:"hsl(39deg, 100%, 50%)",[u.colorBoardCellPreset]:"hsl(0deg, 0%, 80%)",[u.colorBoardCellSame]:"hsl(0deg, 0%, 80%)",[u.colorBody]:"hsl(0deg, 0%, 85%)",[u.colorBorderBoard2]:"hsl(0deg, 0%, 70%)",[u.colorBorderBoard3]:"hsl(0deg, 0%, 70%)",[u.colorElapsedTime]:"hsl(0deg, 0%, 80%)",[u.colorScore]:"hsl(120deg, 80%, 70%)"},eq={[u.colorBgBoard]:"hsl(0deg, 0%, 80%)",[u.colorBgBoardCell]:"hsl(0deg, 0%, 100%)",[u.colorBgBoardCellActivated]:"hsl(210deg, 80%, 60%)",[u.colorBgBoardCellDuplicated]:"hsl(30deg, 100%, 50%)",[u.colorBgBoardCellRelated]:"hsl(207deg, 30%, 92%)",[u.colorBgBoardCellSame]:"hsl(210deg, 60%, 80%)",[u.colorBoardCellActivated]:"hsl(0deg, 0%, 100%)",[u.colorBoardCellAttempt]:"hsl(207deg, 100%, 50%)",[u.colorBoardCellHint]:"hsl(30deg, 100%, 50%)",[u.colorBoardCellPreset]:"hsl(0deg, 0%, 20%)",[u.colorBoardCellSame]:"hsl(0deg, 0%, 20%)",[u.colorBody]:"hsl(0deg, 0%, 30%)",[u.colorBorderBoard2]:"hsl(0deg, 0%, 7%)",[u.colorBorderBoard3]:"hsl(0deg, 0%, 7%)",[u.colorElapsedTime]:"hsl(0deg, 0%, 35%)",[u.colorScore]:"hsl(120deg, 100%, 30%)"},eQ=e=>{let t=(0,eM.mY)(e=>e.theme$),o=R(e=>e.status$),r=R(e=>e.SUDOKU_SIZE_SQRT$),s=(0,O.cx)(eF.common,t===eG.Q2.light&&eF.light,t===eG.Q2.darken&&eF.darken,2===r&&eF.size4,o===N.X.PENDING&&eF.statusPending,o===N.X.PAUSED&&eF.statusPaused,o===N.X.END&&eF.statusEnd);return(0,h.jsx)("div",{className:s,children:e.children})},eF={common:(0,O.iv)({...eO,display:"block",transform:"scale(1)",caretColor:"transparent",background:"transparent",color:p.colorBody}),light:(0,O.iv)(eq),darken:(0,O.iv)(eK),size4:(0,O.iv)({"&&":{[c.fontSize]:"24px",[c.fontSizeBoardCell]:"20px",[c.fontSizeFinishedBanner]:"20px",[c.sizeBoardCell]:"48px"}}),statusPending:(0,O.iv)({"&&":{[u.colorBorderBoard2]:"transparent",[u.colorBorderBoard3]:"transparent"}}),statusPaused:(0,O.iv)({"&&":{[u.colorBorderBoard2]:"transparent",[u.colorBorderBoard3]:"transparent"}}),statusEnd:(0,O.iv)({"&&":{[u.colorBorderBoard2]:"transparent",[u.colorBorderBoard3]:"transparent"}})};class eH extends g.Component{shouldComponentUpdate(e){let t=this.props;return t.storageKey!==e.storageKey||!(0,m.Z)(t.initialData,e.initialData)}render(){let{storageKey:e,initialData:t}=this.props;return(0,h.jsx)(M,{storageKey:e,initialData:t,children:(0,h.jsx)(eQ,{children:(0,h.jsx)(ew,{})})})}}eH.displayName="SudokuGame",eH.propTypes={storageKey:B().string,initialData:B().any};var eV=eH}}]);