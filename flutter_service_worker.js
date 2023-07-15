'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d404401c8c6495b206fc35c95e55a6d5",
".git/config": "8f13502cf023af972ecbd9261915a6ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fce83403e424d42a5706e41123c655f1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e81f82afd366585373422ebfaf6488ab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f87b037ced7b25a3213652b4a53cd992",
".git/logs/refs/heads/main": "d0c01e129bbae98b1c2bbf656cea3d58",
".git/logs/refs/heads/master": "f9bde45a529ffe91258d34b1c7a07005",
".git/logs/refs/remotes/origin/main": "cdd77dc3757b6ac9d0c88960e527333a",
".git/logs/refs/remotes/origin/maina": "246c5b80a7e580032e7cf811116327bf",
".git/logs/refs/remotes/origin/master": "2f74f35e425d7344e986128ecbadab56",
".git/objects/01/99a7ad73e5c32442e4bf924244197441380b55": "d2c5027995426389225a12bd6189c5dd",
".git/objects/01/b12fefd392a0f69527b495a309a822758b76f1": "dcf5e29e702ebc0be9124c56981b976b",
".git/objects/02/d784b1ab1151d5a6ab95b5be7d3e017ecfc156": "cd18febfb3911a3ce93f84d2bae6f465",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/5851c61e20d1bfe89cc1e1ca9414a63bc6e020": "14feeb9694c88c40cd0e3ded36c65076",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/11/f83c7e0131e80c7cc983cf8a7aad1ad5773454": "6de7aef5b87d87a39a786dd44c816067",
".git/objects/1d/0b27fd77fc63cab54269e408b83b1459462ebb": "ff62b5f88706d99edd3b33a79e4dc107",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/28/81b23c26fc9504499cbed6a3dae5a25dfea403": "21731f718aea45c4c70de44b6a230850",
".git/objects/29/10b920b47d131932ebce1e13d26e006df37090": "6386b75f28cdabbc960ba175c826c0ca",
".git/objects/2e/606fea9fce92223b210f5b25caedb6b36ae6ca": "0c592dd9e1e49b1d2ea56e61bb8d089d",
".git/objects/35/57d1d1ed7409b2ed5660cbfbca1280973e169d": "41400304aefbb1933e07f41d44e8132d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/f48bbd5539397b6e55472f0807ddd6a0482da2": "d41a3c0d31c95ac3353da6add403eaf8",
".git/objects/45/ff9a4e9c898f19b948c4c5572aad3f703d2287": "94da3eca1c8da421e4d31b9588452ab3",
".git/objects/47/aab5cb06487354b1e21d53b8ebcdf41432a7b9": "271140d7124791d4ed74c47606cbd1ef",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/9c28685cf2b5b8d33cdb3da0d2aa5059ea5945": "44a716a2ac3af987e85c14d3e44263b9",
".git/objects/61/7b95e7473a1e6ff69f07a616f0efd073990b65": "0dc97fd4d7424934d747be7af1411883",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/730c992de52cc35cc8c0d9a566215e8432d095": "f2346a8b3ff07a2e141955960c143c51",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/76/ad34ba32d257ea175b5c4507683fee534bd6ea": "68fd70a147640d6b11fa82d9ce89eb90",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/38aca793e509fe19ffa0954f70538ee84075be": "5744b1b4ff3228b0fdbfa434edd8d773",
".git/objects/a8/2b667b48e0873a2a5709071405793c688c666f": "fc7832e0658a6190f86bf08be5768915",
".git/objects/ac/095089218d42fa765adc32c23caf59d2d70696": "f1ed46fb6d66842c7522461aae0260c4",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/6854fdccd12c2d65f1902cd061f38423e5eaa3": "d7c0fd7c7a6fe1ab84ae3e0b5c420501",
".git/objects/cc/c073adbb49d26ce692bafc62d2126438b40b75": "73653d92a5248674cbcd0d1369648726",
".git/objects/d0/0c5d7e5304af5268c5f133256f78ba938cc284": "9234ca5549e3d5e2953cff006dccdbe7",
".git/objects/d1/0d6e27478ae0df20d3582da16948b8d79bb394": "de7e12dfd943359bc31146623180c577",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e7/2a4c11dc3deede000d5750e2601e9f2f1d6941": "884a24d1589af7c249016c0a4ab570d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c71a217e59c5a682d9b2d026ad83ad6476755a": "96b09b5b208b0c20acdc0dadccacd503",
".git/objects/ff/daca08d63c3f17f81213ae8a0bfd29b4717f00": "169d179c5f5a58b4f52afa9ff882bd9d",
".git/ORIG_HEAD": "bcef9b55e3e39146846d6c10fb452036",
".git/refs/heads/main": "bcef9b55e3e39146846d6c10fb452036",
".git/refs/heads/master": "1e1ded617fae494422638ec2f96b682b",
".git/refs/remotes/origin/main": "bcef9b55e3e39146846d6c10fb452036",
".git/refs/remotes/origin/maina": "e542fc9a001e1bf3821942b099effaee",
".git/refs/remotes/origin/master": "1e1ded617fae494422638ec2f96b682b",
"assets/AssetManifest.bin": "35a261b1d2c7f0096871e0dc05c8025f",
"assets/AssetManifest.json": "a4c3aeb277bc66cb62d211eebd08ec8e",
"assets/assets/images/background.jpeg": "2aad4b7de200935b2a25a9d73dc48e13",
"assets/assets/images/rocket.png": "eefb9924d023952d281d2a2a85bcd550",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "af89c0d339ea79a24a88866eadf36476",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e563b8ccc5ac08ed92778d06909c5b57",
"/": "e563b8ccc5ac08ed92778d06909c5b57",
"main.dart.js": "9a33fa0227bd6d03526fbaef4ec76078",
"manifest.json": "2bf6c03d54779f0b0447bc12486ae120",
"version.json": "e6418bf5b190360481ef1b3771f64a12"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
