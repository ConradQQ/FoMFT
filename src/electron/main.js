import { app, BrowserWindow, ipcMain, dialog, Menu } from 'electron';
import path from 'path';
import fs from 'fs';
import { isDev } from './util.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    maxWidth: 1920,
    maxHeight: 1080,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), 
    },
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:8000');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));
  }

  const template = [
    // {
    //   label: 'File',
    //   submenu: [
    //     {
    //       label: 'Load Loadout',
    //       click: () => {
    //         mainWindow.webContents.send('load-loadout-request');
    //       },
    //     },
    //     {
    //       label: 'Save Loadout',
    //       click: () => {
    //         mainWindow.webContents.send('save-loadout-request');
    //       },
    //     },
    //     { type: 'separator' },
    //     { role: 'quit' },
    //   ],
    // },
    {
      label: 'Menus',
      submenu: [
        {
          label: 'Main Menu',
          click: () => {
            mainWindow.webContents.send('navigate-basePage');
          },
        },
        {
          label: 'Detailed Stats',
          click: () => {
            mainWindow.webContents.send('navigate-stats');
          },
        },
        {
          label: 'Comparison Tool',
          click: () => {
            mainWindow.webContents.send('navigate-about');
          },
        },
      ],
    },
    // { 
    //   label: 'DevTools',
    //   submenu: [
    //     {
    //       label: 'Toggle DevTools',
    //       // eslint-disable-next-line no-undef
    //       accelerator: process.platform === 'darwin' ? 'Cmd+Option+I' : 'Ctrl+Shift+I',
    //       click: () => {
    //         mainWindow.webContents.toggleDevTools();
    //       },
    //     },
    //     {
    //       label: 'Reload',
    //       accelerator: 'CmdOrCtrl+R',
    //       click: () => {
    //         mainWindow.webContents.reload();
    //       },
    //     },
    //   ],
    // },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  ipcMain.on('save-loadout', (event, loadoutData) => {
    const filePath = dialog.showSaveDialogSync({
      title: 'Save Loadout',
      defaultPath: 'loadout.txt',
      filters: [{ name: 'Text Files', extensions: ['txt'] }],
    });

    if (filePath) {
      try {
        fs.writeFileSync(filePath, JSON.stringify(loadoutData));
        console.log('Loadout saved successfully.');
      } catch (error) {
        console.error('Error saving loadout:', error);
      }
    }
  });

  ipcMain.on('load-loadout', (event) => {
    const filePaths = dialog.showOpenDialogSync({
      title: 'Load Loadout',
      filters: [{ name: 'Text Files', extensions: ['txt'] }],
      properties: ['openFile'],
    });

    if (filePaths && filePaths.length > 0) {
      const filePath = filePaths[0];
      try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const loadoutData = JSON.parse(data);
        event.reply('load-loadout-reply', loadoutData);
      } catch (error) {
        console.error('Error loading loadout:', error);
      }
    }
  });
});

app.on('window-all-closed', () => {
  // eslint-disable-next-line no-undef
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    app.on('ready');
  }
});
