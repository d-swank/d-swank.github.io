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

// SlideIn images effect
document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    {
      el: document.querySelector(".img-bkgrd-miracosta"),
      animationClass: "slide-in-from-left",
    },
    {
      el: document.querySelector(".img-bkgrd-CSUSM"),
      animationClass: "slide-in-from-right",
    },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, 
    }
  );

  elements.forEach((element) => {
    element.el.classList.add(element.animationClass);
    observer.observe(element.el);
  });
});

// Darken background image effect
const imageBkgrd = document.querySelectorAll('.item-wrapper-work');
  
imageBkgrd.forEach(imageBkgrd => {
  imageBkgrd.addEventListener('mouseover', () => {
    imageBkgrd.childNodes[1].classList.add('img-darken');
  });

  imageBkgrd.addEventListener('mouseout', () => {
    imageBkgrd.childNodes[1].classList.remove('img-darken');
  });
});

// Tab Menu Functionality
const tabs = document.querySelectorAll('.tab-menu-item');
const all_content = document.querySelectorAll('.project-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab => { tab.classList.remove('active') });
    all_content.forEach(content => { 
      content.classList.remove('visible');
    });

    tab.classList.add('active');
    all_content[index].classList.add('visible');

    var line = document.querySelector('.line');

    const target = e.target;
    const left = target.offsetLeft;
    const width = target.offsetWidth;
    line.style.left = `${left}px`;
    line.style.width = `${width}px`;
  });
});

// Set initial state
tabs[0].classList.add('active');
all_content[0].classList.add('visible');
const initialTab = tabs[0];
const line = document.querySelector('.line');
line.style.left = `${initialTab.offsetLeft}px`;
line.style.width = `${initialTab.offsetWidth}px`;
