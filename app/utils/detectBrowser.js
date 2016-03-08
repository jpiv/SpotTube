import Bowser from 'bowser';

if(Bowser.msie || (Bowser.safari && Bowser.version < 9)) {
	require('es6-shim');
}

var browser = 'unknown';
if(Bowser.msie) {
	browser = 'ie';
} else if(Bowser.safari) {
	browser = 'safari'
} else if(Bowser.chrome) {
	browser = 'chrome';
} else if(Bowser.firefox) {
	browser = 'firefox';
}
document.documentElement.setAttribute('data-browser', browser);
