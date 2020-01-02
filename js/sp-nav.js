/**
 * open-buttonをクリックすると発生
 * @returns navがfadeし、btnの非表示、表示が入れ替わる。
 * close-buttonクリックすると発生
 * @returns navがfadeし、btnの非表示、表示が入れ替わる。
 * navをクリックすると発生
 * @returns メニュバーのリンク以外に触れても、navがfadeし、
 *    btnの非表示、表示が入れ替わる
 * (window).resizeによりウィンドウサイズを常に監視する
 * @returns　PCとSPがリサイズで入れ替わった際に、
 *    navがPCでは表示、SPでは非表示にする。
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
      const pcWidth = 1080; 
      if(width < pcWidth) {
        $('.close-button').hide(1)
        $('.nav-wrap').fadeOut();
        $('.nav').fadeOut();
        $('.open-button').show();
      }
    });
  
    $(window).resize(function() {
      var windowWdth = $(window).width();
      const pcWidth = 1080;
      if(pcWidth < windowWdth) {
        $('.nav-wrap').show();
        $('.nav').show();
      } else {
        $('.nav-wrap').hide();
        $('.nav').hide();
      }
    });
  });