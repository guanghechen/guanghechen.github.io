"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9171:function(e,t,o){o.d(t,{D:function(){return n}});var r=o(55402),s=o(95050),i=o(67294);let a=[["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"],["#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"]],l=()=>{let e=a.length;return a[Math.min(e-1,Math.floor(Math.random()*e))]},n=()=>{let e=i.useRef(!1),t=i.useRef(null);i.useEffect(()=>(t.current=new s.Z,()=>{t.current=null}),[]);let o=(0,r.$0)(async()=>{if(null==t.current)return;let o=t.current,r=l(),s=window.screen.width<=900;e.current=!0;try{await o.addConfetti({confettiColors:r,confettiRadius:s?4:8,confettiNumber:s?100:300})}finally{e.current=!1}});return o}},34781:function(e,t,o){o.d(t,{p:function(){return l},X:function(){return s}}),(r=s||(s={}))[r.PENDING=1]="PENDING",r[r.RUNNING=2]="RUNNING",r[r.PAUSED=4]="PAUSED",r[r.END=8]="END";var r,s,i=o(76955),a=o(15658);class l extends i.jz{constructor(e){super();let t=new i.ZM(e.status),o=new i.ZM(e.elapsedTime),r=Date.now(),l=(e,t)=>{let i=Date.now();if(t===s.RUNNING){let e=i-r;o.setState(t=>t+e)}else e===s.PENDING&&o.setState(0);r=i};t.subscribe({next:(e,t)=>l(e,t),complete:()=>{}});let n=(0,a.iP)(()=>{let e=t.getSnapshot();l(e,e)});this.status$=t,this.elapsedTime$=o,this._disposables.push(new i.JT(n))}}},34185:function(e,t,o){o.d(t,{vk:function(){return O},oh:function(){return d},tR:function(){return eU},aK:function(){return eW},X2:function(){return eH},ZP:function(){return eL},vD:function(){return T},eK:function(){return R}});var r,s,i,a,l,n,d,c,u,p,h=o(85893),m=o(45697),S=o.n(m),B=o(67294),g=o(60459),f=o(55402),x=o(59976),C=o(15658),v=o(45684),b=o(13339);let k="2023-06-06";(r=n||(n={})).ERASE="ERASE",r.HINT="HINT",r.WRITE="WRITE",(s=d||(d={})).RESTART="RESTART",s.RESET="RESET",s.START="START",s.PAUSE="PAUSE",s.RESUME="RESUME",s.ACTIVE="ACTIVE",s.HINT="HINT",s.TOGGLE_CHEAT="TOGGLE_CHEAT",s.INPUT="INPUT";let y=B.createContext(null);y.displayName="SudokuContextType";let T=()=>{let e=B.useContext(y);return e.dispatch},R=e=>{let t=B.useContext(y),o=e(t);return(0,x.vc)(o)};var $=o(43118),N=o(34781);let E={},z={},_=e=>{let t=z[e];return void 0===t&&(t=new $.$X(e),z[e]=t),t},j=e=>{let t=E[e];return void 0===t&&(t=new $.wY({childMatrixWidth:e}),E[e]=t),t};function D(e,t,o){let{BOARD:r}=e;for(let e=0;e<r;++e)if(t[e]!==o[e])return!1;return!0}function I(e,t){if(t<0)return{r:-1,c:-1};let{MATRIX:o}=e;return{r:Math.floor(t/o),c:t%o}}let P=function(e){var t,o;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,{SUDOKU_SIZE_SQRT:s=r.SUDOKU_SIZE_SQRT,difficulty:i=r.difficulty,score:a=r.score,radix:l=r.radix,activatedPos:d=null!==(t=r.activatedPos)&&void 0!==t?t:-1,gameTick:c=r.gameTick,puzzle:u=r.puzzle,solution:p=r.solution,instructions:h=r.instructions.slice(),elapsedTime:m=r.elapsedTime}=null!=e?e:{},{puzzle:S,solution:B}=null!=u&&null!=p?{puzzle:u,solution:p}:j(s).createSudoku(i/100),g=_(s),f=(0,$.s0)(g);(0,$._g)(S,f,g),function(e,t,o){for(let r of o)switch(r.type){case n.ERASE:{let{r:o,c:s}=r.payload,i=o*e.MATRIX+s;t[i]=-1;break}case n.WRITE:{let{r:o,c:s,v:i}=r.payload,a=o*e.MATRIX+s;t[a]=i}}}(g,f,h);let x=null!==(o=null==e?void 0:e.status)&&void 0!==o?o:D(g,f,B)?N.X.END:m>0||!D(g,f,S)?N.X.PAUSED:N.X.PENDING;return{status:x,elapsedTime:m,SUDOKU_SIZE_SQRT:s,difficulty:i,radix:l,score:a,attempt:f,instructions:h,puzzle:S,solution:B,activatedPos:d,hintPos:-1,cheatVisible:!1,gameTick:c,attemptTick:0,hintTick:0}},U={status:N.X.PENDING,elapsedTime:0,SUDOKU_SIZE_SQRT:3,difficulty:20,radix:10,score:0,puzzle:null,solution:null,attempt:null,instructions:[],activatedPos:-1,hintPos:-1,cheatVisible:!1,gameTick:0,attemptTick:0,hintTick:0};var w=o(35369),A=o(73935);let Z=(e,t,o,r)=>{let{BOARD:s}=e;for(let e=0;e<s;++e)if(-1===t[e])return e;for(let e=0;e<s;++e)if(-1===o[e]&&t[e]!==r[e])return e;return -1};class X{constructor(e){var t=this;this.restart=()=>{let e=this.viewmodel,t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),o=e.difficulty$.getSnapshot(),r=j(t),{puzzle:s,solution:i}=r.createSudoku(o),a=(0,$.s0)(r.size);(0,$._g)(s,a,r.size),e.status$.next(N.X.PENDING),e.gameTick$.setState(e=>e+1),e.puzzle$.next(s),e.solution$.next(i),e.attempt$.next(a),e.instructions$.next(w.aV.of()),e.hintPos$.next(-1),e.hintTick$.next(0),e.attemptTick$.next(0)},this.reset=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.viewmodel,{difficulty:r=o.difficulty$.getSnapshot(),SUDOKU_SIZE_SQRT:s=o.SUDOKU_SIZE_SQRT$.getSnapshot(),radix:i=o.radix$.getSnapshot()}=e,a=j(s),{puzzle:l,solution:n}=a.createSudoku(r/100),d=(0,$.s0)(a.size);(0,$._g)(l,d,a.size),o.status$.next(N.X.PENDING),o.SUDOKU_SIZE_SQRT$.next(s),o.difficulty$.next(r),o.radix$.next(i),o.puzzle$.next(l),o.solution$.next(n),o.attempt$.next(d),o.instructions$.next(w.aV.of()),o.hintPos$.next(-1),o.cheatVisible$.next(!1),o.gameTick$.setState(e=>e+1),o.attemptTick$.next(0),o.hintTick$.next(0)},this.start=()=>{let e=this.viewmodel;e.status$.getSnapshot()===N.X.PENDING&&e.status$.next(N.X.RUNNING)},this.pause=()=>{let e=this.viewmodel;e.status$.getSnapshot()===N.X.RUNNING&&e.status$.next(N.X.PAUSED)},this.resume=()=>{let e=this.viewmodel;e.status$.getSnapshot()===N.X.PAUSED&&e.status$.next(N.X.RUNNING)},this._end=()=>{let e=this.viewmodel;if(e.status$.getSnapshot()===N.X.RUNNING){let t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),o=_(t),r=e.attempt$.getSnapshot(),s=e.solution$.getSnapshot();if(!D(o,r,s))return;let i=0,a=e.difficulty$.getSnapshot(),l=e.elapsedTime$.getSnapshot(),n=t**4*1e3;if(l<n){let e=t**4*a/100;i=(n-l)*e/1e3}let d=Math.max(5,Math.round(i));e.status$.next(N.X.END),e.score$.setState(e=>e+d)}},this.activePos=(e,t)=>{let o=this.viewmodel,r=_(o.SUDOKU_SIZE_SQRT$.getSnapshot()),s=e*r.MATRIX+t;o.activatedPos$.next(s)},this.hint=()=>{let e=this.viewmodel,t=e.SUDOKU_SIZE_SQRT$.getSnapshot(),o=e.puzzle$.getSnapshot(),r=e.solution$.getSnapshot(),s=e.attempt$.getSnapshot(),i=e.activatedPos$.getSnapshot(),a=_(t),l=-1===i||-1!==o[i]?Z(a,s,o,r):i,d=I(a,l);e.hintPos$.next(l),e.hintTick$.setState(e=>e+1),e.instructions$.setState(e=>e.push({type:n.HINT,payload:d,timestamp:new Date().toISOString()}))},this.toggleCheatVisibility=e=>{let t=this.viewmodel;t.cheatVisible$.setState(t=>null!=e?e:!t)},this.input=e=>{let t=this.viewmodel;if(t.status$.getSnapshot()!==N.X.RUNNING)return;let o=t.SUDOKU_SIZE_SQRT$.getSnapshot(),{size:r}=j(o);if(!Number.isInteger(e)||e<-1||e>=r.BOARD)return;let s=t.activatedPos$.getSnapshot();if(-1===s)return;let i=t.puzzle$.getSnapshot();if(-1!==i[s])return;let a=t.attempt$.getSnapshot();if(a[s]===e)return;let l=(0,$.s0)(r);(0,$._g)(a,l,r),l[s]=e;let{r:d,c}=I(r,s);t.attempt$.next(l),t.attemptTick$.setState(e=>e+1),t.hintPos$.setState(e=>s===e?-1:e),t.instructions$.setState(t=>t.push({type:n.WRITE,payload:{r:d,c,v:e},timestamp:new Date().toISOString()}))},this.viewmodel=e.viewmodel,this.viewmodel.attempt$.subscribeStateChange(()=>this._end())}}class M extends N.p{constructor(e){super(e),this.getSnapshot=()=>({status:this.status$.getSnapshot(),elapsedTime:this.elapsedTime$.getSnapshot(),SUDOKU_SIZE_SQRT:this.SUDOKU_SIZE_SQRT$.getSnapshot(),difficulty:this.difficulty$.getSnapshot(),radix:this.radix$.getSnapshot(),score:this.score$.getSnapshot(),puzzle:this.puzzle$.getSnapshot(),solution:this.solution$.getSnapshot(),attempt:this.attempt$.getSnapshot(),instructions:Array.from(this.instructions$.getSnapshot()),activatedPos:this.activatedPos$.getSnapshot(),hintPos:this.hintPos$.getSnapshot(),cheatVisible:this.cheatVisible$.getSnapshot(),gameTick:this.gameTick$.getSnapshot(),attemptTick:this.attemptTick$.getSnapshot(),hintTick:this.hintTick$.getSnapshot()}),this.dispatch=e=>{let t=G[e.type];t?(0,A.unstable_batchedUpdates)(()=>{t(this._controller,e)}):console.error(this.constructor.name,"Bad action:",e)},this.SUDOKU_SIZE_SQRT$=new x.ZM(e.SUDOKU_SIZE_SQRT),this.difficulty$=new x.ZM(e.difficulty),this.radix$=new x.ZM(e.radix),this.score$=new x.ZM(e.score),this.puzzle$=new x.ZM(e.puzzle),this.solution$=new x.ZM(e.solution),this.attempt$=new x.ZM(e.attempt),this.instructions$=new x.ZM(w.aV.of(...e.instructions)),this.activatedPos$=new x.ZM(e.activatedPos),this.hintPos$=new x.ZM(e.hintPos),this.cheatVisible$=new x.ZM(e.cheatVisible),this.gameTick$=new x.ZM(e.gameTick),this.attemptTick$=new x.ZM(e.attemptTick),this.hintTick$=new x.ZM(e.hintTick);let t=new X({viewmodel:this});this._controller=t}}let G={[d.RESTART]:e=>{e.restart()},[d.RESET]:(e,t)=>{let o=t.payload;e.reset(o)},[d.START]:e=>{e.start()},[d.PAUSE]:e=>{e.pause()},[d.RESUME]:e=>{e.resume()},[d.ACTIVE]:(e,t)=>{let{r:o,c:r}=t.payload;e.activePos(o,r)},[d.HINT]:e=>{e.hint()},[d.TOGGLE_CHEAT]:(e,t)=>{let o=t.payload;e.toggleCheatVisibility(o)},[d.INPUT]:(e,t)=>{let o=t.payload;e.input(o)}},O=e=>{let{storageKey:t,LoadingComponent:o=v.gb}=e,[r,s]=B.useState(void 0),i=B.useMemo(()=>t?(0,b.Yu)(t):void 0,[t]),a=B.useRef(e.initialData);return(B.useEffect(()=>{e();async function e(){let e=await a.current;if(i){let t=await i.load();null==t||t.version!==k?s(new M(P(e))):s(new M(P({...t.data,...e})))}else s(new M(P(e)))}},[i]),B.useEffect(()=>{if(r)return()=>{console.log("[waw] unmounting sudoku viewmodel."),r.dispose()}},[r]),r)?(0,h.jsxs)(B.Fragment,{children:[(0,h.jsx)(y.Provider,{value:r,children:e.children}),i&&(0,h.jsx)(K,{viewmodel:r,storage:i,storageKey:t})]}):(0,h.jsx)(o,{})},K=e=>{let{viewmodel:t,storage:o,storageKey:r}=e,s=(0,x.sD)(t,["SUDOKU_SIZE_SQRT$","difficulty$","radix$","score$","puzzle$","solution$","instructions$","activatedPos$","gameTick$"]),i=B.useMemo(()=>(0,g.P2)(()=>{let e={elapsedTime:t.elapsedTime$.getSnapshot(),SUDOKU_SIZE_SQRT:t.SUDOKU_SIZE_SQRT$.getSnapshot(),difficulty:t.difficulty$.getSnapshot(),radix:t.radix$.getSnapshot(),score:t.score$.getSnapshot(),puzzle:t.puzzle$.getSnapshot(),solution:t.solution$.getSnapshot(),instructions:Array.from(t.instructions$.getSnapshot()),activatedPos:t.activatedPos$.getSnapshot(),gameTick:t.gameTick$.getSnapshot()};return C.kg.log("saving ".concat(r,". data:"),e),o.save({version:k,data:e})},200),[t,o,r]);return B.useEffect(()=>void i(),[i,s]),(0,f.i7)(()=>i.flushSync(),[],!1),(0,h.jsx)(B.Fragment,{})};var q=o(18872),F=o(6260),Q=o(72908),H=o(9171),V=o(41616),W=o(70655),L=o(1849),Y=o(83321);(i=c||(c={})).fontSize="--sudoku_fontSize",i.fontSizeBoardCell="--sudoku_fontSizeBoardCell",i.fontSizeFinishedBanner="--sudoku_fontSizeFinishedBanner",i.sizeBoardCell="--sudoku_sizeBoardCell",i.sizeBorderBoard1="--sudoku_sizeBorderBoard1",i.sizeBorderBoard2="--sudoku_sizeBorderBoard2",i.sizeBorderBoard3="--sudoku_sizeBorderBoard3",(a=u||(u={})).colorBgBoard="--sudoku_colorBgBoard",a.colorBgBoardCell="--sudoku_colorBgBoardCell",a.colorBgBoardCellActivated="--sudoku_colorBgBoardCellActivated",a.colorBgBoardCellDuplicated="--sudoku_colorBgBoardCellDuplicated",a.colorBgBoardCellRelated="--sudoku_colorBgBoardCellRelated",a.colorBgBoardCellSame="--sudoku_colorBgBoardCellSame",a.colorBoardCellActivated="--sudoku_colorBoardCellActivated",a.colorBoardCellAttempt="--sudoku_colorBoardCellAttempt",a.colorBoardCellHint="--sudoku_colorBoardCellHint",a.colorBoardCellPreset="--sudoku_colorBoardCellPreset",a.colorBoardCellSame="--sudoku_colorBoardCellSame",a.colorBody="--sudoku_colorBody",a.colorBorderBoard2="--sudoku_colorBorderBoard2",a.colorBorderBoard3="--sudoku_colorBorderBoard3",a.colorElapsedTime="--sudoku_colorElapsedTime",a.colorScore="--sudoku_colorScore",(l=p||(p={}))[l.colorBgBoard="var(--sudoku_colorBgBoard)"]="colorBgBoard",l[l.colorBgBoardCell="var(--sudoku_colorBgBoardCell)"]="colorBgBoardCell",l[l.colorBgBoardCellActivated="var(--sudoku_colorBgBoardCellActivated)"]="colorBgBoardCellActivated",l[l.colorBgBoardCellDuplicated="var(--sudoku_colorBgBoardCellDuplicated)"]="colorBgBoardCellDuplicated",l[l.colorBgBoardCellRelated="var(--sudoku_colorBgBoardCellRelated)"]="colorBgBoardCellRelated",l[l.colorBgBoardCellSame="var(--sudoku_colorBgBoardCellSame)"]="colorBgBoardCellSame",l[l.colorBoardCellActivated="var(--sudoku_colorBoardCellActivated)"]="colorBoardCellActivated",l[l.colorBoardCellAttempt="var(--sudoku_colorBoardCellAttempt)"]="colorBoardCellAttempt",l[l.colorBoardCellHint="var(--sudoku_colorBoardCellHint)"]="colorBoardCellHint",l[l.colorBoardCellPreset="var(--sudoku_colorBoardCellPreset)"]="colorBoardCellPreset",l[l.colorBoardCellSame="var(--sudoku_colorBoardCellSame)"]="colorBoardCellSame",l[l.colorBody="var(--sudoku_colorBody)"]="colorBody",l[l.colorBorderBoard2="var(--sudoku_colorBorderBoard2)"]="colorBorderBoard2",l[l.colorBorderBoard3="var(--sudoku_colorBorderBoard3)"]="colorBorderBoard3",l[l.colorElapsedTime="var(--sudoku_colorElapsedTime)"]="colorElapsedTime",l[l.colorScore="var(--sudoku_colorScore)"]="colorScore",l[l.fontSize="var(--sudoku_fontSize)"]="fontSize",l[l.fontSizeBoardCell="var(--sudoku_fontSizeBoardCell)"]="fontSizeBoardCell",l[l.fontSizeFinishedBanner="var(--sudoku_fontSizeFinishedBanner)"]="fontSizeFinishedBanner",l[l.sizeBoardCell="var(--sudoku_sizeBoardCell)"]="sizeBoardCell",l[l.sizeBorderBoard1="var(--sudoku_sizeBorderBoard1)"]="sizeBorderBoard1",l[l.sizeBorderBoard2="var(--sudoku_sizeBorderBoard2)"]="sizeBorderBoard2",l[l.sizeBorderBoard3="var(--sudoku_sizeBorderBoard3)"]="sizeBorderBoard3";class J extends B.PureComponent{render(){let{status:e}=this.props,{start:t,resume:o,restart:r}=this;switch(e){case N.X.PENDING:return(0,h.jsx)("div",{className:ee.overlay,children:(0,h.jsx)(Y.Z,{className:ee.button,variant:"contained",color:"primary",startIcon:(0,h.jsx)(W.Z,{}),onClick:t,children:"Start"})});case N.X.PAUSED:return(0,h.jsx)("div",{className:ee.overlay,children:(0,h.jsx)(Y.Z,{className:ee.button,variant:"contained",color:"primary",startIcon:(0,h.jsx)(V.Z,{}),onClick:o,children:"Resume"})});case N.X.END:return(0,h.jsx)("div",{className:ee.overlay,children:(0,h.jsxs)("div",{className:ee.finishedBanner,children:[(0,h.jsx)("p",{children:"You win \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89"}),(0,h.jsx)(Y.Z,{className:ee.button,variant:"contained",color:"primary",startIcon:(0,h.jsx)(L.Z,{}),onClick:r,children:"New"})]})});default:return(0,h.jsx)(B.Fragment,{})}}componentDidUpdate(e){let t=this.props.status,o=e.status;o!==t&&t===N.X.END&&this.props.throwConfetti()}constructor(...e){super(...e),this.start=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.START})},this.resume=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.RESUME})},this.restart=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.RESTART})}}}J.displayName="GameOverlayComponent",J.propTypes={status:S().any.isRequired,dispatchSudokuAction:S().func.isRequired,throwConfetti:S().func.isRequired};let ee={overlay:(0,q.iv)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",userSelect:"none"}),confettiCanvas:(0,q.iv)({position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"}),button:(0,q.iv)({"&&, &&:hover":{boxShadow:"4px 4px 16px 0px hsl(0deg 0% 0% / 0.75)"}}),finishedBanner:(0,q.iv)({position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",padding:0,margin:0,fontSize:p.fontSizeFinishedBanner}),playerName:(0,q.iv)({color:"#e200e2"})},et=()=>{let e=T(),t=R(e=>e.status$),o=(0,H.D)();return(0,h.jsx)(J,{status:t,dispatchSudokuAction:e,throwConfetti:o})};var eo=o(45018),er=o(55819),es=o(45929);class ei extends B.PureComponent{render(){let{status:e,SUDOKU_SIZE_SQRT:t,difficulty:o,radix:r}=this.props,{onSizeChange:s,onRadixChange:i,onDifficultyChange:a}=this,l=e===N.X.PENDING;return(0,h.jsxs)("div",{className:ea.settings,children:[(0,h.jsxs)("div",{className:ea.item,children:[(0,h.jsx)("span",{children:"Size:"}),(0,h.jsxs)(eo.Z,{variant:"standard",value:t,disabled:!l,onChange:s,children:[(0,h.jsx)(er.Z,{value:2,children:"4x4"}),(0,h.jsx)(er.Z,{value:3,children:"9x9"}),(0,h.jsx)(er.Z,{value:4,children:"16x16"})]})]}),(0,h.jsxs)("div",{className:ea.item,children:[(0,h.jsx)("span",{children:"Radix:"}),(0,h.jsxs)(eo.Z,{variant:"standard",value:r,disabled:!l,onChange:i,children:[(0,h.jsx)(er.Z,{value:10,children:"Decimal (x10)"}),(0,h.jsx)(er.Z,{value:16,children:"Hexadecimal (x16)"})]})]}),(0,h.jsxs)("div",{className:(0,q.cx)(ea.item,ea.difficulty),children:[(0,h.jsx)("span",{children:"Difficulty:"}),(0,h.jsx)(es.ZP,{value:o,disabled:!l,step:1,min:0,max:100,valueLabelDisplay:"auto","aria-labelledby":"sudoku-difficulty",onChange:a})]})]})}constructor(...e){super(...e),this.onSizeChange=e=>{let{dispatchSudokuAction:t}=this.props;t({type:d.RESET,payload:{SUDOKU_SIZE_SQRT:Number(e.target.value)}})},this.onRadixChange=e=>{let{dispatchSudokuAction:t}=this.props;t({type:d.RESET,payload:{radix:Number(e.target.value)}})},this.onDifficultyChange=(e,t)=>{let{dispatchSudokuAction:o}=this.props;o({type:d.RESET,payload:{difficulty:t}})}}}ei.displayName="GameSettingsComponent",ei.propTypes={status:S().any.isRequired,SUDOKU_SIZE_SQRT:S().number.isRequired,difficulty:S().number.isRequired,radix:S().number.isRequired,dispatchSudokuAction:S().func.isRequired};let ea={settings:(0,q.iv)({display:"block",maxWidth:"min(90vw, 400px)",margin:"auto"}),item:(0,q.iv)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",margin:"1rem 0","& > *":{marginRight:"1rem"}}),difficulty:(0,q.iv)({flexWrap:"nowrap","& > span":{"&:first-child":{flex:"0 0 auto"}}})},el=()=>{let e=T(),t=R(e=>e.status$),o=R(e=>e.SUDOKU_SIZE_SQRT$),r=R(e=>e.difficulty$),s=R(e=>e.radix$);return(0,h.jsx)(ei,{status:t,SUDOKU_SIZE_SQRT:o,difficulty:r,radix:s,dispatchSudokuAction:e})};var en=o(27484),ed=o.n(en),ec=o(1646),eu=o.n(ec),ep=o(75303),eh=o(53247),em=o(22961),eS=o(76997),eB=o(93946),eg=o(78262),ef=o(9581),ex=o(31425),eC=o(65464);class ev extends B.PureComponent{render(){let{elapsedTime:e}=this.props;return(0,h.jsxs)("div",{className:eb.elapsedTime,children:[(0,h.jsx)(eS.Z,{title:"Time used",children:(0,h.jsx)(eC.Z,{})}),"\xa0\xa0",(0,h.jsx)("span",{children:e})]},"elapsed-time")}}ev.displayName="ElapsedTimeComponent",ev.propTypes={elapsedTime:S().string.isRequired};let eb={elapsedTime:(0,q.iv)({flex:"0 1 auto",display:"flex",alignItems:"center",fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif",color:p.colorElapsedTime,userSelect:"none"})};ed().extend(eu());let ek=()=>{let e=R(e=>e.elapsedTime$),t=ed().duration(e).format("HH:mm:ss");return(0,h.jsx)(ev,{elapsedTime:t})};class ey extends B.Component{render(){let{containerRef:e,status:t,score:o}=this.props,{isRestartDialogVisible:r}=this.state,{closeRestartDialog:s,hint:i,pauseGame:a,restartGame:l,showCheat:n,startGame:d}=this;return(0,h.jsxs)("div",{className:eT.toolbar,children:[(0,h.jsxs)("div",{className:(0,q.cx)(eT.item,eT.buttons),children:[(0,h.jsx)(Y.Z,{variant:"contained",color:"inherit",startIcon:(0,h.jsx)(L.Z,{}),onClick:d,children:"New"}),(0,h.jsx)(Y.Z,{variant:"contained",color:"inherit",disabled:t!==N.X.RUNNING,startIcon:(0,h.jsx)(ep.Z,{}),onClick:i,children:"HINT"}),(0,h.jsx)(Y.Z,{variant:"contained",color:"secondary",disabled:t!==N.X.RUNNING,startIcon:(0,h.jsx)(em.Z,{}),onClick:n,children:"Cheat"})]}),(0,h.jsxs)("div",{className:(0,q.cx)(eT.item,eT.state),children:[(0,h.jsx)("div",{className:eT.stateButtons,children:t===N.X.RUNNING&&(0,h.jsx)(eS.Z,{title:"Pause",children:(0,h.jsx)(eB.Z,{color:"primary",onClick:a,children:(0,h.jsx)(eh.Z,{})})})},"state-buttons"),(0,h.jsx)(ek,{}),(0,h.jsxs)("div",{className:eT.score,children:["Score: ",o]},"score")]}),(0,h.jsxs)(eg.Z,{container:e.current,open:r,onClose:s,"aria-labelledby":"confirm-to-restart",children:[(0,h.jsx)(ef.Z,{children:"Are you sure you want to start a new game?"}),(0,h.jsxs)(ex.Z,{children:[(0,h.jsx)(Y.Z,{color:"inherit",onClick:s,children:"Cancel"}),(0,h.jsx)(Y.Z,{color:"primary",onClick:l,children:"Confirm"})]})]})]})}constructor(e){super(e),this.closeRestartDialog=()=>{this.setState({isRestartDialogVisible:!1})},this.hint=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.HINT})},this.pauseGame=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.PAUSE})},this.restartGame=()=>{let{dispatchSudokuAction:e}=this.props;this.setState({isRestartDialogVisible:!1}),e({type:d.RESTART})},this.showCheat=()=>{let{dispatchSudokuAction:e}=this.props;e({type:d.TOGGLE_CHEAT,payload:!0})},this.startGame=()=>{let{status:e}=this.props;e===N.X.PENDING||e===N.X.END?this.restartGame():this.setState({isRestartDialogVisible:!0})},this.state={isRestartDialogVisible:!1}}}ey.displayName="GameToolbarComponent",ey.propTypes={containerRef:S().object.isRequired,status:S().any.isRequired,score:S().number.isRequired,dispatchSudokuAction:S().func.isRequired};let eT={toolbar:(0,q.iv)({display:"block",maxWidth:"min(90vw, 400px)",margin:"auto"}),item:(0,q.iv)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",margin:"1rem 0","> *":{marginRight:"1rem"}}),buttons:(0,q.iv)({justifyContent:"space-around","> button":{margin:"0 4px"}}),state:(0,q.iv)({justifyContent:"center",margin:"2rem 0 0",height:"48px"}),stateButtons:(0,q.iv)({flex:"0 1 auto",display:"flex",alignItems:"center",justifyContent:"center",margin:"0",userSelect:"none"}),score:(0,q.iv)({flex:"0 1 auto",color:p.colorScore,overflow:"hidden",textOverflow:"ellipsis",fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif"})};ed().extend(eu());let eR=e=>{let{containerRef:t}=e,o=T(),r=R(e=>e.status$),s=R(e=>e.score$);return(0,h.jsx)(ey,{containerRef:t,status:r,score:s,dispatchSudokuAction:o})};class e$ extends B.PureComponent{render(){let{SUDOKU_SIZE_SQRT:e}=this.props,t=e*e,o=[];for(let r=e,s=-1;r<t;r+=e,++s){let e="calc((".concat(r," * ").concat(p.sizeBoardCell,") + ").concat(r+s,"px)");o.push((0,h.jsx)("div",{className:eN.horizontalBoarder,style:{top:e}},"h-".concat(r))),o.push((0,h.jsx)("div",{className:eN.verticalBorder,style:{left:e}},"v-".concat(r)))}return(0,h.jsx)(B.Fragment,{children:o})}}e$.displayName="SudokuBoardBorders",e$.propTypes={SUDOKU_SIZE_SQRT:S().number.isRequired};let eN={horizontalBoarder:(0,q.iv)({position:"absolute",boxSizing:"content-box",left:"0",right:"0",bottom:"unset",width:"calc(100% + 2px)",height:p.sizeBorderBoard2,background:p.colorBorderBoard2}),verticalBorder:(0,q.iv)({position:"absolute",boxSizing:"content-box",top:"0",bottom:"0",right:"unset",height:"calc(100% + 2px)",width:p.sizeBorderBoard2,background:p.colorBorderBoard2})};function eE(e,t){let{BOARD:o,MATRIX:r,BASE_1:s,BASE_3:i}=e,a=Array(o).fill(!1),l=Array(r).fill(0);for(let e=0;e<o;e+=r){l.fill(0);for(let o=e,s=e+r;o<s;++o){let e=t[o];-1!==e&&(l[e]+=1)}for(let o=e,s=e+r;o<s;++o){let e=t[o];-1!==e&&l[e]>1&&(a[o]=!0)}}for(let e=0;e<r;++e){l.fill(0);for(let s=e;s<o;s+=r){let e=t[s];-1!==e&&(l[e]+=1)}for(let s=e;s<o;s+=r){let e=t[s];-1!==e&&l[e]>1&&(a[s]=!0)}}for(let e=0;e<o;e+=i)for(let o=0;o<r;o+=s){l.fill(0);for(let a=e,n=e+i;a<n;a+=r)for(let e=a+o,r=e+s;e<r;++e){let o=t[e];-1!==o&&(l[o]+=1)}for(let n=e,d=e+i;n<d;n+=r)for(let e=n+o,r=e+s;e<r;++e){let o=t[e];-1!==o&&l[o]>1&&(a[e]=!0)}}return a}class ez extends B.PureComponent{render(){let e;let{SUDOKU_SIZE_SQRT:t,radix:o,puzzle:r,solution:s,attempt:i}=this.props,{activatedPos:a,hintTick:l,hintPos:n,onCellClick:d}=this.props;t!==this.size.BASE_1&&(this.size=new $.$X(t),this.matrixCoordinateMap=(0,$.iN)(this.size));let{size:c,matrixCoordinateMap:u}=this,{r:p,c:m}=I(c,a),S=u[a],g=-1===a?-1:i[a],{r:f=-1,c:x=-1}=I(c,n),C=-1===n?-1:s[n];{let t=-1!==n&&-1===r[n];if(t){let t=i[n];i[n]=s[n],e=eE(c,i),i[n]=t}else e=eE(c,i)}let v=[];for(let s=0,a=0;s<c.MATRIX;++s){let n=[];for(let B=0;B<c.MATRIX;++B,++a){let c=i[a],v=s===f&&B===x,b=s===p&&B===m,k=!b&&(s===p||B===m||u[a]===S),y=-1!==g&&c===g&&!k&&!b,T=!!e[a],R=v?C:c,$=(0,h.jsx)("span",{className:(0,q.cx)(ej.boardCell,{[ej.boardCellLeftSeamless]:0===B,[ej.boardCellLeft]:B>0&&B%t==0,[ej.boardCellTopSeamless]:0===s,[ej.boardCellTop]:s>0&&s%t==0,[ej.boardCellPreset]:-1!==c,[ej.boardCellAttempt]:c!==r[a],[ej.boardCellDuplicated]:!v&&T,[ej.boardCellHint]:v,[ej.boardCellActivated]:!T&&b,[ej.boardCellRelated]:!T&&k,[ej.boardCellSame]:!T&&y}),children:(0,h.jsx)("span",{className:ej.boardCellContent,"data-sudoku-hint":v,onClick:()=>d(s,B),children:-1===R?"":(R+1).toString(o)})},v?"".concat(B,"-hint-").concat(l):B);n.push($)}v.push((0,h.jsx)("div",{className:ej.boardRow,children:n},s))}return(0,h.jsx)(B.Fragment,{children:v})}constructor(e){super(e),this.size=new $.$X(e.SUDOKU_SIZE_SQRT),this.matrixCoordinateMap=(0,$.iN)(this.size)}}ez.displayName="SudokuBoardCells",ez.propTypes={SUDOKU_SIZE_SQRT:S().number.isRequired,radix:S().number.isRequired,puzzle:S().array.isRequired,solution:S().array.isRequired,attempt:S().array.isRequired,activatedPos:S().number.isRequired,hintTick:S().number.isRequired,hintPos:S().number.isRequired,onCellClick:S().func};let e_={hint:(0,q.F4)({"0%":{transform:"scale(1) rotate(0deg)"},"50%":{transform:"scale(2) rotate(200deg)"},"100%":{transform:"scale(1.3) rotate(360deg)"}})},ej={boardRow:(0,q.iv)({display:"flex"}),boardCell:(0,q.iv)({flex:"0 0 auto",overflow:"hidden",display:"inline-block",boxSizing:"content-box",width:p.sizeBoardCell,height:p.sizeBoardCell,borderColor:"transparent",borderStyle:"solid",borderTopWidth:p.sizeBorderBoard1,borderRightWidth:0,borderBottomWidth:0,borderLeftWidth:p.sizeBorderBoard1,backgroundColor:p.colorBgBoardCell,backgroundClip:"content-box",userSelect:"none",cursor:"pointer"}),boardCellContent:(0,q.iv)({display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",height:"100%",width:"100%",padding:"4px",margin:0,'&[data-sudoku-hint="true"]':{animation:"0.5s 0s ".concat(e_.hint," linear 1 both normal")}}),boardCellLeftSeamless:(0,q.iv)({borderLeftWidth:0}),boardCellLeft:(0,q.iv)({borderLeftWidth:p.sizeBorderBoard2}),boardCellTopSeamless:(0,q.iv)({borderTopWidth:0}),boardCellTop:(0,q.iv)({borderTopWidth:p.sizeBorderBoard2}),boardCellPreset:(0,q.iv)({color:p.colorBoardCellPreset}),boardCellHint:(0,q.iv)({"&&":{color:p.colorBoardCellHint}}),boardCellAttempt:(0,q.iv)({color:p.colorBoardCellAttempt}),boardCellDuplicated:(0,q.iv)({background:p.colorBgBoardCellDuplicated,borderColor:p.colorBgBoard}),boardCellActivated:(0,q.iv)({color:p.colorBoardCellActivated,background:p.colorBgBoardCellActivated,borderColor:p.colorBgBoard}),boardCellRelated:(0,q.iv)({background:p.colorBgBoardCellRelated,borderColor:p.colorBgBoard}),boardCellSame:(0,q.iv)({color:p.colorBoardCellSame,background:p.colorBgBoardCellSame,borderColor:p.colorBgBoard})};class eD extends B.PureComponent{render(){let{SUDOKU_SIZE_SQRT:e,radix:t,puzzle:o,solution:r,attempt:s,status:i,activatedPos:a,hintTick:l,hintPos:n,overlay:d}=this.props,{onCellClick:c}=this;return(0,h.jsxs)("div",{className:eP.container,children:[(0,h.jsx)("div",{className:eP.overlay,"data-sudoku-status":i,children:d}),(0,h.jsx)(e$,{SUDOKU_SIZE_SQRT:e}),(0,h.jsx)("div",{className:eP.boardWrapper,"data-sudoku-status":i,children:(0,h.jsx)(ez,{SUDOKU_SIZE_SQRT:e,puzzle:o,solution:r,radix:t,activatedPos:a,hintTick:l,attempt:s,hintPos:n,onCellClick:c})})]})}constructor(...e){super(...e),this.onCellClick=(e,t)=>{let{dispatchSudokuAction:o,onCellClick:r}=this.props;null==r||r(e,t),o({type:d.ACTIVE,payload:{r:e,c:t}})}}}eD.displayName="SudokuBoardComponent",eD.propTypes={SUDOKU_SIZE_SQRT:S().number.isRequired,radix:S().number.isRequired,puzzle:S().array.isRequired,solution:S().array.isRequired,attempt:S().array.isRequired,status:S().any.isRequired,activatedPos:S().number.isRequired,hintTick:S().number.isRequired,hintPos:S().number.isRequired,overlay:S().node,dispatchSudokuAction:S().func.isRequired,onCellClick:S().func};let eI={finished:(0,q.F4)({"0%":{transform:"translate(0, -100px)"},"80%":{transform:"translate(0, 20px)"},"90%":{transform:"translate(0, -10px)"},"95%":{transform:"translate(0, 2px)"},"100%":{transform:"translate(0, 0)"}})},eP={container:(0,q.iv)({position:"relative",boxSizing:"content-box",display:"inline-block",width:"fit-content",padding:0,border:"".concat(p.sizeBorderBoard3," solid ").concat(p.colorBorderBoard3),margin:0,backgroundColor:p.colorBgBoard,fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif"}),overlay:(0,q.iv)({zIndex:2,position:"absolute",top:0,left:0,right:0,bottom:0,display:"none",width:"100%",height:"100%",overflow:"hidden",background:"linear-gradient(45deg, hsla(30deg,20%,90%,0.2), hsla(210deg,20%,100%,0.3))",['&[data-sudoku-status="'.concat(N.X.PENDING,'"]')]:{display:"block",backdropFilter:"blur(1px)"},['&[data-sudoku-status="'.concat(N.X.RUNNING,'"]')]:{display:"none"},['&[data-sudoku-status="'.concat(N.X.PAUSED,'"]')]:{display:"block",backdropFilter:"blur(16px)"},['&[data-sudoku-status="'.concat(N.X.END,'"]')]:{display:"block",backdropFilter:"blur(4px)",color:"#FF00FF",animation:"1s 0s ".concat(eI.finished," ease-in-out")}}),boardWrapper:(0,q.iv)({display:"flex",flexDirection:"column",fontSize:p.fontSizeBoardCell,['&[data-sudoku-status="'.concat(N.X.PENDING,'"]')]:{borderColor:"transparent"},['&[data-sudoku-status="'.concat(N.X.PAUSED,'"]')]:{borderColor:"transparent"},['&[data-sudoku-status="'.concat(N.X.END,'"]')]:{borderColor:"transparent"}})},eU=e=>{let{attempt:t,hintPos:o,overlay:r,onCellClick:s}=e,i=T(),a=R(e=>e.SUDOKU_SIZE_SQRT$),l=R(e=>e.radix$),n=R(e=>e.puzzle$),d=R(e=>e.solution$),c=R(e=>e.status$),u=R(e=>e.activatedPos$),p=R(e=>e.hintTick$);return(0,h.jsx)(eD,{SUDOKU_SIZE_SQRT:a,radix:l,puzzle:n,solution:d,attempt:t,status:c,activatedPos:u,hintTick:p,hintPos:o,overlay:r,dispatchSudokuAction:i,onCellClick:s})};var ew=o(98271);class eA extends B.Component{render(){let{inputRef:e,radix:t}=this.props,{text:o}=this.state,{onChange:r,onKeyDown:s,onFocus:i}=this;return(0,h.jsx)(ew.Z,{inputRef:e,autoFocus:!0,autoComplete:"off",margin:"dense",label:"A ".concat(10===t?"decimal":"hexadecimal"," number"),type:t<=10?"number":"input",fullWidth:!0,value:o,multiline:!1,onChange:r,onFocus:i,onKeyDown:s})}shouldComponentUpdate(e,t){let o=this.props,r=this.state;return t.text!==r.text||e.size!==o.size||e.radix!==o.radix||e.initialValue!==o.initialValue}constructor(e){super(e),this.onChange=e=>{let{radix:t,size:o,onConfirm:r}=this.props,s=this.state.text,i=e.target.value;if(this.setState({text:i}),s.length<=i.length&&o<t){let e=Number.parseInt(i,t);e>0&&e<=o&&r(e)}},this.onKeyDown=e=>{if("Enter"===e.key){let{radix:e,size:t,onConfirm:o}=this.props,r=this.state.text,s=Number.parseInt(r,e);s>=0&&s<=t&&o(s)}},this.onFocus=e=>{e.target.select()};let{radix:t,initialValue:o}=e;this.state={text:o>0?o.toString(t):""}}}eA.displayName="SudokuInputComponent",eA.propTypes={inputRef:S().object.isRequired,size:S().number.isRequired,radix:S().number.isRequired,initialValue:S().number.isRequired,onConfirm:S().func.isRequired};let eZ=e=>{let{size:t,container:o,cellPos:r,visible:s,onCancel:i}=e,a=R(e=>e.radix$),l=R(e=>e.attempt$),n=B.useRef(null),d=r>=0?l[r]+1:0,c=(0,f.$0)(o=>{o>=0&&o<=t&&e.onConfirm(o)}),u=(0,f.$0)(()=>{var e;let t=null===(e=n.current)||void 0===e?void 0:e.value;if("string"==typeof t){let e=Number.parseInt(t,a);c(e)}});return(0,h.jsxs)(eg.Z,{container:o,open:s,onClose:i,"aria-labelledby":"sudoku-input-dialog",children:[(0,h.jsx)(ef.Z,{children:(0,h.jsx)(eA,{inputRef:n,size:t,radix:a,initialValue:d,onConfirm:c},r)}),(0,h.jsxs)(ex.Z,{children:[(0,h.jsx)(Y.Z,{color:"inherit",onClick:i,children:"Cancel"}),(0,h.jsx)(Y.Z,{color:"primary",onClick:u,children:"Confirm"})]})]})},eX={backdrop:{timeout:500}},eM=()=>{let e=T(),t=R(e=>e.SUDOKU_SIZE_SQRT$),o=R(e=>e.puzzle$),r=R(e=>e.solution$),s=R(e=>e.attempt$),i=R(e=>e.hintPos$),a=R(e=>e.cheatVisible$),l=_(t),n=B.useRef(null),c=B.useRef(-1),[u,p]=B.useState(!1),m={closeCheat:(0,f.$0)(()=>{e({type:d.TOGGLE_CHEAT,payload:!1})}),handleInput:(0,f.$0)(t=>{p(!1),e({type:d.INPUT,payload:t-1})}),handleCellClick:(0,f.$0)((e,t)=>{if(-1===e||-1===t)return;let r=e*l.MATRIX+t;-1===o[r]&&(c.current=r,p(!0))})};return(0,f.TK)(()=>e({type:d.PAUSE}),[e]),(0,F.Z)(t>=2&&t<=7,"`childMatrixSize` must be an integer in the range [2, 7]."),(0,h.jsxs)("div",{ref:n,children:[(0,h.jsxs)("div",{className:eG.sudokuWrapper,children:[(0,h.jsx)(el,{}),(0,h.jsx)(eR,{containerRef:n}),(0,h.jsx)("div",{className:eG.sudokuMain,children:(0,h.jsxs)("div",{className:eG.sudokuMainWrapper,children:[(0,h.jsx)(eU,{attempt:s,hintPos:i,overlay:(0,h.jsx)(et,{}),onCellClick:m.handleCellClick}),(0,h.jsx)(Q.Z,{open:a,container:n.current,keepMounted:!0,disableAutoFocus:!0,slotProps:eX,closeAfterTransition:!0,onClose:m.closeCheat,children:(0,h.jsxs)("div",{className:eG.sudokuSolution,onClick:m.closeCheat,children:[(0,h.jsx)("span",{className:eG.sudokuSolutionClose,children:"\xd7"}),(0,h.jsx)("div",{onClick:C.UW,children:(0,h.jsx)(eU,{attempt:r,hintPos:-1})})]})})]})})]}),(0,h.jsx)(eZ,{size:l.BASE_2,container:n.current,cellPos:c.current,visible:u,onCancel:()=>p(!1),onConfirm:m.handleInput})]})},eG={sudokuSolution:(0,q.iv)({position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"#eddede"}),sudokuSolutionClose:(0,q.iv)({position:"absolute",top:"0",right:"0",bottom:"unset",left:"unset",display:"inline-block",height:"48px",width:"48px",lineHeight:"48px",fontSize:"32px",textAlign:"center",verticalAlign:"center",color:"#333",cursor:"pointer"}),sudokuWrapper:(0,q.iv)({display:"block",maxWidth:"90vw",margin:"auto"}),sudokuMain:(0,q.iv)({display:"flex",justifyContent:"center",padding:"1rem",margin:"0"}),sudokuMainWrapper:(0,q.iv)({display:"block",overflow:"auto",fontSize:"16px"})};var eO=o(94101),eK=o(36674);let eq={[c.fontSize]:"18px",[c.fontSizeBoardCell]:"16px",[c.fontSizeFinishedBanner]:"32px",[c.sizeBoardCell]:"32px",[c.sizeBorderBoard1]:"1px",[c.sizeBorderBoard2]:"2px",[c.sizeBorderBoard3]:"3px"},eF={[u.colorBgBoard]:"hsl(0deg, 0%, 50%)",[u.colorBgBoardCell]:"hsl(0deg, 0%, 10%)",[u.colorBgBoardCellActivated]:"hsl(150deg, 50%, 40%)",[u.colorBgBoardCellDuplicated]:"hsl(0deg, 80%, 50%)",[u.colorBgBoardCellRelated]:"hsl(210deg, 31%, 37%)",[u.colorBgBoardCellSame]:"hsl(150deg, 50%, 20%)",[u.colorBoardCellActivated]:"hsl(0deg, 0%, 80%)",[u.colorBoardCellAttempt]:"hsl(210deg, 80%, 60%)",[u.colorBoardCellHint]:"hsl(39deg, 100%, 50%)",[u.colorBoardCellPreset]:"hsl(0deg, 0%, 80%)",[u.colorBoardCellSame]:"hsl(0deg, 0%, 80%)",[u.colorBody]:"hsl(0deg, 0%, 85%)",[u.colorBorderBoard2]:"hsl(0deg, 0%, 70%)",[u.colorBorderBoard3]:"hsl(0deg, 0%, 70%)",[u.colorElapsedTime]:"hsl(0deg, 0%, 80%)",[u.colorScore]:"hsl(120deg, 80%, 70%)"},eQ={[u.colorBgBoard]:"hsl(0deg, 0%, 80%)",[u.colorBgBoardCell]:"hsl(0deg, 0%, 100%)",[u.colorBgBoardCellActivated]:"hsl(210deg, 80%, 60%)",[u.colorBgBoardCellDuplicated]:"hsl(30deg, 100%, 50%)",[u.colorBgBoardCellRelated]:"hsl(207deg, 30%, 92%)",[u.colorBgBoardCellSame]:"hsl(210deg, 60%, 80%)",[u.colorBoardCellActivated]:"hsl(0deg, 0%, 100%)",[u.colorBoardCellAttempt]:"hsl(207deg, 100%, 50%)",[u.colorBoardCellHint]:"hsl(30deg, 100%, 50%)",[u.colorBoardCellPreset]:"hsl(0deg, 0%, 20%)",[u.colorBoardCellSame]:"hsl(0deg, 0%, 20%)",[u.colorBody]:"hsl(0deg, 0%, 30%)",[u.colorBorderBoard2]:"hsl(0deg, 0%, 7%)",[u.colorBorderBoard3]:"hsl(0deg, 0%, 7%)",[u.colorElapsedTime]:"hsl(0deg, 0%, 35%)",[u.colorScore]:"hsl(120deg, 100%, 30%)"},eH=e=>{let t=(0,eK.mY)(e=>e.theme$),o=R(e=>e.status$),r=R(e=>e.SUDOKU_SIZE_SQRT$),s=(0,q.cx)(eV.common,t===eO.Q2.light&&eV.light,t===eO.Q2.darken&&eV.darken,2===r&&eV.size4,o===N.X.PENDING&&eV.statusPending,o===N.X.PAUSED&&eV.statusPaused,o===N.X.END&&eV.statusEnd);return(0,h.jsx)("div",{className:s,children:e.children})},eV={common:(0,q.iv)({...eq,display:"block",transform:"scale(1)",caretColor:"transparent",background:"transparent",color:p.colorBody}),light:(0,q.iv)(eQ),darken:(0,q.iv)(eF),size4:(0,q.iv)({"&&":{[c.fontSize]:"24px",[c.fontSizeBoardCell]:"20px",[c.fontSizeFinishedBanner]:"20px",[c.sizeBoardCell]:"48px"}}),statusPending:(0,q.iv)({"&&":{[u.colorBorderBoard2]:"transparent",[u.colorBorderBoard3]:"transparent"}}),statusPaused:(0,q.iv)({"&&":{[u.colorBorderBoard2]:"transparent",[u.colorBorderBoard3]:"transparent"}}),statusEnd:(0,q.iv)({"&&":{[u.colorBorderBoard2]:"transparent",[u.colorBorderBoard3]:"transparent"}})};class eW extends B.PureComponent{render(){let{storageKey:e,initialData:t}=this.props;return(0,h.jsx)(O,{storageKey:e,initialData:t,children:(0,h.jsx)(eH,{children:(0,h.jsx)(eM,{})})})}}eW.displayName="SudokuGame",eW.propTypes={storageKey:S().string,initialData:S().any};var eL=eW}}]);