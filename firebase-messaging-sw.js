// Firebase Cloud Messaging service worker for TReps web push.
// Must live at the site root (or /LearningPlatform/) to control pages.

// Take over immediately on update: without skipWaiting, a fixed SW can sit
// in "waiting" while the old (broken) worker keeps controlling the app -
// on 2026-11-06 the staging SW carried a placeholder API key and the app
// partition kept using it even after the fixed file was served.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

importScripts(
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyAZKtpIGgxc9qHRdQJJkVyYpSpxo4CUP5U',
  authDomain: 'us-civic-test-beta.firebaseapp.com',
  projectId: 'us-civic-test-beta',
  storageBucket: 'us-civic-test-beta.firebasestorage.app',
  messagingSenderId: '932562474530',
  appId: '1:932562474530:web:5d05141b3d8ad6ccc7dc7b',
});

const messaging = firebase.messaging();

const APP_ROOT = 'https://harelya1212.github.io/LearningPlatform/';

// B3 fix: build a deep-link URL from the push data so tapping a notification
// opens the relevant squad (not just the site root). Cloud Functions send
// { type, squadId, battleId } in data. App.js handles ?squad= on boot.
function deepLinkUrl(payload) {
  const data = payload.data || {};
  const squadId = data.squadId;
  if (squadId) {
    return APP_ROOT + '?squad=' + encodeURIComponent(squadId);
  }
  return (
    payload.fcmOptions?.link ||
    data.url ||
    APP_ROOT
  );
}

messaging.onBackgroundMessage(payload => {
  // Cloud Functions send DATA-ONLY messages (title/body inside data) since
  // 2026-11-06: a `notification` payload PLUS this manual showNotification
  // displayed every push TWICE on iOS. This handler is the single display.
  const title = payload.data?.title || payload.notification?.title || 'TReps 🦖';
  const options = {
    body: payload.data?.body || payload.notification?.body || 'Something happened in your squad!',
    icon: './favicon.svg',
    badge: './favicon.svg',
    data: {
      url: deepLinkUrl(payload),
    },
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data?.url || APP_ROOT;
  event.waitUntil(clients.openWindow(url));
});
