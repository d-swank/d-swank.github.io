// Navbar Scrolling effect
const navbarWrapper = document.querySelector('.navbar-wrapper');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset;

  if (currentScrollTop <= lastScrollTop) {
    navbarWrapper.classList.remove('scrolling');
  } 

  else {
    navbarWrapper.classList.add('scrolling');
  }
  lastScrollTop = currentScrollTop;
});

// Responisve Navbar
function toggleMenu() {
  var menu = document.querySelector(".right-side");
  menu.classList.toggle("responsive");
}