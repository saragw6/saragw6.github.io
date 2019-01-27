$(document).ready(function(){
// Add smooth scrolling to all links
  $(".caret, svg > a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (!$.isEmptyObject(this.href.baseVal)) {
      smoothScroll('div' + this.href.baseVal);
    } else if (!$.isEmptyObject(this.hash)) {
      // Prevent default anchor click behavior

      smoothScroll(this.hash);

    } // End if
  });
});

function smoothScroll(target) {
    event.preventDefault();
    var hash = target;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 400, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;

  });
}

//SCROLL ANIMATE SVG
$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit
  // updateSvgWidth();

  $("svg").css("visibility", "visible");
  updateSidebarFill();
  //on a scroll event - execute function
  $(window).scroll(function() {
    updateSidebarFill();
  });

  $(window).resize(function() {
    // updateSvgWidth()
  });
});


function updateSvgWidth() {
  var $maxWidth = Math.min(200, $(window).height() * .24);
  var $newWidth = $("#sidebar").width();

  $("svg").css("width", Math.min($newWidth, $maxWidth));
}

function updateSidebarFill() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())));
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $newHeight = $percentageComplete * 802;
    //set the new value of the dashoffset to create the drawing effect
    $(".clipper").css("height", $newHeight);
}

function contains(str, substr) {
  return ~str.indexOf(substr);
}