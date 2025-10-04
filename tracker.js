// tracker.js

function getTimestamp() {
  return new Date().toISOString();
}

function logEvent(eventType, element) {
  const tag = element.tagName.toLowerCase();
  const details = element.innerText || element.alt || '';

  // Log to console (required by assignment)
  console.log({
    timestamp: getTimestamp(),
    type_of_event: eventType,
    event_object: tag,
    details: details
  });

  // ---- Print on the browser page ----
  const logContainer = document.getElementById('logOutput');
  if (logContainer) {
    const entry = document.createElement('div');
    entry.style.padding = '4px 0';
    entry.textContent = `${getTimestamp()} | ${eventType} | ${tag} | ${details}`;
    logContainer.prepend(entry);
  }
}

// Log page view
window.addEventListener('DOMContentLoaded', () => {
  logEvent('view', document.body);
});

// Log clicks
document.addEventListener('click', (e) => {
  logEvent('click', e.target);
});
