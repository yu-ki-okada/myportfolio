let mySwiper = new Swiper('.swiper-container', {
  
  // 以下はオプション設定

  //ページネーション表示の設定
  pagination: { 
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
  
  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },
  
  spaceBetween: 56,// 間隔を56pxに設定
    
  slidesPerView: 'auto',// 自動で表示枚数を設定

  centeredSlides:true,// 現在のスライドを中央表示
  
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3,// 3枚表示
    },
    // 992px以上の場合
    992: {
      centeredSlides:true,// 現在のスライドを中央表示

      slidesPerView: 'auto',// 画面幅が広がるごとに表示数を増やす
 
    }
  },
  

  
  
  loop: true, //最後に達したら先頭に戻る
  
  // 自動で動かす
  autoplay: {
	  delay: 5000,//動く間隔（5000ms＝5秒）
	  disableOnInteraction: false,//ユーザーがスライダーを操作した後も自動再生し続ける
  },
});

// ハンバーガーメニューをクリックするとメニューが出てくる
$(function() {
  $('#btn__js').on('click' , function() {
    $('.btn__line').toggleClass('open');
    $('.global-nav').toggleClass('open');
  });
});

// 出てきたメニューをクリックするとハンバーガーメニューに戻る
$(function() {
  $('#global-nav a').on('click' , function() {
    $('.btn__line').removeClass('open');
    $('.global-nav').removeClass('open');
  });
});

// ハイパーリンクの場所へスクロールする
$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top-94;//idの上部の距離からHeaderの高さを引いた値を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

// アコーディオンメニュー
$(function () {
  $('.accordion .accordion__child:first-of-type').css('display' , 'block');
  $('.accordion__parent').on('click' , function () {
    $(this).next().slideToggle();
  });
});

// スマホ表示以外で要素をふわっと表示する
AOS.init({
  disable: function () {
    return window.innerWidth < 767;
  }
});