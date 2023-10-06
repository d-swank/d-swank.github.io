// Navbar Scrolling effect
const navbarWrapper = document.querySelector('.navbar-wrapper');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  // If screen width is <= 768px exit the function early
  // if (window.innerWidth <= 768) {
  //   return;
  // }
  
  const currentScrollTop = window.scrollY;

  if (currentScrollTop <= lastScrollTop) {
    navbarWrapper.classList.remove('scrolling');
  } else {
    navbarWrapper.classList.add('scrolling');
  }
  
  lastScrollTop = currentScrollTop;
});

// Responisve Navbar for mobile (Hamburger menu)
function toggleMenu() {
  var menu = document.querySelector(".nav-links-wrapper");
  menu.classList.toggle("responsive");
}

// SlideIn images effect for Academics Section
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

// SlideIn images effect for Work Section
window.addEventListener("scroll", function() {
  const section = document.querySelector('.item-wrapper-work');
  const textBox = document.querySelector('.item-info-work');
  const rect = section.getBoundingClientRect();
  const maxSlideUp = textBox.offsetHeight;  // Maximum slide distance should be the height of the text box.

  // When the image is fully in the viewpoint, start the slide-up effect
  if(rect.top <= window.innerHeight && rect.bottom >= textBox.offsetHeight) {
      // Calculate the amount the text box should move up by
      const moveUpBy = ((window.innerHeight - rect.top) / window.innerHeight) * maxSlideUp; 
      const newTop = (moveUpBy / section.offsetHeight * 100) - 100;

      // Adjust the top position of the text box
      if (newTop > -32 && newTop < 0) {  // Check if the new position is between -32% and 0
          textBox.style.top = `${newTop}%`; 
      } else if (newTop <= -32) {  // If the calculated position is above -32%, then stop at -32%
          textBox.style.top = `3%`;  
      } else if (newTop >= 0) { 
          textBox.style.top = '0%';  // Reset to the initial position if the calculation returns a value greater than or equal to 0
      }
  }
});