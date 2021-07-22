let menuIcon = document.querySelector('#menu');
let menuButtons = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
    if (menuButtons.style.display === "flex") {
        menuButtons.style.display = "none";
      } else {
        menuButtons.style.display = "flex";
      }
    });