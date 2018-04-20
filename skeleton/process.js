// Basic init
const electron = require('electron');
const path = require('path');
const { app, BrowserWindow } = electron;

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname, {
    electron: require('electron')
});

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    let mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        minWidth: 1024,
        minHeight: 768,
        title: "Papahana",
        icon: path.join(__dirname, 'icon.png')
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

});