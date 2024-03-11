$(document).ready(function(){

    /*Slider*/
    $("[data-slider]").slick({
    infinity: true, /*бесконечный*/
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, /*включание автолистания слайда*/
    autoplaySpeed: 3000,
  });

  /* Number */
  


  $(".slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide) 
    $(".countsSlides span").text(currentSlide + 1 + '/6');
  });


  /* Menu icon */
  $("#menu-icon").on("click", function(event) { /**выбираем селекрот nav_toggle следим по клику по этому элементу */
    event.preventDefault(); /**убрали стандартное поведение кнопки */

    $(this).toggleClass("active"); /*дали класс active нашему бургеру*/
    $("#nav").toggleClass("active");/**при клике добавляем либо убираем класс active для меню */
   
    });


})
  