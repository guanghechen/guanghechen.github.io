/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-99cbbc45c71b9d297670.js"
  },
  {
    "url": "styles.b73d3228dde89b89ea0d.css"
  },
  {
    "url": "framework-889b59788ae90fa7cec6.js"
  },
  {
    "url": "app-577a2aa44af2683b6c79.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e66fc22a12003ffa2f7fdd5c71d79818"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fe54444d153742a8bc4d.js"
  },
  {
    "url": "polyfill-3d8718a4c172cbc7aa33.js"
  },
  {
    "url": "0d88ad7a-5e96cf37e291af50e1c2.js"
  },
  {
    "url": "a57ecc71-9250056d633bab27f57a.js"
  },
  {
    "url": "ff39441c-a81c3cacdfdfa1050674.js"
  },
  {
    "url": "72fca025a43519f974bc4f2765b01e0e1e0a9558-b232c98143c5ae4a6359.js"
  },
  {
    "url": "01c38ade31fe3dfc5b112db7e00e7c11942b03d1-8b41b1224d51c8614acf.js"
  },
  {
    "url": "0526c2708c4ab50db6fc60f1a0cccaafef0808ae-1a6c51a52d5d8a7f8090.js"
  },
  {
    "url": "8c3ae79c5418c02c04746f932e95ba31ba9c40cd-c6739d074212d097e07a.js"
  },
  {
    "url": "component---src-layout-blog-post-list-index-tsx-c6a422d4cd838d91889a.js"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "736aefcb94ea27c11b51c590e6cbc7c9"
  },
  {
    "url": "page-data/sq/d/1005149165.json",
    "revision": "26b7a6b0a7bcfd7b9a973ea6c634f89c"
  },
  {
    "url": "page-data/sq/d/1639449909.json",
    "revision": "2e7cd84b4980f6e44c78e43d49ab0b76"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2fc83577d4435129d0c244402321fda8"
  },
  {
    "url": "page-data/quizzes/page-data.json",
    "revision": "e016fb9eddcd8a9332476747ee52e312"
  },
  {
    "url": "component---src-layout-blog-post-index-tsx-9cf57a971cfb02fabbba.js"
  },
  {
    "url": "page-data/essay/tada/page-data.json",
    "revision": "8f733c4f9818f0f3e76051f8e5d8692a"
  },
  {
    "url": "page-data/essays/page-data.json",
    "revision": "7cc410aa70f806c40eb2c3c9983b7a41"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2bcaaf4bb997dd306f2c3893b89f1a58"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-577a2aa44af2683b6c79.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
