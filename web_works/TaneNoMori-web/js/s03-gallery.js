// S03 作例ギャラリー（slick carousel）
var $s03 = $('.s03-slick');
var s03ResumeTimer = null;
var S03_RESUME_DELAY = 3000;

$s03.slick({
    centerMode: true,
    centerPadding: '8%',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    dots: true,
    arrows: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
        { breakpoint: 820, settings: { slidesToShow: 2, centerPadding: '8%' } },
        { breakpoint: 540, settings: { slidesToShow: 1, centerPadding: '10%' } }
    ]
});

function s03ScheduleResume() {
    clearTimeout(s03ResumeTimer);
    s03ResumeTimer = setTimeout(function () {
        $s03.slick('slickPlay');
    }, S03_RESUME_DELAY);
}

// PC: ホバー中は停止、離したら3秒後に再開
$s03.on('mouseenter', function () {
    clearTimeout(s03ResumeTimer);
    $s03.slick('slickPause');
});
$s03.on('mouseleave', function () {
    s03ScheduleResume();
});

// iOS/タッチ: タッチ終了後3秒で再開
$s03.on('touchend', function () {
    s03ScheduleResume();
});
