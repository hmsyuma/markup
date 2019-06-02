/**
 * @name onYouTubeIframeAPIReady
 * @returns　YOUTUBEAPIの読み込みにより、
 *    start-movieクラスに動画を読み込み再生する。
 */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
      'start-movie',
      {
      width: 940,  //動画の幅指定
      height: 529,  //動画の高さ指定
      videoId: 'Baza8JnhZLU', //youtubeID
      playerVars: {
        rel: 0,  //プレーヤー関連動画非表示にする
        autoplay: 1,  //自動再生を行う
        modestbranding: 1,  //ロゴを非表示にする
        iv_load_policy: 3,  //アノテーション非表示する
        showinfo: 0, //動画のタイトル非表示にする
      }
    }
  );
}

/**
 * topページの画像を押した際に発生
 * @returns headerからfooterが非表示になり、動画領域が表示される。
 * nYouTubeIframeAPIReady関数を実行
 * @returns 動画が読み込まれ、自動再生
 */
$(function() {
  $('#js-youtube-player').click(function() {
    $('#body-hide').removeClass().addClass("body-wrap");
    $('#open-movie').removeClass().addClass("movie");
    $('#body-scroll').addClass("body-scroll-fixed");
    $('.inner-movie').removeAttr('id', 'stop-movie');
    $('.inner-movie').attr('id', 'start-movie');
    $(window).on('touchmove.noScroll', function(e) {
      e.preventDefault();
    });
      onYouTubeIframeAPIReady();
    })
  });

/**
 * colseボタンをクリックした際に、発生
 * @returns ytPlayer.destroy();により、動画の読み込みを削除
 * @returns 動画領域がmovie-hide,bodyへのクラス名変更ににより、
 *    動画領域が消え、headerからfooterまでが再表示
 */
$(function() {
  $('#js-close-movie').click(function() {
    ytPlayer.destroy();
    $('#body-hide').removeClass().addClass("body");
    $('#open-movie').removeClass().addClass("movie-hide");
    $('#body-scroll').removeClass();
    $('.inner-movie').removeAttr('id', 'start-movie');
    $('.inner-movie').attr('id', 'stop-movie');
  });
});