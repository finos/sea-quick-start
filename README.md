[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://finosfoundation.atlassian.net/wiki/display/FINOS/Incubating)

[![SEA Logo](https://sea.finos.org/img/sea-horizontal-logo.svg)](https://sea.finos.org)
# sea-quick-start

**Clone and run for a quick way to see the secure-electron-adapter in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.
This minimal application uses a manifest configuration file to control permissions of your application through the secure-electron-adapter.

A basic Electron application using the secure-electron-adapter needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `index.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `manifest-local.json` - A manifest that determines:
  - The application name
  - The application URL
    - Typically points to your app's renderer process
  - URL path of a file that can be preloaded.  An array of paths is also accepted.
  - Files that are considered trusted preloads across the application.
  - Anything else you need, including a list of configurations for components.

## Overview

Within the `public` directory, the SEA manifest `manifest-local.json` is passed to SEA within `index.js` and describes the following:
 - `main`: The main application entry point.  Here, all components point to `index.html` served locally using a node-based http server.  A `preload` is specified to add a function on the `window` object.
 - `components`: two additional component configs, differing in name and permissions.  For brevity, all components load `index.html`.
  - `TrustedChild`: A child window with full permissions
  - `UntrustedChild`: A child window with some permissions removed, including `System.exit()`.  Clicking the `Exit Applicaton` button on this window will result in an access denied warning logged to the console.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/finos/sea-quick-start
# Clone the secure-electron-adapter repository (which is not yet available via NPM)
git clone https://github.com/finos/secure-electron-adapter
#build SEA
cd secure-electron-adapter
npm install
# Go into the quick start repository
cd ../sea-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Contributing

1. Fork it (<https://github.com/finos/sea-quick-start/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](.github/CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

_NOTE:_ Commits and pull requests to FINOS repositories will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS Clabot tool. Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA.

*Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org)*


## License

Copyright 2018 ChartIQ

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
