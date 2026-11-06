// Mission Days moved to https://mission-days.pages.dev/. This worker replaces the old app's
// offline worker at this address and removes itself. It leaves caches alone: they are shared
// with the gate-air100 app on the same origin.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration.unregister());
});
