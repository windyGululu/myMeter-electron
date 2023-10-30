const { app, BrowserWindow } = require('electron')
const { join } = require('path')

function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // 加载 Vue 应用的 index.html 文件
    // win.loadURL('http://localhost:5173/')
    // win.loadFile('../dist/index.html')


    // 映射页面
    const env = app.isPackaged ? 'production' : 'development'
    const indexHtml = {
        development: 'http://localhost:5173', // 开发环境
        production: join(__dirname, '../dist/index.html') // 生产环境
    }
    win.loadURL(indexHtml[env])


    // 打开开发者工具
    // win.webContents.openDevTools()
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(createWindow)

// 在所有窗口关闭时退出应用
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
