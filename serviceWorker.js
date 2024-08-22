/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// public/serviceWorker.js

importScripts('/js/idb.min.js');

// eslint-disable-next-line no-restricted-globals
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-requests') {
        event.waitUntil(syncRequests());
    }
});

const syncRequests = async () => {
    const db = await idb.openDB('MyDB', 1);
    const tx = db.transaction('requests', 'readonly');
    const store = tx.objectStore('requests');
    const allRequests = await store.getAll();
    console.log('Reintentando enviar solicitudes almacenadas:', allRequests);
    for (const request of allRequests) {
        try {
            const response = await fetch('https://backend-yw41.onrender.com/from_contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request.data),
            });
            const result = await response.json();
            console.log('Éxito en el reenvío:', result);

            // If success, delete the request from the IndexedDB
            const deleteTx = db.transaction('requests', 'readwrite');
            deleteTx.objectStore('requests').delete(request.id);
            await deleteTx.done;
            console.log('Solicitud eliminada de IndexedDB:', request.id);
        } catch (error) {
            console.error('Error en el reenvío:', error);
        }
    }
    await tx.done;
};

self.addEventListener('install', (event) => {
    console.log('Service Worker instalando.');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activando.');
    return self.clients.claim();
});
