$(document).ready(function(){
    //----------------- begin:on scroll show visible ------------------//
     var prev =   $(window).scrollTop();
    $(window).scroll(function(){
        var target =  $(window).scrollTop();
        var cur = $(window).scrollTop();
        if(target > 20){
            if (prev < cur) {
                $('#g_headerWrapper').css({"top":"0px","background-color": "rgb(255, 255, 255)"});
             }
            else{
                $('#g_headerWrapper').css({"top":"-100px","background-color": "rgb(255, 255, 255)"});
             }
             prev =cur;
        }
        else{
                $('#g_headerWrapper').css({"top":"0px","background-color": "transparent"});
            }
    });
     //----------------- end:open menu ------------------//

    //----------------- begin:on scroll show visible ------------------//
    $('.burger-menu').on('click', function(){
        $('.header-nav').toggleClass('menu-slide');
    });
    //----------------- end:open menu ------------------//

   //----------------- begin:slider ------------------//
    $('.owl-carousel').owlCarousel({
        loop: true,
        center:true,
        margin:0,
        autoplay:true,
        ltr:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2,
                stagePadding:90,
            }
        }
    })
     //-----------------end:slider ------------------//

});