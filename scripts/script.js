
// document.getElementById("img").style.backgroundColor = "#FFFFFF";

var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60) };
var lastPosition = -1; 
function loop(){   // scroll funkcija
  var top = window.pageYOffset; // atstumas px nuo lango viršaus vertikaliai
  
  var sections = document.querySelectorAll(".section");
  var replaceContainer = document.querySelectorAll(".kt-container");
  var replaceItem = document.querySelectorAll(".kintamasis");

   if (replaceItem.length > 0) {
    replaceItemTop = parseInt(replaceContainer[0].getBoundingClientRect().top); //konteinerio viršus
    replaceItemHeight = replaceItem[0].offsetHeight; // visas aukštis (su padding ir border)
    replaceItemBottom = replaceItemTop + replaceItemHeight;
  }  

  var sectionTop = -1;
  var sectionBottom = -1;
  var currentSection = -1;
  
    if (lastPosition == window.pageYOffset) {
    scroll(loop);
    return false;
  } else {
    lastPosition = window.pageYOffset;  

  
   Array.prototype.forEach.call(sections, function(el, i){  //naujos masyvo ypatybės
    sectionTop = parseInt(el.getBoundingClientRect().top);
    sectionBottom = parseInt(el.getBoundingClientRect().bottom); 

    if ( (sectionTop <= replaceItemBottom) && (sectionBottom > replaceItemTop)) { // aktyvus div.section
    
      currentSection = el.classList.contains('section-bg'); //ar div.section turi klasę

      if ( currentSection ) {  //jei turi
        replaceContainer[0].classList.remove('kintamasis--reverse'); // -klasė

      } else {
        replaceContainer[0].classList.add('kintamasis--reverse') // +klasė
      }
    }

    if ( (replaceItemTop < sectionTop) && ( sectionTop <= replaceItemBottom) ) { // jei img "perlipa" foną
      
      if (currentSection != lastSection)  { // animuoti jei keičiasi fonas
        document.documentElement.style.setProperty('--replace-offset', 100 / replaceItemHeight * parseInt(sectionTop - replaceItemTop) + '%');
      }
    }
     if ( replaceItemTop >= sectionTop ) { // kai "perlipa"
       document.documentElement.style.setProperty('--replace-offset', 0 + '%');
       lastSection = currentSection;
  }

  }); 

}

scroll( loop )
}

loop();

window.onresize = function(event) {
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

 //Garsas top menu

  function play(element){
   var audio = document.getElementById(element);
   if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  } 
};