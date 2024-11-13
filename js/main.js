$(function () {
    $('.hamburger-menu').click(function (e) {
        e.preventDefault();
        $('.main-menu').toggleClass('show-menu');
    })
})