export function trackEvent(name) {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(name);
  }
}