import dishImg from "./assets/dish.webp";
import "./home.css";

export default function home() {
  const homePage = document.createElement("div");
  homePage.classList.add("homepage-wrapper");
  const action = document.createElement("div");
  action.classList.add("action");
  homePage.appendChild(action);
  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.textContent = "Welcome to Shaan";
  const subheaderWelcome = document.createElement("div");
  subheaderWelcome.classList.add("subheader-welcome");
  subheaderWelcome.textContent = "Food meets art. Or whatever.";
  const button = document.createElement("button");
  button.setAttribute("id", "reservation");
  button.textContent = "Reservation";
  action.append(welcome, subheaderWelcome, button);
  const img = document.createElement("img");
  img.src = dishImg;
  img.alt = "Dish Image";
  homePage.appendChild(img);
  const content = document.querySelector("#content");
  content.appendChild(homePage);
}
