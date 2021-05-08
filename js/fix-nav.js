var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        if(winScrollTop >= 140){
            $('.fix-nav').addClass('hide');
        }
    } else {
        $('.fix-nav').removeClass('hide');
    }
    startPos = winScrollTop;
});