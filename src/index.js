import "./style.css";
import home from "./modules/home/home.js";

const homeBtn = document.querySelector("#home-btn");

home();

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  home();
});
