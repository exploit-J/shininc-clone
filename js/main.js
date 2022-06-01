const introCopy = document.querySelectorAll(".text-area span");
const buttonWrap = document.querySelector(".button-wrap");
const introPlusIcon = document.querySelector(".intro-copy .button");
const introBar = document.querySelector(".intro .bar");

window.onload = () => {
  let timer = 100;
  introCopy.forEach((item) => {
    item.style.animation = `fade-in 500ms ${(timer += 50)}ms forwards`;
  });
  setTimeout(() => {
    buttonWrap.style.animation = "plusicon-down 0.5s forwards";
    introBar.classList.add("active");
  }, 2200);
  setTimeout(() => {
    introPlusIcon.style.animation = "plus-rotate 3s infinite";
  }, 2800);
};

window.addEventListener("scroll", (e) => {
  console.log("y", window.scrollY);
  if (window.scrollY > 99) {
    introBar.classList.remove("active");
  } else {
    introBar.classList.add("active");
  }
});
