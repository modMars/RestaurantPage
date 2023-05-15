const renderMenu = () => {
  const content = document.querySelector("#content");
  const Main = document.createElement("main");
  const Section = document.createElement("section");
  const Section_div = document.createElement("div");
  const Section_h2 = document.createElement("h2");

  Main.className = "landing";

  const menuItems = [
    {
      name: "Cosmic Calamari",
      description: "Tender calamari rings, crispy batter, tangy sauce.",
      price: "$9.99",
    },
    {
      name: "Meteoric Mozzarella Sticks",
      description: "Crispy mozzarella sticks, marinara sauce.",
      price: "$10.99",
    },
    {
      name: "Lunar Lobster Bisque",
      description: "Creamy lobster bisque, lunar spice, garlic bread.",
      price: "$12,99",
    },
    {
      name: "Nebulae New York Strip",
      description: "Grilled NY strip, cosmic spices, mashed potatoes, veggies.",
      price: "$24.99",
    },
    {
      name: "Interstellar Infrared Salmon",
      description:
        "Pan-seared salmon, infrared spices, quinoa, citrus glaze, asparagus.",
      price: "$22.99",
    },
    {
      name: "Alien Au Gratin",
      description:
        "Layered potato dish, mushrooms, intergalactic cheeses, rocket salad.",
      price: "$19.99",
    },
    {
      name: "Comet Chocolate Cake",
      description: "Moist chocolate cake, ganache, gold leaf.",
      price: "$8.99",
    },
    {
      name: "Saturn's Rings Cheesecake",
      description:
        "Tangy cheesecake, raspberry/blueberry swirl, whipped cream.",
      price: "$9.99",
    },
    {
      name: "Meteorite Mousse",
      description: "Light fruit mousse, mint, martini glass.",
      price: "$7.99",
    },
    {
      name: "Moonlight Martini",
      description: "Vodka, blue curacao, lemon juice, lemon twist.",
      price: "$12.99",
    },
    {
      name: "Interstellar IPA",
      description: "Hoppy IPA, cosmic hops, malts.",
      price: "$8.99",
    },
    {
      name: "Zero-Gravity Lemonade",
      description: "Refreshing lemonade, mint, ice.",
      price: "$4.99",
    },
  ];

  let menu = document.createElement("ul");
  menu.className = "menuList";
  for (let i = 0; i < 12; i++) {
    let menuItem = document.createElement("li");
    const name = menuItems[i].name;
    const description = menuItems[i].description;
    const price = menuItems[i].price;
    for (let j = 0; j < 3; j++) {
      let span = document.createElement("span");
      switch (j) {
        case 0:
          span.setAttribute("id", "itemName");
          span.textContent = `${name}`;
          menuItem.append(span);
          break;

        case 1:
          span.setAttribute("id", "itemDescription");
          span.textContent = `${description}`;
          menuItem.append(span);
          break;

        case 2:
          span.setAttribute("id", "itemPrice");
          span.textContent = `${price}`;
          menuItem.append(span);
          break;
      }
    }
    menuItem.setAttribute("class", "menuItem");
    menu.append(menuItem);
  }

  Main.append(Section);
  Section_h2.textContent = "Menu";
  Section.className = "menuSection";
  Section_div.className = "menu__container";
  Section_div.append(Section_h2, menu);
  Section.append(Section_div);
  content.append(Main);
};

export { renderMenu };
