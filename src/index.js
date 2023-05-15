import "./Galaxy.jpg";
import "./Landing.jpg";
import { renderContact } from "./contact.js";
import "./dinner.webp";
import "./dinner2.webp";
import { renderHome } from "./home.js";
import "./landingbg.svg";
import { renderMenu } from "./menu.js";
import "./space.webp";
import "./space2.webp";
import "./style.css";

const renderNavBar = () => {
  const Header = document.createElement("header");
  const content = document.querySelector("#content");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    let arr = ["Home", "Menu", "Contact"];
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = arr[i];
    a.setAttribute("id", arr[i]);
    li.append(a);
    ul.append(li);
  }
  nav.append(ul);
  Header.append(nav);
  content.append(Header);
};

let displayManager = (() => {
  const clearDisplay = () => {
    let content = document.querySelector("#content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };

  const addListeners = () => {
    const Home = document.querySelector("#Home");
    Home.addEventListener("click", () => {
      clearDisplay();
      renderNavBar();
      renderHome();
      addListeners();
    });
    const Menu = document.querySelectorAll("#Menu");
    Menu.forEach((menu) => {
      menu.addEventListener("click", () => {
        clearDisplay();
        renderNavBar();
        renderMenu();
        addListeners();
      });
    });
    const Contact = document.querySelector("#Contact");
    Contact.addEventListener("click", () => {
      clearDisplay();
      renderNavBar();
      renderContact();
      addListeners();
    });
  };
  return { clearDisplay, addListeners };
})();

renderNavBar();
renderHome();
displayManager.addListeners();
