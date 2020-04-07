const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let window = null

app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 1280px
    width: 1280,
    // Set the initial height to 800px
    height: 800,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    // Don't allow the window to be resized.
    resizable: true,
    //Make frameless
    frame: true
  })

  window.on('close', () => {window = null})
  window.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
  }))

window.once('ready-to-show', () => {
  window.show()
  })
})
