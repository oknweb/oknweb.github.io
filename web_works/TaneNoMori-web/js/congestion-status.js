/**
 * 種の杜 — 混雑状況表示スニペット
 * index.html の </body> 直前に貼り付けて使用する
 *
 * HTMLに以下の要素を用意しておくこと:
 *   <div id="congestion-status"></div>
 */

(function () {
  const el = document.getElementById('congestion-status');
  if (!el) return;

  const STATUS = {
    green:  { emoji: '🟢', label: '現在、ご依頼を受け付けております',  period: '納期目安：1〜2ヶ月', color: '#1a5c1a', bg: '#e6f4e6', border: '#9dcc9d' },
    yellow: { emoji: '🟡', label: '現在、やや混み合っております',        period: '納期目安：2〜3ヶ月', color: '#6b4e00', bg: '#fff8e1', border: '#e6c757' },
    red:    { emoji: '🔴', label: '現在、大変混み合っております',        period: '納期目安：3ヶ月以上', color: '#7a2220', bg: '#fde8e7', border: '#f0b0ad' },
    black:  { emoji: '⚫', label: '現在、新規受付を一時停止しております', period: '再開時期：未定',      color: '#333',    bg: '#f0f0f0', border: '#ccc'    },
  };

  fetch('/status.json?_=' + Date.now())
    .then(r => r.json())
    .then(data => {
      const s = STATUS[data.status] || STATUS.green;
      el.innerHTML = `
        <div style="
          display:inline-flex; flex-direction:column; align-items:flex-start;
          gap:0.3rem; padding:1rem 1.5rem;
          background:${s.bg}; border:1px solid ${s.border};
          border-radius:12px; max-width:100%;
        ">
          <div style="font-size:1rem; font-weight:700; color:${s.color};">
            ${s.emoji} ${s.label}
          </div>
          <div style="font-size:0.82rem; color:${s.color}; opacity:0.8;">
            ${s.period}
          </div>
          <div style="font-size:0.68rem; color:#999; margin-top:0.2rem;">
            最終更新：${data.updated}
          </div>
        </div>
      `;
    })
    .catch(() => {
      // 読み込み失敗時はデフォルト表示
      el.innerHTML = '<div style="color:#999;font-size:0.85rem;">現在の状況を確認中...</div>';
    });
})();
