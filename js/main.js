const introCopy = document.querySelectorAll(".text-area span");
const buttonWrap = document.querySelector(".button-wrap");
const introPlusIcon = document.querySelector(".intro-copy .button");
const introBar = document.querySelector(".intro .bar");
const navOpen = document.querySelector(".nav-icon");
const navMenu = document.querySelector("nav");
const navClose = document.querySelector(".close-button");
const navMo1stDepthList = document.querySelectorAll(".nav_1depth>li>button");
const navMo2ndDepthList = document.querySelectorAll(".nav_2depth>li>button");

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

function closeNav() {
  if (window.innerWidth > 1024) {
    navMo1stDepthList.forEach((item) => {
      item.parentNode.classList.remove("active");
    });
  }
}
window.addEventListener("resize", closeNav);

const navPc1stDepthList = document.querySelectorAll(
  ".nav-pc .nav_1depth>li>span"
);

navPc1stDepthList.forEach((item) => {
  const main = document.querySelector("main");
  item.addEventListener("click", (e) => {
    navPc1stDepthList.forEach((item2) =>
      item2.nextElementSibling.classList.remove("active")
    );
    e.target.nextElementSibling.classList.add("active");
  });

  main.addEventListener("click", () => {
    navPc1stDepthList.forEach((item2) =>
      item2.nextElementSibling.classList.remove("active")
    );
  });
});
