$(document).ready(function(){

    // fbc switcher

    $('.fbc .icon').on('click',function(e){
        e.preventDefault();
        var who = $(this).attr('href').split('#')[1],
            slider = $(".slider").data('owlCarousel');
        slider.goTo(who);
        
        for (var i = 0; i <= 2; i ++) {
            $('.slide-indicator').removeClass('pos-'+i);
        }
        
        $('.slide-indicator').addClass('pos-'+who);
    });

    //navigation

    function scrolling(position) {
        var speed = 800;
        $('html, body').stop().animate({scrollTop: position}, speed );
    }

    $(window).on('load', function(e){
        e.preventDefault();
        if (window.location.hash == '') {
            var activeScreen = 'body';
        } else {
            var activeScreen = window.location.hash;
        }
        var navHeight = 70, //$('.nav').height(),
            blockPosition = $( activeScreen ).offset().top,
            topPos = blockPosition - navHeight;
        scrolling(topPos);
    });

    $('.go-to').on('click', function(e){
        e.preventDefault();
        var goScreen = $(this).attr('href'),
            navHeight = 70, //$('.nav').height(),
            blockPosition = $( goScreen ).offset().top,
            topPos = blockPosition - navHeight;
        scrolling(topPos);
    });

    $('[href=#customers]').on('click', function(e){
        e.preventDefault();
        $('[href=#2]').trigger('click');
    });

    //set focus for recall

    $('.tel').on('click', function(){
        $('#recall').focus();
    });



/////////////////////////////////////////////
//                                         //
//   Email                                 //
//                                         //
/////////////////////////////////////////////

//tel

    $('.js-order-1').on('click', function(e) {
        e.preventDefault();
        $('#order-1 input').each(function() {
            if(!$(this).val().length) {
                $(this).css('border', '#e02525 2px solid');
                $(this).attr("placeholder","Телефон обязателен");
            } else {
                $.post( "tel.php", $( "#order-1" ).serialize() );
                $('#order-1')[0].reset();
                $(this).attr("placeholder","Ваш телефон");
                $(this).css('border', '#e0e0e0 2px solid');
                $('.js-order-1').html('Спасибо!');
                
                setTimeout(function(){
                    $(".js-order-1").html("Получить <strong>все</strong> преимущества");
                }, 3000);
            }
        });
    });

//sale

    $('.js-sale-1').on('click', function(e) {
        e.preventDefault();
        $('#sale-1 [type=email]').each(function() {
            if(!$(this).val().length) {
                $(this).css('border', '#e02525 2px solid');
                $(this).attr("placeholder","Email обязателен");
            } else {
                $.post( "sale.php", $( "#sale-1" ).serialize() );
                $('#sale-1')[0].reset();
                $(this).attr("placeholder","Email");
                $(this).css('border', '#e0e0e0 2px solid');
                $('.js-sale-1').html('Спасибо!');
                
                setTimeout(function(){
                    $(".js-sale-1").html("Стать нашим клиентом");
                }, 3000);
            }
        });
    });    
    $('.js-sale-2').on('click', function(e) {
        e.preventDefault();
        $('#sale-2 [type=email]').each(function() {
            if(!$(this).val().length) {
                $(this).css('border', '#e02525 2px solid');
                $(this).attr("placeholder","Email обязателен");
            } else {
                $.post( "sale.php", $( "#sale-2" ).serialize() );
                $('#sale-2')[0].reset();
                $(this).attr("placeholder","Email");
                $(this).css('border', '#e0e0e0 2px solid');
                $('.js-sale-2').html('Спасибо!');
                
                setTimeout(function(){
                    $(".js-sale-2").html("Стать нашим клиентом");
                }, 3000);
            }
        });
    });

    //email

    $('.js-ambulance').on('click', function(e) {
        e.preventDefault();
        $('#ambulance input').each(function() {
            if(!$(this).val().length) {
                $(this).css('border', '#e02525 2px solid');
                $(this).attr("placeholder","Email обязателен");
            } else {
                $.post( "email.php", $( "#ambulance" ).serialize() );
                $('#ambulance')[0].reset();
                $(this).attr("placeholder","Email");
                $(this).css('border', '#e0e0e0 2px solid');
                $('.js-ambulance').html('Спасибо!');
                
                setTimeout(function(){
                    $(".js-ambulance").html("Получить консультацию");
                }, 3000);
            }
        });
    });



/////////////////////////////////////////////
//                                         //
//   Calc                                  //
//                                         //
/////////////////////////////////////////////

    //calculate

    function calculate() {
        
        var actvt = $('#calc').serializeArray()[0].value,
            opf = $('#calc').serializeArray()[1].value,
            empl = $('#calc').serializeArray()[2].value,
            fpd = $('#calc').serializeArray()[3].value,
            rnalog = $('#calc').serializeArray()[4].value,
            dcount = $('#calc').serializeArray()[5].value,
            total = 1000;
        
        if (actvt == "Да") {
            
            //Деятельность ведется
            
        } else {
            //Деятельности нет
            if (opf == "ООО") {
                //ООО
                //Тут надо отключить кол-во документов и наличие сотрудников
                if (rnalog == "ОСНО") { total = 1670; }
                else if (rnalog == "УСН 6%" || rnalog == "УСН 10%" || rnalog == "ЕНВД") { total = 1500 }
                else { total = 1500*1.4 }
            } else {
                //ИП
                if (empl == "Да") {
                    if (rnalog == "ОСНО") { total = 1670; }
                    else if (rnalog == "УСН 6%" || rnalog == "УСН 10%" || rnalog == "ЕНВД") { total = 1500 }
                    else { total = 1500*1.4 }
                } else {
                    if (rnalog == "ОСНО") { total = 1670*0.25; }
                    else if (rnalog == "УСН 6%" || rnalog == "УСН 10%" || rnalog == "ЕНВД") { total = 1500*0.25 }
                    else { total = 1500*1.4*0.25 }
                }
            }
        }
        
        if (fpd == "Мы") {
            total = total*1.5;
        }
        
        total = Math.round(total);
        
        $('.js-totalVal').text(total);
        $('[name=total]').val(total);
        
    }
    calculate();

    //check lable in calc

    $('label').on('click',function(){
        var name = $(this).find('input').attr('name');
            $('input[name^='+name+']').closest('label').removeClass('checked');
            $('input[name^='+name+']').closest('.dropdown').find('.selected').removeClass('checked');
            $(this).addClass('checked');
        
    });

    //dropdown

    $('.dropdown label').on('click', function(){
        var insertCode = $(this).html().split('>')[1];
            $('.dropdown .selected').removeClass('checked');
            $(this).closest('.dropdown').find('.selected').addClass('checked'); 
            $(this).closest('.dropdown').find('.selected').html(insertCode);
    });
    
    $('#calc').on('change', function() {
        calculate();
    });

    $('.js-calcBtn').on('click', function(e) {
        e.preventDefault();
        $('#calc [name=email]').each(function() {
            if(!$(this).val().length) {
                $(this).css('border', '#e02525 2px solid');
                $(this).attr("placeholder","Email обязателен");
            } else {
                $.post( "calc.php", $( "#calc" ).serialize() );
                $('#order-1')[0].reset();
                $(this).attr("placeholder","Email");
                $(this).css('border', '#e0e0e0 2px solid');
                $('.js-calcBtn').html('Спасибо!');
                
                setTimeout(function(){
                    $(".js-calcBtn").html("Оставить заявку");
                }, 3000);
            }
        });
    });

});