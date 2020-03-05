# sea-quick-start

**Clone and run for a quick way to see the secure-electron-adapter in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.
This minimal application uses a manifest configuration file to control permissions of your application through the secure-electron-adapter.

A basic Electron application using the secure-electron-adapter needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `index.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ChartIQ/sea-quick-start
# Go into the repository
cd sea-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

[Apache-2.0](LICENSE.md)