$(document).ready(function(){
    "use strict";
    //meanmenu
    $('#navbar nav').meanmenu();
    // ---- Slider Area Owl Carousel
    if ($(".slider-area").length) {
        $(".slider-area").owlCarousel({
          items: 1,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          loop: true,
          margin: 0,
          nav: false,
          singleItem: true,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 6000,
        });
      }
      // iso tope
    $('.project-list').isotope();

    $('.project-titles li').on('click',function(){
      $('.project-titles li').removeClass('active');
      $(this).addClass('active');
      // $('.project-titles li').removeClass('underline');
      // $(this).addClass('underline');
      var selector = $(this).attr('data-filter');
      $('.project-list').isotope({
        filter:selector
      });
    });

    // Sticky area js
    $(".sticky-area").sticky({
      topspacing:0,
    })

    // SCROLLTO THE TOP

    // Show or hide the Bottom to Top button
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 1000) {
        $(".scroll-top").fadeIn(100);
      } else {
        $(".scroll-top").fadeOut(100);
      }
    });

    // Animate the scroll to top
    $(".scroll-top").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        200
      );
    });

    // Aos plugin 
    AOS.init({
      duraion: 1000,
    });

    // preloader js 
    preloader();
    function preloader(){
      if ($("#preloader").length){
        $(window).on("load",function(){
          $("#preloader").fadeOut();
          $("#preloader").fadeOut("slow");
        });
      }
    }
});
