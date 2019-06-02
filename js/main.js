/**
 * @name stickyHeader
 * .headerに.eachにより繰り返し処理を行う
 * @returns windowのスクロール量の監視を行い
 *    ヘッダーのデフォルト位置を超えていれば、stickyクラス付与
 *    そうでなければ、クラスを削除する。
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
 * @name allowBtn
 * .allow-btnに.eachにより繰り返し処理を行う
 * @returns windowのwidthの監視を行いサイズによって、
 *    スクロール量を調整する。
 */
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
　
  //スクロール可能な要素を取得
  function scrollableElement () {
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