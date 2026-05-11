const worksData = [
  {
    cardClasses: [],
    dataCategory: 'web',
    thumbSrc: 'images/syoka-web-Images/shoka_ss_01.jpg',
    thumbAlt: '喫茶ショカ Webページ',
    slideshowImages: null,
    workCat: 'WEB DESIGN',
    workTitle: '喫茶ショカ Webページ',
    workNote: '2026年 / HTML・CSS・JavaScript',
    showOnIndex: true,
    indexOrder: 1,
    modal: {
      title: '喫茶ショカ Webページ',
      category: 'WEB DESIGN',
      images: ['images/syoka-web-Images/shoka_ss_02.png'],
      client: '自主制作（架空案件）',
      year: '2026年（約2週間）',
      role: '企画・デザイン・コーディング',
      tools: 'HTML / CSS / JavaScript',
      overview: '多摩地区で元司書の女性店主が営む『書棚喫茶』のWebサイト、という想定でデザインと構成をしました。モバイルファーストのサイトデザインを試作してみました。PCでは3ペイン構成で中央部分がメインコンテンツ。左が大きめの写真をスライドショー。SPではPCメインコンテンツを1ペインで表示。',
      points: '紅茶を連想させるオレンジとダークブラウンの配色に気を使いました。書籍紹介など量の多い文章は折りたためるようにしてシンプルに見やすくしています。',
      links: [
        { label: 'サイトを見る →', url: 'https://oknweb.github.io//web_works/portfolio_tea-shop-site/' },
        { label: '企画書PDF', url: 'MarketingPDF/shoka_marketing_PDF.pdf' }
      ]
    }
  },
  {
    cardClasses: [],
    dataCategory: 'logo',
    thumbSrc: 'images/CafeSORA_01.jpg',
    thumbAlt: 'カフェSORA ロゴ・キャラクター',
    slideshowImages: null,
    workCat: 'LOGO DESIGN',
    workTitle: 'カフェSORA ロゴ・キャラクター',
    workNote: '2025年 / ブランディング・ノベルティ',
    showOnIndex: true,
    indexOrder: 3,
    modal: {
      title: 'カフェSORA ショップロゴ・キャラクターステッカー',
      category: 'LOGO DESIGN',
      images: [
        'images/CafeSORA_01.jpg',
        'images/CafeSORA_02.jpg',
        'images/CafeSORA_03.jpg',
        'images/CafeSORA_04.jpg'
      ],
      client: 'Webデザインスクール マーケティング課題用',
      year: '2025年',
      role: 'ショップロゴデザイン・キャラクターイラスト',
      tools: 'CLIP STUDIO PAINT、Figma',
      overview: '宇宙(SORA)をイメージした都会のユニークなカフェSORAのためのロゴデザインを制作しました。マーケティング授業の課題として設定された架空の喫茶店のためのデザインです。',
      points: '『科学＋珈琲』というショップのユニークなコンセプトを、Z世代へ向け、ちょっと可愛くわかりやすく伝えるポップなロゴとイラストを作成しました。コーヒーを持った宇宙飛行士のステッカーデザインはWebサイトや名刺の他、マグカップやエコバッグなどのノベルティ展開にも使用する想定でデザインしています。',
      links: []
    }
  },
  {
    cardClasses: [],
    dataCategory: 'logo game',
    thumbSrc: 'images/logos/subarashiki-logo.jpg',
    thumbAlt: 'すばらしきこのせかい',
    slideshowImages: null,
    workCat: 'GAME / LOGO DESIGN',
    workTitle: 'すばらしきこのせかい',
    workNote: '2006年 / ロゴデザイン ピクセルアート',
    showOnIndex: true,
    indexOrder: 4,
    modal: {
      title: 'すばらしきこのせかい ゲームタイトルロゴ',
      category: 'GAME / LOGO DESIGN',
      images: [
        'images/stride_01.jpg',
        'images/stride_02.png',
        'images/stride_03.png',
      ],
      client: '株式会社スクウェア・エニックス',
      year: '2006年',
      role: 'デザイン',
      tools: 'Photoshop',
      overview: 'ニンテンドーDS向けRPG「すばらしきこのせかい」のメインロゴデザインを開発。現代の渋谷を舞台としたゲームの世界観に合わせてストリートファッションテイストで構成しました。ゲーム内のドット絵作成とキャラクター関連のドットデザイン監修も行いました。',
      points: '',
      links: [],
      copyright: '© 株式会社スクウェア・エニックス'
    }
  },
  {
    cardClasses: ['work-card-slideshow', 'work-card-tall'],
    dataCategory: 'video',
    thumbSrc: null,
    thumbAlt: null,
    slideshowImages: [
      { src: 'images/cafe-sora-cap01.png', alt: 'カフェSORA 1' },
      { src: 'images/cafe-sora-cap02.png', alt: 'カフェSORA 2' },
      { src: 'images/cafe-sora-cap03.png', alt: 'カフェSORA 3' }
    ],
    workCat: 'VIDEO / MARKETING',
    workTitle: 'カフェSORA Instagram向けPV',
    workNote: '2025年 / 構成・素材作成・作曲・編集',
    showOnIndex: true,
    indexOrder: 2,
    modal: {
      title: 'カフェSORA Instagram向けPV',
      category: 'VIDEO / MARKETING',
      videoUrl: 'MarketingMovies/CafeSORA_PV.mp4',
      client: 'Webデザインスクール マーケティング課題用',
      year: '2025年（約1週間）',
      role: '各種デザイン、素材作成、作曲、編集',
      tools: 'Canva、Figma、Grok、Suno',
      overview: '宇宙(SORA)をイメージした都会のユニークなカフェSORAのためのムービーを作成した。マーケティング授業の課題として設定された架空の喫茶店のInstagram向けPV。Z世代がメインターゲットのため、生成AIを使用したアニメーション表現でSORAの持つユニークな世界観が伝わるよう制作した。',
      points: '曲や詩に合わせてシーンを構成。青空、夕焼け、星空。それぞれを見上げる人々がカフェSORAに集うイメージをテンポよく構成した。',
      links: [
        { label: 'プレゼン資料PDF', url: 'MarketingPDF/CafeSORA_presentation01.pdf' }
      ]
    }
  },
  {
    cardClasses: ['work-card-tall'],
    dataCategory: 'video',
    thumbSrc: 'images/honokaya.png',
    thumbAlt: '米子ほのかや PV',
    slideshowImages: null,
    workCat: 'VIDEO / MARKETING',
    workTitle: '米子ほのかや PV',
    workNote: '2025年 / 古民家旅館プロモーション',
    showOnIndex: false,
    indexOrder: null,
    modal: {
      title: '米子ほのかや PV',
      category: 'VIDEO / MARKETING',
      videoUrl: 'MarketingMovies/HonokayaWebCM.mp4',
      client: 'Webデザインスクール マーケティング課題用',
      year: '2025年',
      role: '企画、デザイン、編集',
      tools: 'Canva、Figma、Grok、Suno',
      overview: '古民家旅館「米子ほのかや」のプロモーション動画。',
      points: '',
      links: [
        { label: '企画書PDF', url: 'MarketingPDF/HonokayaHotel_PDF_.pdf' }
      ]
    }
  },
  {
    cardClasses: ['work-card-tall'],
    dataCategory: 'video',
    thumbSrc: 'images/tachi.png',
    thumbAlt: 'StationeryTachi PV',
    slideshowImages: null,
    workCat: 'VIDEO / MARKETING',
    workTitle: 'StationeryTachi PV',
    workNote: '2025年 / 文具店プロモーション',
    showOnIndex: false,
    indexOrder: null,
    modal: {
      title: 'StationeryTachi PV',
      category: 'VIDEO / MARKETING',
      videoUrl: 'MarketingMovies/TachiWebCM.mp4',
      client: 'Webデザインスクール マーケティング課題用',
      year: '2025年',
      role: '企画、デザイン、編集',
      tools: 'Canva、Figma、Grok、Suno',
      overview: '立川の文具店「StationeryTachi」のプロモーション動画。',
      points: '',
      links: [
        { label: '企画書PDF', url: 'MarketingPDF/StationeryTACHI_PDF.pdf' }
      ]
    }
  },
  {
    cardClasses: [],
    dataCategory: 'game',
    thumbSrc: 'images/FF9_01.JPG',
    thumbAlt: 'ファイナルファンタジーIX',
    slideshowImages: null,
    workCat: 'GAME / CONCEPT ART',
    workTitle: 'ファイナルファンタジーIX',
    workNote: '1998-2000年 / 2Dセクションリーダー',
    showOnIndex: true,
    indexOrder: 5,
    modal: {
      title: 'ファイナルファンタジーIX 背景スケッチ',
      category: 'GAME / CONCEPT ART',
      images: [
        'images/FF9_01.JPG',
        'images/FF9_02.JPG',
        'images/FF9_03.JPG',
        'images/FF9_04.png',
        'images/ff9_05.jpg'
      ],
      client: '株式会社スクウェア',
      year: '1998〜2000年',
      role: '2Dセクションリーダー・背景スケッチ',
      tools: '鉛筆、Photoshop',
      overview: 'ファンタジーRPG「ファイナルファンタジーIX」のためのコンセプトアート。物語の最初の街、アレクサンドリアをメインに3D背景モデル作成のための手描きアートを作成した。',
      points: '昔のディズニーアニメのようなデフォルメの強い背景作成のために試行錯誤した。海外ウケもいいように多くのファンタジーアートを参照して、架空世界に生活感や温かみが感じられるよう仕上げた。海外出身のアーティストとともに海外拠点で働いたことも大きな収穫になった、自らの代表作といえる作品',
      links: [],
      copyright: '© 株式会社スクウェア'
    }
  },
  {
    cardClasses: [],
    dataCategory: 'game',
    thumbSrc: 'images/CT_01.jpg',
    thumbAlt: 'クロノ・トリガー',
    slideshowImages: null,
    workCat: 'GAME / PIXEL ART',
    workTitle: 'クロノ・トリガー',
    workNote: '1993年 / 背景デザイン・ドット絵',
    showOnIndex: false,
    indexOrder: null,
    modal: {
      title: 'クロノ・トリガー 背景デザイン',
      category: 'GAME / PIXEL ART',
      images: [
        'images/CT_01.jpg',
        'images/CT_02.jpg',
        'images/CT_03.png'
      ],
      client: '株式会社スクウェア',
      year: '1993年（2年間）',
      role: 'ドット絵制作',
      overview: 'スーパーファミコン向けRPG「クロノ・トリガー」のための背景デザイン。古代編をメインに室内マップ、ダンジョンマップ、シルバードなどを担当した。',
      points: '',
      links: [],
      copyright: '© 株式会社スクウェア'
    }
  },
  {
    cardClasses: [],
    dataCategory: 'game',
    thumbSrc: 'images/FFPR_01.png',
    thumbAlt: 'ピクセルリマスター FF3',
    slideshowImages: null,
    workCat: 'GAME / PIXEL ART',
    workTitle: 'ピクセルリマスター FF3',
    workNote: '2023年 / 背景デザイン・ドット絵',
    showOnIndex: false,
    indexOrder: null,
    modal: {
      title: 'ピクセルリマスター ファイナルファンタジーIII 背景デザイン',
      category: 'GAME / PIXEL ART',
      images: [
        'images/FFPR_01.png',
        'images/FFPR_02.png',
        'images/FFPR_03.png',
        'images/FFPR04.png'
      ],
      client: '株式会社スクウェア・エニックス',
      year: '2023年（6ヶ月）',
      role: 'ドット絵制作',
      overview: 'リメイク版「ファイナルファンタジーIII」のための背景デザイン。城、船、飛空艇やバトル背景、イベント背景などを担当した。',
      points: 'オリジナルのファミコン版ドットを比率や構成を変えずタッチを現代的にリファイン。ファミコン版のデザイナーのデザイン意図を汲んでスーパーファミコン後期のテイストで再現する、という考古学的なアプローチの仕事でした。',
      links: [],
      copyright: '© 株式会社スクウェア・エニックス'
    }
  }
];
