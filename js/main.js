const introCopy = document.querySelectorAll(".text-area span");
const buttonWrap = document.querySelector(".button-wrap");
const introPlusIcon = document.querySelector(".intro-copy .button");
const introBar = document.querySelector(".intro .bar");
const navOpen = document.querySelector(".nav-icon");
const navMenu = document.querySelector("nav");
const navClose = document.querySelector(".close-button");
const nav1depthList = document.querySelectorAll(".nav_1depth>li>button");
const nav2depthList = document.querySelectorAll(".nav_2depth>li>button");
console.log("nav1depthList", nav1depthList);

window.onload = () => {
  let timer = 100;
  introCopy.forEach((item) => {
    item.style.animation = `fade-in 500ms ${(timer += 50)}ms forwards`;
  });
  setTimeout(() => {
    buttonWrap.style.animation = "plusicon-down 0.5s forwards";
    introBar.style.animation = "scale 0.5s forwards";
  }, 2200);
  setTimeout(() => {
    introPlusIcon.style.animation = "plus-rotate 3s infinite";
  }, 2800);
};

navOpen.addEventListener("click", () => {
  navMenu.classList.add("active");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

nav1depthList.forEach((item) => {
  console.log("item", item);
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});

nav2depthList.forEach((item) => {
  console.log("item", item);
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});
