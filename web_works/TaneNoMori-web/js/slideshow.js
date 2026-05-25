// S05 塗装カード スライドショー
document.querySelectorAll('[data-slideshow]').forEach(function (slideshow) {
    var imgs = slideshow.querySelectorAll('.slideshow-img');
    var dots = slideshow.querySelectorAll('.slideshow-dot');
    var current = 0;

    function goTo(index) {
        imgs[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + imgs.length) % imgs.length;
        imgs[current].classList.add('active');
        dots[current].classList.add('active');
    }

    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); });
    });

    setInterval(function () { goTo(current + 1); }, 3000);
});
