
$(function() {
  var resizeTimeout;
  frame();
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
