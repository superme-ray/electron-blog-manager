const { app, BrowserWindow,Menu } = require('electron');
const path = require('path');

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            javascript: true,
            resizable: false,
            plugins: true,
            nodeIntegration: true, // 是否集成 Nodejs
            webSecurity: false,
            preload: path.join(__dirname, 'renderer.js') // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
        }
    })

    mainWindow.webContents.openDevTools();　//打开调试
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => mainWindow = null);
    let menu  = Menu.buildFromTemplate([])
    mainWindow.setMenu(menu);
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});