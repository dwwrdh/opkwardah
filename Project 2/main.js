$(document).ready(function () {
    $('.menu-toogler').on('click', function (){
        $('.menu-toogler').toggleClass('open')
            $('this').toggleClass('open');
            $('.top-nav').toggleClass('open');
    })
    $('.top-nav .nav-link').on('click', function (){
        $('.menu-toogler').removeClass('open')
        $('.top-nav').removeClass('open');
    })
})