 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '<a href="javascript:void(0)" class="prev"><i class="fa fa-caret-left"></i></a>',
    nextArrow: '<a href="javascript:void(0)" class="next"><i class="fa fa-caret-right"></i></a>',
    speed: 800,
});  

 
$('.slide-part').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    speed: 800,
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});  

$('.slide-bg-tab').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '<a href="javascript:void(0)" class="prev"><i class="fa fa-caret-left"></i></a>',
    nextArrow: '<a href="javascript:void(0)" class="next"><i class="fa fa-caret-right"></i></a>',
    speed: 800,
});  


$('.list-tab a').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.list-tab a').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
})

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});