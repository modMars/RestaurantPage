const content = document.querySelector("#content");
const HeroSection = document.createElement("div");
const Header = document.createElement("header");

HeroSection.textContent =
  "The interplanetary diner is an incredible experience from within the stars!. You will get to experience the voidness of space while enjoying a hearty highly processed meal.";

Header.textContent = "Home";

content.append(Header, HeroSection);
