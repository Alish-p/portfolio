const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".wrapper");
const panels = document.querySelectorAll(".panel");

// Navigation
open.addEventListener("click", () => {
  container.classList.add("show-nav");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
close.addEventListener("click", () => {
  container.classList.remove("show-nav");

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Panels
const removeActiveClass = () => {
  panels.forEach((panel) => panel.classList.remove("active"));
};
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
