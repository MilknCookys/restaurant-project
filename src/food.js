import { clearContent } from "./clearContent.js";

function renderFoodPage() {
  const content = document.querySelector("#content");

  function createElementWithID(elementName, id, textContent, appendTarget) {
    let element = document.createElement(elementName);
    element.id = id;
    element.textContent = textContent;

    appendTarget.appendChild(element);

    return element;
  }

  function createElementWithClass(
    elementName,
    className,
    textContent,
    appendTarget
  ) {
    let element = document.createElement(elementName);
    element.class = className;
    element.textContent = textContent;

    appendTarget.appendChild(element);

    return element;
  }

  const container = createElementWithID("div", "container", "", content);
  const breakfast = createElementWithID(
    "h1",
    "breakfast",
    "Breakfast",
    container
  );
  createElementWithClass(
    "p",
    "description",
    "Yallingup Wood Fired Fruit Toast, Butter, Estate Honey (vgo, dfo) – $12.5",
    container
  );
  createElementWithClass(
    "p",
    "description",
    "Fried Banana Banoffee Crêpes, Cinnamon Bannister Downs Chantilly Cream, Blueberry Compote (gf, dfo) – $25",
    container
  );
  createElementWithClass(
    "p",
    "description",
    "Poached Eggs, Hollandaise, Bacon, Woodfired Sourdough (gfo, dfo, nf, afo) – $28",
    container
  );
  createElementWithClass(
    "p",
    "description",
    "Scrambled Eggs, Bacon, Woodfired Sourdough (gfo, dfo, nf, af) – $28",
    container
  );
  createElementWithClass(
    "p",
    "description",
    "Potato Rösti, Roquette, Goats Cheese, Bush Tomato Chutney (df, nf) – $26",
    container
  );
}

export { renderFoodPage };
