importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

if (workbox) {
  workbox.precaching.precacheAndRoute([
    { url: "/", revision: "1" },
    { url: "/index.html", revision: "1" },
    { url: "/nav.html", revision: "1" },
    { url: "/fav.html", revision: "1" },
    { url: "/detailClub.html", revision: "1" },
    { url: "/manifest.json", revision: "1" },
    { url: "/pages/clubs.html", revision: "1" },
    { url: "/pages/standings.html", revision: "1" },
    { url: "/pages/topScores.html", revision: "1" },
    { url: "/pages/favorite.html", revision: "1" },
    { url: "/js/clubs.js", revision: "1" },
    { url: "/js/db.js", revision: "1" },
    { url: "/js/detailClub.js", revision: "1" },
    { url: "/js/fav.js", revision: "1" },
    { url: "/js/idb.js", revision: "1" },
    { url: "/js/match.js", revision: "1" },
    { url: "/js/nav.js", revision: "1" },
    { url: "/js/script.js", revision: "1" },
    { url: "/js/service.js", revision: "1" },
    { url: "/js/standings.js", revision: "1" },
    { url: "/js/topscores.js", revision: "1" },
    { url: "/js/favClub.js", revision: "1" },
    { url: "/js/materialize.min.js", revision: "1" },
    { url: "/js/notif.js", revision: "1" },
    { url: "/push.js", revision: "1" },
    { url: "/service-worker.js", revision: "1" },
    { url: "/js/data/api.js", revision: "1" },
    { url: "/css/materialize.min.css", revision: "1" },
    { url: "/css/style.css", revision: "1" },
    { url: "/assets/images/landing.png", revision: "1" },
    { url: "/assets/icons/maskable_icon.png", revision: "1" },
    { url: "/assets/icons/maskable_icon_(1).png", revision: "1" },
    { url: "/assets/icons/maskable_icon_(2).png", revision: "1" },
    { url: "/assets/icons/maskable_icon_(3).png", revision: "1" },
    { url: "/assets/icons/maskable_icon_(4).png", revision: "1" },
    { url: "/assets/icons/maskable_icon_(5).png", revision: "1" },
    { url: "/assets/icons/maskable_icon_(6).png", revision: "1" },
    { url: "/assets/icons/maskable_icon_(7).png", revision: "1" },
  ], {
  ignoreUrlParametersMatching: [/.*/]
  }); 



  workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages',
    })
);

workbox.routing.registerRoute(
    /.*(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'image',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ]
    })
);

workbox.routing.registerRoute(
    /\.(?:js)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'bola',
    })
);

}else
console.log(`Workbox gagal dimuat`);


self.addEventListener('push', event => {
let body;
if (event.data) {
    body = event.data.text();
} else {
    body = 'Push message no payload';
}
const options = {
    body: body,
    icon: '/assets/icons/maskable_icon.png',
    vibrate: [100, 50, 100],
    data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
    }
};
event.waitUntil(
    self.registration.showNotification('Push Notification', options)
);
});

