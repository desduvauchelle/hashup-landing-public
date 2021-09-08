$(document).ready(function() {

    var WINDOW_HEIGHT = $(window).height();


    /* ---------------------------------------------- /*
    * WOW Animation When You Scroll
    /* ---------------------------------------------- */

    wow = new WOW({
        mobile: false
    });
    wow.init();


});

$(window).resize(function() {
    WINDOW_HEIGHT = $(window).height();
});

$(window).scroll(function() {

    var WINDOW_HEIGHT = WINDOW_HEIGHT || $(window).height();
    var url = window.location.href;
    if (url.indexOf("#/home") !== -1) {
        if ($(this).scrollTop() >= WINDOW_HEIGHT / 3 && !$("nav").hasClass("active")) {
            $("nav").addClass("active");
        }
        if ($(this).scrollTop() < WINDOW_HEIGHT / 3 && $("nav").hasClass("active")) {
            $("nav").removeClass("active");
        }
    }
});
