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