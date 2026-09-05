// ハンバーガーメニュー
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function openDrawer() {
    menuBtn.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstLink = drawer.querySelector('a');
    if (firstLink) firstLink.focus();
}
function closeDrawer() {
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    menuBtn.focus();
}

menuBtn.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
overlay.addEventListener('click', closeDrawer);
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

// FAQ アコーディオン
function toggleFaq(qEl) {
    const item = qEl.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
        item.classList.add('open');
        qEl.setAttribute('aria-expanded', 'true');
    }
}
const firstFaq = document.querySelector('.faq-item');
if (firstFaq) {
    firstFaq.classList.add('open');
    const firstBtn = firstFaq.querySelector('.faq-q');
    if (firstBtn) firstBtn.setAttribute('aria-expanded', 'true');
}

// 特定商取引法 モーダル
const legalModal = document.getElementById('legalModal');
function openModal() { legalModal.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal() { legalModal.classList.remove('open'); document.body.style.overflow = ''; }
legalModal.addEventListener('click', e => { if (e.target === legalModal) closeModal(); });

// ご挨拶モーダル
const greetingModal = document.getElementById('greetingModal');
function openGreetingModal() { greetingModal.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeGreetingModal() { greetingModal.classList.remove('open'); document.body.style.overflow = ''; }
document.getElementById('greetingModalBtn').addEventListener('click', openGreetingModal);
greetingModal.addEventListener('click', e => { if (e.target === greetingModal) closeGreetingModal(); });

document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeGreetingModal(); closeDrawer(); } });

// S02 RSS フィード（note.com）
const NOTE_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://note.com/teaseed46/rss&count=10';
const noteListEl = document.getElementById('note-article-list');

function fetchNoteArticles() {
    noteListEl.innerHTML = '';

    fetch(NOTE_API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.status !== 'ok' || !data.items) {
                throw new Error('RSS2JSONで記事の取得に失敗しました。');
            }

            data.items.forEach(item => {
                const dateObj = new Date(item.pubDate);
                const formattedDate = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;

                const a = document.createElement('a');
                a.className = 'blog-item';
                a.href = item.link;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.innerHTML = `<span class="blog-date">${formattedDate}</span><span class="blog-title">${item.title}</span>`;
                noteListEl.appendChild(a);
            });
        })
        .catch(error => {
            console.error('note記事の読み込み中にエラーが発生しました:', error);
            noteListEl.innerHTML = '<div class="blog-item"><span class="blog-title">記事の読み込みに失敗しました。</span></div>';
        });
}

fetchNoteArticles();
