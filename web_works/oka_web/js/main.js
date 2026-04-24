document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ハンバーガーメニュー
  const hamburger = document.getElementById('hamburger');
  const spMenu = document.getElementById('spMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    spMenu.classList.toggle('open');
    document.body.style.overflow = spMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.sp-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      spMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');

  // まずhiddenを付けて非表示に
  reveals.forEach(el => el.classList.add('hidden'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('hidden');
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => {
      el.classList.remove('hidden');
      el.classList.add('visible');
    });
  }

  // Skill bar animation
  const skillBars = document.querySelectorAll('.skill-fill');
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('animated');
    });
  }, { threshold: 0.5 });
  skillBars.forEach(b => barObserver.observe(b));

  // Works filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // キーボードアクセシビリティ: onclick付き作品カードをTabキー・Enterで操作可能に
  document.querySelectorAll('.work-card[onclick]').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Slideshow for vertical work card
  const slideshowImages = document.querySelectorAll('.slideshow-image');
  if (slideshowImages.length > 0) {
    let currentIndex = 0;
    setInterval(() => {
      slideshowImages[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slideshowImages.length;
      slideshowImages[currentIndex].classList.add('active');
    }, 3000); // 3秒ごとに切り替え
  }

}); // DOMContentLoaded
