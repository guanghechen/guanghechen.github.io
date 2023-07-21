"use strict";class PriorityQueue{_compare;_elements=[];_size=0;constructor(e){this._compare=e.compare}*[Symbol.iterator](){const{_elements:e,_size:t}=this;for(let o=1;o<=t;++o)yield e[o]}init(e=[],t=0,o=e.length){if(this.clear(),t>=0&&t<o&&o<=e.length){const{_elements:r}=this;for(let i=t,s=this._size;i<o;++i)r[++s]=e[i];this._size=o-t,this._fastBuild()}}enqueue(e){this._elements[++this._size]=e,this._up(this._size)}enqueues(e,t=0,o=e.length){if(t<0&&(t=0),o>e.length&&(o=e.length),t>=o)return;const r=o-t;if(4*r<this._size){for(let r=t;r<o;++r)this.enqueue(e[r]);return}const{_elements:i}=this;for(let r=t,s=this._size;r<o;++r)i[++s]=e[r];this._size+=r,this._fastBuild()}dequeue(e){if(this._size<1)return void(void 0!==e&&(this._size=1,this._elements[1]=e));const t=this._elements[1];return this._elements[1]=void 0!==e?e:this._elements[this._size--],this._down(1),t}splice(e,t=[],o=0,r=t.length){const{_size:i,_elements:s}=this;let n=0;for(let t=1;t<=i;++t){const o=s[t];e(o)&&(s[++n]=o)}if(o>=0&&o<r&&r<=t.length)for(let e=o;e<r;++e)s[++n]=t[e];this._size=n,this._fastBuild()}front(){return this._size>0?this._elements[1]:void 0}destroy(){this.clear(),this._elements=null}clear(){this._size=0}get size(){return this._size}_down(e){const{_elements:t,_size:o,_compare:r}=this;for(let i,s=e;s<=o;s=i){const e=s<<1,n=1|e;if(e>o)break;i=n<=o&&r(t[n],t[e])<0?n:e;const a=t[i];if(r(t[s],a)<=0)break;t[i]=t[s],t[s]=a}}_up(e){const{_elements:t,_compare:o}=this;for(let r,i=e;i>1;i=r){r=i>>1;const e=t[i];if(o(t[r],e)<=0)break;t[i]=t[r],t[r]=e}}_fastBuild(){for(let e=this._size>>1;e>0;--e)this._down(e)}}var GomokuDirectionType;!function(e){e[e.LEFT=0]="LEFT",e[e.TOP_LEFT=2]="TOP_LEFT",e[e.TOP=4]="TOP",e[e.TOP_RIGHT=6]="TOP_RIGHT",e[e.RIGHT=1]="RIGHT",e[e.BOTTOM_RIGHT=3]="BOTTOM_RIGHT",e[e.BOTTOM=5]="BOTTOM",e[e.BOTTOM_LEFT=7]="BOTTOM_LEFT"}(GomokuDirectionType||(GomokuDirectionType={}));const GomokuDirections=Array.from(Object.entries({[GomokuDirectionType.TOP]:[-1,0],[GomokuDirectionType.TOP_RIGHT]:[-1,1],[GomokuDirectionType.RIGHT]:[0,1],[GomokuDirectionType.BOTTOM_RIGHT]:[1,1],[GomokuDirectionType.BOTTOM]:[1,0],[GomokuDirectionType.BOTTOM_LEFT]:[1,-1],[GomokuDirectionType.LEFT]:[0,-1],[GomokuDirectionType.TOP_LEFT]:[-1,-1]}).reduce(((e,[t,o])=>(e[Number(t)]=o,e)),[])),GomokuDirectionTypes={full:[GomokuDirectionType.LEFT,GomokuDirectionType.TOP_LEFT,GomokuDirectionType.TOP,GomokuDirectionType.TOP_RIGHT,GomokuDirectionType.RIGHT,GomokuDirectionType.BOTTOM_RIGHT,GomokuDirectionType.BOTTOM,GomokuDirectionType.BOTTOM_LEFT],leftHalf:[GomokuDirectionType.LEFT,GomokuDirectionType.TOP_LEFT,GomokuDirectionType.TOP,GomokuDirectionType.TOP_RIGHT],rightHalf:[GomokuDirectionType.RIGHT,GomokuDirectionType.BOTTOM_RIGHT,GomokuDirectionType.BOTTOM,GomokuDirectionType.BOTTOM_LEFT]},GomokuDirectionTypeBitset={full:GomokuDirectionTypes.full.reduce(((e,t)=>e|1<<t),0),leftHalf:GomokuDirectionTypes.leftHalf.reduce(((e,t)=>e|1<<t),0),rightHalf:GomokuDirectionTypes.rightHalf.reduce(((e,t)=>e|1<<t),0)},createHighDimensionArray=(e,t,...o)=>{const r=new Array(t);if(o.length<=0){for(let o=0;o<t;++o)r[o]=e(o);return r}for(let i=0;i<t;++i)r[i]=createHighDimensionArray(e,...o);return r},{full:fullDirectionTypes$1,rightHalf:halfDirectionTypes$2}=GomokuDirectionTypes;class GomokuMoverContext{MAX_ROW;MAX_COL;MAX_ADJACENT;MAX_DISTANCE_OF_NEIGHBOR;TOTAL_PLAYER;TOTAL_POS;MIDDLE_POS;board;_idxMap;_gomokuDirections;_maxMovableMap;_dirStartPosMap;_dirStartPosSet;_dirNeighborSet;_neighborPlacedCount;_rightHalfDirCountMap;_placedCount;constructor(e){const{MAX_ROW:t,MAX_COL:o,MAX_ADJACENT:r,MAX_DISTANCE_OF_NEIGHBOR:i}=e,s=Math.max(1,t),n=Math.max(1,o),a=Math.max(1,r),c=Math.max(1,i),_=s*n;this.MAX_ROW=s,this.MAX_COL=n,this.MAX_ADJACENT=a,this.MAX_DISTANCE_OF_NEIGHBOR=c,this.TOTAL_PLAYER=2,this.TOTAL_POS=_,this.MIDDLE_POS=_>>1,this.board=new Array(_).fill(-1);const h=new Array(_);for(let e=0;e<s;++e)for(let t=0;t<n;++t){const o=this.idx(e,t);h[o]=[e,t]}const l=GomokuDirections.map((([e,o])=>e*t+o)),d=createHighDimensionArray((()=>0),fullDirectionTypes$1.length,_),u=createHighDimensionArray((()=>[]),fullDirectionTypes$1.length),T=createHighDimensionArray((()=>0),fullDirectionTypes$1.length,_);this.traverseAllDirections((e=>{const t=1^e,[o,r]=GomokuDirections[e];return i=>{const[n,a]=h[i],c=n+o,_=a+r;if(c<0||c>=s||_<0||_>=s)d[e][i]=0,T[t][i]=i,u[t].push(i);else{const o=this.idx(c,_);d[e][i]=d[e][o]+1,T[t][i]=T[t][o]}}}));const A=new Array(_);for(let e=0;e<_;++e){const t=[];A[e]=t;for(const o of fullDirectionTypes$1){let r=e;for(let e=0;e<c&&!(1>d[o][r]);++e)r+=l[o],t.push(r)}}const O=createHighDimensionArray((()=>[]),fullDirectionTypes$1.length,_);this._gomokuDirections=l,this._idxMap=h,this._maxMovableMap=d,this._dirStartPosMap=T,this._dirStartPosSet=u,this._dirNeighborSet=A,this._neighborPlacedCount=new Array(_).fill(0),this._rightHalfDirCountMap=O,this._placedCount=0}get placedCount(){return this._placedCount}init(e){const t=this.board;t.fill(-1),this._placedCount=0;const{_neighborPlacedCount:o}=this;o.fill(0);for(const r of e){const e=this.idx(r.r,r.c);if(!(t[e]>=0)){t[e]=r.p,this._placedCount+=1;for(const t of this.accessibleNeighbors(e))o[t]+=1}}const{_rightHalfDirCountMap:r}=this;for(const e of halfDirectionTypes$2)for(const o of this.getStartPosSet(e)){const i=r[e][o];let s=0;const n=this.maxMovableSteps(o,e)+1;for(let r,a,c=0,_=o;c<n;c=r,_=a){const o=t[_];for(r=c+1,a=_;r<n&&(a=this.fastMoveOneStep(a,e),t[a]===o);++r);i[s++]={playerId:o,count:r-c}}i.length=s}}forward(e,t){this.board[e]=t,this._placedCount+=1;for(const t of this.accessibleNeighbors(e))this._neighborPlacedCount[t]+=1;for(const o of halfDirectionTypes$2)this._updateHalfDirCounter(t,e,o)}revert(e){this.board[e]=-1,this._placedCount-=1;for(const t of this.accessibleNeighbors(e))this._neighborPlacedCount[t]-=1;for(const t of halfDirectionTypes$2)this._updateHalfDirCounter(-1,e,t)}idx(e,t){return e*this.MAX_ROW+t}revIdx(e){return this._idxMap[e]}isValidPos(e,t){return e>=0&&e<this.MAX_ROW&&t>=0&&t<this.MAX_COL}isValidIdx(e){return e>=0&&e<this.TOTAL_POS}safeMove(e,t,o){return o<=this._maxMovableMap[t][e]?e+this._gomokuDirections[t]*o:-1}safeMoveOneStep(e,t){return 1<=this._maxMovableMap[t][e]?e+this._gomokuDirections[t]:-1}fastMove(e,t,o){return e+this._gomokuDirections[t]*o}fastMoveOneStep(e,t){return e+this._gomokuDirections[t]}maxMovableSteps(e,t){return this._maxMovableMap[t][e]}accessibleNeighbors(e){return this._dirNeighborSet[e]}hasPlacedNeighbors(e){return this._neighborPlacedCount[e]>0}couldReachFinalInDirection(e,t,o){const{MAX_ADJACENT:r,board:i}=this,s=1^o,n=this.maxMovableSteps(t,s),a=this.maxMovableSteps(t,o);if(n+a+1<r)return!1;let c=1;for(let o=t,r=0;r<n&&(o=this.fastMoveOneStep(o,s),i[o]===e);++r)c+=1;for(let r=t,s=0;s<a&&(r=this.fastMoveOneStep(r,o),i[r]===e);++s)c+=1;return c>=r}getStartPosId(e,t){return this._dirStartPosMap[t][e]}getStartPosSet(e){return this._dirStartPosSet[e]}getDirCounters(e,t){return this._rightHalfDirCountMap[t][e]}traverseAllDirections(e){const{TOTAL_POS:t}=this,{leftHalf:o,rightHalf:r}=GomokuDirectionTypes;for(const r of o){const o=e(r);for(let e=0;e<t;++e)o(e)}for(const o of r){const r=e(o);for(let e=t-1;e>=0;--e)r(e)}}_updateHalfDirCounter(e,t,o){const r=1^o,i=this.getStartPosId(t,o),s=this._rightHalfDirCountMap[o][i];let n=0,a=this.maxMovableSteps(t,r)+1;for(;n<s.length;++n){const e=s[n].count;if(e>=a)break;a-=e}if(1===a)if(1===s[n].count){const t=n>0&&s[n-1].playerId===e,o=n+1<s.length&&s[n+1].playerId===e;t?o?(s[n-1].count+=1+s[n+1].count,s.splice(n,2)):(s[n-1].count+=1,s.splice(n,1)):o?(s[n+1].count+=1,s.splice(n,1)):s[n].playerId=e}else s[n].count-=1,n>0&&s[n-1].playerId===e?s[n-1].count+=1:s.splice(n,0,{playerId:e,count:1});else if(a<s[n].count){const{playerId:t,count:o}=s[n];s.splice(n,1,{playerId:t,count:a-1},{playerId:e,count:1},{playerId:t,count:o-a})}else s[n].count-=1,n+1<s.length&&s[n+1].playerId===e?s[n+1].count+=1:s.splice(n+1,0,{playerId:e,count:1})}}const{rightHalf:halfDirectionTypes$1}=GomokuDirectionTypes,{rightHalf:allDirectionTypeBitset$1}=GomokuDirectionTypeBitset;class GomokuMoverCounter{context;_mustWinPosSet;_candidateCouldReachFinal;constructor(e){this.context=e,this._mustWinPosSet=createHighDimensionArray((()=>new Set),e.TOTAL_PLAYER),this._candidateCouldReachFinal=createHighDimensionArray((()=>0),e.TOTAL_PLAYER,e.TOTAL_POS)}init(){this._candidateCouldReachFinal.forEach((e=>e.fill(0))),this._mustWinPosSet.forEach((e=>e.clear()));const{context:e}=this,{TOTAL_POS:t,board:o}=e,[r,i]=this._candidateCouldReachFinal,[s,n]=this._mustWinPosSet;for(let a=0;a<t;++a){if(o[a]>=0)continue;let t=0,c=0;for(const o of halfDirectionTypes$1){const r=1<<o;e.couldReachFinalInDirection(0,a,o)&&(t|=r),e.couldReachFinalInDirection(1,a,o)&&(c|=r)}r[a]=t,i[a]=c,t>0&&s.add(a),c>0&&n.add(a)}}forward(e){this._updateRelatedCouldReachFinal(e)}revert(e){this._updateRelatedCouldReachFinal(e)}mustWinPosSet(e){return this._mustWinPosSet[e]}candidateCouldReachFinal(e,t){return this._candidateCouldReachFinal[e][t]>0}_updateRelatedCouldReachFinal(e){const{context:t}=this,{board:o}=t;this._updateCouldReachFinal(e,allDirectionTypeBitset$1);for(const r of halfDirectionTypes$1){const i=1<<r,s=1^r,n=t.maxMovableSteps(e,s);for(let r=e,a=0;a<n;++a)if(r=t.fastMoveOneStep(r,s),o[r]<0){this._updateCouldReachFinal(r,i);break}const a=t.maxMovableSteps(e,r);for(let s=e,n=0;n<a;++n)if(s=t.fastMoveOneStep(s,r),o[s]<0){this._updateCouldReachFinal(s,i);break}}}_updateCouldReachFinal(e,t){if(t>0){const{context:o,_mustWinPosSet:r,_candidateCouldReachFinal:i}=this,s=i[0][e],n=i[1][e];if(r[0].delete(e),r[1].delete(e),o.board[e]>=0)return i[0][e]=0,void(i[1][e]=0);let a=0,c=0;for(const r of halfDirectionTypes$1){const i=1<<r;i&t?(o.couldReachFinalInDirection(0,e,r)&&(a|=i),o.couldReachFinalInDirection(1,e,r)&&(c|=i)):(a|=s&i,c|=n&i)}i[0][e]=a,i[1][e]=c,a>0&&r[0].add(e),c>0&&r[1].add(e)}}}class GomokuMover{rootPlayerId;context;counter;state;constructor(e){this.context=e.context,this.counter=e.counter,this.state=e.state,this.rootPlayerId=0}resetRootPlayerId(e){this.rootPlayerId=1&e}init(e){this.context.init(e),this.counter.init(e),this.state.init(e)}forward(e,t){const{context:o,counter:r,state:i}=this;o.board[e]<0&&(o.forward(e,t),r.forward(e,t),i.forward(e,t))}revert(e){const{context:t,counter:o,state:r}=this;t.board[e]>=0&&(t.revert(e),o.revert(e),r.revert(e))}expand(e,t,o,r){return this.state.expand(e,t,o,r)}topCandidate(e){return this.state.topCandidate(e)}score(e){return this.state.score(1^e,this.rootPlayerId)}isFinal(){return this.state.isFinal()}couldReachFinal(e){return this.counter.mustWinPosSet(e).size>0}}const{full:fullDirectionTypes,rightHalf:halfDirectionTypes}=GomokuDirectionTypes,{rightHalf:allDirectionTypeBitset}=GomokuDirectionTypeBitset;class GomokuMoverState{NEXT_MOVER_BUFFER=4;context;counter;scoreMap;_candidateQueues;_candidateInqSets;_candidateSet;_candidateScores;_candidateScoreDirMap;_candidateScoreExpired;_stateScores;_stateScoreDirMap;_countOfReachFinal;_countOfReachFinalDirMap;constructor(e){const{context:t,counter:o,scoreMap:r}=e,i=createHighDimensionArray((()=>new PriorityQueue({compare:(e,t)=>t.score-e.score})),t.TOTAL_PLAYER),s=createHighDimensionArray((()=>new Set),t.TOTAL_PLAYER,t.TOTAL_POS),n=new Set,a=createHighDimensionArray((()=>0),t.TOTAL_PLAYER,t.TOTAL_POS),c=createHighDimensionArray((()=>0),t.TOTAL_PLAYER,t.TOTAL_POS,fullDirectionTypes.length),_=createHighDimensionArray((()=>allDirectionTypeBitset),t.TOTAL_POS),h=createHighDimensionArray((()=>0),t.TOTAL_PLAYER),l=createHighDimensionArray((()=>0),t.TOTAL_PLAYER,t.TOTAL_POS,fullDirectionTypes.length),d=createHighDimensionArray((()=>0),t.TOTAL_PLAYER),u=createHighDimensionArray((()=>0),t.TOTAL_PLAYER,t.TOTAL_POS,fullDirectionTypes.length);this.context=t,this.counter=o,this.scoreMap=r,this._candidateQueues=i,this._candidateInqSets=s,this._candidateSet=n,this._candidateScores=a,this._candidateScoreDirMap=c,this._candidateScoreExpired=_,this._stateScores=h,this._stateScoreDirMap=l,this._countOfReachFinal=d,this._countOfReachFinalDirMap=u}init(e){this._candidateQueues.forEach((e=>e.init())),this._candidateInqSets.forEach((e=>e.forEach((e=>e.clear())))),this._candidateSet.clear(),this._candidateScoreExpired.fill(allDirectionTypeBitset),this._stateScores.fill(0),this._countOfReachFinal.fill(0);const{context:t,_stateScores:o,_stateScoreDirMap:r,_countOfReachFinal:i,_countOfReachFinalDirMap:s}=this;for(const e of halfDirectionTypes)for(const n of t.getStartPosSet(e)){const{score:t,countOfReachFinal:a}=this._evaluateScoreInDirection(0,n,e),{score:c,countOfReachFinal:_}=this._evaluateScoreInDirection(1,n,e);o[0]+=t,o[1]+=c,r[0][n][e]=t,r[1][n][e]=c,i[0]+=a,i[1]+=_,s[0][n][e]=a,s[1][n][e]=_}const{_candidateSet:n}=this;for(const o of e){const e=t.idx(o.r,o.c);for(const o of t.accessibleNeighbors(e))t.board[o]<0&&n.add(o)}t.board[t.MIDDLE_POS]<0&&n.add(t.MIDDLE_POS);for(const e of n)this._reEvaluateAndEnqueueCandidate(e)}forward(e){const{context:t,_candidateSet:o}=this;o.delete(e);for(const r of t.accessibleNeighbors(e))t.board[r]<0&&o.add(r);this._updateStateScore(e),this._expireCandidates(e)}revert(e){const{context:t,_candidateSet:o}=this;t.hasPlacedNeighbors(e)&&o.add(e);for(const r of t.accessibleNeighbors(e))t.hasPlacedNeighbors(r)||o.delete(r);this._updateStateScore(e),this._expireCandidates(e),t.board[t.MIDDLE_POS]<0&&!o.has(t.MIDDLE_POS)&&(o.add(t.MIDDLE_POS),this._reEvaluateAndEnqueueCandidate(t.MIDDLE_POS))}expand(e,t,o,r=this.context.TOTAL_POS){const i=this.topCandidate(e);if(void 0===i)return 0;if(i.score===Number.MAX_VALUE)return t[0]=i,1;const s=i.score,{_candidateScoreExpired:n}=this,a=this._candidateQueues[e],c=this._candidateInqSets[e],_=this._candidateScores[e];let h,l=0;for(;l<r&&(h=a.dequeue(),void 0!==h);)if(0===n[h.posId]&&h.score===_[h.posId]){if(h.score*o<s){a.enqueue(h);break}t[l++]=h}else c[h.posId].delete(h.score);return a.size>this.context.TOTAL_POS?a.splice((e=>!(n[e.posId]>0||e.score!==_[e.posId])||(c[e.posId].delete(e.score),!1)),t,0,l):a.enqueues(t,0,l),l}topCandidate(e){const t=this.counter.mustWinPosSet(e);if(t.size>0)for(const e of t)return{posId:e,score:Number.MAX_VALUE};const o=this.counter.mustWinPosSet(1^e);if(o.size>0)for(const e of o)return{posId:e,score:Number.MAX_VALUE};const{_candidateScoreExpired:r}=this,i=this._candidateQueues[e],s=this._candidateInqSets[e],n=this._candidateScores[e];let a;for(;(a=i.dequeue(),void 0!==a)&&(s[a.posId].delete(a.score),0!==r[a.posId]||a.score!==n[a.posId]););return void 0!==a&&(i.enqueue(a),s[a.posId].add(a.score)),a}score(e,t){const o=this._stateScores[t],r=this._stateScores[1^t],i=this.NEXT_MOVER_BUFFER;return e===t?o-r*i:o*i-r}isWin(e){return this._countOfReachFinal[e]>0}isDraw(){return this.context.placedCount===this.context.TOTAL_POS}isFinal(){const{context:e,_countOfReachFinal:t}=this;return e.placedCount===e.TOTAL_POS||(t[0]>0||t[1]>0)}_updateStateScore(e){const{context:t,_countOfReachFinal:o,_countOfReachFinalDirMap:r,_stateScores:i,_stateScoreDirMap:s}=this;for(const n of halfDirectionTypes){const a=t.getStartPosId(e,n),{score:c,countOfReachFinal:_}=this._evaluateScoreInDirection(0,a,n),{score:h,countOfReachFinal:l}=this._evaluateScoreInDirection(1,a,n);i[0]+=c-s[0][a][n],i[1]+=h-s[1][a][n],s[0][a][n]=c,s[1][a][n]=h,o[0]+=_-r[0][a][n],o[1]+=l-r[1][a][n],r[0][a][n]=_,r[1][a][n]=l}}_expireCandidates(e){const{context:t,_candidateSet:o,_candidateScoreExpired:r}=this;for(const i of halfDirectionTypes){const s=t.getStartPosId(e,i),n=t.maxMovableSteps(s,i),a=1<<i;for(let c=s,_=0;r[c]|=a,c!==e&&o.has(c)&&this._reEvaluateAndEnqueueCandidate(c),_!==n;++_)c=t.fastMoveOneStep(c,i)}o.has(e)&&this._reEvaluateAndEnqueueCandidate(e)}_reEvaluateAndEnqueueCandidate(e){this._reEvaluateCandidate(e);const t=this._candidateScores[0][e],o=this._candidateInqSets[0][e];o.has(t)||(o.add(t),this._candidateQueues[0].enqueue({posId:e,score:t}));const r=this._candidateScores[1][e],i=this._candidateInqSets[1][e];i.has(r)||(i.add(r),this._candidateQueues[1].enqueue({posId:e,score:r}))}_reEvaluateCandidate(e){const t=this._candidateScoreExpired[e];if(t>0){const{NEXT_MOVER_BUFFER:o,context:r,_candidateScoreDirMap:i,_stateScoreDirMap:s}=this;let n=0,a=0;for(const t of halfDirectionTypes){const o=r.getStartPosId(e,t);n+=s[0][o][t],a+=s[1][o][t]}let c=0;this._temporaryForward(e,0);for(const o of halfDirectionTypes)if(1<<o&t){const t=r.getStartPosId(e,o),{score:s}=this._evaluateScoreInDirection(0,t,o);i[0][e][o]=s,c+=s}else c+=i[0][e][o];this._temporaryRevert(e);let _=0;this._temporaryForward(e,1);for(const o of halfDirectionTypes)if(1<<o&t){const t=r.getStartPosId(e,o),{score:s}=this._evaluateScoreInDirection(1,t,o);i[1][e][o]=s,_+=s}else _+=i[1][e][o];this._temporaryRevert(e);const h=c-n,l=_-a;this._candidateScores[0][e]=h*o+l,this._candidateScores[1][e]=h+l*o,this._candidateScoreExpired[e]=0}}_evaluateScoreInDirection(e,t,o){const{context:r}=this,{con:i,gap:s}=this.scoreMap,{MAX_ADJACENT:n}=r,a=n-1,c=r.getDirCounters(t,o),_=c.length;let h=0,l=0;for(let t,o=0;o<_;o=t){for(;o<_&&c[o].playerId!==e;++o);if(o===_)break;const r=o>0&&c[o-1].playerId<0;let d=r?c[o-1].count:0;for(t=o;t<_;++t){const o=c[t].playerId;if(o>=0&&o!==e)break;d+=c[t].count}if(d>=n){const e=r?o-1:o;for(let r=o,_=-1,u=0;r<t;r+=2){r>e&&(u+=c[r-1].count);const o=r>e?1:0,T=c[r].count;if(T<a&&r+2<t&&1===c[r+1].count){r+1<t&&(u+=c[r+1].count);const e=c[r+2].count;if(e<a){const i=d-u-(T+1+e),n=r+3<t?1:0,c=s[Math.min(T+e,a)][o+n];c>0&&(h+=c+Math.min(u,i)),_=r+2}}if(_<r){let e=T;T>=n&&(e=n,l+=1);const s=r+1<t?1:0,a=d-u-T,c=i[e][o+s];c>0&&(h+=c+Math.min(u,a))}u+=T}}}return{score:h,countOfReachFinal:l}}_temporaryForward(e,t){this.context.forward(e,t)}_temporaryRevert(e){this.context.revert(e)}}class AlphaBetaSearcher{MAX_CANDIDATE_COUNT;MIN_PROMOTION_SCORE;CANDIDATE_GROWTH_FACTOR;searchContext;deeperSearcher;_candidateCache;constructor(e){this.MAX_CANDIDATE_COUNT=e.MAX_CANDIDATE_COUNT,this.MIN_PROMOTION_SCORE=e.MIN_PROMOTION_SCORE,this.CANDIDATE_GROWTH_FACTOR=e.CANDIDATE_GROWTH_FACTOR,this.searchContext=e.mover,this.deeperSearcher=e.deeperSearcher,this._candidateCache=[]}search(e,t,o){const{searchContext:r,_candidateCache:i}=this,s=r.expand(e,i,this.CANDIDATE_GROWTH_FACTOR,this.MAX_CANDIDATE_COUNT);let n=i[0].posId??-1;if(s<2)return n;const a=1^e,{MIN_PROMOTION_SCORE:c,deeperSearcher:_}=this;for(let h=0;h<s;++h){const s=i[h],l=s.posId;r.forward(l,e);const d=s.score<c?r.score(a):_.search(a,t,o,1);if(r.revert(l),t<d&&(t=d,n=l),o<=t)break}return n}}class DeepSearcher{MAX_SEARCH_DEPTH;MIN_PROMOTION_SCORE;mover;constructor(e){this.MAX_SEARCH_DEPTH=e.MAX_SEARCH_DEPTH,this.MIN_PROMOTION_SCORE=e.MIN_PROMOTION_SCORE,this.mover=e.mover}search(e,t,o,r){const{mover:i,MAX_SEARCH_DEPTH:s}=this,{rootPlayerId:n}=i;if(i.couldReachFinal(e))return e===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i.couldReachFinal(1^e))return e===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY;const a=i.topCandidate(e);if(void 0===a)return Number.MAX_VALUE;i.forward(a.posId,e);const c=r>=s&&a.score<this.MIN_PROMOTION_SCORE?i.score(1^e):this.search(1^e,t,o,r+1);return i.revert(a.posId),c}}class NarrowSearcher{MAX_SEARCH_DEPTH;MAX_CANDIDATE_COUNT;MIN_PROMOTION_SCORE;CANDIDATE_GROWTH_FACTOR;mover;deeperSearcher;_candidatesListCache;constructor(e){this.MAX_SEARCH_DEPTH=e.MAX_SEARCH_DEPTH,this.MAX_CANDIDATE_COUNT=e.MAX_CANDIDATE_COUNT,this.MIN_PROMOTION_SCORE=e.MIN_PROMOTION_SCORE,this.CANDIDATE_GROWTH_FACTOR=e.CANDIDATE_GROWTH_FACTOR,this.mover=e.mover,this.deeperSearcher=e.deeperSearcher,this._candidatesListCache={}}search(e,t,o,r){const{mover:i,MAX_SEARCH_DEPTH:s}=this,{rootPlayerId:n}=i;if(i.couldReachFinal(e))return e===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i.couldReachFinal(1^e))return e===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY;if(r>s)return i.score(e);const a=this._getCandidates(r),c=i.expand(e,a,this.CANDIDATE_GROWTH_FACTOR,this.MAX_CANDIDATE_COUNT);if(c<=0)return Number.MAX_VALUE;const{MIN_PROMOTION_SCORE:_,deeperSearcher:h}=this;for(let l=0;l<c;++l){const c=a[l],d=c.posId;i.forward(d,e);const u=r>=s&&c.score>=_?h.search(1^e,t,o,1):this.search(1^e,t,o,r+1);if(i.revert(d),e===n?t<u&&(t=u):o>u&&(o=u),o<=t)break}return e===n?t:o}_getCandidates(e){let t=this._candidatesListCache[e];return void 0===t&&(t=[],this._candidatesListCache[e]=t),t}}const createGomokuSearcher=e=>{const{narrowSearcherOptions:t,deepSearcherOption:o,searchContext:r}=e;let i=new DeepSearcher({...o,mover:r});for(let e=t.length-1;e>=0;--e){const o=t[e];i=new NarrowSearcher({...o,mover:r,deeperSearcher:i})}return i},createDefaultGomokuSearcher=(e,t,o)=>{const{MAX_ADJACENT:r,CANDIDATE_GROWTH_FACTOR:i}=o,s=[{MAX_SEARCH_DEPTH:2,MAX_CANDIDATE_COUNT:8,MIN_PROMOTION_SCORE:4*e.con[r-3][2],CANDIDATE_GROWTH_FACTOR:i},{MAX_SEARCH_DEPTH:4,MAX_CANDIDATE_COUNT:4,MIN_PROMOTION_SCORE:2*e.con[r-2][1],CANDIDATE_GROWTH_FACTOR:i},{MAX_SEARCH_DEPTH:8,MAX_CANDIDATE_COUNT:2,MIN_PROMOTION_SCORE:4*e.con[r-2][2],CANDIDATE_GROWTH_FACTOR:i}],n={MAX_SEARCH_DEPTH:16,MIN_PROMOTION_SCORE:e.con[r-1][1]};return createGomokuSearcher({narrowSearcherOptions:s,deepSearcherOption:n,searchContext:t})},createScoreMap=e=>{const t=new Array(e+1).fill([]).map((()=>[0,0,0])),o=new Array(e+1).fill([]).map((()=>[0,0,0]));let r=16;const i=2*r;for(let s=1;s<e;++s,r*=16)t[s]=[0,r,2*r],o[s]=[0,r/2-i,r-i];const s=t[e-1][1];return o[e-1]=[s-i,s-i/2,s-i/4],o[e]=[s-i,s-i/2,s-i/4],t[e]=[r,r,r],{con:t,gap:o}};class GomokuSolution{CANDIDATE_GROWTH_FACTOR;scoreMap;mover;_moverContext;_searcher;constructor(e){const{MAX_ROW:t,MAX_COL:o,MAX_ADJACENT:r=5,MAX_DISTANCE_OF_NEIGHBOR:i=2,CANDIDATE_GROWTH_FACTOR:s=8}=e,n=new GomokuMoverContext({MAX_ROW:t,MAX_COL:o,MAX_ADJACENT:r,MAX_DISTANCE_OF_NEIGHBOR:i}),a=e.scoreMap??createScoreMap(n.MAX_ADJACENT),c=new GomokuMoverCounter(n),_=new GomokuMoverState({context:n,counter:c,scoreMap:a}),h=new GomokuMover({context:n,counter:c,state:_}),l=new AlphaBetaSearcher({MAX_CANDIDATE_COUNT:16,MIN_PROMOTION_SCORE:a.con[r-3][1],CANDIDATE_GROWTH_FACTOR:s,mover:h,deeperSearcher:e.deeperSearcher?.(h)??createDefaultGomokuSearcher(a,h,{MAX_ADJACENT:n.MAX_ADJACENT,CANDIDATE_GROWTH_FACTOR:s})});this.CANDIDATE_GROWTH_FACTOR=s,this.mover=h,this.scoreMap=a,this._moverContext=n,this._searcher=l}init(e,t){this.mover.init(e),null!=t&&(this._searcher=t)}forward(e,t,o){const{mover:r,_moverContext:i}=this;if(i.isValidPos(e,t)){const s=i.idx(e,t);r.forward(s,o)}}revert(e,t){const{mover:o,_moverContext:r}=this;if(r.isValidPos(e,t)){const i=r.idx(e,t);o.revert(i)}}minimaxSearch(e){if(this.mover.isFinal())return[-1,-1];const{mover:t,_moverContext:o}=this;if(2*o.placedCount<o.MAX_ADJACENT){const r=[],i=Math.min(8,t.expand(e,r,1.5)),s=r[Math.min(i-1,Math.round(Math.random()*i))].posId,[n,a]=o.revIdx(s);return[n,a]}t.resetRootPlayerId(e);const r=this._searcher.search(e,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,1);if(r<0)throw new Error("Oops! Something must be wrong, cannot find a valid moving strategy");const[i,s]=o.revIdx(r);return[i,s]}}var ServiceType;!function(e){e.MOVE="move"}(ServiceType||(ServiceType={}));let solution=null;const solutionProps={MAX_ROW:15,MAX_COL:15,MAX_ADJACENT:5,MAX_DISTANCE_OF_NEIGHBOR:2,CANDIDATE_GROWTH_FACTOR:8},service={move(e){const{pieces:t,playerId:o,MAX_ROW:r=solutionProps.MAX_ROW,MAX_COL:i=solutionProps.MAX_COL,MAX_ADJACENT:s=solutionProps.MAX_ADJACENT,MAX_DISTANCE_OF_NEIGHBOR:n=solutionProps.MAX_DISTANCE_OF_NEIGHBOR,CANDIDATE_GROWTH_FACTOR:a=solutionProps.CANDIDATE_GROWTH_FACTOR}=e;if(null===solution||solutionProps.MAX_ROW!==r||solutionProps.MAX_COL!==i||solutionProps.MAX_ADJACENT!==s||solutionProps.MAX_DISTANCE_OF_NEIGHBOR!==n){const e=createScoreMap(s);solution=new GomokuSolution({MAX_ROW:r,MAX_COL:i,MAX_ADJACENT:s,MAX_DISTANCE_OF_NEIGHBOR:n,scoreMap:e,deeperSearcher:t=>createGomokuSearcher({narrowSearcherOptions:[{MAX_SEARCH_DEPTH:2,MAX_CANDIDATE_COUNT:8,MIN_PROMOTION_SCORE:4*e.con[s-3][2],CANDIDATE_GROWTH_FACTOR:a},{MAX_SEARCH_DEPTH:4,MAX_CANDIDATE_COUNT:4,MIN_PROMOTION_SCORE:2*e.con[s-2][1],CANDIDATE_GROWTH_FACTOR:a},{MAX_SEARCH_DEPTH:8,MAX_CANDIDATE_COUNT:2,MIN_PROMOTION_SCORE:4*e.con[s-2][2],CANDIDATE_GROWTH_FACTOR:a}],deepSearcherOption:{MAX_SEARCH_DEPTH:24,MIN_PROMOTION_SCORE:e.con[s-1][1]},searchContext:t})})}solution.init(t);const[c,_]=solution.minimaxSearch(o);return{r:c,c:_}}};function processRequest(e){const{type:t,data:o}=e;if(t===ServiceType.MOVE)return service.move(o);throw new Error(`Cannot resolve service request: ${JSON.stringify(e)}`)}const _self=self;self.addEventListener("message",(function(e){const t=e.data;try{const o=processRequest(e.data),r={id:t.id,data:o};_self.postMessage(r,void 0)}catch(e){_self.postMessage({id:t.id,data:null,error:e?.message??e?.stack??String(e)})}}),!1);
