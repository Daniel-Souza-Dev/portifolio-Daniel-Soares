"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && menu) {
  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
}
