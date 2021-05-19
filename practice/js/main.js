'use strict'

$(function(){
  $(".dnSlide-main").dnSlide({
    precentWidth: "30%"
  });

  /* =================== */
  /*        wipein       */
  /* =================== */
  // addclass = クラスを追加する
  // 引数に追加したいクラス名を記述する

  // wipeクラスに対してinクラスを追加する
$('.wipe').addClass('in');




  /* =================== */
  /*     back-to-top     */
  /* =================== */

const backToTop = $('#back-to-top')

  // ウインドーをスクロールした時実行 （スクロールイベント）
$(window).scroll(function () {
  // スクロールした量（位置）
  let scrollValue = $(this).scrollTop();

  // console.log(scrollValue);

  // 画面の高さ
   const windowHeight = $(this).height();
   // console.log(windowHeight)

   // scrollValueの値がwindowHeightの値を超えたら、
   if (scrollValue > windowHeight) {
     backToTop .addClass('in');

   } else {
     // back-to-topにinクラスを削除
     backToTop .removeClass('in');
   }
});

// #back-to-topをクリックした時
backToTop.click(function () {
  // animate(): アニメーションを実行できるメソッド
  // ブラウザによって挙動が異なるので、htmlとbody両方に対して実行する
  $('html, body').animate({
    scrollTop: 0
  }, 600);
});


  /* =================== */
  /*   	  hamburger      */
  /* =================== */

  // #humbergerをクリックした時に（クリックイベント）
  $('#hamburger').click(function (){
    // #hamburgerにactiveクラスが付いていなかったら追加して、ついていたら、activeクラスを削除する
    $(this) .toggleClass('active');

    // ナビゲーションを表示する
  $('.header-nav').fadeToggle();
    // スクロールできなくする
    $('body').toggleClass('hidden');
  });





  /* =================== */
  /*    	  header       */
  /* =================== */
$(window).scroll(function (){
  // スクロール量（位置）を取得
  let scrollValue = $(this).scrollTop();
  // 画面の高さを取得
  let windowHeight = $(this).height();
  // scrollValueの高さがwindowHeightを超えたら、、、（true）
  if (scrollValue > windowHeight) {
    $('header').addClass('fix');
  } else {
    // headerのfixクラスを削除する
    $('header').removeClass('fix');
  }
});




  /* =================== */
  /*   	  slideshow      */
  /* =================== */

  let nowPage = 0; // 現在の画像
  let nextPage = 1; // 次の画像
  // #slideshowの中にwるimgを取得
  const slides = $('#slideshow img');
  // imgの数
  const slideLength = slides.length; // 4
  const fadeTime = 1500; // 1.5s
  const showTime = 3000; // 3s

  // 画像を非表示
  slides.hide();
  // 一つ目のimgを取得する
  slides.eq(0).show();
  // nextPageにnowPageの次の番号を代入

  const SlideShow = () => {
    nextPage = (nowPage + 1) % slideLength; //１を４で破れないので１が代入される ０、１、２、３を繰り返す処理
    slides.eq(nowPage).fadeOut(fadeTime);//現在表示している画像をフェードアウトする
    slides.eq(nextPage).fadeIn(fadeTime);//次の画像をフェードイン（表示）する
    nowPage = nextPage;//nowPage:１ nextPage:1
    //nowPage:2 nextPage:2
  };

  setInterval(SlideShow, showTime);
// // setIntervalのチュートリアル
//
//   let count = 0;
//
//   countを+1する関数
//   const Counter = () => {
//     console.log(count);
//     count++;
//   };
//
//   // setInterval: 指定した関数を指定した時間事に繰り返し実行する
//   // setInterval(関数,時間);
//   setInterval(Counter, 1000);




  /* =================== */
  /*   	   slidein       */
  /* =================== */

  // $(window).scroll(function () {
  //   //スクロール量（位置）を取得
  //   let scrollValue = $(this).scrollTop();
  //   let triggerPoiint = $('.slide-trigger').offset().top - $(window).height() /2;
  //
  //
  //   if (scrollValue > triggerPoiint) {
  //      $('.slide').addClass('in');
  //   }
  // });

  // 応用： 複数要素に対してslideinを実行する
  $(window).scroll(function () {
    // スクロール量（位置）を取得
    let scrollValue = $(this).scrollTop();
    $('.slide-trigger').each(function() {
      let triggerPoint = $(this).offset().top - $(window).height() /2;
      if (scrollValue > triggerPoint) {
        $(this).find('.slide').addClass('in');
      }
    });
  });


  /* =================== */
  /*    carousel panel   */
  /* =================== */

  const carouselWidth = $("#carousel li").width();
  const length = $(".carousel-item").length;
  const innerWidth = carouselWidth * length;
  // アニメーション遅延時間0.4s
  const time = 400;
  // ul
  const carouselinner = $("#carousel");
  const prev = $("#prev");
  const next = $("#next");

  // 現在の記事の番号(c→current)
  let c = 1;

// nextボタンをクリックした時の処理
  next.click(function(){
    if(c == length){
      // ここに処理が入ります
      carouselinner.stop().animate({
      left: 0
    },time);
    c = 1;
    } else {
      carouselinner.stop().animate({
        // -1*370 = -370がleftに代入
        // −２*３７０ = -740が
        left: -c * carouselWidth
      },time);
      c++;
      // 1→２
      // ２→３
      // ３→４
      // ４→５
      // ５→６
      // ６→７
    }
  });

  // prevをクリックした時の処理
  prev.click(function() {
    if (c == 1 ) {
      carouselinner.stop().animate({
        left: -innerWidth + carouselWidth
      },time);
      c = length;
    } else {
      carouselinner.stop().animate({
        // -(7 -2) *370 = -1850
        // -(6 -2) *370 = -1480
        // -(5 -2) *370 = -1110
        // -(4 -2) *370 = -740
        // -(3 -2) *370 = -370
        // -(2 -2) *370 = -0


        left: -(c - 2) * carouselWidth
      },time);
      c--;
    }
  });




  /* =================== */
  /*       parallax      */
  /* =================== */

  $(window).scroll(function (){
    // スクロール量
    let value = -$(this).scrollTop() / 60;

    $('.parallax').css({
      transform: 'translateY('+ value +'%)'
    });
  });


  // これは試作です


  $('.img-container').waypoint(function(direction){
  var activePoint = $(this.element);
  //scroll down
  if (direction === 'down') {
      activePoint.addClass('active');
  }
  else{
      activePoint.removeClass('active');
  }
},{offset : '70%'});

$('.text-container').waypoint(function(direction){
  var activePoint = $(this.element);
  //scroll down
  if (direction === 'down') {
      activePoint.addClass('active');
  }
  else{
      activePoint.removeClass('active');
  }
},{offset : '70%'});





});
