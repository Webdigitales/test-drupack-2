/* */
var mobile = isMobile();

/**
 * is Mobile
 * @returns {boolean}
 */
function isMobile() {
    if (navigator.userAgent.match(/Mobi/) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }

    if ('screen' in window && window.screen.width < 1201) {
        return true;
    }

    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection && connection.type === 'cellular') {
        return true;
    }

    return false;
}

/**
 * Print
 */
function printMe() {
    window.print();
}