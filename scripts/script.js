'use strict';
var Header = Header || {};
Header.cursorPosition = function cursorPosition(e) {
	var cursorX = e.clientX,
		cursorY = e.clientY;
		alert(cursorX + ' , ' + cursorY);
};
var h = new Header();
h();