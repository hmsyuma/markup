var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
    'start-movie',
      {
      width: 940,
      height: 529,
      videoId: 'Baza8JnhZLU',
      playerVars: {
        rel: 0,  //プレーヤー関連動画非表示
        autoplay: 1,  //自動再生
        modestbranding: 1,  //ロゴ費用時
        iv_load_policy: 3,  //アノテーション非表示
        showinfo: 0, //動画のタイトル表示
      }
    }
  );
}

/**
 * topページの画像を押した際に発火
 * headerからfooterが非表示になり、
 * 動画領域が表示される。
 * nYouTubeIframeAPIReady関数を実行
 * 動画が読み込まれ、自動再生
 */
$(function() {
  $('#js-youtube-player').click(function() {
    $('#body-hide').removeClass().addClass("body-wrap");
    $('#open-movie').removeClass().addClass("movie");
    $('#body-scroll').addClass("body-scroll-fixed");
    $('.inner-movie').attr('id', 'start-movie');
    $(window).on('touchmove.noScroll', function(e) {
      e.preventDefault();
    });
      onYouTubeIframeAPIReady();
    })
  });

/**
 * colseボタンをクリックした際に、発火
 * 動画領域が消え、headerからfooterが再表示
 */
  $(function() {
  $('#js-close-movie').click(function() {
    $('#body-hide').removeClass().addClass("body");
    $('#open-movie').removeClass().addClass("movie-hide");
    $('#body-scroll').removeClass();
    $('.inner-movie').removeAttr('id', 'start-movie');
  });
});
