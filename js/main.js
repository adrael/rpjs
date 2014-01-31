
var rpjs;
var RPJS_WIDTH  = 960;
var RPJS_HEIGHT = 480;

window.onload = function() {
	rpjs = new RPJS();

	rpjs.setSize(RPJS_WIDTH, RPJS_HEIGHT);
	rpjs.setCanvas(document.getElementById("canvas"));
	rpjs.setMap(new Map("demo"));
	rpjs.setMainPlayer(new Personnage("exemple.png", 7, 14, DIRECTION.BAS));

	rpjs.setup();
}