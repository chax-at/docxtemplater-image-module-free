"use strict";

var lastId = 10000;

module.exports = {
	getNextId: function getNextId() {
		return lastId++;
	}
};