var C="journal-v31",F=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
self.addEventListener("notificationclick",function(e){e.notification.close();e.waitUntil(clients.matchAll({type:"window"}).then(function(c){if(c.length)return c[0].focus();return clients.openWindow("./")}))});
