$(document).ready(function(){

    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      // slidesOffsetAfter: 100,

      loop: true,
      keyboard: true,
      initialSlide: 0,
      slidesPerView: 'auto',
      loopedSlides: 6,



    // If we need pagination
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {

      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    });




  $( ".menu-button" ).click(function() {
        $( "html" ).toggleClass( "nav-open" );
    });


});



