"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{37299:function(e,r,n){n.r(r),n.d(r,{GraphvizRenderer:function(){return c}});var o=n(85893),t=n(90902),u=n(45697),i=n.n(u),l=n(67294);let c=e=>{let{code:r,engine:n="dot",options:u,onError:i}=e,c=l.useRef(null);return l.useEffect(()=>{if(null!=c.current)try{(0,t.f)(c.current,{fit:!0,zoom:!1,useWorker:!1,...u}).onerror(i).engine(n).renderDot(r)}catch(r){var e,o,l;null==i||i(null!==(l=null!==(o=null!==(e=null==r?void 0:r.stack)&&void 0!==e?e:null==r?void 0:r.message)&&void 0!==o?o:r)&&void 0!==l?l:"Unexpected error occurred!")}},[r,u,n,i]),(0,o.jsx)("div",{ref:c,className:"yozora-code-renderer-graphviz"})};c.propTypes={code:i().string.isRequired,engine:i().oneOf(["circo","dot","fdp","neato","osage","patchwork","twopi"]),options:i().any,onError:i().func},c.displayName="GraphvizRenderer",r.default=c}}]);