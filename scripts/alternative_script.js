// Img pasikeitimas scrollinant

var setImg = function() {
  $('.moveable').each(function() {
     $(this).css('transform', "translateY(" + ($('.default').offset().top - $(this).closest('.section').offset().top) + "px)"
     );
   });

   console.log("frame");

   scrollas(setImg);
 };

 var scrollas = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/120) };
  
//  $(document).scroll(function() {
//    setImg();
//  });


  
 setImg();

 //Smooth scroll

 $(document).ready(function(){
  $(".right-menu a").on('click', function(event) {

    $(".right-menu .right-button").removeClass("active");
    $(this).addClass("active");

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

//Smooth scroll funkcija + active klasė right menu

  
/*    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
      $target = $(target);
      $('html, .scroll').stop().animate({
          'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });  */


/*  function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.right-menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.right-menu a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}    */

//Smooth scroll funkcija

/* $(document).ready(function(){
  $(".right-menu a").on('click', function(event) {
    $(".right-menu .right-button").removeClass("active");
    $(this).addClass("active");
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, .scroll').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});
$(document).ready(function(){
  $(".top-menu a").on('click', function(event) {
    $(".top-menu .top-button").removeClass("top-menu-active");
    $(this).addClass("top-menu-active");
  }); */

// Active class top menu

    $(document).ready(function() {
      $(".top-menu a").on("click", function() {
          $(this).toggleClass("active");
      });
  });

 // Garsas top menu

  function play(element){
   var audio = document.getElementById(element);
   if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  } 
};

 // Garsas left menu

 function playOnce(element){
  var audio = document.getElementById(element);
   audio.play(); 
}; 



