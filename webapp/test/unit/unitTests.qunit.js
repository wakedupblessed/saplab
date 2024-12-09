/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sapbtp/helloworldui5/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});