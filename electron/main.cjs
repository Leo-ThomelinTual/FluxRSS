const { app, BrowserWindow } = require("electron/main");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const isDev = process.env.NODE_ENV === "development";

let mainWindow;

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    // Hot reload Electron
    require("electron-reload")(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`),
    });

    mainWindow.webContents.session.clearCache();
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL("http://localhost:3000");
  } else {
    const serverEntry = pathToFileURL(
      path.join(__dirname, "../.output/server/index.mjs"),
    ).href;

    await import(serverEntry);

    mainWindow.loadURL("http://localhost:3000");
  }
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
