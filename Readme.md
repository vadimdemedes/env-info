# env-info

[![Build Status](https://travis-ci.org/vdemedes/env-info.svg?branch=master)](https://travis-ci.org/vdemedes/env-info) [![Coverage Status](https://coveralls.io/repos/vdemedes/env-info/badge.svg?branch=master&service=github)](https://coveralls.io/github/vdemedes/env-info?branch=master)

Get environment information (node + browser).


## Installation

```
$ npm install env-info --save
```


## Usage

```js
const envInfo = require('env-info');

var info = envInfo();

// in Node.js
/*
{
	"runtime": {
		"name": "node",
		"version": "4.2.6"
	},
	"os": {
		"name": "OS X Mavericks"
	}
}
*/

// in browser
/*
{
	"runtime": {
		"name": "Safari",
		"version": "538"
	},
	"os": {
		"name": "MacOS"
	}
}
*/
```


## Tests

```
$ npm test
$ npm run test-browser
```


## License

MIT © [Vadim Demedes](https://github.com/vdemedes)
