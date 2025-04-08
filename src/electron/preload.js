// eslint-disable-next-line no-undef
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveLoadout: (loadoutData) => ipcRenderer.send('save-loadout', loadoutData),
  loadLoadout: () => ipcRenderer.send('load-loadout'),
  onLoadLoadout: (callback) => ipcRenderer.on('load-loadout-reply', callback),
  on: (channel, callback) => { 
    const validChannels = ['navigate-stats', 'navigate-basePage', 'navigate-about'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, callback);
    }
  },
});