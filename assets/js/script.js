'use strict';

// Toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// NAVBAR PAGE switching
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all nav links
    navLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");

    // Get target page
    const target = this.getAttribute("data-target");

    // Show target page and hide others
    pages.forEach(page => {
      if (page.getAttribute("data-page") === target) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  });
});

// You can add the rest of your modal/testimonial/filter functions below if needed
