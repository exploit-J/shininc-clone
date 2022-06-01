const navOpen = document.querySelector(".nav-icon");
const navMenu = document.querySelector("nav");
const navClose = document.querySelector(".close-button");
const navMo1stDepthList = document.querySelectorAll(".nav_1depth>li>button");
const navMo2ndDepthList = document.querySelectorAll(".nav_2depth>li>button");

// sidebar toggle
navOpen.addEventListener("click", () => {
  navMenu.classList.add("active");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navMo1stDepthList.forEach((item) => {
    item.parentElement.classList.remove("active");
  });
  navMo2ndDepthList.forEach((item) => {
    item.parentElement.classList.remove("active");
  });
});

//sidebar list toggle
function navItemOpen() {
  if (window.innerWidth < 1025) {
    this.parentNode.classList.toggle("active");
  }
}
navMo1stDepthList.forEach((item) => {
  item.addEventListener("click", navItemOpen);
});

navMo2ndDepthList.forEach((item) => {
  item.addEventListener("click", navItemOpen);
});

// pc사이즈 전환시 sidebar list close
function closeNav() {
  if (window.innerWidth > 1024) {
    navMo1stDepthList.forEach((item) => {
      item.parentNode.classList.remove("active");
    });
  }
}
window.addEventListener("resize", closeNav);

// pc사이즈 navbar action기능
const navPc1stDepthList = document.querySelectorAll(
  ".nav-pc .nav_1depth>li>span"
);
navPc1stDepthList.forEach((item) => {
  const main = document.querySelector("main");
  console.log(item);
  item.addEventListener("click", (e) => {
    navPc1stDepthList.forEach((item2) => {
      item2.nextElementSibling.classList.remove("active");
      item2.classList.remove("active");
    });
    e.target.nextElementSibling.classList.add("active");
    e.target.classList.add("active");
  });

  main.addEventListener("click", () => {
    navPc1stDepthList.forEach((item2) =>
      item2.nextElementSibling.classList.remove("active")
    );
  });
});

// nav scroll toggle
const header = document.querySelector("header");
window.addEventListener("wheel", (e) => {
  console.log(e.deltaY, e.deltaX);
  if (e.deltaY > 1) {
    header.classList.add("active");
    navPc1stDepthList.forEach((item) => {
      item.nextElementSibling.classList.remove("active");
      item.classList.remove("active");
    });
  } else {
    header.classList.remove("active");
  }
});
