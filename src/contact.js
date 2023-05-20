const renderContact = () => {
  const content = document.querySelector("#content");
  const Main = document.createElement("main");
  const Section = document.createElement("section");
  const Section_div = document.createElement("div");
  const form = document.createElement("form");
  const name__label = document.createElement("label");
  const form__name = document.createElement("input");
  const email__label = document.createElement("label");
  const form__email = document.createElement("input");
  const message__label = document.createElement("label");
  const form__message = document.createElement("textarea");
  const submit__btn = document.createElement("button");
  Main.className = "landing";

  form.setAttribute("action", "https://www.text.com");
  form.setAttribute("method", "post");
  form__name.setAttribute("id", "form__name");
  form__name.setAttribute("type", "text");
  name__label.setAttribute("for", "form__name");
  name__label.textContent = "Name";
  form__email.setAttribute("id", "form__email");
  form__email.setAttribute("type", "text");
  email__label.setAttribute("for", "form__email");
  email__label.textContent = "E-Mail";
  form__message.setAttribute("id", "form__message");
  form__message.setAttribute("type", "textarea");
  message__label.setAttribute("for", "form__message");
  message__label.textContent = "Message";
  submit__btn.textContent = "Submit";
  submit__btn.setAttribute("id", "form__submit");

  Main.append(Section);
  Section.className = "contactSection";
  Section_div.className = "contact__container";
  form.append(
    name__label,
    form__name,
    email__label,
    form__email,
    message__label,
    form__message,
    submit__btn
  );
  Section_div.append(form);
  Section.append(Section_div);
  content.append(Main);
};

export { renderContact };
