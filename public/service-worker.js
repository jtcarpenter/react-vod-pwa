const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    'bundle.js'
];

self.addEventListener('fetch', (event) => {
    console.log('resource requested is :- ', event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            // Cache hit - return response
            if (response) {
                console.log(`found ${event.request.url} in cache`);
                return response;
            }
            return fetch(event.request);
        }
        )
    );
});

self.addEventListener('install', (event) => {
    console.log('Installing....');
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(urlsToCache);
            })
    );
});