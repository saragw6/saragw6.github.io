$(document).ready(addSmoothScroll);

function addSmoothScroll(){
// Add smooth scrolling to all links
  $(".angle-down-wrap > a, svg > a, #navbaricons > a, #heroicons > a, #navbarname > a").on('click', function(event) {
    console.log("baseval ", this.href.baseVal);
    // Make sure this.hash has a value before overriding default behavior
    if (!$.isEmptyObject(this.href.baseVal)) {
      smoothScroll('div' + this.href.baseVal);
    } else if (!$.isEmptyObject(this.hash)) {
      // Prevent default anchor click behavior

      smoothScroll(this.hash);

    } // End if
  });
}

//change name
$(document).ready(function() {

  $("#navbarname > a").html(getNavBarName());

  //on a scroll event - execute function
  $(window).resize(function() {
    $("#navbarname > a").html(getNavBarName());
  });

});

function smoothScroll(target) {
    event.preventDefault();
    var hash = target;
    console.log("hash: ", $(hash));

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 400, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;

  });
}


//returns long or short form of name based on ratio of vh:vw
function getNavBarName() {
  return $(window).height() >= (55/67) * $(window).width() - (325/67) ? "SARA GW" : "SARA GOLDSTEIN-WEISS";
}

$(document).ready(function(){                    
    $(window).scroll(function(){                          
        if ($(this).scrollTop() > 200) {
            $('#navbar').fadeIn(500);
        } else {
            $('#navbar').fadeOut(500);
        }
    });
});


/////// SVG SIDEBAR FUNCTIONS ///////////////

  //SCROLL ANIMATE SVG
  /*$(document).ready(function() {
    //variable for the 'stroke-dashoffset' unit
    updateSvgWidth();
    updateSidebarFill();
    //on a scroll event - execute function
    $(window).scroll(function() {
      updateSidebarFill();
    });

    $(window).resize(function() {
      updateSvgWidth()
    });
  });*/


  /*function updateSvgWidth() {
    var $maxWidth = Math.min(200, $(window).height() * .25);
    var $newWidth = $("#sidebar").width();

    $("#sidebar > svg").css("width", Math.min($newWidth, $maxWidth));
  }
  */

  /*function updateSidebarFill() {
      //calculate how far down the page the user is 
      var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())));
      //get the value to be subtracted from the 'stroke-dashoffset'
      var $newHeight = $percentageComplete * 650;
      //set the new value of the dashoffset to create the drawing effect
      $(".clipper").css("height", $newHeight);
  }*/

  // function contains(str, substr) {
  //   return ~str.indexOf(substr);
  // }


  // //scroll svg draw cmopuer
  // $(document).ready(function() {
  //   $(".filled").css("opacity", "0");

  //   //variable for the 'stroke-dashoffset' unit
  //   var $dashOffset = $(".path").css("stroke-dashoffset");
  //   //on a scroll event - execute function
  //   $(window).scroll(function() {
  //     //calculate how far down the page the user is 
  //     var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);

  //     //convert dashoffset pixel value to interger
  //     var $newUnit = parseInt($dashOffset, 10);
  //     console.log("svg scroll", $percentageComplete * ($newUnit / 67));

  //     //get the value to be subtracted from the 'stroke-dashoffset'
  //     var $offsetUnit = $percentageComplete * ($newUnit / 67);
  //     //set the new value of the dashoffset to create the drawing effect
  //     $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);

  //   });
  // });
///////////////////////////////////////////////



// header & hero transition
////use scrolltop and transitions and toggle classes to change height/display of header and opacity of hero content

//svg scroll drawings better - use (> 147) for example, and just kick off an animation at that scroll point? animate to erase a pew pixels later?
