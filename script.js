const headerMenu = document.querySelector(".header__menu");
const navList = document.querySelector(".nav__list");

headerMenu.addEventListener("click", () => {
  navList.classList.toggle("show");
});

navList.childNodes.forEach((item) => {
  item.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});
