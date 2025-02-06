document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById('trigger-animation');
  button.addEventListener('click', () => {
    const pen2 = document.getElementById('pen2');
    pen2.contentWindow.postMessage('start-animation', '*');
  });
});