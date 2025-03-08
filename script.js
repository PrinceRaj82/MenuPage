const menu = document.querySelector(".header");
const Close = document.querySelector(".close");
const Open = document.querySelector(".open");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

Open.addEventListener("click", (e) => {
  // console.log(menu);
  menu.classList.add("open-click");
  e.stopPropagation();
});

Close.addEventListener("click", (e) => {
  menu.classList.remove("open-click");
});

nav.addEventListener("click", (e) => {
  console.log(e);
  e.stopPropagation();
});

body.addEventListener("click", (e) => {
  menu.classList.remove("open-click");
});
s