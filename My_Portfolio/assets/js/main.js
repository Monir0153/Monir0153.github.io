$(document).ready(function ($) {
  //meanmenu
  $('#navbar nav').meanmenu();
  // Active menu li a
  // $('.main-menu li a').on('click',function(){
  //   $('.main-menu li a').removeClass('active');
  //   $(this).addClass('active');
  // })
  // AOS Animation
  
  // ---- Slider Area Owl Carousel
  
  // Type Js
  var typed = new Typed(".element",{
    strings: ["Mohammad Monirul Islam", "a Web Designer", "a Student"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop: true,
    loopCount: Infinity,
    startDelay:1000
  });
  
  // jQuery counterUp
  // Progress Bar
  // waypoint
  var waypoint = new Waypoint({
    element: document.getElementById('progress-id'),
    handler: function() {
      var p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style", "width:95%;transition:2.5s all");
      p[1].setAttribute("style", "width:95%;transition:2.5s all");
      p[2].setAttribute("style", "width:80%;transition:2.1s all");
      p[3].setAttribute("style", "width:99%;transition:2.9s all");
    },
    offset:'90%'
  })
  
  /*Function Calls*/
  preloader();
  // Preloader JS
  function preloader() {
    if ($("#preloader").length) {
      $(window).on("load", function () {
        $("#preloader").fadeOut();
        $("#preloader").delay(50).fadeOut("slow");
      });
    }
  }
  /*Iso Tope */
    $('.project-list').isotope();

    $('.project-title li').on('click',function(){
      $('.project-title li').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $('.project-list').isotope({
        filter:selector
      });
    });
    
    //alert(selector);
   
  // project Filter
  
  //jQuery Sticky Area
  $(".sticky-area").sticky({
    topspacing: 0,
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
  
  /*$(".meanmenu-reveal").on("click", function () {
    $(".sticky-wrapper").css("height", "0");
    var color = $(".sticky-wrapper").css("height");
    console.log(color);
  });*/
  
});
