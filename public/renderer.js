// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
window.addEventListener('DOMContentLoaded', () => {
    console.log('hello world from renderer!');
    // sea.desktop.System.currentWindow.openDevTools();
    let _window = sea.WindowProcess.getCurrent();
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text;
    } 
    
    replaceText('application-name', _window.name);
  });