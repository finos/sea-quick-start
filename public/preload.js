// Preloads have the ability to define objects on the window before it loads
// For instance, we can create a function to replace text on an element by its ID
// and then access that function in renderer.js
console.log('hello world from preload!');

window.replaceText = (selector, text) => {
  const element = document.getElementById(selector)
  if (element) element.innerText = text
} 
window.addEventListener('DOMContentLoaded', () => {
});