// scroll top

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

var header = document.getElementById("header");
var x = document.querySelectorAll("ul.nav-links a");
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
  }
}

// console.log(lis);
// console.log(window.innerHeight);
// console.log(screenTop);
// console.log(window.innerHeight - 100);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// hamburger
var hamburger = document.getElementById("hamburger");

var navlinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navlinks.classList.toggle("open");
});
// document.onclick = function (e) {
// if (e.target.id !== "hamburger" && e.target.id !== "nav-links") {
//   navlinks.classList.remove("open");
// } else {
//   navlinks.classList.add("open");
// }
// };
