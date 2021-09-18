var menu_btn = '.menu-button';
var nav = '#g-nav';
var circle = '.circle-bg';
var nav_a = '#g-nav a';


$(menu_btn).click(function() { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタンにactiveクラスを追加
    $(nav).toggleClass('panelactive'); //ナビゲーションにpanelectiveクラスを付与
    $(circle).toggleClass('circleactive'); //円背景にcicleactiveクラスを付与
});

$(nav_a).click(function() { //ナビゲーションのリンクがクリックされたら
    　
    $(menu_btn).removeClass('active'); //ボタンのactiveクラスを除去
    $(nav).removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(circle).removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
})
//スマホでアドレスバー抜いて表示させる
function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 2.初期化
setHeight();

// 3.ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
var windowW = $(window).width();
var width_resize;
$(window).on('resize', function() {
    width_resize = $(window).width();
    if (windowW != width_resize) {
        setHeight();
    }
});

// 現在地を確認する
$(function() {
    $('.nav-list li a').each(function() {
        let $href = $(this).attr('href');
        if (location.href.match($href)) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });
});
