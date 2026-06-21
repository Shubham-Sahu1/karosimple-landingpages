import { GA4_ID } from "./constants";

/**
 * Log pageview event
 * @param {string} url 
 */
export function pageview(url) {
  if (typeof window === "undefined") return;
  const anyWindow = window;
  if (!anyWindow.gtag || !GA4_ID) return;

  anyWindow.gtag("config", GA4_ID, {
    page_path: url,
  });
}

/**
 * Log custom interaction event
 * @param {Object} eventParams
 */
export function logEvent({ action, category, label, value, ...rest }) {
  if (typeof window === "undefined") return;
  const anyWindow = window;
  if (!anyWindow.gtag || !GA4_ID) return;

  anyWindow.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
    ...rest,
  });
}
