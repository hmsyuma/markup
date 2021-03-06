$(function() {
  $('.slider').slick( {
    infinite: true,
    adaptiveHeight: true,
    nextArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
    prevArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
  });
});

$(function hamburgerMenu() {
  $('.open-button').click(function() {
  $('.nav-wrap').fadeIn();
  $('.open-button').fadeOut(1);
  $('.close-button').fadeIn();
  $('.nav').fadeIn();
  });

  $('.close-button').click(function() {
    $('.nav-wrap').fadeOut();
    $('.open-button').fadeIn();
    $('.close-button').fadeOut(1);
    $('.nav').fadeOut();
  });

  $('.nav-wrap').click(function() {
    var width = document.documentElement.scrollWidth;
      if(width < 1080) {
      $('.nav-wrap').fadeOut();
      $('.open-button').fadeIn();
      $('.close-button').fadeOut(1);
      $('.nav').fadeOut();
      }
  });
});

$(function stickyHeader() {
  $('.header').each(function () {
    var $window = $(window), 
    $header = $(this), 
    headerOffsetTop = $header.offset().top;

    $window.on('scroll', function () {
      if($window.scrollTop() > headerOffsetTop) {
         $header.addClass('sticky');
         } else {
         $header.removeClass('sticky');
         }
      });
  });
});


$(function allowBtn() {
  $('.allow-btn').each(function () {
    var $el = $(scrollableElement('html', 'body'));
    $(this).on('click', function (event) {
          event.preventDefault();
          var w = document.documentElement.scrollWidth;
          if(1080 <= w) {
             $el.animate({ scrollTop: 550 }, 500);
          } else if(695 < w ) {
            $el.animate({ scrollTop: 400 }, 500);  
          } else {
            $el.animate({ scrollTop: 400 }, 500);
          }
      });
  });

  function scrollableElement (elements) {
    var i, len, el, $el, scrollable;
      for (i = 0, len = arguments.length; i < len; i++) {
        el = arguments[i],
        $el = $(el);
        if($el.scrollTop() > 0) {
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
