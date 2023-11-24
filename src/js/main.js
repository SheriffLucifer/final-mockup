const closeMenu = document.getElementById("close-menu");
const openMenu = document.getElementById("open-menu");
const nav = document.querySelector(".navigation");

openMenu.addEventListener("click", function () {
  nav.classList.remove("navigation--hidden");
  nav.classList.add("navigation--show");
});

closeMenu.addEventListener("click", function () {
  nav.classList.remove("navigation--show");
  nav.classList.add("navigation--hidden");
});
