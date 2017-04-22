# c3-exporter

[![npm version](https://img.shields.io/npm/v/c3-exporter.svg?style=flat-square)](https://www.npmjs.com/package/c3-exporter)
[![npm downloads](https://img.shields.io/npm/dm/c3-exporter.svg?style=flat-square)](https://www.npmjs.com/package/c3-exporter)
[![dependency Status](https://img.shields.io/david/lgaticaq/c3-exporter.svg?style=flat-square)](https://david-dm.org/lgaticaq/c3-exporter#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/c3-exporter.svg?style=flat-square)](https://david-dm.org/lgaticaq/c3-exporter#info=devDependencies)

> Export c3 charts to png

## Install

```bash
npm i -S c3-exporter
```

## Example

[Test in RuKit](https://runkit.com/npm/c3-exporter)
```js
const c3Exporter = require('c3-exporter')

const options = {
  data: {
    columns: [
      ['data1', 30, 150, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    type: 'spline'
  },
  padding: {
    top: 10,
    bottom: 10,
    right: 15,
    left: 15
  },
  size: {
    width: 320,
    height: 320
  }
}

c3Exporter(options).then(chart => {
  console.log(chart) // /tmp/user/chart-1954112493.png
}).catch(console.error)
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
