'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "04a280cfe330c246caab0e9fc8a0f732",
"index.html": "87f1736b02b7c75481495b779d56a85e",
"/": "87f1736b02b7c75481495b779d56a85e",
"main.dart.js": "711b1a714edfb8880d750a6b216a2920",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "30d1272b3744f6d580aa1fe63b61ef80",
"assets/AssetManifest.json": "de1aa9c9b9594525fec019d5484d2f00",
"assets/NOTICES": "90d5aee10cd69d11f5ff1415a7992157",
"assets/FontManifest.json": "943b4b723259710ea545901793f60087",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/soical.svg": "8f1fba10a5bf40d70bc5fcc3f1c0fce5",
"assets/assets/images/email.png": "bd8d33454102882c47198f750622ee3c",
"assets/assets/images/Mada_Logo.svg": "3bd926500a730f6629663a872a5c7c87",
"assets/assets/images/home.svg": "fa1c35caa603f11424b7dde886542a47",
"assets/assets/images/fc.svg": "c1b47e00e95aab4e1f7b81e5c0a8bd74",
"assets/assets/images/visa.svg": "59c03d86769db2245bf96b64bae026cc",
"assets/assets/images/otp.svg": "71272dc15aa9904e9a5730c8adfc1a2d",
"assets/assets/images/student_card.svg": "4fab57ff715a5a77ac8cd5da2ebaa4cb",
"assets/assets/images/logout.svg": "db8b9e99cd07f040429cd847324080a3",
"assets/assets/images/wallat_card.png": "9d1f17bbf7f29334bc271882f6ea431d",
"assets/assets/images/menu_image_top.png": "d0661364f7bb250494d88442d5292c96",
"assets/assets/images/menu_footer.svg": "ec2a74e8a88211240c9409debf2e56b7",
"assets/assets/images/apply.svg": "64dd87f9eee11bd174c744a3857f4e38",
"assets/assets/images/monay.png": "86b3e3a74c7ee774b4f1fae69b77e44e",
"assets/assets/images/product.png": "8f6267a7fa4b59e5adc14f8ac7736fab",
"assets/assets/images/lock.png": "46cf29ae53d2cc96956f094170bba60f",
"assets/assets/images/school_icon.svg": "3684dd47fd1dc8cb708ee88dec8cec1d",
"assets/assets/images/Component%252024%2520%25E2%2580%2593%25201@2x.png": "96506fa6af35ede99a09d25f4aa16b51",
"assets/assets/images/Group%252057989.png": "d0661364f7bb250494d88442d5292c96",
"assets/assets/images/Component%252024%2520%25E2%2580%2593%25201.png": "ffa6fada64983e1191b7d2daf6e45aa0",
"assets/assets/images/student_icon.png": "22f69ddbc9a114447dd918d49616848c",
"assets/assets/images/monay.svg": "22f5e89d235eed40f6e5afd7e2e792bf",
"assets/assets/images/vector.png": "eaabb4d107529bc1546755eb0f5c8dbc",
"assets/assets/images/bottom.png": "95c039d3764cce2965ffe400ac794d31",
"assets/assets/images/menu_image_top.svg": "71ae45ba5bea77d4e56919f7015c22aa",
"assets/assets/images/wallat_card.svg": "07977091f886325a740537532288bd34",
"assets/assets/images/user.png": "9e8ac29db372767925f45ef19a030547",
"assets/assets/images/wallet_menu.svg": "2a1ad54e8ad53ca36464a814129fb56d",
"assets/assets/images/Component%252024%2520%25E2%2580%2593%25201@3x.png": "ad9e23d95fc2aac59549746003d007dc",
"assets/assets/images/card_student.svg": "bc893d1796b5cf9c667d68a19e57312d",
"assets/assets/images/top_menu.svg": "33dd25bfe179f0661aefa515486acaee",
"assets/assets/images/visa1.svg": "aa85e3571a5efa5a53439cba4fc6aa62",
"assets/assets/images/soical.png": "703e9247c914e0f27209105e09051d72",
"assets/assets/images/gear.svg": "48035b7249e1f40c94d1a0d4d28b0e06",
"assets/assets/images/wallat.png": "5ef76d05714cab36bcc5d8ce99dbd200",
"assets/assets/images/mada.svg": "61926404056cbef535001c0b5e347b03",
"assets/assets/images/mada-logo.svg": "583030c657876576307f709724227243",
"assets/assets/images/debit.svg": "85dc8f1afa3f9648e294747e3c7d2660",
"assets/assets/images/top.png": "54ec251c149d872ada7ac9468c5e52d9",
"assets/assets/images/menu.png": "1554bfe0db25733cc3c6361d4a268289",
"assets/assets/images/date.png": "f283f810058f5ab0c09acfb08b6ef9a1",
"assets/assets/images/logo.png": "fa9fb465110dff12566d8afb01f1170a",
"assets/assets/images/trans.png": "c28b30459cc9571c4639a0c81997e869",
"assets/assets/images/date_icon.svg": "ad6d4aafe354cc13b15244f181595b06",
"assets/assets/images/student_menu.svg": "b6ede0b8817051c4a495cb0f01794af2",
"assets/assets/images/youtube.svg": "43829b64c6d462e9e3f8a632bc3cb2a4",
"assets/assets/images/student_m.svg": "3f80022305978fa6687dedf6953e9754",
"assets/assets/images/call.png": "3380541d69f9729dd00947553f8f7dcd",
"assets/assets/images/bank.svg": "39d78a0cc843001e12570a9178fcafab",
"assets/assets/images/language.svg": "cd3056a78d208d3f9b8631604f48d360",
"assets/assets/images/bank.png": "d0661364f7bb250494d88442d5292c96",
"assets/assets/images/credit.svg": "229261792afc2708cc5a203b0ea51ca9",
"assets/assets/images/student_m.png": "3127722a5608ae66f7f9db4ec7817d0a",
"assets/assets/images/card_mony.svg": "0129f2a7537f21d304361418d1bd50b4",
"assets/assets/images/web.svg": "27a01dfb1cd90bded4b200b3a096f908",
"assets/assets/images/add_student.svg": "2f5955af149f6127fccb07805fcfb157",
"assets/assets/images/Component%252014%2520%25E2%2580%2593%25201.svg": "a2c3d095f7ab029ef811e5e675b231f5",
"assets/assets/images/Money.svg": "d4a30e61b4def728d7a6cf30c34409b8",
"assets/assets/images/filter.svg": "503413b077e740c5442d24a2459009b2",
"assets/assets/images/apply1.svg": "e4055a00b9b9fe034d57e49defa353f0",
"assets/assets/images/trans.svg": "975c4fb29b9a12cbfd04d1545a49b4f2",
"assets/assets/images/whatsapp.png": "ad12e7d7efdcc9db62a58ae28d3f00e6",
"assets/assets/images/logo.svg": "6c90e2bca8273fc375d8f1c8b7fbf844",
"assets/assets/images/photo.svg": "5f613b96b73006a71bf9d052b71df54d",
"assets/assets/images/wallat.svg": "b522fc310886a9684d25348675c87de6",
"assets/assets/images/bg.png": "a7ce683af9d70f257246e18132a96656",
"assets/assets/fonts/DINNEXTARABICREGULAR.otf": "b492a7590ebe8022452515e11b29063d",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
