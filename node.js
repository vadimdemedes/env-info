'use strict';

/**
 * Dependencies
 */

var osName = require('os-name');


/**
 * Get environment info for Node.js
 */

function envInfo () {
	return {
		runtime: {
			name: 'Node.js',
			version: process.version
		},
		os: {
			name: osName()
		}
	};
}


/**
 * Expose `env-info`
 */

module.exports = envInfo;
