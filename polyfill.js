'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return (typeof ArrayBuffer === 'function' && ArrayBuffer.prototype.slice) || implementation;
};
