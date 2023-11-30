const closeMenu=document.getElementById("close"),openMenu=document.getElementById("open"),nav=document.querySelector(".navigation"),container=document.querySelector(".content-column"),openFeedback=document.querySelectorAll(".menu__chat-feedback"),openCallRequest=document.querySelectorAll(".menu__call-request"),feedback=document.querySelector(".feedback"),callRequest=document.querySelector(".call-request"),closeFeedback=document.getElementById("close-feedback"),closeCallRequest=document.getElementById("close-call-request");function toggleMenu(){window.innerWidth<1440&&(nav.classList.remove("navigation--show"),nav.classList.add("navigation--hidden"),container.classList.remove("blur"))}function closeMenuIfClickedOutside(e){nav.contains(e.target)||openMenu.contains(e.target)||(nav.classList.remove("navigation--show"),nav.classList.add("navigation--hidden"),container.classList.remove("blur"))}window.addEventListener("resize",toggleMenu),document.addEventListener("DOMContentLoaded",toggleMenu),openMenu.addEventListener("click",(function(){nav.classList.remove("navigation--hidden"),nav.classList.add("navigation--show"),container.classList.add("blur")})),closeMenu.addEventListener("click",(function(){nav.classList.remove("navigation--show"),nav.classList.add("navigation--hidden"),container.classList.remove("blur")})),document.addEventListener("click",closeMenuIfClickedOutside),openFeedback.forEach((function(e){e.addEventListener("click",(function(){feedback.classList.remove("feedback--hidden"),feedback.classList.add("feedback--show"),container.classList.add("blur")}))})),closeFeedback.addEventListener("click",(function(){feedback.classList.remove("feedback--show"),feedback.classList.add("feedback--hidden"),container.classList.remove("blur")})),openCallRequest.forEach((function(e){e.addEventListener("click",(function(){callRequest.classList.remove("call-request--hidden"),callRequest.classList.add("call-request--show"),container.classList.add("blur")}))})),closeCallRequest.addEventListener("click",(function(){callRequest.classList.remove("call-request--show"),callRequest.classList.add("call-request--hidden"),container.classList.remove("blur")}));const swiper=new Swiper(".swiper",{direction:"horizontal",width:320,loop:!1,effect:"slider",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},spaceBetween:16,breakpoints:{320:{slidesPerView:1.3},375:{slidesPerView:1.5},425:{slidesPerView:1.75},480:{slidesPerView:2.2,spaceBetween:20},520:{slidesPerView:2.4},640:{slidesPerView:2.5,spaceBetween:24}}}),hideSwiper=document.querySelector(".swiper"),hideSecondSwiper=document.querySelector(".swiper-second"),hideThirdSwiper=document.querySelector(".swiper-third");setInterval((()=>{window.innerWidth>=768?(hideSwiper.style.display="none",hideSecondSwiper.style.display="none",hideThirdSwiper.style.display="none"):(hideSwiper.style.display="block",hideSecondSwiper.style.display="block",hideThirdSwiper.style.display="block")}),0);let slides=document.querySelectorAll(".wrapper__slide"),button=document.querySelector(".slider__button"),isMoreVisible=!1;function showItems(){let e=window.innerWidth<=1120?6:8;slides.forEach(((t,s)=>{t.style.display=s<e?"flex":"none"}))}function toggleMoreItems(){isMoreVisible=!isMoreVisible,slides.forEach(((e,t)=>{t>=(window.innerWidth<1120?6:8)&&(e.style.display=isMoreVisible?"flex":"none")})),isMoreVisible?(button.classList.add("btn-hide"),button.classList.remove("btn-show")):(button.classList.add("btn-show"),button.classList.remove("btn-hide")),button.innerHTML=isMoreVisible?"Скрыть":"Показать все"}window.addEventListener("resize",showItems),button.addEventListener("click",toggleMoreItems),document.addEventListener("DOMContentLoaded",showItems);let services=document.querySelectorAll(".second_wrapper__slide"),serviceButton=document.querySelector(".second_wrapper__button");function showServices(){let e=window.innerWidth<=1120?3:4;services.forEach(((t,s)=>{t.style.display=s<e?"flex":"none"}))}function toggleMoreServices(){isMoreVisible=!isMoreVisible,services.forEach(((e,t)=>{t>=(window.innerWidth<1120?3:4)&&(e.style.display=isMoreVisible?"flex":"none")})),isMoreVisible?(serviceButton.classList.add("second_btn-hide"),serviceButton.classList.remove("second_btn-show")):(serviceButton.classList.add("second_btn-show"),serviceButton.classList.remove("second_btn-hide")),serviceButton.innerHTML=isMoreVisible?"Скрыть":"Показать все"}window.addEventListener("resize",showServices),serviceButton.addEventListener("click",toggleMoreServices),document.addEventListener("DOMContentLoaded",showServices),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".list__item");function t(t){e.forEach((function(e){e.classList.remove("list__item--active")})),t.target.classList.add("list__item--active")}e.forEach((function(e){e.addEventListener("click",t)}))}));