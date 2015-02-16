// var $window = $(window),
// //     width = $window.width();
//     isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
//     resizeTimeout;

// $(function() {

// if(!isMobile){

//   var $scrollElem = $('.dirt'),
//       $scrollElem2 = $('.dirt3');
//   $window.scroll(function(e){
//     parallax();
//   });

//   function parallax(){
//     console.log(1);
//     var scrolled = $(window).scrollTop();
//       $scrollElem.css('top',-(scrolled/6)+'px');
//       $scrollElem2.css('top',-(scrolled/2)+'px');
//   }

//   $window.resize(function(){
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(parallax($window.height()), 100);
//   });

// }

// });
