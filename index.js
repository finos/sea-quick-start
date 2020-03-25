const program = require('commander');
const commaSeparatedList = (list) => list.split(',');
program
    .option('--manifest <manifest>', 'manifest location for secure electron adapter')
    .option('--chromium-flags <chromium-flags>', 'comma separated flags for chromium', commaSeparatedList);

program.parse(process.argv);

const path = require('path');
const SEA = require("@chartiq/secure-electron-adapter/exports");
const SEA_PATH = path.join(__dirname, "node_modules", "@chartiq", "secure-electron-adapter");
let chromiumFlags = {};
if (program.chromiumFlags) {
    program.chromiumFlags.forEach(flag => {
        let pair = flag.split(":");
        chromiumFlags[pair[0]] = pair[1];
    });
}
let manifest;
if (program.manifest) {
    manifest = program.manifest;
} else {
    manifest = 'http://localhost:3375/manifest-local.json';
}


const onLaunched = () => {
    console.log('Secure Electron Adapter Launched.')
}

const config = {
        manifest: manifest,
        onElectronClose: process.exit,
        chromiumFlags: JSON.stringify(chromiumFlags),
        path: SEA_PATH,
}

SEA.seaLauncher(config, onLaunched)