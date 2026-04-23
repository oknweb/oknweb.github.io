// Work detail modal functionality
document.addEventListener('DOMContentLoaded', () => {
  
  const modal = document.getElementById('workModal');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  
  if (!modal) return;

  // モーダルを開く
  window.openWorkModal = function(workData) {
    // タイトル
    document.getElementById('modalTitle').textContent = workData.title;
    
    // カテゴリー
    document.getElementById('modalCategory').textContent = workData.category;
    
    // メディアコンテンツ（動画 or 画像）
    const mediaContainer = document.getElementById('modalMedia');
    mediaContainer.innerHTML = '';
    
    if (workData.videoUrl) {
      // 動画の場合
      const video = document.createElement('video');
      video.controls = true;
      video.className = 'modal-video';
      video.controlsList = 'nodownload nofullscreen noremoteplayback';
      video.disablePictureInPicture = true;
      
      // 音量設定の確認（初回のみ）
      const audioPreference = localStorage.getItem('videoAudioPreference');
      
      if (audioPreference === null) {
        // 初回：デフォルトでミュート
        video.muted = true;
        video.volume = 1.0;
        
        // 再生ボタンが押されたときに確認
        video.addEventListener('play', function askAudioPreference() {
          video.pause(); // 一時停止
          
          const userChoice = confirm('動画の音声をONにしますか？');
          
          if (userChoice) {
            video.muted = false;
            localStorage.setItem('videoAudioPreference', 'on');
          } else {
            video.muted = true;
            localStorage.setItem('videoAudioPreference', 'off');
          }
          
          // イベントリスナーを削除（1回だけ実行）
          video.removeEventListener('play', askAudioPreference);
          
          // 再生を再開
          video.play();
        }, { once: true });
      } else {
        // 2回目以降：保存された設定を使用
        if (audioPreference === 'on') {
          video.muted = false;
          video.volume = parseFloat(localStorage.getItem('videoVolume') || '1.0');
        } else {
          video.muted = true;
        }
      }
      
      // 音量変更時に保存（ミュート解除後の音量調整用）
      video.addEventListener('volumechange', function() {
        if (!video.muted) {
          localStorage.setItem('videoVolume', video.volume);
        }
      });
      
      video.innerHTML = `<source src="${workData.videoUrl}" type="video/mp4">お使いのブラウザは動画タグをサポートしていません。`;
      mediaContainer.appendChild(video);
    } else if (workData.imageUrl) {
      // 画像の場合
      const img = document.createElement('img');
      img.src = workData.imageUrl;
      img.alt = workData.title;
      img.className = 'modal-image';
      mediaContainer.appendChild(img);
    }
    
    // 基本情報
    const infoList = document.getElementById('modalInfo');
    infoList.innerHTML = '';
    
    if (workData.client) {
      infoList.innerHTML += `<li><strong>クライアント：</strong>${workData.client}</li>`;
    }
    if (workData.year) {
      infoList.innerHTML += `<li><strong>制作年・期間：</strong>${workData.year}</li>`;
    }
    if (workData.role) {
      infoList.innerHTML += `<li><strong>担当範囲：</strong>${workData.role}</li>`;
    }
    if (workData.tools) {
      infoList.innerHTML += `<li><strong>使用ツール：</strong>${workData.tools}</li>`;
    }
    
    // 概要
    const overview = document.getElementById('modalOverview');
    overview.textContent = workData.overview || '';
    
    // こだわりポイント
    const points = document.getElementById('modalPoints');
    points.textContent = workData.points || '';
    
    // 外部リンク
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = '';
    
    if (workData.links && workData.links.length > 0) {
      workData.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.label;
        a.className = 'modal-link-btn';
        // PDFの場合は同じタブで開く（ブラウザプレビュー）
        if (link.url.toLowerCase().endsWith('.pdf')) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        } else {
          a.target = '_blank';
        }
        linksContainer.appendChild(a);
      });
    }
    
    // モーダルを表示
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // モーダルを閉じる
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // 動画を停止
    const video = modal.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // ESCキーでモーダルを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

});
