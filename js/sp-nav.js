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