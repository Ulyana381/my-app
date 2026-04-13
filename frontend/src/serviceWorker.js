const CACHE_NAME = 'my-app-v1';
const urls = ['/', '/index.html', '/offline.html', '/manifest.json', '/src/main.js'];

self.addEventListener('install', e => e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urls))
));

self.addEventListener('fetch', e => e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('/offline.html')))
));