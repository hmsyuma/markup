$(function(){
    $('.slider').slick({
        infinite: true,
        adaptiveHeight: true,
        nextArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
        prevArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
    });
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



$(function stickyHeader() {
    $('.header').each(function () {
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
    });
});


$(function allowBtn() {
    $('.allow-btn').each(function () {
        var $el = $(scrollableElement('html', 'body'));
        $(this).on('click', function (event) {
            event.preventDefault();
            var w = document.documentElement.scrollWidth;
            console.log(w)
            if(1080 <= w){
               console.log(1)
               $el.animate({ scrollTop: 800 }, 500);
            } else if(695 < w ) {
                console.log(2)
              $el.animate({ scrollTop: 400 }, 500);  
            } else {
                console.log(3)
              $el.animate({ scrollTop: 450 }, 500);
            }
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
})