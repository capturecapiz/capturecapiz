/**
 * Template Name: Impact
 * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  // Toggle .scrolled class on the body based on scroll position
  function toggleScrolled() {
    const body = document.querySelector('body');
    const header = document.querySelector('#header');

    if (
      header.classList.contains('scroll-up-sticky') ||
      header.classList.contains('sticky-top') ||
      header.classList.contains('fixed-top')
    ) {
      window.scrollY > 100
        ? body.classList.add('scrolled')
        : body.classList.remove('scrolled');
    }
  }

  // Mobile nav toggle
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function toggleMobileNav() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  // Hide mobile nav on same-page/hash links
  document.querySelectorAll('#navmenu a').forEach((navLink) => {
    navLink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        toggleMobileNav();
      }
    });
  });

  // Toggle mobile nav dropdowns
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((dropdown) => {
    dropdown.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  // Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  // Scroll top button visibility and click event
  const scrollTopBtn = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTopBtn) {
      window.scrollY > 100
        ? scrollTopBtn.classList.add('active')
        : scrollTopBtn.classList.remove('active');
    }
  }

  scrollTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initialize AOS (Animation on Scroll)
  function initializeAOS() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }

  // Initialize GLightbox
  const glightbox = GLightbox({
    selector: '.glightbox',
    slideNext: false, // Disable Next button
    slidePrev: false, // Disable Previous button
  });

  // Initialize Swiper sliders
  function initSwipers() {
    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const config = JSON.parse(
        swiperElement.querySelector('.swiper-config').innerHTML.trim()
      );

      if (swiperElement.classList.contains('swiper-tab')) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  // Initialize Pure Counter
  new PureCounter();

  // Initialize Isotope layout and filters
  document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
    const layout = isotopeItem.getAttribute('data-layout') || 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') || '*';
    const sort = isotopeItem.getAttribute('data-sort') || 'original-order';

    imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
      const initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach((filterItem) => {
        filterItem.addEventListener('click', function () {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({ filter: this.getAttribute('data-filter') });

          if (typeof initializeAOS === 'function') {
            initializeAOS();
          }
        });
      });
    });
  });

  // Toggle FAQ items
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqToggle) => {
    faqToggle.addEventListener('click', () => {
      faqToggle.parentNode.classList.toggle('faq-active');
    });
  });

  // Correct scrolling position for URLs containing hash links
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  });

  // Navmenu Scrollspy
  const navMenuLinks = document.querySelectorAll('.navmenu a');
  function navMenuScrollspy() {
    navMenuLinks.forEach((link) => {
      if (!link.hash) return;

      const section = document.querySelector(link.hash);
      if (!section) return;

      const position = window.scrollY + 200;
      const isActive =
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight;

      link.classList.toggle('active', isActive);
    });
  }

  // Event Listeners
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  document.addEventListener('scroll', toggleScrollTop);
  window.addEventListener('load', toggleScrollTop);
  window.addEventListener('load', initializeAOS);
  window.addEventListener('load', initSwipers);
  window.addEventListener('load', navMenuScrollspy);
  document.addEventListener('scroll', navMenuScrollspy);
})();
