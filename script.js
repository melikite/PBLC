document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById('trigger-animation');
  const pen2 = document.getElementById('pen2');

  if (button && pen2) {
    button.addEventListener('click', () => {
      if (pen2.contentWindow) {
        // Specify the exact origin of the iframe instead of '*' for security reasons
        pen2.contentWindow.postMessage('start-animation', 'https://expected-origin.com');
      }
    });
  } else {
    console.error('Button or iframe element not found');
  }
});
