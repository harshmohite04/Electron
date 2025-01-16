import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { getPreloadPath } from "./PathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    minHeight: 650,
    minWidth: 600,
    frame: false,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  // mainWindow.webContents.openDevTools()

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  ipcMain.on("minimize-window", () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on("close-window", () => {
    if (mainWindow) mainWindow.close();
  });

  ipcMain.on('toggle-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize(); // Restore to previous size
    } else {
      mainWindow.maximize(); // Maximize window
    }
  });
});
