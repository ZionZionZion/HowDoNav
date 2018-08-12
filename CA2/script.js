
/* Javascript */

// Hamburger dropdown and change hambuger icon
var navButton = document.querySelector(".navigation-menu-button img");
var changeSrc = document.querySelector(".hamburger-icon");

if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
         changeSrc.src = "images/menu.png";
      } else {
         nav.style.display = "block";
         changeSrc.src = "images/close-icon.png";
      }
   }, false);
}

// Go to top Button 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // button appear if user scroll past the navigation
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

/* JQuery */
$(document).ready(function() {
    // All <a href ="">
    $("a").on('click', function(event) {


        if (this.hash !== "") {

            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})


$('a').on('click', function(){
    $('a').removeClass('selected');
    $(this).addClass('selected');
});



