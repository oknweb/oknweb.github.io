// S03 作例ギャラリー（slick carousel・連続スクロール）
$('.s03-slick').slick({
    centerMode: true,
    centerPadding: '8%',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
        { breakpoint: 820, settings: { slidesToShow: 2, centerPadding: '8%' } },
        { breakpoint: 540, settings: { slidesToShow: 1, centerPadding: '10%' } }
    ]
});
