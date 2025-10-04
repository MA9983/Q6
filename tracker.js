// tracker.js

function getTimestamp() {
  return new Date().toISOString();
}

function logEvent(eventType, element) {
  const tag = element.tagName.toLowerCase();
  const details = element.innerText || element.alt || '';

  // Log to console (as required)
  console.log({
    timestamp: getTimestamp(),
    type_of_event: eventType,
    event_object: tag,
    details: details
  });

  // Also display logs on the page
  const logContainer = document.getElementById('logOutput');
  if (logContainer) {
    const entry = document.createElement('div');
    entry.textContent = `${getTimestamp()} | ${eventType} | ${tag} | ${details}`;
    logContainer.prepend(entry);
  }
}

// Log page view when loaded
window.addEventListener('DOMContentLoaded', () => {
  logEvent('view', document.body);
});

// Log all clicks on page
document.addEventListener('click', (e) => {
  logEvent('click', e.target);
});
