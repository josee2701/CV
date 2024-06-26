self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-requests') {
        event.waitUntil(syncRequests());
    }
});

const syncRequests = async () => {
    const db = await openDB('contact-form', 1);
    const tx = db.transaction('requests', 'readonly');
    const store = tx.objectStore('requests');
    const allRequests = await store.getAll();
    for (const request of allRequests) {
        try {
            const response = await fetch('https://backend-yw41.onrender.com/from_contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            });
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    await tx.done;
};

self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});
