const closeMenu = document.getElementById("close");
const openMenu = document.getElementById("open");
const nav = document.querySelector(".navigation");
const container = document.querySelector(".content-column");
const openFeedback = document.querySelectorAll(".menu__chat-feedback");
const openCallRequest = document.querySelectorAll(".menu__call-request");
const feedback = document.querySelector(".feedback");
const callRequest = document.querySelector(".call-request");
const closeFeedback = document.getElementById("close-feedback");
const closeCallRequest = document.getElementById("close-call-request");

function toggleMenu() {
  if (window.innerWidth < 1440) {
    nav.classList.remove("navigation--show");
    nav.classList.add("navigation--hidden");
    container.classList.remove("blur");
  }
}

function closeMenuIfClickedOutside(event) {
  if (!nav.contains(event.target) && !openMenu.contains(event.target)) {
    nav.classList.remove("navigation--show");
    nav.classList.add("navigation--hidden");
    container.classList.remove("blur");
  }
}

window.addEventListener("resize", toggleMenu);

document.addEventListener("DOMContentLoaded", toggleMenu);

openMenu.addEventListener("click", function () {
  nav.classList.remove("navigation--hidden");
  nav.classList.add("navigation--show");
  container.classList.add("blur");
});

closeMenu.addEventListener("click", function () {
  nav.classList.remove("navigation--show");
  nav.classList.add("navigation--hidden");
  container.classList.remove("blur");
});

document.addEventListener("click", closeMenuIfClickedOutside);

openFeedback.forEach(function (element) {
  element.addEventListener("click", function () {
    feedback.classList.remove("feedback--hidden");
    feedback.classList.add("feedback--show");
    container.classList.add("blur");
  });
});

closeFeedback.addEventListener("click", function () {
  feedback.classList.remove("feedback--show");
  feedback.classList.add("feedback--hidden");
  container.classList.remove("blur");
});

openCallRequest.forEach(function (element) {
  element.addEventListener("click", function () {
    callRequest.classList.remove("call-request--hidden");
    callRequest.classList.add("call-request--show");
    container.classList.add("blur");
  });
});

closeCallRequest.addEventListener("click", function () {
  callRequest.classList.remove("call-request--show");
  callRequest.classList.add("call-request--hidden");
  container.classList.remove("blur");
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  width: 320,
  loop: false,
  effect: "slider",

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    375: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 1.75,
    },
    480: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 2.4,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
  },
});

const hideSwiper = document.querySelector(".swiper");
const hideSecondSwiper = document.querySelector(".swiper-second");
const hideThirdSwiper = document.querySelector(".swiper-third");

setInterval(() => {
  if (window.innerWidth >= 768) {
    hideSwiper.style.display = "none";
    hideSecondSwiper.style.display = "none";
    hideThirdSwiper.style.display = "none";
  } else {
    hideSwiper.style.display = "block";
    hideSecondSwiper.style.display = "block";
    hideThirdSwiper.style.display = "block";
  }
}, 0);

let slides = document.querySelectorAll(".wrapper__slide");
let button = document.querySelector(".slider__button");

let isMoreVisible = false;

function showItems() {
  let toShow = window.innerWidth <= 1120 ? 6 : 8;

  slides.forEach((item, index) => {
    if (index < toShow) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function toggleMoreItems() {
  isMoreVisible = !isMoreVisible;

  slides.forEach((item, index) => {
    if (index >= (window.innerWidth < 1120 ? 6 : 8)) {
      item.style.display = isMoreVisible ? "flex" : "none";
    }
  });

  isMoreVisible
    ? (button.classList.add("btn-hide"), button.classList.remove("btn-show"))
    : (button.classList.add("btn-show"), button.classList.remove("btn-hide"));
  button.innerHTML = isMoreVisible ? "Скрыть" : "Показать все";
}

window.addEventListener("resize", showItems);
button.addEventListener("click", toggleMoreItems);
document.addEventListener("DOMContentLoaded", showItems);

let services = document.querySelectorAll(".second_wrapper__slide");
let serviceButton = document.querySelector(".second_wrapper__button");

function showServices() {
  let toShow = window.innerWidth <= 1120 ? 3 : 4;

  services.forEach((item, index) => {
    if (index < toShow) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function toggleMoreServices() {
  isMoreVisible = !isMoreVisible;

  services.forEach((item, index) => {
    if (index >= (window.innerWidth < 1120 ? 3 : 4)) {
      item.style.display = isMoreVisible ? "flex" : "none";
    }
  });

  isMoreVisible
    ? (serviceButton.classList.add("second_btn-hide"),
      serviceButton.classList.remove("second_btn-show"))
    : (serviceButton.classList.add("second_btn-show"),
      serviceButton.classList.remove("second_btn-hide"));
  serviceButton.innerHTML = isMoreVisible ? "Скрыть" : "Показать все";
}

window.addEventListener("resize", showServices);
serviceButton.addEventListener("click", toggleMoreServices);
document.addEventListener("DOMContentLoaded", showServices);

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".list__item");

  function changeItem(event) {
    listItems.forEach(function (el) {
      el.classList.remove("list__item--active");
    });

    event.target.classList.add("list__item--active");
  }

  listItems.forEach(function (item) {
    item.addEventListener("click", changeItem);
  });
});
