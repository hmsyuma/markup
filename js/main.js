var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerReady() {
  ytPlayer.mute();// ミュートにしてから
  ytPlayer.playVideo();// 再生
}

$(function(){
  $('.slider').slick({
    infinite: true,
    adaptiveHeight: true,
    nextArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
    prevArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
   });
});