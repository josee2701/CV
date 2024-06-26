// serviceWorker.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
    if (event.request.method === 'POST' && event.request.url.includes('/from_contact/')) {
        event.respondWith(
            fetch(event.request.clone()).catch(() => {
                return new Response(
                    JSON.stringify({ error: 'Network error' }),
                    { status: 408, headers: { 'Content-Type': 'application/json' } }
                );
            })
        );
    }
});
