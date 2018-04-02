importScripts('/js/workbox/workbox-sw.js');

if (workbox) 
{
  workbox.setConfig({
    modulePathPrefix: '/js/workbox-v3.0.1/'
  });

  console.log('Yay! Workbox is loaded');

  workbox.precaching.precacheAndRoute([
  {
    "url": "images/icon/icon.png",
    "revision": "d2bc415466561c6cdace675c530743c0"
  },
  {
    "url": "images/icon/pwa-192x192.png",
    "revision": "6410df2a6c5639ae308e9c5547d1bb13"
  },
  {
    "url": "images/icon/pwa-512x512.png",
    "revision": "39abd15879857661e9511087b0b5d54f"
  },
  {
    "url": "index.html",
    "revision": "50a18cb7e1a56993bae120924cf57b90"
  },
  {
    "url": "js/p5.min.js",
    "revision": "571339230a0f0aee23593ce24996a8aa"
  },
  {
    "url": "js/sketch.js",
    "revision": "a989908828982243e2a3f5ab32f848af"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-background-sync.dev.js",
    "revision": "36533f650dbb06e4d479e3543e324be8"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-background-sync.prod.js",
    "revision": "d78e2364e41d7fce06419042c1c595c1"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-broadcast-cache-update.dev.js",
    "revision": "776bc201b74b14f8637ab428df9b63cf"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-broadcast-cache-update.prod.js",
    "revision": "934891f61b11e9c051906f53324d159a"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-cache-expiration.dev.js",
    "revision": "1d94eca0a0c20d5c02521cf752545d9d"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-cache-expiration.prod.js",
    "revision": "33750d9ba165fe23f9dea02272db4eda"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-cacheable-response.dev.js",
    "revision": "8b7d6e583bdbc2aba21c560e90beb986"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-cacheable-response.prod.js",
    "revision": "82e09431bd4f19afddee2ade24911529"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-core.dev.js",
    "revision": "1d245db4168ad653c8f5f5d6e63ad2ca"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-core.prod.js",
    "revision": "d63d487fd91e4223a1f5bf87f994cd8d"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-google-analytics.dev.js",
    "revision": "f8633eb9a13ae40486537890fd6db049"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-google-analytics.prod.js",
    "revision": "d246feb57451b67393ef0775cc2362fb"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-precaching.dev.js",
    "revision": "e5aeb8620f27d3c775b1708e25dd2188"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-precaching.prod.js",
    "revision": "047b5fda9a8c02de8c16a7dd13b5b829"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-routing.dev.js",
    "revision": "5a3a5b3ec0d8cb345b90cc31ffeed751"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-routing.prod.js",
    "revision": "129f5adfcbedb0a93121814e68164439"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-strategies.dev.js",
    "revision": "9775b2b9f0af5db8252d614f2807a124"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-strategies.prod.js",
    "revision": "5c404cfe1333803c885a50af87fb90c4"
  },
  {
    "url": "js/workbox-v3.0.1/workbox-sw.js",
    "revision": "060adeb4aef35c5028563db0c51afa34"
  },
  {
    "url": "manifest.json",
    "revision": "54d915c1cc03c212c9f558b9824f7cc8"
  },
  {
    "url": "style/main.css",
    "revision": "628320e3f89c25f36472cda3e970e57d"
  }
]);

  workbox.precaching.precacheAndRoute([
    {
        "url": "sw.js",
    },
  ])
} 
else 
{
  console.log('Boo! Workbox didn\'t load');
}