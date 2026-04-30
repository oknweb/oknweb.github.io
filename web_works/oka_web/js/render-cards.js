(function () {

  function buildCard(item, isWorksPage) {
    const card = document.createElement('div');
    card.className = ['work-card', ...item.cardClasses].join(' ');
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    if (isWorksPage && item.dataCategory) {
      card.dataset.category = item.dataCategory;
    }

    card.addEventListener('click', () => openWorkModal(item.modal));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openWorkModal(item.modal);
      }
    });

    // サムネイル
    const thumb = document.createElement('div');
    if (item.slideshowImages) {
      thumb.className = 'work-thumb work-thumb-slideshow';
      item.slideshowImages.forEach((img, i) => {
        const el = document.createElement('img');
        el.src = img.src;
        el.alt = img.alt;
        el.className = 'slideshow-image' + (i === 0 ? ' active' : '');
        thumb.appendChild(el);
      });
    } else {
      thumb.className = 'work-thumb';
      const img = document.createElement('img');
      img.src = item.thumbSrc;
      img.alt = item.thumbAlt;
      img.loading = 'lazy';
      thumb.appendChild(img);
    }
    card.appendChild(thumb);

    // 情報
    const info = document.createElement('div');
    info.className = 'work-info';
    info.innerHTML =
      '<p class="work-cat">' + item.workCat + '</p>' +
      '<p class="work-title">' + item.workTitle + '</p>' +
      '<p class="work-note">' + item.workNote + '</p>';
    card.appendChild(info);

    return card;
  }

  // index.html: .works-grid に showOnIndex のカードを順番に挿入
  const indexGrid = document.querySelector('.works-grid');
  if (indexGrid) {
    worksData
      .filter(item => item.showOnIndex)
      .sort((a, b) => a.indexOrder - b.indexOrder)
      .forEach(item => indexGrid.appendChild(buildCard(item, false)));
  }

  // works.html: .works-all-grid に全カードを挿入
  const worksGrid = document.querySelector('.works-all-grid');
  if (worksGrid) {
    worksData.forEach(item => worksGrid.appendChild(buildCard(item, true)));
  }

})();
