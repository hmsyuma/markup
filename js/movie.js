// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
ytPlayer = new YT.Player(
  'sample', // 埋め込む場所の指定
    {
    width: 940, // プレーヤーの幅
    height: 529, // プレーヤーの高さ
    videoId: 'zTEYUFgLveY', // YouTubeのID
    //イベント設定
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
    $('#test').removeClass().addClass("body-wrap");
    $('#A').removeClass().addClass("movie");
    $('#Z').addClass("body-scroll-hidden");
    $('.inner-movie').attr('id', 'sample');
    // //ios スクロール固定
    $(window).on('touchmove.noScroll', function(e) {
        e.preventDefault();
    });
    onYouTubeIframeAPIReady();
    })
});
