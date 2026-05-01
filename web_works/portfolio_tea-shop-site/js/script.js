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
    function closeMenu() {
        $('#hamburger').removeClass("open").attr('aria-expanded', 'false');
        $('#header-menu').fadeOut(300);
        $('body').css('overflow', '');
    }

    // ハンバーガーボタンクリック
    $('#hamburger').on('click', function () {
        $('#hamburger').toggleClass("open");
        const isOpen = $('#hamburger').hasClass('open');
        $('#hamburger').attr('aria-expanded', isOpen ? 'true' : 'false');
        $('#header-menu').fadeToggle(300);
        $('body').css('overflow', isOpen ? 'hidden' : '');
    });

    // モーダル背景クリックで閉じる
    $('#header-menu').on('click', function (e) {
        if (!$(e.target).closest('a').length) {
            closeMenu();
        }
    });

    // メニューリンククリックでモーダルを閉じる
    $('#header-menu a').on('click', function () {
        closeMenu();
    });
});

// スライダーslick //
$('.slick01').slick({
    autoplay: true,
    autoplaySpeed: 0,
    dots: false,
    arrows: false,
    swipe: false,
    fade: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: true,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 380,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});