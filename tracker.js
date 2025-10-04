// Q6/tracker.js

function getTimestamp() {
  return new Date().toISOString();
}

function logEvent(eventType, element) {
  const tag = element.tagName.toLowerCase();
  let objectType = tag;

  if (tag === 'img') objectType = 'image';
  else if (tag === 'button') objectType = 'button';
  else if (tag === 'a') objectType = 'link';
  else if (element.type) objectType = element.type;

  console.log({
    timestamp: getTimestamp(),
    type_of_event: eventType,
    event_object: objectType,
    details: element.outerText?.trim() || element.alt || ''
  });
}

// Log page view
window.addEventListener('DOMContentLoaded', () => {
  logEvent('view', document.body);
});

// Log clicks
document.addEventListener('click', (e) => {
  logEvent('click', e.target);
});
