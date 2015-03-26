$(document).ready(function() {
  $('#home #slide-show').height($(window).height());

  $("#home #slide-show").owlCarousel({
      autoPlay: 3500,
      navigation: true,
      goToFirst: true,
      goToFirstSpeed: 2000,
      slideSpeed: 100,
      pagination: true,
      transitionStyle: "fade",
      singleItem: true,
      navigationText: false,
    afterInit: function() {
                $('#home #slide-show').height($(window).height());
                    $('#home #slide-show .item').height($(window).height());
                    $('#home #slide-show .item img').height($(window).height());
                
                $('#home #slide-show .item img').width('auto');
                
                var left = ((($('#home #slide-show').width() - $('#home #slide-show .item img').width())/2));
                if (left<0) {
                    $('#home #slide-show .item img').css('top', '0px' );

                    $('#home #slide-show .item img').css('left', left + 'px' );
                } else {
                    $('#home #slide-show .item img').css('left', '0px' );
                    $('#home #slide-show .item img').height('auto');
                    $('#home #slide-show .item img').width($(window).width());
                    $('#home #slide-show .item img').css('top', ((($('#home #slide-show').height() - $('#home #slide-show .item img').height())/2)) + 'px' );
                }

            },
            afterUpdate: function() {
                $('#home #slide-show').height($(window).height());
               
                    $('#home #slide-show .item').height($(window).height());
                    $('#home #slide-show .item img').height($(window).height());
            
                $('#home #slide-show .item img').width('auto');
                var left = ((($('#home #slide-show').width() - $('#home #slide-show .item img').width())/2));
                if (left<0) {
                    $('#home #slide-show .item img').css('top', '0px' );
                    $('#home #slide-show .item img').css('left', left + 'px' );
                } else {
                    $('#home #slide-show .item img').css('left', '0px' );
                    $('#home #slide-show .item img').height('auto');
                    $('#home #slide-show .item img').width($(window).width());
                    $('#home #slide-show .item img').css('top', ((($('#home #slide-show').height() - $('#home #slide-show .item img').height())/2)) + 'px' );
                }
              }
  });
});

  $(document).ready(function(){
      $("#home #slide-show").height($(window).height());
      $("#home #slide-show .item img").height($(window).height());
          $(window).resize(function(){
              $("#home #slide-show").height($(window).height());
              $("#home #slide-show .item img").height($(window).height());
      });
  });
