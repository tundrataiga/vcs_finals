window.onscroll = function () {

  loop();
}

lastSection = false;

function loop() {   // scroll funkcija

  // pozicijų išmatavimas:

  var top = window.pageYOffset; // atstumas px nuo lango viršaus vertikaliai (scroll pozicija)
  var sections = document.querySelectorAll(".section"); // skirtingi fonai
  var replaceContainer = document.querySelectorAll(".kt-container"); //konteineris, kuriame keičiasi img
  var replaceItem = document.querySelectorAll(".kintamasis"); // 2 div su img

  if (replaceItem.length > 0) { //.length = 2

    replaceItemTop = parseInt(replaceContainer[0].getBoundingClientRect().top); //var = konteinerio viršus nuo naršyklės lango viršaus

    replaceItemHeight = replaceItem[0].offsetHeight; // div su img visas aukštis (su padding ir border)

    replaceItemBottom = replaceItemTop + replaceItemHeight; // bottom pozicija = div viršus + visas aukštis
  }

  var sectionTop;
  var sectionBottom;
  var currentSection;

  sections.forEach(function (el, i) { // kiekvienam iš .section elementų leidžiame funkciją sužinoti top ir bottom poziciją

    sectionTop = parseInt(el.getBoundingClientRect().top);
    sectionBottom = parseInt(el.getBoundingClientRect().bottom);

/*     var section1 = $('.section1').offset().top;
    var section2 = $('.section2').offset().top;
    var section3 = $('.section3').offset().top;
    var section4 = $('.section4').offset().top;
    var section5 = $('.section5').offset().top;
 
    var scrollOffset = 0;
 
    $(window).scroll(function() {  
  
    var scroll = $(window).scrollTop() + scrollOffset;  
  
 
    if ( scroll < 500 ) {
    $('.lotos img').attr('src', 'images/lotos.png');
    }
  
    if ( scroll > section2 ) {
    $('.lotos img').attr('src', 'images/lotos_2.png');
    }
 
    if ( scroll > section3 ) {
    $('.lotos img').attr('src', 'images/lotos_3.png');
    }
 
    if ( scroll > section4 ) {
    $('.lotos img').attr('src', 'images/lotos_4.png');

    if ( scroll > section5 ) {
    $('.lotos img').attr('src', 'images/lotos_5.png');
    }
    }
    }); */


/*      if (top > sections[1].offsetTop) { // Papildomai reikia padaryti kad nuotrauka ir atsikeistų paskrolinus atgal į viršų

      replaceItem[0].querySelector("img").src = "images/lotos_3.png";

    }  
    
    

    if (top > sections[2].offsetTop) {

      console.log(replaceItem[0].querySelector("img"));

      replaceItem[1].querySelector("img").src = "images/lotos_4.png";
    }  */

/*     if (top > sections[3].offsetTop) { 

      console.log(replaceItem[0].querySelector("img"));

      replaceItem[2].querySelector("img").src = "images/lotos_5.png";
    } */



    if ((sectionTop <= replaceItemBottom) && (sectionBottom > replaceItemTop)) { // jei div su img "neperlipa" fono ribų, t.y. yra fono viduj

      currentSection = el.classList.contains('section-bg'); //patikrinam, ar div.section turi klasę

      if (currentSection) {  //jei turi
        replaceContainer[0].classList.remove('kintamasis--reverse'); // -klasė
      } else {
        replaceContainer[0].classList.add('kintamasis--reverse'); // +klasė
      }
    }

    if ((replaceItemTop < sectionTop) && (sectionTop <= replaceItemBottom)) { // jei img "perlipa" foną

      if (currentSection != lastSection) { // animuoti jei fonas keičiasi į foną su .section-bg klase
        document.documentElement.style.setProperty('--replace-offset', 100 / replaceItemHeight * parseInt(sectionTop - replaceItemTop) + '%'); // Formulė reikalauja korekcijos
      }
    }
    if (replaceItemTop >= sectionTop) { // jei img viršus yra aukščiau už fono viršų
      document.documentElement.style.setProperty('--replace-offset', 0 + '%');
      lastSection = currentSection;
    }
  });
}



loop();

window.onresize = function (event) {
  loop();
}; 


//Smooth scroll funkcija + active klasė right menu

$(document).ready(function(){
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

//Active class top menu

    $(document).ready(function() {
      $(".top-menu a").on("click", function() {
          $(this).toggleClass("active");
      });
  });

 //Garsas top menu

  function play(element){
   var audio = document.getElementById(element);
   if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  } 
};

 //Garsas left menu

 function playOnce(element){
  var audio = document.getElementById(element);
   audio.play(); 
}; 



