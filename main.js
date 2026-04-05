const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 525,
    icon: "assets/icons/icon.ico",
    resizable: false,
  })

  Menu.setApplicationMenu(null);
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})