$(function(){
    $('.slider').slick({
        infinite: true,
        adaptiveHeight: true,
        prevArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
        nextArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
    });
});

$('.hamburger-button').click(function(){
  $('.nav-wrap').toggleClass('is-open');
  $('.body-wrap').toggleClass('is-overlay');
});