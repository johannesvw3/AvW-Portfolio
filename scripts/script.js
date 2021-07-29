const mediaQueryMobile = window.matchMedia('(max-width: 600px)');
const mediaQueryNormal = window.matchMedia('(min-width: 601px)');

function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

function touchMenu() {
window.addEventListener('touchstart', function(event){
	let menu = document.getElementById('mySidebar');
	if (event.target != menu && event.target.parentNode != menu){
        menu.style.width = '0';
    }
});
}

function mouseTouch() {
window.addEventListener('mouseup', function(event){
	let menu = document.getElementById('mySidebar');
	if (event.target != menu && event.target.parentNode != menu){
        menu.style.width = '0';
    }
});
}


//Media Query Width Change handler
  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 601px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }
    
    // media query change
    function WidthChange(mq) {
    if (mq.matches) {
      document.getElementById('mySidebar').style.justifyContent = 'center'
    } else {
      mouseTouch();
      touchMenu();
      document.getElementById('mySidebar').style.justifyContent = 'start'
    }
  }

  var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}