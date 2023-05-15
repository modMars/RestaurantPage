const renderContact = () => {
  const content = document.querySelector("#content");
  const Main = document.createElement("main");
  const Section = document.createElement("section");
  const Section_div = document.createElement("div");
  Main.className = "landing";

  Main.append(Section);
  Section.className = "homeSection";
  Section_div.className = "hero__container";
  Section_div.append();
  Section.append(Section_div);
  content.append(Main);
};

export { renderContact };
