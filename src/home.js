const renderHome = () => {
  const content = document.querySelector("#content");
  const Main = document.createElement("main");
  const Section = document.createElement("section");
  const Section_div = document.createElement("div");
  const Section_h1 = document.createElement("h1");
  const Section_p = document.createElement("p");
  const Section_btn = document.createElement("button");
  Section_btn.textContent = "Menu";
  Main.className = "landing";
  Main.append(Section);
  Section_p.textContent =
    "Experience the galaxy on your plate with our out-of-this-world space cuisine!";
  Section_h1.textContent = "Void Grub";
  Section.className = "homeSection";
  Section_div.className = "hero__container";
  Section_p.className = "hero__text";
  Section_btn.className = "hero__btn";
  Section_btn.setAttribute("id", "Menu");
  Section_div.append(Section_h1, Section_p, Section_btn);
  Section.append(Section_div);
  content.append(Main);
};

export { renderHome };
//960 * 540 16:9
