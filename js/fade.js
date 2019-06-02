/**
 * windowのスクロールにより発生
 * @returns　.fadeinに.eachにより繰り返し処理を行う
 * @returns windowのスクロール量の監視を行い
 *    スクロール位置が、指定位置を超えていれば、
 *    指定したオブジェクトにopacity、transformが追加され、表示される
 */
$(function() {
  $(window).scroll(function() {
    $('.fadein').each(function() {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});
