function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}



window.addEventListener('touchstart', function(event){
	let menu = document.getElementById('mySidebar');
	if (event.target != menu && event.target.parentNode != menu){
        menu.style.width = '0';
    }
});