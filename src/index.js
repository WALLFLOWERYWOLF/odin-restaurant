import "./style.css";
import home from "./modules/home/home.js";
import menu from "./modules/menu/menu.js";
import contact from "./modules/contact/contact.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

home();

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  home();
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  menu();
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  contact();
});
