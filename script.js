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
  var responsiveNav = document.querySelector('.nav-links-wrapper');
  responsiveNav.classList.toggle("responsive");
  var overlay = document.querySelector('.overlay-blur');
  var bodyElement = document.body;
  
  if (responsiveNav.style.display === 'none' || !responsiveNav.style.display) {
      responsiveNav.style.display = 'flex';
      overlay.style.display = 'flex';
      bodyElement.style.overflow = 'hidden';
  } else {
      responsiveNav.style.display = 'none';
      overlay.style.display = 'none';
      bodyElement.style.overflow = '';
    }
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
// window.addEventListener("scroll", function() {
//   const section = document.querySelector('.item-wrapper-work');
//   const textBox = document.querySelector('.item-info-work');
//   const rect = section.getBoundingClientRect();
//   const maxSlideUp = textBox.offsetHeight;

//   if(rect.top <= window.innerHeight && rect.bottom >= textBox.offsetHeight) {
//       const moveUpBy = ((window.innerHeight - rect.top) / window.innerHeight) * maxSlideUp; 
//       const newTop = (moveUpBy / section.offsetHeight * 100) - 100;

//       if (newTop > -32 && newTop < 0) { 
//           textBox.style.top = `${newTop}%`; 
//       } else if (newTop <= -32) {
//           textBox.style.top = `3%`;  
//       } else if (newTop >= 0) { 
//           textBox.style.top = '0%';
//       }
//   }
// });