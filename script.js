document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById('trigger-animation');
  const pen2 = document.getElementById('pen2');

  if (button && pen2) {
    button.addEventListener('click', () => {
      // Ensure the iframe is fully loaded before sending the message
      pen2.onload = () => {
        pen2.contentWindow.postMessage('start-animation', '*');
      };

      // Send the message immediately if the iframe is already loaded
      if (pen2.contentWindow) {
        pen2.contentWindow.postMessage('start-animation', '*');
      }
    });
  } else {
    console.error('Button or iframe not found in the DOM');
  }
});
