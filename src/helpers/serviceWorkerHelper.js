export function registerSW() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(() => {
                    console.log('Registered service worker');
                })
                .catch((err) => {
                    console.log('Couldn\'t register service worker', err)
                });
        });
    }
}