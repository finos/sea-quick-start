// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    console.log('hello world from preload!');
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    } 
    sea.System.getVersion(versions => {
      for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, versions[type]);
      }
    })    
  });