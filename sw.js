if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const d=e=>s(e,t),r={module:{uri:t},exports:n,require:d};a[t]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0d88ad7a.af17c620eff71e30.js",revision:"af17c620eff71e30"},{url:"/_next/static/chunks/102.9982aa1b31f1d8d4.js",revision:"9982aa1b31f1d8d4"},{url:"/_next/static/chunks/170-4e65b20e587c29cd.js",revision:"4e65b20e587c29cd"},{url:"/_next/static/chunks/185.5efdc972558e8b2d.js",revision:"5efdc972558e8b2d"},{url:"/_next/static/chunks/195.7ebc908b40eb858a.js",revision:"7ebc908b40eb858a"},{url:"/_next/static/chunks/2.47e35187a25f2c6d.js",revision:"47e35187a25f2c6d"},{url:"/_next/static/chunks/247.6ddcb4ec54f96bee.js",revision:"6ddcb4ec54f96bee"},{url:"/_next/static/chunks/279-dd7965c910ac1f7f.js",revision:"dd7965c910ac1f7f"},{url:"/_next/static/chunks/285.2b78459c7c989eb8.js",revision:"2b78459c7c989eb8"},{url:"/_next/static/chunks/324-d8b4bd392785e587.js",revision:"d8b4bd392785e587"},{url:"/_next/static/chunks/373.331e8a73c49d2906.js",revision:"331e8a73c49d2906"},{url:"/_next/static/chunks/387-646922b03f6a6a3b.js",revision:"646922b03f6a6a3b"},{url:"/_next/static/chunks/388.717bcf97b2e84743.js",revision:"717bcf97b2e84743"},{url:"/_next/static/chunks/40.967aab169c9cc0c3.js",revision:"967aab169c9cc0c3"},{url:"/_next/static/chunks/413-7aa920b0ef2d8e22.js",revision:"7aa920b0ef2d8e22"},{url:"/_next/static/chunks/43-3aa3acc64b682fb1.js",revision:"3aa3acc64b682fb1"},{url:"/_next/static/chunks/490-a573e952e4c6296e.js",revision:"a573e952e4c6296e"},{url:"/_next/static/chunks/51.44d3143a9d24ff5b.js",revision:"44d3143a9d24ff5b"},{url:"/_next/static/chunks/510-91fcc84973c39460.js",revision:"91fcc84973c39460"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-e53f967129b4491e.js",revision:"e53f967129b4491e"},{url:"/_next/static/chunks/pages/404-4f25c458d1d4d156.js",revision:"4f25c458d1d4d156"},{url:"/_next/static/chunks/pages/_app-49a489997678e859.js",revision:"49a489997678e859"},{url:"/_next/static/chunks/pages/_error-3f6d1c55bb8051ab.js",revision:"3f6d1c55bb8051ab"},{url:"/_next/static/chunks/pages/about-766fd62378721d49.js",revision:"766fd62378721d49"},{url:"/_next/static/chunks/pages/essay/%5B...slug%5D-84f32ba3588d7000.js",revision:"84f32ba3588d7000"},{url:"/_next/static/chunks/pages/essays/%5BpageId%5D-5b8ac2a39a3b3dfe.js",revision:"5b8ac2a39a3b3dfe"},{url:"/_next/static/chunks/pages/game-872c7d1e136aef26.js",revision:"872c7d1e136aef26"},{url:"/_next/static/chunks/pages/game/gomoku-696bd1750dbbad94.js",revision:"696bd1750dbbad94"},{url:"/_next/static/chunks/pages/game/sudoku-231391dffe35bdd2.js",revision:"231391dffe35bdd2"},{url:"/_next/static/chunks/pages/index-ad13030de3cd7e7c.js",revision:"ad13030de3cd7e7c"},{url:"/_next/static/chunks/pages/post/%5B...slug%5D-574a8f011158e023.js",revision:"574a8f011158e023"},{url:"/_next/static/chunks/pages/post/mahjong-ef9637109641e1f7.js",revision:"ef9637109641e1f7"},{url:"/_next/static/chunks/pages/posts/%5BpageId%5D-8deaa1804c3e18fd.js",revision:"8deaa1804c3e18fd"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-acf8afd6dfb8e0ee.js",revision:"acf8afd6dfb8e0ee"},{url:"/_next/static/css/156c97f5ad60be42.css",revision:"156c97f5ad60be42"},{url:"/_next/static/css/16b7312f9c3f9aba.css",revision:"16b7312f9c3f9aba"},{url:"/_next/static/css/1736b8142e1e597e.css",revision:"1736b8142e1e597e"},{url:"/_next/static/css/8789ad1a82b51dce.css",revision:"8789ad1a82b51dce"},{url:"/_next/static/css/aca35638af3a9027.css",revision:"aca35638af3a9027"},{url:"/_next/static/css/f4f629ba87d0d95e.css",revision:"f4f629ba87d0d95e"},{url:"/_next/static/lHuC3JrtEPCk1RyApkvwf/_buildManifest.js",revision:"d632217849e4d23e8d83457c0c6e87d3"},{url:"/_next/static/lHuC3JrtEPCk1RyApkvwf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/404.b5a1baa3.jpg",revision:"b5a1baa3"},{url:"/_next/static/media/avatar.3b50416a.jpg",revision:"cc022eaa19c1310e55a60c1e8a3a9585"},{url:"/_next/static/media/balloon.b5a1baa3.jpeg",revision:"b5a1baa3"},{url:"/_next/static/media/m1.d4c7a6f7.png",revision:"93ea4bac9f5a9e114233c0475b67deb4"},{url:"/_next/static/media/m2.725f40f8.png",revision:"4af0557aff2e36a95696363b0bd36a50"},{url:"/_next/static/media/m3.d876db21.png",revision:"99a008f1e1295e0f07df5033d8ec1503"},{url:"/_next/static/media/m4.5c2a2015.png",revision:"6f2c084a7c6f13e348fe4e5dcafb66ae"},{url:"/_next/static/media/m5.206bf022.png",revision:"35efecaa9d9782f97216a2a67ee48ee3"},{url:"/_next/static/media/m6.2877ae48.png",revision:"316162d8e84169c84adaae8fdbda92ae"},{url:"/_next/static/media/m7.73cf88b0.png",revision:"3a85b20bc9f52806297ece9ba8b15b86"},{url:"/_next/static/media/m8.a5f70edb.png",revision:"675c5e1ed43938fc1bc4e6689033d94a"},{url:"/_next/static/media/m9.1049a578.png",revision:"49277fb522221e1606476543b3b4f58e"},{url:"/_next/static/media/p1.da7716f9.png",revision:"87abec630f6c8ea1baf9f71809dc8086"},{url:"/_next/static/media/p2.6531a0d2.png",revision:"ab54313ac60ed71ce798c157b0603d47"},{url:"/_next/static/media/p3.1b0f1da7.png",revision:"bf2127c3f99b9c4b00eabe18be4b5706"},{url:"/_next/static/media/p4.b0503583.png",revision:"9391e02fb67485247b6a1c311c427e37"},{url:"/_next/static/media/p5.88b286a3.png",revision:"07c917ac43b3c022046463eda918a78f"},{url:"/_next/static/media/p6.0f7b21e6.png",revision:"114d01ae41ed1a22b36b3bf0ced1bcfb"},{url:"/_next/static/media/p7.7b075bc4.png",revision:"c5acff9a03b321d4789d8a644a429fff"},{url:"/_next/static/media/p8.e56b74a5.png",revision:"e0c9b62d7852b0a34f5e47676c2ed782"},{url:"/_next/static/media/p9.feaffb6a.png",revision:"dff0cbeffd5fcc58df153ac062d16c19"},{url:"/_next/static/media/s1.b9a03128.png",revision:"0139623cd713a4ad823a3e5518c191c5"},{url:"/_next/static/media/s2.c13cbe76.png",revision:"e5acea507a08b57c9dc0c175855578cf"},{url:"/_next/static/media/s3.ef4ef502.png",revision:"8073c7aa1a2dff4c4b5f6cfb451df939"},{url:"/_next/static/media/s4.d00fc865.png",revision:"93c02be78f43d89b9a0570487114f7c2"},{url:"/_next/static/media/s5.5589d598.png",revision:"6145045e958e4848a75826aa825f2997"},{url:"/_next/static/media/s6.f5c03c55.png",revision:"47261c2ff8a9409a5955ea3f5389d1de"},{url:"/_next/static/media/s7.bcb49b3e.png",revision:"27ee4ec4efd878f9de64be6694b95073"},{url:"/_next/static/media/s8.f8beaf13.png",revision:"70224552e194ea4e6b5591e2aad8c918"},{url:"/_next/static/media/s9.52c5e65d.png",revision:"089a64e16dac1ba19f68fa9d287736c6"},{url:"/_next/static/media/wallpaper-mobile.29c8110f.jpg",revision:"29c8110f"},{url:"/_next/static/media/wallpaper.31199ae8.jpg",revision:"31199ae8"},{url:"/_next/static/media/z1.9203ced0.png",revision:"c7218565b39088ed201655506dad68a6"},{url:"/_next/static/media/z2.29ef5a81.png",revision:"53d9be7d6ae488a87873f2bc11a90ede"},{url:"/_next/static/media/z3.2f5b6ef0.png",revision:"f153817f7be7360fe4ec9489d61bb600"},{url:"/_next/static/media/z4.af9a9339.png",revision:"277e1264cbb0dea6a9150dbe74505984"},{url:"/_next/static/media/z5.57e8427d.png",revision:"0c0856c2afa9444d2f2d87eaef4e4991"},{url:"/_next/static/media/z6.f4ee2ea6.png",revision:"3bf748fe3e253f880dd6095029c97a42"},{url:"/_next/static/media/z7.5d3c3a65.png",revision:"31686cb007d30f146a78e233de64bfa0"},{url:"/asset/img/gomoku/board.jpg",revision:"caa7d3b892a7be14619775537024db85"},{url:"/asset/img/gomoku/guanghechen.jpg",revision:"2e213988e292ac31eb3025890b2a8572"},{url:"/asset/img/gomoku/wulala.jpg",revision:"ad569e96b3fd7184d0940fe08fc1a393"},{url:"/asset/js/webworker/gomoku.js",revision:"67b61b9168d6c58f71cec57403b8846e"},{url:"/favicon.png",revision:"2248aae9785b66dab72c3b583c3d1f35"},{url:"/manifest.json",revision:"f94d25c9f9f94b7d4b49bde789b32797"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
