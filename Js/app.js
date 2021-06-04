// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// scroll top

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

var header = document.getElementById("header");
var x = document.querySelectorAll("ul.nav-links a");

// console.log(lis);
// console.log(window.innerHeight);
// console.log(screenTop);
// console.log(window.innerHeight - 100);
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

    header.style.boxShadow = "-2px 0px 15px -3px #000000";
    header.style.background = "#fffdfe";
    // header.style.color = "#fffdfe";
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.color = "#fffdfe";
    // }

    // header.style.backgroun d = "rgba(77, 98, 203, 0.09)";
  } else {
    mybutton.style.display = "none";
    header.style.boxShadow = "";
    header.style.background = "transparent";

    // header.style.color = "#141414";
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.color = "white";
    // }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
