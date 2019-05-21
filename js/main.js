$(function slickSlider() {
    if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        $('.slider').slick({
            infinite: true,
            adaptiveHeight: true,
            prevArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
            nextArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
        });
    }
});

$(function hamburgerMenu() {
    $('.hamburger-button').click(function(){
        $('.nav-wrap').toggleClass('is-open');
        $('.body-wrap').toggleClass('is-overlay');
    });

    $('.nav-wrap').click(function(){
        $('.nav-wrap').removeClass('is-open');
        $('.body-wrap').removeClass('is-overlay');
    })
});


$(function allowBtn() {
  $('.allow-btn').each(function () {

    var $el = $(scrollableElement('html', 'body'));
    $(this).on('click', function (event) {
      event.preventDefault();
      $el.animate({ scrollTop: 700 }, 500);
      });
  });

  function scrollableElement (elements) {
  var i, len, el, $el, scrollable;
  for (i = 0, len = arguments.length; i < len; i++) {
      el = arguments[i],
      $el = $(el);
      if ($el.scrollTop() > 0) {
      return el;
      } else {
      $el.scrollTop(1);
      scrollable = $el.scrollTop() > 0;
      $el.scrollTop(0);
      if (scrollable) {
          return el;
          }
      }
  }
  return [];
  }

});