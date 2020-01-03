let p_windowWidth = 0;
let p_topBarHeight = 100;

function initializeParallax() {
    
    adjustParallaxBackgroundSize();
    
    updateWindowWidth();
    addResizeListener();
    
}



function addResizeListener() {
    $(window).resize(function () {
        if (windowWidthHasChanged()) {
            updateWindowWidth();
            adjustParallaxBackgroundSize();
        }
    })
}

function adjustParallaxBackgroundSize() {
    let height = $(".parallax .parallax-content").height();
    
    // adjust p_topBarHeight to viewport !

    // + p_topBarSize to account for the navigation bar
    let newHeight = height + p_topBarHeight;
    
    // calc(150vh + newHeight in pixels) is not just the result of trial and error, but of justifiable mathematics
    // the value of 150vh has to be changed if the distance of the parallax elements changes:
    // new Value = 50vh * (distance of parallax elements to origin) / (distance of perspective [camera] to origin)
    // $(".parallax .parallax-element").css("height", "calc(150vh + " + newHeight + "px)");
    $(".parallax .parallax-element").css("height", "calc(300vh + " + newHeight + "px)");
}

function windowWidthHasChanged() {
    return ($(window).width() !== p_windowWidth);
}

function updateWindowWidth() {
    p_windowWidth = $(window).width();
}