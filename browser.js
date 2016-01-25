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

	return {
		runtime: {
			name: browser.name,
			version: browser.version
		},
		os: {
			name: browser.os
		}
	};
}


/**
 * Expose `env-info`
 */

module.exports = envInfo;
