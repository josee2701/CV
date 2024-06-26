self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('message', async (event) => {
    console.log('Service Worker received a message:', event.data); // Verificar recepción del mensaje
    const { url, method, headers, body } = event.data;
    if (method === 'POST' && url.includes('/from_contact/')) {
        const request = new Request(url, {
            method,
            headers: new Headers(headers),
            body,
        });

        try {
            const response = await fetch(request);
            console.log('Request sent to the server, status:', response.status); // Verificar solicitud al servidor
            event.ports[0].postMessage({ status: response.status });
        } catch (error) {
            console.error('Network error:', error);
            event.ports[0].postMessage({ status: 'Network error' });
        }
    }
});
