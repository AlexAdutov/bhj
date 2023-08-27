const value = document.querySelector(".dropdown__value");
const dropdown = document.querySelector(".dropdown");
console.log(dropdown)
const items = Array.from(document.querySelectorAll(".dropdown__item"));
const list = document.querySelector(".dropdown__list");

const renameMenu = function (event) {
  event.preventDefault();
  value.textContent = event.target.closest(".dropdown__item").textContent;
};

const openMenu = function () {
  list.classList.toggle("dropdown__list_active");
  if (list.classList.contains("dropdown__list_active")) {
    items.forEach((item) => item.addEventListener("click", renameMenu));
  }
};
dropdown.addEventListener("click", openMenu);