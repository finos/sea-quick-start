// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const moveWindow = (x) => {
  
  currentWindow.getBounds((bounds)=>{
    const newLeft = bounds.x + x;
    currentWindow.setBounds(newLeft, bounds.y, bounds.width, bounds.height);
    loadInfo();
  });
}

const loadInfo = () => {

  window.currentWindow = sea.getCurrentWindow();
  
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


window.sea.onLoad(()=>{

  console.log('hello world from renderer!');

  const moveLeft = document.getElementById('move-left');
  moveLeft.onclick = () => moveWindow(-50);
  
  const moveRight = document.getElementById('move-right');
  moveRight.onclick = () => moveWindow(50);
  
  loadInfo();
  
});
