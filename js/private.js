 
$('.slide-cover').slick({
    autoplay: true,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    speed: 500,
    fade: true,
    cssEase: 'linear'
});  


$(document).ready(function(){
   // $(window).bind('scroll', function() {
   // var navHeight = $( window ).height() - 70;
   //       if ($(window).scrollTop() > 50) {
   //           $('.header-menu, main').addClass('fixed');
   //       }
   //       else {
   //           $('.header-menu, main').removeClass('fixed');
   //       }
   //  });

  $('.btn-search a').click(function(){
    $('body, .popup-search').addClass('active');
  })
  $('.close-search a').click(function(){
    $('body, .popup-search').removeClass('active');
  })
  $('.btn-menu a').click(function(){
    $('.mm-mobile').toggleClass('active');
  })

   $('.tab-project a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-project a').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })
});

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
}); 