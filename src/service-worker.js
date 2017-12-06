const CACHE_NAME = `reat-vod-pwa-${VERSION}`;
const APP_SHELL_FILES = [
    '/',
    `bundle-${VERSION}.js`,
    'fonts/icomoon.eot',
    'fonts/icomoon.svg',
    'fonts/icomoon.ttf',
    'fonts/icomoon.woff'
];

function isAppShell(url) {
    return Boolean(APP_SHELL_FILES.filter((filename) => {
        return filename.replace(/^\//, '') === url.pathname.replace(/^\//, '');
    }).length);
}

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(APP_SHELL_FILES);
            })
    );
});

self.addEventListener('fetch', (event) => {
    const requestURL = new URL(event.request.url);
    if (isAppShell(requestURL)) {

        // Cache first
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request)
                })
        );
    } else {

        // Network first
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    return caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                })
                .catch(() => {
                    return caches.match(event.request)
                        .then((response) => response)
                })
        );
    }
});