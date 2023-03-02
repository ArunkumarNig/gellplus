'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dd71108c5c00cb7683c982ac548eed22",
"assets/assets/back.png": "f630c476623ce35331592b0419ff3360",
"assets/assets/back1.png": "342f3e8fc71c6bf9803c0964f54fc7c6",
"assets/assets/back2.png": "11dd68bd96452d429b8ac6c4e743fd0a",
"assets/assets/bookedmessage.gif": "022b902336afb6975c9bcf00b7e5b75b",
"assets/assets/dent.png": "3d97200940271575a4d2883aab336050",
"assets/assets/dentalclinic.png": "6eccd7c9b78c0b487dad867906a33bcc",
"assets/assets/dent_logo.png": "53736239e4efeb1c7ea273941b868f7c",
"assets/assets/doctor.png": "e6b2ca277413218cf63e8889f2b456ec",
"assets/assets/doctorappointbooked.gif": "7075f702b22a4ccfd4a0b5ce36776684",
"assets/assets/doctor_logo.png": "687eaba07d577564b74264a0e18af6c2",
"assets/assets/image1.png": "a2cbe7697b7ebe557e5d5e1ad772da63",
"assets/assets/image2.png": "e017bc87bb3bff917c05b09f0ef56fad",
"assets/assets/image3.png": "14f614541207ab97bbdb3667965820f4",
"assets/assets/image4.png": "563de8151489319481dfa569d7de202f",
"assets/assets/lab.png": "2bbdeb7c516c05821a0f4cff43876a6c",
"assets/assets/lab_logo.png": "3e7aa528f1a3fac5e472790be5fbdc91",
"assets/assets/login_bottom.png": "e3ae1d02ba4c62b0e18ecee1a7dc3030",
"assets/assets/login_logo.png": "760473c645269721b20cee13552fc567",
"assets/assets/logo.png": "c04387035e7a4a4d53260aa60a5175ec",
"assets/assets/medi.png": "7b0e95ab81b14523300b1a9f177e25b0",
"assets/assets/medimessage.gif": "698bd06a46ed3e727e38acf98a5910b8",
"assets/assets/medimessage.mp3": "2fc201f920d950aa693396eb443ed848",
"assets/assets/medi_logo.png": "a4e296d0b85c422f68f50ad38a32b335",
"assets/assets/myaudio.mp3": "e57bb95f146e8ac7a45b97531996e7b1",
"assets/assets/otp1.png": "dcfb0198357f19b3b166077b02d65706",
"assets/assets/otp2.png": "4573722ea18b66c4fcaf121f3fda94af",
"assets/assets/pill.png": "739d6fa93c4a2e43ec9ffd77cd8479d8",
"assets/assets/pin1.png": "2bf68fc436ff1d9e3a08f9b79468473c",
"assets/assets/pin2.png": "8ec015e5da86342d30fc480dadba12ad",
"assets/assets/place.png": "796b2f4099793daeffa81790406ff9d5",
"assets/assets/rupee.png": "f1d45cc831fc9e78941ebeeda8191048",
"assets/assets/slide_1.png": "460fa1e242606b28668c78ddb738427e",
"assets/assets/slide_2.png": "6ed3281b86b5eed7e419c05383017665",
"assets/assets/slide_3.png": "fd044722b4a8280d725c4ee17ed0d3bd",
"assets/assets/slide_4.png": "3005ff148d6898f678b1eed75d4d2292",
"assets/assets/tab.png": "11dd68bd96452d429b8ac6c4e743fd0a",
"assets/assets/testbook.gif": "6a3910a95ce37f5ad342a27142650129",
"assets/assets/testbook.mp3": "e4e27014b5ef22e5dd59314e725d791d",
"assets/assets/user.png": "79a464c1821dadf964868d8dd8f5c60e",
"assets/FontManifest.json": "e3637cec141ff037b4151edf1c0411cb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1adf336e8246bceed697095162f007ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aa27fd56a8e4551dab35a06e00f2c0a6",
"/": "aa27fd56a8e4551dab35a06e00f2c0a6",
"main.dart.js": "c2e2abe691befc365b241cd06d34639f",
"manifest.json": "c34d6ebd6d8b42a6cac4d861469ac9b0",
"splash/img/dark-1x.png": "7132e9d4048cd8d41bac4a66443ebf7b",
"splash/img/dark-2x.png": "b0a9de222e513942c9857cb9415bba32",
"splash/img/dark-3x.png": "b782111ec6b25461d218015511b21a9a",
"splash/img/dark-4x.png": "3b6221fb4f317ed4ed0415ed71bc642b",
"splash/img/light-1x.png": "7132e9d4048cd8d41bac4a66443ebf7b",
"splash/img/light-2x.png": "b0a9de222e513942c9857cb9415bba32",
"splash/img/light-3x.png": "b782111ec6b25461d218015511b21a9a",
"splash/img/light-4x.png": "3b6221fb4f317ed4ed0415ed71bc642b",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "66b4f492954a35a3e8ab906c1bbc7904",
"version.json": "7882ce6b12689bbdadf9279ca3880fac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
