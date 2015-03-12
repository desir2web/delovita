$(document).ready(function(){
    
    // fbc switcher
    
    $('.fbc .icon').on('click',function(){
        var who = $(this).attr('href').split('#')[1],
            slider = $(".slider").data('owlCarousel');
        slider.goTo(who);
        
        for (var i = 0; i <= 2; i ++) {
            $('.slide-indicator').removeClass('pos-'+i);
            console.log(i);
        }
        
        $('.slide-indicator').addClass('pos-'+who);
    });
    
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