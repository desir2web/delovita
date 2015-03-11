$(document).ready(function(){
    
    //swicth menu appearance
    $(window).on('scroll',function(){
        var curPos = $(window).scrollTop();
    
        if (curPos > 9) {
            if ($('.header').hasClass('fixed')==false) {
                $('.header').addClass('fixed');
            }
        } else {
            if ($('.header').hasClass('fixed')==true) {
                $('.header').removeClass('fixed');
            }
        }
    });
    
    //menu on mobile
    
    $(".menu-toggle").on('click', function(){
        if ($(".header").hasClass('open')) {
            $('.header').removeClass('open');
            return false;
        } else {
            $('.header').addClass('open');
			return false;
        }
    });

});