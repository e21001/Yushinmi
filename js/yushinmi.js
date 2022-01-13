$(".box").bgSwitcher({
    images: ['img/bg1.JPG','img/bg2.JPG','img/bg3.JPG', 'img/bg4.JPG', 'img/bg5.JPG'],
    interval: 3000,
    loop: true,
    shuffle: true,
    effect: "fade",
    duration: 3000,
    easing: "swing"
});

$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

let effect_pos = 150; // 画面下からどの位置でフェードさせるか(px)
const effect_move = 50; // どのぐらい要素を動かすか(px)
const effect_time = 3000; // エフェクトの時間(ms) 1秒なら1000

// フェードする前のcssを定義
$(".about-img").css({
    opacity: 0,
    transform: 'translateY('+ effect_move +'px)',
    transition: effect_time + 'ms'
});
$(window).on('scroll load', function(){
    const scroll_top = $(this).scrollTop();
    const scroll_btm = scroll_top + $(this).height();
    effect_pos = scroll_btm - effect_pos;

    // effect_posがthis_posを超えたとき、エフェクトが発動
    $(".about-img").each( function() {
        const this_pos = $(this).offset().top;
        if ( effect_pos > this_pos ) {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        }
    });
});

$('.slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 10000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 4, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });

$('.qa').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('open');
  $('.qa').not(this).removeClass('open');
  $('.qa').not($(this)).next('.ans').slideUp();
})
