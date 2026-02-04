// Visual slider for PC
const slides = document.querySelectorAll('.visual-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (window.innerWidth >= 1024) {
    setInterval(nextSlide, 5000);
}

// ハンバーガーメニュー
$(function () {
    // ハンバーガーボタンクリック
    $('#hamburger').on('click', function () {
        $('#hamburger').toggleClass("open");
        $('#header-menu').fadeToggle(300);

        // bodyのスクロールを制御
        if ($('#hamburger').hasClass('open')) {
            $('body').css('overflow', 'hidden'); // スクロール無効
        } else {
            $('body').css('overflow', ''); // スクロール有効
        }
    });

    // モーダル背景クリックで閉じる
    $('#header-menu').on('click', function (e) {
        if (!$(e.target).closest('a').length) {
            $('#hamburger').removeClass("open");
            $('#header-menu').fadeOut(300);
            $('body').css('overflow', ''); // スクロール有効に戻す
        }
    });

    // メニューリンククリックでモーダルを閉じる
    $('#header-menu a').on('click', function () {
        $('#hamburger').removeClass("open");
        $('#header-menu').fadeOut(300);
        $('body').css('overflow', ''); // スクロール有効に戻す
    });
});

// スライダーslick //
$('.slick01').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    fade: false,           // スライド効果にする場合はfalse
    infinite: true,        // 無限ループ
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                arrows: false,  // スマホでは矢印非表示
                slidesToShow: 1,     // スマホでも1枚表示
                slidesToScroll: 1,
            }
        }
    ]
});