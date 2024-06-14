const IBStaticCache = 'IB-static-v4';

const assets = [
	'/index.html',
	'/fallback.html',
];

// install service worker
self.addEventListener('install', (event) => {
	// console.log('sw has been installed');
	event.waitUntil(
		caches.open(IBStaticCache).then(cache => {
			return cache.addAll(assets);
	}));
});

// sw activation
self.addEventListener('activate', (event) => {
	// console.log('sw has been activated');
	event.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(keys
				.filter(key => key !== IBStaticCache)
				.map(key => caches.delete(key))
			)
	}));
});

// fetch event
self.addEventListener('fetch', (event) => {
	// console.log('sw fetch event: ', event);
	event.respondWith(
		// caches.match(event.request).then(cacheRes => {
		// 	return cacheRes || fetch(event.request);
		// }).catch(() => {
		// 	// if(event.request.url.indexOf('png') === -1 && event.request.url.indexof('jpg') === -1) {
		// 		return caches.match('/fallback.html');
		// 	// }
		// })
		caches.match(event.request).then(() => {
			return fetch(event.request)
				.catch(() => {
					caches.match('/fallback.html');
			})
		})
	);
});