if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const d=e=>s(e,n),r={module:{uri:n},exports:t,require:d};a[n]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TWM23EoW3k1pSpakHYYbm/_buildManifest.js",revision:"10254dbf9acff7ad5d2032bd699cba0f"},{url:"/_next/static/TWM23EoW3k1pSpakHYYbm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/185-d06d7447d3c795dc.js",revision:"d06d7447d3c795dc"},{url:"/_next/static/chunks/205-ffde78cd6374cbc2.js",revision:"ffde78cd6374cbc2"},{url:"/_next/static/chunks/246-079c20783ab6d852.js",revision:"079c20783ab6d852"},{url:"/_next/static/chunks/247.05f4f4feadcb5516.js",revision:"05f4f4feadcb5516"},{url:"/_next/static/chunks/264-972eb122c36cb11a.js",revision:"972eb122c36cb11a"},{url:"/_next/static/chunks/285.2b78459c7c989eb8.js",revision:"2b78459c7c989eb8"},{url:"/_next/static/chunks/299.b81f40f8824193cb.js",revision:"b81f40f8824193cb"},{url:"/_next/static/chunks/373.331e8a73c49d2906.js",revision:"331e8a73c49d2906"},{url:"/_next/static/chunks/383-fd5a38e10f77b9ac.js",revision:"fd5a38e10f77b9ac"},{url:"/_next/static/chunks/388.e072ecb17aeb7b85.js",revision:"e072ecb17aeb7b85"},{url:"/_next/static/chunks/3b9d1622-b0e5b533c747df14.js",revision:"b0e5b533c747df14"},{url:"/_next/static/chunks/51.13f7aecd09fd957a.js",revision:"13f7aecd09fd957a"},{url:"/_next/static/chunks/515-b808b4f0120645e6.js",revision:"b808b4f0120645e6"},{url:"/_next/static/chunks/554-195c618dfb23a7ab.js",revision:"195c618dfb23a7ab"},{url:"/_next/static/chunks/564-75c0dcf6d129571b.js",revision:"75c0dcf6d129571b"},{url:"/_next/static/chunks/747-86e07fea3dbce3b1.js",revision:"86e07fea3dbce3b1"},{url:"/_next/static/chunks/76f4748c.2a5ebd522d7567a6.js",revision:"2a5ebd522d7567a6"},{url:"/_next/static/chunks/902.e1561506066d0b9e.js",revision:"e1561506066d0b9e"},{url:"/_next/static/chunks/framework-18c7e6fcf99e5daa.js",revision:"18c7e6fcf99e5daa"},{url:"/_next/static/chunks/main-881697fc9a01f7ab.js",revision:"881697fc9a01f7ab"},{url:"/_next/static/chunks/pages/404-3ea4b7eecf353f3f.js",revision:"3ea4b7eecf353f3f"},{url:"/_next/static/chunks/pages/_app-08a2d2cffe643ccf.js",revision:"08a2d2cffe643ccf"},{url:"/_next/static/chunks/pages/_error-3f6d1c55bb8051ab.js",revision:"3f6d1c55bb8051ab"},{url:"/_next/static/chunks/pages/about-b0ef79efca9adf0e.js",revision:"b0ef79efca9adf0e"},{url:"/_next/static/chunks/pages/essay/%5B...slug%5D-5e9dc9669bccdcb5.js",revision:"5e9dc9669bccdcb5"},{url:"/_next/static/chunks/pages/essays/%5BpageId%5D-a7eb9460ba44e2cd.js",revision:"a7eb9460ba44e2cd"},{url:"/_next/static/chunks/pages/game-0be8738840edd52a.js",revision:"0be8738840edd52a"},{url:"/_next/static/chunks/pages/game/gomoku-2240b4f0293c8716.js",revision:"2240b4f0293c8716"},{url:"/_next/static/chunks/pages/game/sudoku-208af111f7351783.js",revision:"208af111f7351783"},{url:"/_next/static/chunks/pages/index-7fdde2cc593ee360.js",revision:"7fdde2cc593ee360"},{url:"/_next/static/chunks/pages/post/%5B...slug%5D-fd6359feb9a86241.js",revision:"fd6359feb9a86241"},{url:"/_next/static/chunks/pages/post/mahjong-54ae18cd7cf06db2.js",revision:"54ae18cd7cf06db2"},{url:"/_next/static/chunks/pages/posts/%5BpageId%5D-a9554c33508b98f9.js",revision:"a9554c33508b98f9"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0a0737c3f7f5a5ec.js",revision:"0a0737c3f7f5a5ec"},{url:"/_next/static/css/2159a4b672631e08.css",revision:"2159a4b672631e08"},{url:"/_next/static/css/f6e2a3135d0744b2.css",revision:"f6e2a3135d0744b2"},{url:"/_next/static/media/404.b5a1baa3.jpg",revision:"38c03d0ba3a8165adc52d272f3227e3a"},{url:"/_next/static/media/avatar.3b50416a.jpg",revision:"cc022eaa19c1310e55a60c1e8a3a9585"},{url:"/_next/static/media/m1.d4c7a6f7.png",revision:"93ea4bac9f5a9e114233c0475b67deb4"},{url:"/_next/static/media/m2.725f40f8.png",revision:"4af0557aff2e36a95696363b0bd36a50"},{url:"/_next/static/media/m3.d876db21.png",revision:"99a008f1e1295e0f07df5033d8ec1503"},{url:"/_next/static/media/m4.5c2a2015.png",revision:"6f2c084a7c6f13e348fe4e5dcafb66ae"},{url:"/_next/static/media/m5.206bf022.png",revision:"35efecaa9d9782f97216a2a67ee48ee3"},{url:"/_next/static/media/m6.2877ae48.png",revision:"316162d8e84169c84adaae8fdbda92ae"},{url:"/_next/static/media/m7.73cf88b0.png",revision:"3a85b20bc9f52806297ece9ba8b15b86"},{url:"/_next/static/media/m8.a5f70edb.png",revision:"675c5e1ed43938fc1bc4e6689033d94a"},{url:"/_next/static/media/m9.1049a578.png",revision:"49277fb522221e1606476543b3b4f58e"},{url:"/_next/static/media/p1.da7716f9.png",revision:"87abec630f6c8ea1baf9f71809dc8086"},{url:"/_next/static/media/p2.6531a0d2.png",revision:"ab54313ac60ed71ce798c157b0603d47"},{url:"/_next/static/media/p3.1b0f1da7.png",revision:"bf2127c3f99b9c4b00eabe18be4b5706"},{url:"/_next/static/media/p4.b0503583.png",revision:"9391e02fb67485247b6a1c311c427e37"},{url:"/_next/static/media/p5.88b286a3.png",revision:"07c917ac43b3c022046463eda918a78f"},{url:"/_next/static/media/p6.0f7b21e6.png",revision:"114d01ae41ed1a22b36b3bf0ced1bcfb"},{url:"/_next/static/media/p7.7b075bc4.png",revision:"c5acff9a03b321d4789d8a644a429fff"},{url:"/_next/static/media/p8.e56b74a5.png",revision:"e0c9b62d7852b0a34f5e47676c2ed782"},{url:"/_next/static/media/p9.feaffb6a.png",revision:"dff0cbeffd5fcc58df153ac062d16c19"},{url:"/_next/static/media/s1.b9a03128.png",revision:"0139623cd713a4ad823a3e5518c191c5"},{url:"/_next/static/media/s2.c13cbe76.png",revision:"e5acea507a08b57c9dc0c175855578cf"},{url:"/_next/static/media/s3.ef4ef502.png",revision:"8073c7aa1a2dff4c4b5f6cfb451df939"},{url:"/_next/static/media/s4.d00fc865.png",revision:"93c02be78f43d89b9a0570487114f7c2"},{url:"/_next/static/media/s5.5589d598.png",revision:"6145045e958e4848a75826aa825f2997"},{url:"/_next/static/media/s6.f5c03c55.png",revision:"47261c2ff8a9409a5955ea3f5389d1de"},{url:"/_next/static/media/s7.bcb49b3e.png",revision:"27ee4ec4efd878f9de64be6694b95073"},{url:"/_next/static/media/s8.f8beaf13.png",revision:"70224552e194ea4e6b5591e2aad8c918"},{url:"/_next/static/media/s9.52c5e65d.png",revision:"089a64e16dac1ba19f68fa9d287736c6"},{url:"/_next/static/media/z1.9203ced0.png",revision:"c7218565b39088ed201655506dad68a6"},{url:"/_next/static/media/z2.29ef5a81.png",revision:"53d9be7d6ae488a87873f2bc11a90ede"},{url:"/_next/static/media/z3.2f5b6ef0.png",revision:"f153817f7be7360fe4ec9489d61bb600"},{url:"/_next/static/media/z4.af9a9339.png",revision:"277e1264cbb0dea6a9150dbe74505984"},{url:"/_next/static/media/z5.57e8427d.png",revision:"0c0856c2afa9444d2f2d87eaef4e4991"},{url:"/_next/static/media/z6.f4ee2ea6.png",revision:"3bf748fe3e253f880dd6095029c97a42"},{url:"/_next/static/media/z7.5d3c3a65.png",revision:"31686cb007d30f146a78e233de64bfa0"},{url:"/asset/img/balloon.jpeg",revision:"38c03d0ba3a8165adc52d272f3227e3a"},{url:"/asset/img/gomoku/board.jpg",revision:"caa7d3b892a7be14619775537024db85"},{url:"/asset/img/gomoku/guanghechen.jpg",revision:"2e213988e292ac31eb3025890b2a8572"},{url:"/asset/img/gomoku/wulala.jpg",revision:"ad569e96b3fd7184d0940fe08fc1a393"},{url:"/asset/img/home/wallpaper-mobile.jpg",revision:"50ca171ece440ae6e62874f9ac072ea8"},{url:"/asset/img/home/wallpaper.jpg",revision:"341d36ddc1953ebd0426cf17dfdf2643"},{url:"/asset/img/post/main-wallpaper.jpg",revision:"caa7d3b892a7be14619775537024db85"},{url:"/asset/img/post/wallpaper.jpg",revision:"297dfaf666b0964bd79ddd885326a948"},{url:"/asset/js/webworker/gomoku.js",revision:"67b61b9168d6c58f71cec57403b8846e"},{url:"/favicon.png",revision:"2248aae9785b66dab72c3b583c3d1f35"},{url:"/manifest.json",revision:"f94d25c9f9f94b7d4b49bde789b32797"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
