(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918,575],{11714:function(e,t,n){Promise.resolve().then(n.bind(n,74706)),Promise.resolve().then(n.bind(n,10685)),Promise.resolve().then(n.bind(n,39552)),Promise.resolve().then(n.bind(n,69867)),Promise.resolve().then(n.bind(n,90680)),Promise.resolve().then(n.bind(n,38342)),Promise.resolve().then(n.bind(n,76100)),Promise.resolve().then(n.bind(n,42935)),Promise.resolve().then(n.bind(n,11381)),Promise.resolve().then(n.bind(n,89888)),Promise.resolve().then(n.bind(n,95091)),Promise.resolve().then(n.bind(n,58990)),Promise.resolve().then(n.bind(n,79633)),Promise.resolve().then(n.bind(n,6874)),Promise.resolve().then(n.bind(n,58364)),Promise.resolve().then(n.bind(n,78357)),Promise.resolve().then(n.bind(n,68345)),Promise.resolve().then(n.bind(n,49964)),Promise.resolve().then(n.bind(n,14135)),Promise.resolve().then(n.t.bind(n,81749,23)),Promise.resolve().then(n.t.bind(n,25250,23)),Promise.resolve().then(n.bind(n,19721)),Promise.resolve().then(n.bind(n,35409)),Promise.resolve().then(n.bind(n,59627))},42935:function(e,t,n){"use strict";n.r(t),n.d(t,{buttonClasses:function(){return r.Z},default:function(){return i.Z},getButtonUtilityClass:function(){return r.F}});var i=n(76718),r=n(74270)},11381:function(e,t,n){"use strict";n.r(t),n.d(t,{circularProgressClasses:function(){return r.Z},default:function(){return i.Z},getCircularProgressUtilityClass:function(){return r.C}});var i=n(25211),r=n(71739)},89888:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},dialogClasses:function(){return r.Z},getDialogUtilityClass:function(){return r.D}});var i=n(5734),r=n(6866)},95091:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},dialogActionsClasses:function(){return r.Z},getDialogActionsUtilityClass:function(){return r.d}});var i=n(95196),r=n(88533)},58990:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},dialogContentClasses:function(){return r.Z},getDialogContentUtilityClass:function(){return r.G}});var i=n(99831),r=n(7305)},79633:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},getIconButtonUtilityClass:function(){return r.r},iconButtonClasses:function(){return r.Z}});var i=n(49565),r=n(82060)},6874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},getMenuItemUtilityClass:function(){return r.K},menuItemClasses:function(){return r.Z}});var i=n(78545),r=n(22807)},58364:function(e,t,n){"use strict";n.r(t),n.d(t,{ModalManager:function(){return i.g},default:function(){return r.Z},getModalUtilityClass:function(){return o.x},modalClasses:function(){return o.Z}});var i=n(14712),r=n(87823),o=n(92694)},78357:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},getSelectUtilityClasses:function(){return r.o},selectClasses:function(){return r.Z}});var i=n(52472),r=n(54630)},68345:function(e,t,n){"use strict";n.r(t),n.d(t,{SliderMark:function(){return i.jz},SliderMarkLabel:function(){return i.J$},SliderRail:function(){return i._U},SliderRoot:function(){return i.l7},SliderThumb:function(){return i.gs},SliderTrack:function(){return i.Uj},SliderValueLabel:function(){return i.Kq},default:function(){return i.ZP},getSliderUtilityClass:function(){return r.k},sliderClasses:function(){return r.Z}});var i=n(23742),r=n(35896)},49964:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},getTextFieldUtilityClass:function(){return r.I},textFieldClasses:function(){return r.Z}});var i=n(82384),r=n(88834)},14135:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},getTooltipUtilityClass:function(){return r.Q},tooltipClasses:function(){return r.Z}});var i=n(50659),r=n(43617)},19721:function(e,t,n){"use strict";function i(e){let{reason:t,children:n}=e;return n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}}),n(99775)},35409:function(e,t,n){"use strict";n.r(t),n.d(t,{SudokuSolverDemo:function(){return h}});var i=n(94026),r=n(52381),o=n(40663),s=n(91175),u=n(74404),l=n.n(u),a=n(64090),c=n(85800);let d=new r.M({childMatrixWidth:3}),{size:f}=d;class h extends a.Component{shouldComponentUpdate(e,t){let n=this.props,i=this.state;return i.previewHeight!==t.previewHeight||i.puzzleText!==t.puzzleText||i.solutionText!==t.solutionText||!(0,s.X)(n.puzzle,e.puzzle)||!(0,s.X)(n.solution,e.solution)}render(){let{previewRef:e,onPuzzleTextChange:t}=this,{previewHeight:n,puzzleText:r,solutionText:o}=this.state;return(0,i.BX)("div",{className:p.container,children:[(0,i.tZ)("textarea",{className:p.editor,style:{height:void 0===n?void 0:n+2},value:r,onChange:t}),(0,i.tZ)("pre",{ref:e,className:p.preview,children:(0,i.tZ)("code",{children:o})})]})}componentDidMount(){let e=this.previewRef.current;if(e){let{height:t}=e.getBoundingClientRect();this.setState({previewHeight:t})}}componentDidUpdate(e){let t=this.previewRef.current;if(t){let{height:e}=t.getBoundingClientRect();this.setState({previewHeight:e})}e.puzzle!==this.props.puzzle&&this.setState({puzzleText:this.stringifyPuzzle(f,this.props.puzzle)}),e.solution!==this.props.solution&&this.setState({solutionText:this.stringifyPuzzle(f,this.props.solution)})}stringifyPuzzle(e,t){return(0,r.OA)(t,e).map(e=>e.map(e=>String(e).padStart(2)).join(" ")).join("\n")}parsePuzzle(e,t){let n=e.split(/\s*\n\s*/g).filter(e=>e.length>0).map(e=>e.split(/\s*[,\s]\s*/g).filter(e=>e.length>0).map(e=>Number(e))).flat();return this.checkPuzzle(n,t)?n:null}checkPuzzle(e,t){if(e.length!==t.BOARD)return!1;for(let n of e)if(!Number.isInteger(n)||n<-1||n>=t.MATRIX)return!1;return!0}constructor(e){super(e),this.onPuzzleTextChange=e=>{let t=e.target.value;this.setState({puzzleText:t});let n=this.parsePuzzle(t,f);null!==n&&d.solve(n,null)&&this.props.onPuzzleChange(n)},this.state={previewHeight:void 0,puzzleText:this.stringifyPuzzle(f,e.puzzle),solutionText:this.stringifyPuzzle(f,e.solution)},this.previewRef={current:null}}}h.displayName="SudokuSolverDemo",h.propTypes={puzzle:l().array.isRequired,solution:l().array.isRequired,onPuzzleChange:l().func.isRequired};let p={container:(0,o.iv)({display:"flex",width:"100%",lineHeight:"28px",fontFamily:"Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif",fontSize:"16px",["@media screen and ".concat(c.u3.smMinus)]:{flexDirection:"column"}}),editor:(0,o.iv)({flex:"1 1 0",boxSizing:"border-box",overflow:"auto",padding:"14px",border:"none",outline:"none",lineHeight:"inherit",fontFamily:"inherit",fontSize:"inherit",resize:"none",transition:"all 0.30s ease-in-out","&:focus":{boxShadow:"0 0 5px rgb(81, 203, 238)",border:"1px solid rgb(81, 203, 238)"},["@media screen and ".concat(c.u3.smMinus)]:{flex:"0 0 auto"}}),preview:(0,o.iv)({flex:"1 1 0",boxSizing:"border-box",overflow:"auto",padding:"14px",margin:"0",color:"#083ca6",background:"#f6f6f6",lineHeight:"inherit",fontFamily:"inherit",fontSize:"inherit","> code":{lineHeight:"inherit",fontFamily:"inherit",fontSize:"inherit"},["@media screen and ".concat(c.u3.smMinus)]:{flex:"0 0 auto"}})}},59627:function(e,t,n){"use strict";n.r(t),n.d(t,{PostDetailPageView:function(){return o}});var i=n(94026);n(64090);var r=n(83448);let o=e=>{let{ast:t,aplayerOptions:n,categories:o,createdAt:s,definitionMap:u,ecmaImports:l,footnoteDefinitionMap:a,images:c,next:d,paginationUrl:f,prev:h,slug:p,tags:g,timeToRead:v,title:m,titleAst:z,toc:b,updatedAt:P}=e.data;return(0,i.tZ)(r._J,{ast:t,aplayerOptions:n,categories:o,createdAt:s,definitionMap:u,ecmaImports:l,footnoteDefinitionMap:a,images:c,next:d,paginationUrl:f,prev:h,slug:p,tags:g,timeToRead:v,title:m,titleAst:z,toc:b,updatedAt:P})};o.displayName="PostDetailPageView"}},function(e){e.O(0,[74,32,4,810,659,714,595,551,800,448,971,69,744],function(){return e(e.s=11714)}),_N_E=e.O()}]);