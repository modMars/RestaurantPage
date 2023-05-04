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

let displayManager = (() => {
  const clearDisplay = () => {
    let content = document.querySelector("#content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };
  return { clearDisplay };
})();

renderHome();

const Home = document.querySelector("#Home");
Home.addEventListener("click", () => {
  displayManager.clearDisplay();
  renderHome();
});

const Menu = document.querySelector("#Menu");
Menu.addEventListener("click", () => {
  displayManager.clearDisplay();
  renderMenu();
});

const Contact = document.querySelector("#Contact");
Contact.addEventListener("click", () => {
  displayManager.clearDisplay();
  renderContact();
});
