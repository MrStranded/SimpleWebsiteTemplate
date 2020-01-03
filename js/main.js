$(function () {

    setUpTouchGlobals();
    
    initializeParallax();

});



/**
* Determining whether the user device is touch enabled and setting a corresponding class to the html tag
*/
function setUpTouchGlobals() {
    if (!("ontouchstart" in document.documentElement)) {
        $("html").addClass("no-touch");
    } else {
        $("html").addClass("touch");
    }
}

/**
* Retrieves whether the user is accessing the website from a touch device.
*/
function isTouchDevice() {
    return $("html").hasClass("touch");
}

/**
* Retrieves the view port of the site.
*/
function getBreakPoint() {
    return (window.getComputedStyle(document.body, ':before').content).replace(/\"/g, '');
}

/**
* Ovata / Thymeleaf puts the current locale of the user into the hidden #website_language span in the beginning of the body element.
* From there we can retrieve it with javascript.
*/
function getLocale() {
    return $("#website_language").html();
}

/**
* Ovata / Thymeleaf puts the default locale of the user into the hidden #website_default_language span in the beginning of the body element.
* From there we can retrieve it with javascript.
*/
function getDefaultLocale() {
    return $("#website_default_language").html();
}

/**
* If the user prefers reduced motion, we disable some movement effects like parallax scrolling.
*/
function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}