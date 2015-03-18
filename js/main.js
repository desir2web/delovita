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
        }
    });
    
/////////////////////////////////////////////
//                                         //
//   Initialize                            //
//                                         //
/////////////////////////////////////////////
    
    var calc = new App.Views.Calc();

});