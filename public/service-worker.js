const CACHE_VERSION = 1;
const CACHE_NAME = `reat-vod-pwa-v${CACHE_VERSION}`;
const PRECACHE_FILES = [
    '/',
    'bundle.js',
    'fonts/icomoon.eot',
    'fonts/icomoon.svg',
    'fonts/icomoon.ttf',
    'fonts/icomoon.woff'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(PRECACHE_FILES);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request).catch((error) => {
                    console.log(error)
                })
            })
    );
});