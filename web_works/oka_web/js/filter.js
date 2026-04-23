// Works page filter functionality
document.addEventListener('DOMContentLoaded', () => {
  
  const filterBtns = document.querySelectorAll('.filter-btn[data-category]');
  const workCards = document.querySelectorAll('.works-all-grid .work-card');

  if (filterBtns.length === 0 || workCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      // アクティブボタンの切り替え
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // カードのフィルタリング
      workCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category');
        
        if (category === 'all') {
          // Allの場合は全て表示
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else if (cardCategories.includes(category)) {
          // カテゴリーが一致する場合は表示
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          // 一致しない場合は非表示
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 300);
        }
      });
    });
  });

});
