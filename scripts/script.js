
// var scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };

window.onscroll = function () {

  loop();
}

lastSection = false;

function loop() {   // scroll funkcija

  var top = window.pageYOffset; // atstumas px nuo lango viršaus vertikaliai

  console.log("scroll pozicija", top);

  var sections = document.querySelectorAll(".section");
  var replaceContainer = document.querySelectorAll(".kt-container");
  var replaceItem = document.querySelectorAll(".kintamasis");

  if (replaceItem.length > 0) {

    // console.log(replaceContainer[0].getBoundingClientRect().top);
    // console.log(parseInt(replaceContainer[0].getBoundingClientRect().top));

    // console.log("replaceItemTop", parseInt(replaceContainer[0].getBoundingClientRect().top));

    replaceItemTop = parseInt(replaceContainer[0].getBoundingClientRect().top); //konteinerio viršus nuo naršyklės lango viršaus

    //console.log("replaceItemHeight", replaceItem[0].offsetHeight);

    replaceItemHeight = replaceItem[0].offsetHeight; // visas aukštis (su padding ir border)

    // console.log("replaceItemBottom", replaceItemTop + replaceItemHeight);

    replaceItemBottom = replaceItemTop + replaceItemHeight;
  }

  var sectionTop;
  var sectionBottom;
  var currentSection;

  sections.forEach(function (el, i) { // kiekvienam iš .section elementų atskirai leidžiame šitą funkciją

    console.log("elemento pozicija", el.offsetTop);

    sectionTop = parseInt(el.getBoundingClientRect().top);
    sectionBottom = parseInt(el.getBoundingClientRect().bottom);

    // console.log("Section" + i, sectionTop);
    // console.log("Section" + i, sectionBottom);

    console.log("sections[1].offsetTop", sections[1].offsetTop);



    if (top > sections[1].offsetTop) { // Jog papildomai reikia padaryti kad nuotrauka ir atsikeistų paskrolinus atgal į viršų

      //console.log(replaceItem[0].querySelector("img"));

      replaceItem[0].querySelector("img").src = "images/lotos_3.png";
    }

    if (top > sections[2].offsetTop) { // Jog papildomai reikia padaryti kad nuotrauka ir atsikeistų paskrolinus atgal į viršų

      console.log(replaceItem[0].querySelector("img"));

      replaceItem[1].querySelector("img").src = "images/lotos_4.png";
    }

/*     if (top > sections[3].offsetTop) { 

      console.log(replaceItem[0].querySelector("img"));

      replaceItem[2].querySelector("img").src = "images/lotos_5.png";
    } */



    if ((sectionTop <= replaceItemBottom) && (sectionBottom > replaceItemTop)) { // aktyvus div.section

      currentSection = el.classList.contains('section-bg'); //ar div.section turi klasę

      if (currentSection) {  //jei turi
        replaceContainer[0].classList.remove('kintamasis--reverse'); // -klasė
      } else {
        replaceContainer[0].classList.add('kintamasis--reverse'); // +klasė
      }
    }

    if ((replaceItemTop < sectionTop) && (sectionTop <= replaceItemBottom)) { // jei img "perlipa" foną

      // console.log("currentSection", currentSection);
      // console.log("lastSection", lastSection);

      if (currentSection != lastSection) { // animuoti jei keičiasi fonas
        document.documentElement.style.setProperty('--replace-offset', 100 / replaceItemHeight * parseInt(sectionTop - replaceItemTop) + '%'); // Formulė reikalauja korekcijos
      }
    }
    if (replaceItemTop >= sectionTop) { // kai "perlipa"
      document.documentElement.style.setProperty('--replace-offset', 0 + '%');
      lastSection = currentSection;
    }
  });
}

loop();

window.onresize = function (event) {
  loop();
}; 


//smooth scroll
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

$(document).ready(function(){
  $(".top-menu a").on('click', function(event) {
    $(".top-menu .top-button").removeClass("top-menu-active");
    $(this).addClass("top-menu-active");

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