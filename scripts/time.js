String.prototype.pad = function(l, s, t) {
	return s || (s = " "), (l -= this.length) > 0 ? 
	(s = new Array(Math.ceil(l / s.length) 
	+ 1).join(s)).substr(0, t = !t ? l : t == 1 ? 0 : Math.ceil(l / 2))
	+ this + s.substr(0, l - t) : this;
};

var addLoadEvent = function (func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
};

var xClock = function () {
	var xC = null, xN = null, xH = null, xI = null,
		xM = null, xS = null, xT = null, AP = null;

	if (!document.getElementById) return;
	xC = document.getElementById("time");
	if (!xC.nodeName) return;
	xN = new Date();
	xH = xN.getHours().toString().pad(2,'0',0);
	xM = xN.getMinutes().toString().pad(2,'0',0);
	xS = xN.getSeconds().toString().pad(2,'0',0);
	AP = (xH >= 12) ? "PM" : "AM";
	xH = (xH >= 13) ? (xH - 12) : xH;
	xT = xH + ":" + xM + ":" + xS + " " + AP;
	xC.innerHTML = xT;
	xI = !xI ? null : clearTimeout(xI);
	xI = setTimeout(xClock, 500);
};
addLoadEvent(xClock);