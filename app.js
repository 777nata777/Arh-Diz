$(document).ready(function(){

    /*Slider*/
    $("[data-slider]").slick({
    infinity: true, /*бесконечный*/
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  });

  /* Number */
  


  $(".slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide) 
    $(".countsSlides span").text(currentSlide + 1 + '/6');
  });

})
  