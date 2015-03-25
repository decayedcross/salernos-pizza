$(document).ready(function() {
  $("#slide-show").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      pagination: false,
      autoPlay: false,
      navigationText : false,
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
  });
});


 $(document).ready(function(){
    $("#home #slide-show").height($(window).height());
      $("#home #slide-show .item").height($(window).height());
          $(window).resize(function(){
             $("#home #slide-show").height($(window).height());
              $("#home #slide-show .item").height($(window).height());
      });
  });