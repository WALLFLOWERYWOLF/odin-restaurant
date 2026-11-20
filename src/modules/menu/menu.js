import "./menu.css";
import dishImageSrc from "./assets/dish.webp";

export default function menu() {
  const menu = document.createElement("menu");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Main Course";
  menu.appendChild(title);
  menu.appendChild(wrapper);

  for (let i = 1; i <= 12; i++) {
    wrapper.appendChild(dishcardMaker());
  }

  const content = document.querySelector("#content");
  content.appendChild(menu);
}

function dishcardMaker() {
  const card = document.createElement("div");
  card.classList.add("card");
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");
  const dishImage = document.createElement("img");
  dishImage.src = dishImageSrc;
  dishImage.alt = "Dish Image";
  const wrapper2 = document.createElement("div");
  wrapper2.classList.add("wrapper2");
  const nameDisc = document.createElement("div");
  nameDisc.classList.add("namedisc");
  const dishName = document.createElement("p");
  dishName.classList.add("dishname");
  dishName.textContent = "Garlic Bread";
  const dishDisc = document.createElement("p");
  dishDisc.classList.add("dishdisc");
  dishDisc.textContent = "Roasted, caramelised garlic with crispy bread";
  const priceWrapper = document.createElement("div");
  priceWrapper.classList.add("price-wrapper");
  const price = document.createElement("p");
  price.classList.add("price");
  price.innerHTML = "&#x20B9;200";
  priceWrapper.appendChild(price);
  nameDisc.appendChild(dishName);
  nameDisc.appendChild(dishDisc);
  wrapper2.appendChild(nameDisc);
  wrapper2.appendChild(priceWrapper);
  imageWrapper.appendChild(dishImage);
  card.appendChild(imageWrapper);
  card.appendChild(wrapper2);
  return card;
}
