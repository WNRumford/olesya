// slider
w3.slideshow(".dogimg", 3000);

// mobile menu
function myMobileMenu() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// Модальные картинки
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

function faq(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}

// Gallery


// ENDGallery

// STICKY NAVBAR

// When the user scrolls the page, execute myFunction 
window.onscroll = function(){stickyNavbar()};

// get the navbar
var navbar = document.getElementById("navbar")
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function stickyNavbar(){
  if (window.pageYOffset >= sticky){
   navbar.classList.add("stickyy") 
  } else {
    navbar.classList.remove("stickyy");
  }
}
// END STICKY NAVBAR

// цены на услуги
function showPrice(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}
// END цены на услуги