//画像の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;

//vegas全体の設定
$('#slider').vegas({
    overlay: false,
    transition: 'blur',
    transitionDuration: 2000,
    delay: 10000,
    animationDuration: 6000,
    animation: 'kenburns',
    slides: [
        { src: './images/about.jpg'},
        { src: './images/header-img3.jpg'},
        { src: './images/cafe-header2.jpg'},
    ]
})