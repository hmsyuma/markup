/**
 * .sliderでプラグインから
 * slickの読み込みを行う。
 */
$(function() {
  $('.slider').slick( {
    infinite: true,  // スタイダーの無限ループの有効化
    adaptiveHeight: true,  //スライドの高さの自動調整の有効化
    nextArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',  //右のナビボタンの画像指定
    prevArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'  //左のナビボタンの画像指定
  });
});

/**
 * open-buttonをクリックすると発火
 * navがfadeし、btnの非表示、表示が入れ替わる。
 * close-buttonクリックすると発火
 * navがfadeし、btnの非表示、表示が入れ替わる。
 * navをクリックすると発火
 * メニュバーのリンク以外に触れても、
 * navがfadeし、btnの非表示、表示が入れ替わる
 * (window).resizeによりウィンドウサイズを常に監視
 * PCとSPがリサイズで入れ替わった際に、
 * navがPCでは表示、SPでは非表示にする。
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
    var $scrollableElement = $(scrollableElement('html', 'body'));
    $(this).on('click', function (event) {
      const pcWidth = 1080;
      const maxSpWidth = 695;
      const minSpWidth = 500;
      const pcHeightScroll = 500;
      const maxSpHeigthScroll = 380;
      const middleSpHeigthScroll = 430;
      const minSpHeigthScroll = 300;
      const scrollSpeed = 500;

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