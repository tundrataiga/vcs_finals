
// Detect request animation frame
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60) };
var lastPosition = -1; 
 
// The Scroll Function
function loop(){
  var top = window.pageYOffset;
  // my variables to calculate

  var sections = document.querySelectorAll('.section');
  var replaceContainer = document.querySelectorAll('.kt-container');
  var replaceItem = document.querySelectorAll('.kintamasis');

   if (replaceItem.length > 0) {
    // get top position of item from container, because image might not have loaded
    replaceItemTop = parseInt(replaceContainer[0].getBoundingClientRect().top);
    replaceItemHeight = replaceItem[0].offsetHeight;
    replaceItemBottom = replaceItemTop + replaceItemHeight;
  }  

  var sectionTop = -1;
  var sectionBottom = -1;
  var currentSection = -1;
  
  // Fire when needed
    if (lastPosition == window.pageYOffset) {
    scroll(loop);
    return false;
  } else {
    lastPosition = window.pageYOffset;  

  // Your Function
   Array.prototype.forEach.call(sections, function(el, i){
    sectionTop = parseInt(el.getBoundingClientRect().top);
    sectionBottom = parseInt(el.getBoundingClientRect().bottom); 

    // active section
    if ( (sectionTop <= replaceItemBottom) && (sectionBottom > replaceItemTop)) {
      // check if current section has bg
      currentSection = el.classList.contains('section-bg');

      // switch class depending on background image
      if ( currentSection ) { 
        replaceContainer[0].classList.remove('kintamasis--reverse');
      } else {
        replaceContainer[0].classList.add('kintamasis--reverse')
      
      }
    }

        // src
      /*   if (el.classList.contains('section-3')) {
          var image = document.getElementsById("img");
          image.src = "images/lotos_2.png";
        } */

    // end active section

    // if active Section hits replace area
    if ( (replaceItemTop < sectionTop) && ( sectionTop <= replaceItemBottom) ) {
      // animate only, if section background changed
      if (currentSection != lastSection)  {
        document.documentElement.style.setProperty('--replace-offset', 100 / replaceItemHeight * parseInt(sectionTop - replaceItemTop) + '%');
      }
    }
    // end active section in replace area

    // if section above replace area
    if ( replaceItemTop >= sectionTop ) {
      // set offset to 0 if you scroll too fast
      document.documentElement.style.setProperty('--replace-offset', 0 + '%');
      // set last section to current section
      lastSection = currentSection;
    }

  }); 

}

// Recall the loop
scroll( loop )
}

// Call the loop for the first time
loop();

window.onresize = function(event) {
  loop();
};  