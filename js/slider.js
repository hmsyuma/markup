/**
 * @returns sliderクラスに対して、
 *    slickの読み込みを行う。
 */
$(function() {
    $('.slider').slick( {
      infinite: true,  // スタイダーの無限ループの有効化
      adaptiveHeight: true,  //スライドの高さの自動調整の有効化
      nextArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',  //右のナビボタンの画像指定
      prevArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'  //左のナビボタンの画像指定
    });
  });