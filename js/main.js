$(function () {
    $('.navbar-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('navbar-open');
        return false;
    });

    $('.navbar-offcanvas').height(window.size);
});

function setNavbarHeight() {
    var $window = $(window);
    var $offCanvasNav = $('.navbar-offcanvas');
    $offCanvasNav.height($window.height());
    $window.resize(function () {
        $offCanvasNav.height($window.height());
    });
}