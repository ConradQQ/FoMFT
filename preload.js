// preload.ts (or preload.js)
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getEnv: () => ipcRenderer.sendSync('get-env'),
});