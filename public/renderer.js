// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const launchWindow = (appName) => {
  let winProc = sea.getCurrentWindowProcess();
  winProc.getManifest((manifest)=> {
    const appConfig = manifest.components[appName];
    const childWin = sea.launchWindow(appConfig, (...args)=>{
      console.log(`childWin cb ${args}`)    
    });
    console.log(`childWin ${childWin}`)
  })
}

const moveWindow = (x) => {
  currentWindow.getBounds((bounds)=>{
    const newLeft = bounds.x + x;
    currentWindow.setBounds(newLeft, bounds.y, bounds.width, bounds.height);
    loadInfo();
  });
}

const loadInfo = () => {

  window.currentWindow = sea.getCurrentWindow();

  // Window name
  replaceText(`window-name`, window.currentWindow.name);
  
  // System
  window.sea.System.getVersion(versions => {
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, versions[type]);
    }
  })

  sea.System.getMonitorInfo(monitorInfo => {
    replaceText(`monitor-count`, monitorInfo.allDisplays.length)
    replaceText(`primary-resolution`, `${monitorInfo.primaryDisplay.size.width}x${monitorInfo.primaryDisplay.size.height}`)
  })

  // WindowProcess
  let winProc = sea.getCurrentWindowProcess();
  window.replaceText('application-name', winProc.name);

  // Window
  window.sea.getCurrentWindow().getBounds((bounds)=>{
    window.replaceText('current-bounds', JSON.stringify(bounds));
  });

}

console.log('hello world from renderer!');

window.sea.onLoad(()=>{

  console.log('SEA has been loaded');

  const moveLeft = document.getElementById('move-left');
  moveLeft.onclick = () => moveWindow(-50);
  
  const moveRight = document.getElementById('move-right');
  moveRight.onclick = () => moveWindow(50);

  const newWindowTrusted = document.getElementById('new-window-trusted');
  newWindowTrusted.onclick = () => launchWindow('childWindow');
  
  const newWindowUntrusted = document.getElementById('new-window-untrusted');
  newWindowUntrusted.onclick = () => launchWindow('untrustedChild');

  const exitApp = document.getElementById('exit-app');
  exitApp.onclick = () => sea.System.exit();
    
  loadInfo();
  
});
