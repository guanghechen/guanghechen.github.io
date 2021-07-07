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
    "url": "webpack-runtime-8ba87f10aa4cf8162bbf.js"
  },
  {
    "url": "styles.d8898202ea5262b59dfb.css"
  },
  {
    "url": "framework-889b59788ae90fa7cec6.js"
  },
  {
    "url": "app-195d0cfa6911b96db78e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "266d08f4888ea60dab7ecf8623884cd8"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fe54444d153742a8bc4d.js"
  },
  {
    "url": "polyfill-3d8718a4c172cbc7aa33.js"
  },
  {
    "url": "0d88ad7a-574828617fa2dc31fe16.js"
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
    "url": "01c38ade31fe3dfc5b112db7e00e7c11942b03d1-c48e6c1d0a0f167ca5c6.js"
  },
  {
    "url": "0526c2708c4ab50db6fc60f1a0cccaafef0808ae-1a6c51a52d5d8a7f8090.js"
  },
  {
    "url": "8c3ae79c5418c02c04746f932e95ba31ba9c40cd-850524be075673c9be03.js"
  },
  {
    "url": "component---src-layout-blog-post-list-index-tsx-adf041a9451d821f6f1c.js"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "0f74a58f81db7f464d2da7ce5e020ee6"
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
    "revision": "feda7e4e05718568cecf53a12a4aa1ed"
  },
  {
    "url": "page-data/quizzes/page-data.json",
    "revision": "dc047eb032f0358200ff8854434a3820"
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
  if (!resources || !(await caches.match(`/app-195d0cfa6911b96db78e.js`))) {
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
