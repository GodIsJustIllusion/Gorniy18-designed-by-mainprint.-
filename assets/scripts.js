// Initializing the slider
$(document).ready(function() {
    $('#slider').layerSlider({
        createdWith: '6.11.8',
        sliderVersion: '6.11.8',
        type: 'fullwidth',
        hideOnMobile: true,
        hideUnder: 0,
        hideOver: 100000,
        skin: 'v5',
        navPrevNext: false,
        hoverPrevNext: false,
        navStartStop: false,
        navButtons: false,
        showCircleTimer: false,
        thumbnailNavigation: 'disabled',
        useSrcset: false,
        skinsPath: 'skins/'
    });
});


$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});