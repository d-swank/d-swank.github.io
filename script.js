// Navbar Scrolling effect
const navbarWrapper = document.querySelector('.navbar-wrapper');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset;

  if (currentScrollTop <= lastScrollTop) {
    navbarWrapper.classList.remove('scrolling');
  } else {
    navbarWrapper.classList.add('scrolling');
  }
  lastScrollTop = currentScrollTop;
});


// Responisve Navbar
function toggleMenu() {
    var menu = document.querySelector(".right-side");
    menu.classList.toggle("responsive");
  }


document.addEventListener("DOMContentLoaded", function () {
    // Get all the education items
    var educationItems = document.querySelectorAll(".academics .portfolio-item-wrapper");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= windowHeight &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to apply the slide-in effect when an element is in the viewport
    function applySlideIn() {
        educationItems.forEach(function (item) {
            if (isInViewport(item)) {
                item.classList.add("visible");
            }
        });
    }

    // Call the function initially
    applySlideIn();

    // Call the function when the user scrolls
    window.addEventListener("scroll", applySlideIn);
});

// Active nav links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-wrapper');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          navLinks.forEach(link => {
            const navLinkText = link.querySelector('.nav-link-text');
            navLinkText.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
              navLinkText.classList.add('active');
            }
          });
        }
      });
    }, options);
  
    sections.forEach(section => observer.observe(section));
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(link => {
          const navLinkText = link.querySelector('.nav-link-text');
          navLinkText.classList.remove('active');
        });
        const navLinkText = e.target.closest('.nav-link').querySelector('.nav-link-text');
        navLinkText.classList.add('active');
        const target = document.querySelector(e.target.closest('.nav-link').getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });