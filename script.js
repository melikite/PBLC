document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById('trigger-animation');
  const pen2 = document.getElementById('pen2');

  if (button && pen2) {
    button.addEventListener('click', () => {
      pen2.contentWindow.postMessage('start-animation', 'https://codepen.io');
    });
  } else {
    console.error('Button or iframe not found. Make sure they exist in the HTML.');
  }
});
