'use strict';

/**
 * Dependencies
 */

var browserInfo = require('browser-info');


/**
 * Get environment info (node + browser)
 */

function envInfo () {
	var browser = browserInfo();
	var osName = browser.os;

	if (osName === 'MacOS') {
		osName = 'OS X';
	}

	return {
		runtime: {
			name: browser.name,
			version: browser.version
		},
		os: {
			name: osName
		}
	};
}


/**
 * Expose `env-info`
 */

module.exports = envInfo;
