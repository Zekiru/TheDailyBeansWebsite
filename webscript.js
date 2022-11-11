// js for all pages

//some toggles

document.querySelector(".popup-menu").addEventListener('click',()=>{
	document.querySelector('body').classList.toggle("change");
});


function dropDown() {
  document.querySelector('body').classList.toggle("dropdown", true);
}

function dropDownclose() {
  document.querySelector('body').classList.toggle("dropdown", false);
}

function goContent1() {
  document.querySelector(".color-box").scrollIntoView();
}

// accordion toggles

function popActive1() {
  document.querySelector('body').classList.toggle("popactive1");
  document.querySelector('body').classList.toggle("popactive2", false);
  document.querySelector('body').classList.toggle("popactive3", false);
  document.querySelector('body').classList.toggle("popactive4", false);
  document.querySelector('body').classList.toggle("popactive5", false);
  document.querySelector('body').classList.toggle("popactive6", false);
  document.querySelector('body').classList.toggle("popactive7", false);
}

function popActive2() {
  document.querySelector('body').classList.toggle("popactive2");
  document.querySelector('body').classList.toggle("popactive1", false);
  document.querySelector('body').classList.toggle("popactive3", false);
  document.querySelector('body').classList.toggle("popactive4", false);
  document.querySelector('body').classList.toggle("popactive5", false);
  document.querySelector('body').classList.toggle("popactive6", false);
  document.querySelector('body').classList.toggle("popactive7", false);
}

function popActive3() {
  document.querySelector('body').classList.toggle("popactive3");
  document.querySelector('body').classList.toggle("popactive1", false);
  document.querySelector('body').classList.toggle("popactive2", false);
  document.querySelector('body').classList.toggle("popactive4", false);
  document.querySelector('body').classList.toggle("popactive5", false);
  document.querySelector('body').classList.toggle("popactive6", false);
  document.querySelector('body').classList.toggle("popactive7", false);
}

function popActive4() {
  document.querySelector('body').classList.toggle("popactive4");
  document.querySelector('body').classList.toggle("popactive1", false);
  document.querySelector('body').classList.toggle("popactive2", false);
  document.querySelector('body').classList.toggle("popactive3", false);
  document.querySelector('body').classList.toggle("popactive5", false);
  document.querySelector('body').classList.toggle("popactive6", false);
  document.querySelector('body').classList.toggle("popactive7", false);
}

function popActive5() {
  document.querySelector('body').classList.toggle("popactive5");
  document.querySelector('body').classList.toggle("popactive1", false);
  document.querySelector('body').classList.toggle("popactive2", false);
  document.querySelector('body').classList.toggle("popactive3", false);
  document.querySelector('body').classList.toggle("popactive4", false);
  document.querySelector('body').classList.toggle("popactive6", false);
  document.querySelector('body').classList.toggle("popactive7", false);
}

function popActive6() {
  document.querySelector('body').classList.toggle("popactive6");
  document.querySelector('body').classList.toggle("popactive1", false);
  document.querySelector('body').classList.toggle("popactive2", false);
  document.querySelector('body').classList.toggle("popactive3", false);
  document.querySelector('body').classList.toggle("popactive4", false);
  document.querySelector('body').classList.toggle("popactive5", false);
  document.querySelector('body').classList.toggle("popactive7", false);
}

function popActive7() {
  document.querySelector('body').classList.toggle("popactive7");
  document.querySelector('body').classList.toggle("popactive1", false);
  document.querySelector('body').classList.toggle("popactive2", false);
  document.querySelector('body').classList.toggle("popactive3", false);
  document.querySelector('body').classList.toggle("popactive4", false);
  document.querySelector('body').classList.toggle("popactive5", false);
  document.querySelector('body').classList.toggle("popactive6", false);
}

// slideshow script

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // slide change timer 1s = 1000
}

// alert script for non-working buttons/links:

function uselessButtons() {
  alert("No Existing Link for that, Sorry...");
}

// no hablo espanol


// Coded by Ezekiel Villasurda, 4th Qrt PT