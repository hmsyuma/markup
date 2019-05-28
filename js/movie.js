// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
ytPlayer = new YT.Player(
  'start-movie', // 埋め込む場所の指定
    {
    width: 940,
    height: 529,
    videoId: 'zTEYUFgLveY',//YouTubeのID
    //イベント処理
    playerVars:{
      rel: 0,
      autoplay: 1,
      modestbranding: 1,
      fs: 1,
      iv_load_policy: 3,
      showinfo: 0,
      }
    }
  );
}

$(function (){
  $('.player').click(function(){
  $('#body-hide').removeClass().addClass("body-wrap");
  $('#open-movie').removeClass().addClass("movie");
  $('#body-scroll').addClass("body-scroll-fixed");
  $('.inner-movie').attr('id', 'start-movie');
  // //ios スクロール固定
  $(window).on('touchmove.noScroll', function(e) {
      e.preventDefault();
  });
  onYouTubeIframeAPIReady();
  })
});
