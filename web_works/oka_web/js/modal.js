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
      const audioPreference = localStorage.getItem('videoAudioPreference');

      const video = document.createElement('video');
      video.controls = true;
      video.className = 'modal-video';
      video.controlsList = 'nodownload nofullscreen noremoteplayback';
      video.disablePictureInPicture = true;
      video.muted = audioPreference !== 'on';
      if (!video.muted) {
        video.volume = parseFloat(localStorage.getItem('videoVolume') || '1.0');
      }
      video.innerHTML = `<source src="${workData.videoUrl}" type="video/mp4">お使いのブラウザは動画タグをサポートしていません。`;

      // ネイティブコントロールで変更された音量・ミュート設定を保存
      video.addEventListener('volumechange', () => {
        localStorage.setItem('videoAudioPreference', video.muted ? 'off' : 'on');
        if (!video.muted) {
          localStorage.setItem('videoVolume', video.volume);
        }
      });

      const wrapper = document.createElement('div');
      wrapper.className = 'modal-video-wrapper';
      wrapper.appendChild(video);

      // 初回のみ音声確認ダイアログを表示
      if (audioPreference === null) {
        const dialog = document.createElement('div');
        dialog.className = 'audio-pref-dialog';

        const text = document.createElement('p');
        text.className = 'audio-pref-text';
        text.textContent = '動画の音声をオンにしますか？';

        const btns = document.createElement('div');
        btns.className = 'audio-pref-btns';

        const onBtn = document.createElement('button');
        onBtn.className = 'audio-pref-btn audio-pref-on';
        onBtn.textContent = '🔊 音声ON';

        const offBtn = document.createElement('button');
        offBtn.className = 'audio-pref-btn audio-pref-off';
        offBtn.textContent = '🔇 ミュートで再生';

        onBtn.addEventListener('click', () => {
          video.muted = false;
          localStorage.setItem('videoAudioPreference', 'on');
          dialog.remove();
        });

        offBtn.addEventListener('click', () => {
          video.muted = true;
          localStorage.setItem('videoAudioPreference', 'off');
          dialog.remove();
        });

        btns.appendChild(onBtn);
        btns.appendChild(offBtn);
        dialog.appendChild(text);
        dialog.appendChild(btns);
        wrapper.appendChild(dialog);
      }

      mediaContainer.appendChild(wrapper);
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
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
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
