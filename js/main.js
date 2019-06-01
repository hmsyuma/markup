/**
 * スライダーの読み込み
 */
$(function() {
  $('.slider').slick( {
    infinite: true,
    adaptiveHeight: true,
    nextArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
    prevArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
  });
});

/**
 * SPハンバーガメニューの表示、非表示の
 * クリックイベントを定義
 */
$(function() {
  $('.open-button').click(function() {
    $('.open-button').hide(1);
    $('.nav-wrap').fadeIn();
    $('.nav').fadeIn();
    $('.close-button').show();
  });

  $('.close-button').click(function() {
    $('.close-button').hide(1);
    $('.nav-wrap').fadeOut();
    $('.nav').fadeOut();
    $('.open-button').show();
  });

  $('.nav-wrap').click(function() {
    var width = document.documentElement.scrollWidth;
    if(width < 1080) {
      $('.close-button').hide(1)
      $('.nav-wrap').fadeOut();
      $('.nav').fadeOut();
      $('.open-button').show();
    }
  });

  $(window).resize(function() {
    var windowWdth = $(window).width();
    if(1080 < windowWdth) {
      $('.nav-wrap').show();
      $('.nav').show();
    } else {
      $('.nav-wrap').hide();
      $('.nav').hide();
    }
  });
});

/**
 * ステッキーヘッダーの定義
 * スクロール位置を監視しながら、追従する。
 */
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

/**
 * main-visualのアローボタンの定義
 * PCのリサイズ幅に合わせ、スクロール幅を変更
 */
$(function allowBtn() {
  $('.allow-btn').each(function () {
    var $scrollableElement = $(scrollableElement('html', 'body'));
    $(this).on('click', function (event) {
      pcWidth = 1080;
      maxSpWidth = 695;
      minSpWidth = 500;
      pcHeightScroll = 500;
      maxSpHeigthScroll = 380;
      middleSpHeigthScroll = 430;
      minSpHeigthScroll = 300;
      scrollSpeed = 500;

      event.preventDefault();
      var scrollWidth = document.documentElement.scrollWidth;
      if(pcWidth <= scrollWidth) {
        $scrollableElement.animate({ scrollTop: pcHeightScroll }, scrollSpeed);
      } else if(maxSpWidth < scrollWidth ) {
        $scrollableElement.animate({ scrollTop: maxSpHeigthScroll }, scrollSpeed);
      } else {
        if(minSpWidth < scrollWidth) {
        $scrollableElement.animate({ scrollTop: middleSpHeigthScroll }, scrollSpeed);
      } else {
        $scrollableElement.animate({ scrollTop: minSpHeigthScroll }, scrollSpeed);
        }}
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