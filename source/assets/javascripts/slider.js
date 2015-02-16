$(function() {
  $('.slider').each(function() {
    var RHZMslider = {
      slider : $(this),
      next : $(this).find('.slider-nav-next'),
      prev : $(this).find('.slider-nav-prev'),
      list : $(this).find('.slider-list'),
      items : $(this).find('.slider-item'),
      slide : $(this).find('.slider-item.is__active'),
      buttons: $(this).find('.buttons-line'),
      slideButtons: $(this).find('.control-buttons'),
      slideIllistration : $(this).find('.slide-illustration'),
      swipe : $(this).find('.swipe'),

      current : 0
    };

    for(var i=0; i<RHZMslider.items.length; i++)RHZMslider.buttons.append('<div class="button"><div class="buttonInner"></div></div>');

    RHZMslider.length = RHZMslider.items.length;
    RHZMslider.slideButtonsSize = function(){
        RHZMslider.slideButtons.css('margin-left', ($window.width() - RHZMslider.slideButtons.width())/2 -15 + 'px');
        RHZMslider.slideButtons.css('margin-top', (RHZMslider.slideIllistration.height() - RHZMslider.slideButtons.height())/2 + 'px' );
      }

    RHZMslider.animate = function(){
      if (RHZMslider.current > RHZMslider.items.length - 1) RHZMslider.current = 0;
      if (RHZMslider.current < 0) RHZMslider.current = RHZMslider.items.length -1;

      RHZMslider.button.filter('.button-active').removeClass('button-active');
      RHZMslider.button.eq(RHZMslider.current).addClass('button-active');

      RHZMslider.list.css('margin-left', - width * RHZMslider.current + 'px');
    }

    RHZMslider.button = $(this).find('.button');
    RHZMslider.button.filter(':first').addClass('button-active');

    RHZMslider.next.on('click', function() {
      RHZMslider.current++;
      RHZMslider.animate();
    });

    RHZMslider.prev.on('click', function() {
      RHZMslider.current--;
      RHZMslider.animate();
    });

    RHZMslider.button.on('click', function() {
      RHZMslider.current = $(this).index();
      RHZMslider.animate();
    });

    $window.resize(function() {
      width = $window.width();

      RHZMslider.items.width(width);
      RHZMslider.list.css({ 'margin-left': - width * RHZMslider.current });
      RHZMslider.slideButtonsSize();
    });

    RHZMslider.items.width(width);
    RHZMslider.slideButtonsSize();
    RHZMslider.animate();

    RHZMslider.swipe.swipe({
      swipeRight:function(){
        RHZMslider.current--;
        RHZMslider.animate();
      },
      swipeLeft:function(){
        RHZMslider.current++;
        RHZMslider.animate();
      }
    });
  });
});
