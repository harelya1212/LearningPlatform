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

// FW133 (SQB13-D2): display identity for OS-notification dedup.
// Firestore triggers are at-least-once, so the same event can be
// delivered twice; showNotification with the same `tag` REPLACES the
// still-displayed notification instead of stacking a second one, so a
// re-delivery renders once.
// FW134 (FP-SQB13-D2a/D2b): functions now send a real data.eventId
// for every id-less family, and the key appends it as an `evt:`
// segment when present (an EVENT identity; payloads without one keep
// the FW133 content key as the legacy fallback). The tag is
// 'treps-' + a 128-bit cyrb-family hash of the full key (four 32-bit
// Math.imul lanes, cyrb53/Murmur3-fmix constants, public-domain
// design) instead of the 32-bit djb2 hash, which had a reproduced
// collision (two different bodies -> treps-e4647ebb). This mirrors
// notificationDedupKey + notificationDisplayTag in
// src/social/notifications.ts EXACTLY (same field order, same '|'
// separator, same hash) - the SW is plain JS and cannot import the
// TS module; keep the two in lockstep.
function notificationIdentityHash128(str) {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  let h3 = 0x9e3779b9;
  let h4 = 0x85ebca77;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
    h3 = Math.imul(h3 ^ ch, 2246822519);
    h4 = Math.imul(h4 ^ ch, 3266489917);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h3 ^ (h3 >>> 13), 3266489909);
  h3 = Math.imul(h3 ^ (h3 >>> 16), 2246822507);
  h3 ^= Math.imul(h4 ^ (h4 >>> 13), 3266489909);
  h4 = Math.imul(h4 ^ (h4 >>> 16), 2246822507);
  h4 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return [h1, h2, h3, h4]
    .map(h => (h >>> 0).toString(16).padStart(8, '0'))
    .join('');
}

function notificationDisplayTag(payload) {
  const data = payload.data || {};
  const title = data.title || payload.notification?.title || 'TReps 🦖';
  const body = data.body || payload.notification?.body || 'Something happened in your squad!';
  const part = (v) => (typeof v === 'string' ? v : '');
  const base = [
    part(data.type),
    part(data.squadId),
    part(data.battleId),
    part(title),
    part(body),
  ].join('|');
  const eventId = part(data.eventId);
  const key = eventId ? base + '|evt:' + eventId : base;
  return 'treps-' + notificationIdentityHash128(key);
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
    // FW133 (SQB13-D2): tag by event identity (see above) - a
    // re-delivered push replaces this notification instead of
    // stacking a duplicate.
    tag: notificationDisplayTag(payload),
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
