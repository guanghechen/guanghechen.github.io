if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const f=e=>a(e,i),r={module:{uri:i},exports:c,require:f};s[i]=Promise.all(t.map((e=>r[e]||f(e)))).then((e=>(n(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bf54403e210dc9c6e994a28bd3dd8cef"},{url:"/_next/static/9fGftGlHDOVXOVnlBCAfv/_buildManifest.js",revision:"d8963c6657102db1f2fa51dc81a43a6f"},{url:"/_next/static/9fGftGlHDOVXOVnlBCAfv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/111.52a133611fadec8c.js",revision:"52a133611fadec8c"},{url:"/_next/static/chunks/138-bde4bdfccc970013.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/195-3676e5fa66d597c0.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/32-c49bb5d7213019d7.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/353.5b48c565abea20b2.js",revision:"5b48c565abea20b2"},{url:"/_next/static/chunks/390.266d46209972b50d.js",revision:"266d46209972b50d"},{url:"/_next/static/chunks/4-1f47c029a7fba46f.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/409.c4fde468c545064d.js",revision:"c4fde468c545064d"},{url:"/_next/static/chunks/414.aeb3b04eec402fec.js",revision:"aeb3b04eec402fec"},{url:"/_next/static/chunks/448-62c186fb5283557d.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/551-68df0022cc950ef8.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/595-60215c9a9c19277d.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/633.39f4966d115ff06f.js",revision:"39f4966d115ff06f"},{url:"/_next/static/chunks/638-8cb684b818cb5549.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/659-7f246e0fb997ad2e.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/663-b86a93aeb6a521eb.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/673e98bc-3e202920db1894f8.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/69-48533d44d2bf446a.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/714-13c64a7806ea4ae0.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/74-31f764c22632bceb.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/800-4848173b49d8d689.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/810-8ebda3a4770496e8.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/(essay)/essay/%5B...slug%5D/page-a4370ccd369725ea.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/(essay)/essays/%5BpageId%5D/page-db36181a8b8fb605.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/(essay)/layout-5f49ece7d1bf5812.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/(post)/layout-dfa2e09a2a72ad66.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/(post)/post/%5B...slug%5D/page-80cd6d5787edd594.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/(post)/posts/%5BpageId%5D/page-f6822efba4139837.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/about/page-8f151f3b24683def.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/game/gomoku/page-8e5e3922dc3bd645.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/game/layout-92a4b7971758d87e.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/game/page-b94dea1219e8eaef.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/game/sudoku/page-4503ce5e4c355b61.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/layout-b711fdca504bb2b1.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/not-found-79f3557760569a3b.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/app/page-c9f37c903ebf9098.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/b23bdb94.c0a9c93e34b261a4.js",revision:"c0a9c93e34b261a4"},{url:"/_next/static/chunks/fd9d1056-720c60cb92b754a9.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/framework-b370f160bb96059c.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/main-app-73a1fec814ad4325.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/main-d5594892324a6911.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/pages/_app-d21e88acd55d90f1.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/pages/_error-d6107f1aac0c574c.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-62f3425439692c3f.js",revision:"9fGftGlHDOVXOVnlBCAfv"},{url:"/_next/static/css/2159a4b672631e08.css",revision:"2159a4b672631e08"},{url:"/_next/static/css/f2ccec9f31141b1c.css",revision:"f2ccec9f31141b1c"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/404.b5a1baa3.jpg",revision:"38c03d0ba3a8165adc52d272f3227e3a"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/avatar.3b50416a.jpg",revision:"cc022eaa19c1310e55a60c1e8a3a9585"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/sudoku-cover.b1f07140.jpg",revision:"328636e2bfd7b196789306484b97ad89"},{url:"/_next/static/media/wallpaper-mobile.29c8110f.jpg",revision:"50ca171ece440ae6e62874f9ac072ea8"},{url:"/_next/static/media/wallpaper.9869248f.jpg",revision:"341d36ddc1953ebd0426cf17dfdf2643"},{url:"/asset/img/balloon.jpg",revision:"38c03d0ba3a8165adc52d272f3227e3a"},{url:"/asset/img/gomoku/board.jpg",revision:"caa7d3b892a7be14619775537024db85"},{url:"/asset/img/gomoku/guanghechen.jpg",revision:"2e213988e292ac31eb3025890b2a8572"},{url:"/asset/img/gomoku/wulala.jpg",revision:"ad569e96b3fd7184d0940fe08fc1a393"},{url:"/asset/img/post/main-wallpaper.jpg",revision:"caa7d3b892a7be14619775537024db85"},{url:"/asset/img/post/wallpaper.jpg",revision:"297dfaf666b0964bd79ddd885326a948"},{url:"/asset/js/webworker/gomoku.js",revision:"67b61b9168d6c58f71cec57403b8846e"},{url:"/favicon.png",revision:"2248aae9785b66dab72c3b583c3d1f35"},{url:"/manifest.json",revision:"20dd69b22f5db4093d56d264fe522020"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
