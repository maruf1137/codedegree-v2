const bars = document.querySelector(".bars");
const closeSidebar = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
  console.log("sidebar");
  sidebar.classList.toggle("show-sidebar");
});
closeSidebar.addEventListener("click", () => {
  console.log("sidebar");
  sidebar.classList.remove("show-sidebar");
});

// custom cursor

const cursor = document.querySelector(".cursor");

gsap.to(cursor, { xPercent: -50, yPercent: -50 });

window.addEventListener("mousemove", (e) => {
  // console.log(e.x);
  gsap.to(cursor, { x: e.x, y: e.y });
});

const cursorShow = () => {
  cursor.style.display = "flex";
};

const cursorHide = () => {
  cursor.style.display = "none";
};

const project = document.querySelector(".project");
project.addEventListener("mouseover", cursorShow);
project.addEventListener("mouseout", cursorHide);

// swiper js

var swiper = new Swiper(".projectSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".platformSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".articleSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperBtn = document.querySelectorAll(".swiper-pagination-bullet");
swiperBtn.forEach((e) => {
  e.textContent = "";
});
