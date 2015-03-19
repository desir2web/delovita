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
    
    //calc
    
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

    
//calc 
    
var App = {};
    
App.Views = {};
App.Models = {};
App.Collections = {};
    
/////////////////////////////////////////////
//                                         //
//   App View                              //
//                                         //
/////////////////////////////////////////////

    App.Views.Calc = Backbone.View.extend({
        el: '#calc',
        events: {
            'change': 'calculate'
        },
        calculate: function(e) {
            var $form = this.$el,
                data = $form.serializeArray(),
                calcData = this.$el.find('[data-add]:checked');
            
            _.each(calcData, function(item){
                this.addValue += $(item).data('add');
                this.multiplyValue = this.multiplyValue*$(item).data('multiply');
            }, this);
            
            this.total = this.addValue * this.multiplyValue;
            this.total = Math.round(this.total);
            this.addValue = 0;
            this.multiplyValue = 1;
            this.render();
        },
        initialize: function() {
            this.render();
            this.base = this.$el.data('base');
            this.total = this.base;
            this.addValue = 0;
            this.multiplyValue = 1;
            this.calculate();
        },
        render: function() {
            var $total = this.$el.find('.js-totalVal');
            $total.html(this.total);
            $('#hiddenTotal').val(this.total);
        }
    });
    
/////////////////////////////////////////////
//                                         //
//   Initialize                            //
//                                         //
/////////////////////////////////////////////
    
    var calc = new App.Views.Calc();

});