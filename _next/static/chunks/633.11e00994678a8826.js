"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{12633:function(t,e,r){r.r(e),r.d(e,{SudokuCreator:function(){return l.wY},SudokuSolver:function(){return l.M},createSudokuBoardData:function(){return l.s0}});var l=r(52381)},15288:function(t,e,r){function l(t){let e=Math.random()*t>>0;return e===t?t-1:e}function i(t,e=0,r=t.length){if(e<0&&(e=0),r>t.length&&(r=t.length),e+1>=r)return;let i=r-e;for(let o=i-1,n=r-1;o>0;--o,--n){let r=l(o)+e,i=t[r];t[r]=t[n],t[n]=i}}r.d(e,{Er:function(){return i},Iy:function(){return l},ZP:function(){return i}})},52381:function(t,e,r){r.d(e,{wY:function(){return _},$X:function(){return o},M:function(){return a},_g:function(){return u},iN:function(){return f},s0:function(){return n},OA:function(){return h}});var l=r(15288);class i{_count;_row;_col;_L;_R;_U;_D;_sz;constructor(t){let{MAX_N:e}=t;this._count=Array(e),this._row=Array(e),this._col=Array(e),this._L=Array(e),this._R=Array(e),this._U=Array(e),this._D=Array(e),this._sz=0}destroy(){this._sz=0,this._count.length=0,this._row.length=0,this._col.length=0,this._L.length=0,this._R.length=0,this._U.length=0,this._D.length=0}init(t){let{_L:e,_R:r,_U:l,_D:i,_count:o}=this,n=t+1;for(let t=0;t<n;++t)e[t]=t-1,r[t]=t+1,l[t]=t,i[t]=t;r[t]=0,e[0]=t,o.fill(0,0,n),this._sz=n}addRow(t,e){let{_count:r,_row:l,_col:i,_L:o,_R:n,_U:s,_D:u}=this,{_sz:h}=this,f=h;for(let f=0;f<e.length;++f,++h){let a=e[f];l[h]=t,i[h]=a,r[a]+=1,o[h]=h-1,n[h]=h+1,u[h]=a,u[s[a]]=h,s[h]=s[a],s[a]=h}n[h-1]=f,o[f]=h-1,this._sz=h}solve(){if(0===this._sz)return null;let t=[];return this._algorithmX(0,t)?t:null}_algorithmX(t,e){let{_count:r,_row:l,_col:i,_L:o,_R:n,_D:s}=this;if(0===n[0])return e.length=t,!0;let u=n[0];for(let t=n[0];0!==t;t=n[t])r[t]<r[u]&&(u=t);this._removeColumn(u);for(let r=s[u];r!==u;r=s[r]){e[t]=l[r];for(let t=n[r];t!==r;t=n[t])this._removeColumn(i[t]);if(this._algorithmX(t+1,e))return!0;for(let t=o[r];t!==r;t=o[t])this._restoreColumn(i[t])}return this._restoreColumn(u),!1}_removeColumn(t){let{_count:e,_col:r,_L:l,_R:i,_U:o,_D:n}=this;l[i[t]]=l[t],i[l[t]]=i[t];for(let l=n[t];l!==t;l=n[l])for(let t=i[l];t!==l;t=i[t])o[n[t]]=o[t],n[o[t]]=n[t],e[r[t]]-=1}_restoreColumn(t){let{_count:e,_col:r,_L:l,_R:i,_U:o,_D:n}=this;for(let i=o[t];i!==t;i=o[i])for(let t=l[i];t!==i;t=l[t])e[r[t]]+=1,o[n[t]]=t,n[o[t]]=t;l[i[t]]=t,i[l[t]]=t}}class o{BASE_1;BASE_2;BASE_3;BASE_4;MATRIX_RANK;MATRIX;BOARD;constructor(t){let e=t*t,r=e*t;this.MATRIX_RANK=this.BASE_1=t,this.MATRIX=this.BASE_2=e,this.BASE_3=r,this.BOARD=this.BASE_4=r*t}}let n=t=>Array(t.BOARD),s=(t,e,r)=>{t.fill(e,0,r.BOARD)},u=(t,e,r)=>{let{BOARD:l}=r;for(let r=0;r<l;++r)e[r]=t[r]},h=(t,e)=>{let r=[],{MATRIX:l}=e;for(let e=0,i=0;e<l;++e){let o=[];r[e]=o;for(let e=0;e<l;++e,++i)o[e]=t[i]}return r};function f(t){let{BASE_1:e,BASE_3:r,MATRIX:l,BOARD:i}=t,o=Array(i);for(let t=0,n=0;t<i;t+=r)for(let i=t,s=t+r;i<s;i+=l)for(let r=0;r<l;r+=e){let l=n+e;o.fill(t+r,n,l),n=l}return o}class a{size;DL_TOTAL_COLUMNS;dlx;matCodeMap;constraints=[,,,,];constructor(t){let{childMatrixWidth:e}=t,r=new o(e),l=4*r.BOARD,n=new i({MAX_N:r.BOARD*r.MATRIX*l+r.MATRIX+1});this.size=r,this.DL_TOTAL_COLUMNS=l,this.dlx=n,this.matCodeMap=function(t){let{BASE_1:e,BASE_3:r,MATRIX:l,BOARD:i}=t,o=Array(i);for(let t=0,n=0;t<i;t+=r,n+=e)for(let i=t,s=t+r;i<s;i+=l)for(let t=i,r=i+l,s=n;t<r;t+=e)o.fill(s++,t,t+e);return o}(r)}solve(t,e){let{size:r,DL_TOTAL_COLUMNS:l,constraints:i,matCodeMap:o,dlx:n}=this,{MATRIX:s,BOARD:u}=r,h=(t,e)=>t*u+e+1;n.init(l);for(let e=0,r=0;e<s;++e)for(let l=0;l<s;++l,++r){let u=t[r],f=o[r],a=-1===u?0:u,_=-1===u?s:u+1;for(let t=a;t<_;++t){i[0]=h(0,r),i[1]=h(1,e*s+t),i[2]=h(2,l*s+t),i[3]=h(3,f*s+t);let o=r*s+t+1;n.addRow(o,i)}}let f=n.solve();if(null===f)return!1;if(null!==e)for(let t of f){let r=t-1,l=r%s;e[r/s>>0]=l}return!0}}class _{size;solver;matCoordinateMap;gridCodes;candidates;availableNums;tmpBoard;difficulty;constructor(t){let{childMatrixWidth:e,difficulty:r=.2}=t,l=new o(e),i=new a({childMatrixWidth:e}),s=Array(l.BOARD);for(let t=0;t<l.BOARD;++t)s[t]=t;this.size=l,this.solver=i,this.matCoordinateMap=f(l),this.gridCodes=s,this.difficulty=this._resolveDifficulty(r),this.candidates=Array(l.MATRIX),this.availableNums=Array(l.MATRIX),this.tmpBoard=n(l)}createSudoku(t){null!=t&&(this.difficulty=this._resolveDifficulty(t));let e=this._createSolution();return{puzzle:this._createPuzzle(e),solution:e}}_createSolution(){let{size:t,candidates:e,gridCodes:r,solver:i,tmpBoard:o}=this;s(o,-1,t),(0,l.Er)(r);let u=Math.round((.3*Math.random()+.2)*t.BOARD),h=Math.max(t.BASE_3,Math.min(t.BOARD,u));for(let t=0;t<h;++t){let i=r[t],n=this._collectCandidates(o,i);if(n<1)continue;let s=e[(0,l.Iy)(n)];o[i]=s}let f=n(t);for(let t=0;t<h;++t){let e=r[t];if(-1!==e){if(i.solve(o,f))return f;o[e]=-1}}throw Error("[createSolution] This is impossible!")}_createPuzzle(t){let{size:e,candidates:r,gridCodes:i,solver:o,difficulty:s}=this,h=n(e);u(t,h,e),(0,l.Er)(i);let f=Math.floor(e.BOARD*s);for(let e=0;e<f;++e){let l=i[e],n=this._collectCandidates(h,l),s=0;for(;s<n&&(h[l]=r[s],!o.solve(h,null));++s);h[l]=s<n?t[l]:-1}return h}_collectCandidates(t,e){let{size:r,matCoordinateMap:l,candidates:i,availableNums:o}=this,{MATRIX_RANK:n,MATRIX:s,BOARD:u}=r,h=e%s,f=e-h,a=l[e];o.fill(!0);for(let e=f,r=f+s;e<r;++e){let r=t[e];-1!==r&&(o[r]=!1)}for(let e=h;e<u;e+=s){let r=t[e];-1!==r&&(o[r]=!1)}for(let e=a,r=0;r<n;++r,e+=s)for(let r=e,l=e+n;r<l;++r){let e=t[r];-1!==e&&(o[e]=!1)}let _=0;for(let t=0;t<s;++t)o[t]&&(i[_++]=t);return _}_resolveDifficulty(t){return .8*Math.max(0,Math.min(1,t))+.2}}}}]);