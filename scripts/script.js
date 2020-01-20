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


// Img keitimas scrollinant


if (top > sections[1].offsetTop) { 

  document.getElementById("img").style.visibility = "hidden";

}  else {
  document.getElementById("img").style.visibility = "visible";
}

if (top > sections[2].offsetTop) { 

  document.getElementById("img2").style.visibility = "hidden";

} else {
  document.getElementById("img2").style.visibility = "visible";
}

if (top > sections[3].offsetTop) { 

  document.getElementById("img3").style.visibility = "hidden";

}  else {
  document.getElementById("img3").style.visibility = "visible";
}



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


$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  $('a[href^="#"]').on('click', function (e) {
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
  });
});

function onScroll(event){
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
}

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

 //Print button

var printer = document.getElementById("print");

function printPage() {
  window.print();
}
printer.addEventListener("click", printPage);

 //Send button

 function myFunction() {
  document.getElementById("alert2").style.display = "block";
    
}