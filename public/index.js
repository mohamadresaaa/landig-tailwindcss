const btn = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
 if(menu.classList.contains("hidden")) {
  menu.classList.remove("hidden");
 } else {
  menu.classList.add("hidden");
 }
})