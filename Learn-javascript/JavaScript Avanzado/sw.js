const VERSION = "V1"

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fecht', event => {
    const REQUEST = event.REQUEST;
    //get
    if (REQUEST.method != "GET") {
        return;
    }

    //buscar en cache
    event.respondWith(cachedResponse(REQUEST))

    // actualizar el cache
    event.waitUntil(updateCache(REQUEST))
});

async function precache() {
    const CACHE = await caches.open(VERSION)
    CACHE.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

async function cachedResponse(REQUEST) {
    const CACHE = await caches.open(VERSION)
    const RESPONSE = await CACHE.match(REQUEST)
    return RESPONSE || fetch(REQUEST)
}

async function updateCache(REQUEST) {
    const CACHE = await caches.open(VERSION)
    const RESPONSE = await fetch(REQUEST)
    return CACHE.put(REQUEST, RESPONSE)
}