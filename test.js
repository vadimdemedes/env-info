'use strict';

/**
 * Dependencies
 */

var envInfo = require('./');
var test = require('tape');


/**
 * Tests
 */

if (isBrowser()) {
	test('environment info', function (t) {
		var browser = require('browser-info')();
		var env = envInfo();

		var osName = env.os.name === 'MacOS' ? 'OS X' : env.os.name;

		t.same(env, {
			runtime: {
				name: browser.name,
				version: browser.version
			},
			os: {
				name: osName
			}
		});

		t.end();
	});
}

if (isNode()) {
	test('environment info', function (t) {
		var osName = require('os-name')();
		var env = envInfo();

		t.same(env, {
			runtime: {
				name: process.release.name,
				version: process.version
			},
			os: {
				name: osName
			}
		});

		t.end();
	});
}



/**
 * Helpers
 */

function isBrowser () {
	return typeof window !== 'undefined';
}

function isNode () {
	return !isBrowser();
}
