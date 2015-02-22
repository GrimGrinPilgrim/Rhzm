
$(function() {
  var resizeTimeout;
  frame();
  
  
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        spaceBetween: 30
    });
    var swiper2 = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination2',
        paginationClickable: '.swiper-pagination2',
        spaceBetween: 30
    });
    
});
var resizeTimeout;
  function frame(){
    $('.frame').each(function(){
      var $frame = $(this),
          parentWidth = $frame.parent().width();

      $frame.css({
        'width' : parentWidth + 'px',
        'height' : parseInt(parentWidth)/16*9 + 'px'
      })
    });
  }

  $(window).resize(function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout( frame(), 500);
  });
