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

$(function () {
$('.page-header').each(function () {
  var $window = $(window), 
  $header = $(this), 
　headerOffsetTop = $header.offset().top;
        $window.on('scroll', function () {
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
        $window.trigger('scroll');

    });
});