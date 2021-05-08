$(function(){
    $('.menu-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('.nav-menu').toggleClass('-active');
    })
});