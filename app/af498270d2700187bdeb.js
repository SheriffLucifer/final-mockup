var closeMenu = document.getElementById("close-menu");
var openMenu = document.getElementById("open-menu");
var nav = document.querySelector(".navigation");
openMenu.addEventListener("click", function () {
  nav.classList.remove("navigation--hidden");
  nav.classList.add("navigation--show");
});
closeMenu.addEventListener("click", function () {
  nav.classList.remove("navigation--show");
  nav.classList.add("navigation--hidden");
});