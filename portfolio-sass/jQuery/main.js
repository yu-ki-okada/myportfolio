// スクロールするとヘッダーを変更
$(window).scroll(function() {
    if($(window).scrollTop() > 10) {
        $('#header-top').addClass('scroll-nav'),
        $('#header-top .header__img').attr('src', './img/sub-header-logo.jpg');
    } else {
        $('#header-top').removeClass('scroll-nav'),
        $('#header-top .header__img').attr('src', './img/top-header-logo.png');
    };
});

// ファーストビュー画像を切り替える（スワイパー使用）
let mySwiper = new Swiper('.swiper-container', {
    // 以下はオプション設定
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
        delay: 4000, //４秒後に次のスライドへ
        disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
    allowTouchMove: false,//マウスでのスワイプを禁止
});

// 宿泊予約ボタンクリックでモーダルを開く
$(function () {
    $('#js-modal-open, .btn__reserve').click(function () {
        $('body').css('opacity','0.7'),
        $('.overall__title').css('display','none'),
        $('.header-top').css('display','none'),
        $('.header-room').css('display','none'),
        $('#overlay, #js-modal').fadeIn();
        return false;      
    });
    // ×ボタン、背景クリックでモーダルを閉じる
    $('#js-close, #overlay').click(function () {
        $('body').css('opacity',''),
        $('.overall__title').css('display',''),
        $('.header-top').css('display',''),
        $('.header-room').css('display',''),
        $('#overlay, #js-modal').fadeOut();
        return false;
    });
});

// モーダルの日時選択欄をFlatPickrと連動する
flatpickr("#flatpickr", {
    // オプション：日本語化
    locale:"ja",
    
    // オプション：最少日時指定（今日以後しか選択できない）
    minDate:"today",
    
    // オプション：選択日数（いつからいつまで期間で選択）
    mode:"range"
});

// お知らせエリアのタブ表示
$(function() {

    // ➀タブをクリックしたら発動
    $('.notice__list .notice__item').click(function() {
        // ➁クリックされたタブの順番を変数に格納
        let index = $('.notice__list .notice__item').index(this);
        // ➂クリック済みタブのデザインを設定したCSSのクラスを一旦削除
        $('.notice__list .notice__item').removeClass('active');
        // ➃クリックされたタブにクリック済みデザインを適用する
        $(this).addClass('active');
        // ➄コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
        $('.notice .notice__inner').removeClass('show').eq(index).addClass('show')
        // もし2個目のnotice__itemが選ばれたとき（0,1で2個目は1)、CSSを変更して背景画像を変更する
        if (index == 1) {
            $('.notice__wrapper:nth-of-type(1) .notice-article:nth-of-type(2n-1)')
            .css({'background': 'url(img/news02.jpg) no-repeat 10px 15px','background-size': '',
            'background-color': '#F6F6F6'});
            $('.notice__wrapper:nth-of-type(1) .notice-article:nth-of-type(2n)')
            .css({'background': 'url(img/news01.jpg) no-repeat 10px 15px','background-size': '',
            'background-color': '#F6F6F6'});
            $('.notice__wrapper:nth-of-type(2) .notice-article:nth-of-type(2n-1)')
            .css({'background': 'url(img/news01.jpg) no-repeat 10px 15px','background-size': '',
            'background-color': '#F6F6F6'});
            $('.notice__wrapper:nth-of-type(2) .notice-article:nth-of-type(2n)')
            .css({'background': 'url(img/news02.jpg) no-repeat 10px 15px','background-size': '',
            'background-color': '#F6F6F6'});

        // そうでないとき（1個目が選ばれたとき）、CSSの変更をしない
        } else {
            $('.notice__wrapper:nth-of-type(1) .notice-article:nth-of-type(2n-1)')
            .css({'background': '','background-size': '',
            'background-color': ''});
            $('.notice__wrapper:nth-of-type(1) .notice-article:nth-of-type(2n)')
            .css({'background': '','background-size': '',
            'background-color': ''});
            $('.notice__wrapper:nth-of-type(2) .notice-article:nth-of-type(2n-1)')
            .css({'background': '','background-size': '',
            'background-color': ''});
            $('.notice__wrapper:nth-of-type(2) .notice-article:nth-of-type(2n)')
            .css({'background': '','background-size': '',
            'background-color': ''});
        }
    });
});
// ハンバーガーメニューをクリックするとメニューが出てくる(toggleClassでopenclassを付け外し)
$(function() {
    $('#btn__js').on('click' , function() {
      $('.btn__line').toggleClass('open'),
      $('.global-nav').toggleClass('open');
    });
  });
  // 要素をふわっと表示する
AOS.init();