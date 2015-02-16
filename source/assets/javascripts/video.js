$(function() {
  if (!isMobile){
    var iframe1 = $('#video1')[0];
    var player1 = $f(iframe1);
    var iframe2 = $('#video2')[0];
    var player2 = $f(iframe2);
    var playing = false;
    var $gmunk_play_but = $('.gmunk_play_but'),
    $gmunk_pause_but = $('.gmunk_pause_but');
    var $gmunk_video_container = $('.gmunk_video_container');
    var $gmunk_duo = $('.gmunk_duo');
    var $window = $(window);

    $(window).mousedown(function(){
        $('#video1').css('opacity', 1);
    });
    $(window).mouseup(function(){
        $('#video1').css('opacity', 0);
    });



    $gmunk_play_but.click(function(){
        playing = true;
        $gmunk_play_but.css('opacity',0);
        player1.api('setVolume','0.5');
        player2.api('setVolume','0');
        player1.api('play');
        setTimeout(function() {
            player2.api('play');
        }, 380);
        setTimeout(function() {
            $gmunk_pause_but.css('opacity',1);
        }, 500);
        // gmunk_pause_but
    });

    $gmunk_pause_but.click(function() {
        if (playing){
            player1.api('pause');
            player2.api('pause');
            playing = false
        } else {
            player1.api('play');
            player2.api('play');
            playing = true;
        }

    });

    // gmunk_pause_but

    function resize_gmunk_duo(){
        var $lol_block = {};
        $lol_block.selector = $('.lol_block');
        $lol_block.width = $window.width();

        $gmunk_video_container.css({
           'width' : $lol_block.width,
           'height' : ($lol_block.width/16)*9
        });
        $gmunk_duo.css({
           'width' : $lol_block.width,
           'height' : ($lol_block.width/16)*9+200
        });
        $('.lol_block').css({
           'width' : $lol_block.width,
           'height' : ($lol_block.width/16)*9
        });


    };
    resize_gmunk_duo();
    var resizeTimeout,
        $window = $(window),
        windowwidth = $window.width();
    $window.resize(function() {
      clearTimeout(resizeTimeout);
      windowwidth = $window.width();
      resizeTimeout = setTimeout( resize_gmunk_duo(), 500);
    });
  }
  else{
    $('.lol_block').addClass('displayNoneInMobile');
    $('.notFOrMobile').addClass('displayNoneInMobile');
    $('.forMobile').removeClass('noneOnDesctop');
  }

});
