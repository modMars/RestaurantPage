const renderContact = () => {
  const content = document.querySelector("#content");
  const Header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const Main = document.createElement("main");
  const Section = document.createElement("section");
  const Section_div = document.createElement("div");
  Main.className = "landing";
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
  Main.append(Section);
  Section.className = "homeSection";
  Section_div.className = "hero__container";
  Section_div.append();
  Section.append(Section_div);
  content.append(Header, Main);
};

export { renderContact };
