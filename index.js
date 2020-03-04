const path = require('path')
const SEA = require("@chartiq/secure-electron-adapter/exports");
const FEA_PATH = path.join(__dirname, "node_modules", "@chartiq", "secure-electron-adapter");
const chromiumFlags = {
    //remoteDebuggingPort: 9222
}

const onLaunched = () => {
    console.log('Secure Electron Adapter Launched.')
}

const config = {
        manifest: 'http://localhost:3375/manifest-local.json',
        onElectronClose: process.exit,
        chromiumFlags: JSON.stringify(chromiumFlags),
        path: FEA_PATH,
}

SEA.e2oLauncher(config, onLaunched)