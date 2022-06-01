const introCopy = document.querySelectorAll(".text-area span");
const buttonWrap = document.querySelector(".button-wrap");
const introPlusIcon = document.querySelector(".intro-copy .button");
const introBar = document.querySelector(".intro .bar");

// intro event
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

// main red-bar event
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 99) {
    introBar.classList.remove("active");
  } else {
    introBar.classList.add("active");
  }
});

// section-about event
const windowH = window.innerHeight;
const aboutElement = document.querySelector(".about");
const aboutElementChildren = Array.from(aboutElement.children);
const sectionTitle = document.querySelectorAll("section h2");

function aboutEvent() {
  aboutElementChildren.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (windowH > itemH + 80) {
      item.classList.add("active");
    }
  });
  sectionTitle.forEach((item) => {
    const titleLoc = item.getBoundingClientRect().top;
    if (windowH > titleLoc + 80) {
      item.classList.add("active");
    }
  });
}
window.addEventListener("scroll", aboutEvent);

// section-business event
const businessChildren = document.querySelectorAll(".business li");

function businessEvent() {
  businessChildren.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (windowH > itemH + 80) {
      item.classList.add("active");
    }
  });
}
window.addEventListener("scroll", businessEvent);

// section-news,contact event
const newsChildren = document.querySelectorAll(".news li");
const moreComent = document.querySelectorAll(".more");
const contact = document.querySelector(".contact-desc");
function newsEvent() {
  newsChildren.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (windowH > itemH + 80) {
      item.classList.add("active");
    }
  });
  moreComent.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (windowH > itemH + 80) {
      item.classList.add("active");
    }
  });
  if (windowH > contact.getBoundingClientRect().top + 80) {
    contact.classList.add("active");
  }
}
window.addEventListener("scroll", newsEvent);

const topButton = document.querySelector(".go-top");
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
