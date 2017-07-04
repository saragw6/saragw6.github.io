$(document).ready(function(){
// Add smooth scrolling to all links
  $(".caret, .sellpt > a").on('click', function(event) {
    //alert('this.href= ' + this.href);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//SCROLL ANIMATE SVG
$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit
  console.log($(".clipper").css("height"));
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())));
    //convert dashoffset pixel value to interger
    //var $newUnit = parseInt($dashOffset, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $newHeight = $percentageComplete * 640;
    //set the new value of the dashoffset to create the drawing effect
    $(".clipper").css("height", $newHeight);
  });
});