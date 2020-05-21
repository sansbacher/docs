// Initially this code was in the "Material Design" Template HTML. Moved here, with some changes/additions
//
// Open and close the sidebar on medium and small screens
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Change style of top container on scroll
//window.onscroll = function() {changeTopOnScroll()};		// Combined below
function changeTopOnScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	document.getElementById("myTop").classList.add("w3-card-4", "w3-animate-opacity");
	document.getElementById("myIntro").classList.add("w3-show-inline-block");
  } else {
	document.getElementById("myIntro").classList.remove("w3-show-inline-block");
	document.getElementById("myTop").classList.remove("w3-card-4", "w3-animate-opacity");
  }
}

// Functions for the "Scroll To Top" Button
function scrollToTop() {
  // How many px the user can scroll down before showing the To Top button
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	toTopButton.style.display = "block";
  } else {
	toTopButton.style.display = "none";
  }
}
//
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//
//Get the button
var toTopButton = document.getElementById("toTopButton");

// When the user scrolls down from the top of the document, show the button
// AND handle the change of the Top Container on scroll
window.onscroll = function() {
	scrollToTop();
	changeTopOnScroll();
};