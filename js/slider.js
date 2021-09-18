//画像の設定
let windowWidth = window.innerWidth || document.documentElement.clientWidth || 0;

//vegas全体の設定
$('#slider').vegas({
    overlay: false,
    transition: 'blur',
    transitionDuration: 2000,
    delay: 5500,
    animationDuration: 6000,
    animation: 'kenburns',
    slides: [
        { src: './images/about.jpg'},
        { src: './images/header-img.jpg'},
        { src: './images/cafe-header2.jpg'},
    ]
})