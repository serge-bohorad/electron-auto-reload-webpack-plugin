## Installation

```
npm i webpack-electron-reload-plugin --save-dev
```

## Usage:

```js
const { ElectronReloadPlugin } = require('webpack-electron-reload-plugin')

module.exports = {
  target: 'electron-main',
  // ...
  plugins: [new ElectronReloadPlugin()]
  // ...
}
```
