import { ipcRenderer } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronAPI", {
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
});
