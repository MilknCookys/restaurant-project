export function renderHomePage() {
  const content = document.querySelector("#content");

  function horizontalRule(appendTarget) {
    let element = document.createElement("hr");
    appendTarget.appendChild(element);

    return element;
  }

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

  const home = createElementWithID("div", "home", "", content);

  const homeHeader = createElementWithID("h1", "homeText", "Home", home);
  console.log(homeHeader);

  const summary = createElementWithID(
    "p",
    "summary",
    "Welcome to Fancy Restaurant. We make fancy food and fancy drinks that do not follow any semblance of a reasonable price to value ratio. We hope you enjoy!",
    home
  );

  const horizontalRuleOne = horizontalRule(home);

  const sunday = createElementWithClass(
    "p",
    "hours",
    "Sunday: 7pm - 11pm",
    home
  );
  const monday = createElementWithClass(
    "p",
    "hours",
    "Monday: 6pm - 12am",
    home
  );
  const tuesday = createElementWithClass(
    "p",
    "hours",
    "Tuesday: 6pm - 12am",
    home
  );
  const wednesday = createElementWithClass(
    "p",
    "hours",
    "Wednesday: 6pm - 12am",
    home
  );
  const thursday = createElementWithClass(
    "p",
    "hours",
    "Thursday: 6pm - 12am",
    home
  );
  const friday = createElementWithClass(
    "p",
    "hours",
    "Friday: 6pm - 12am",
    home
  );
  const saturday = createElementWithClass(
    "p",
    "hours",
    "Saturday: 7pm - 11pm",
    home
  );

  const horizontalRuleTwo = horizontalRule(home);

  const location = createElementWithID(
    "p",
    "location",
    "123 Some Street, Some Town, Some State",
    home
  );

  console.log(summary);

  home.setAttribute(
    "style",
    "margin:20px; border-radius:4px; flex-grow:1; display:flex; flex-direction:column; align-items:center; gap:40px;"
  );

  homeHeader.setAttribute(
    "style",
    "color:black; font-weight:bold; margin-top:80px;"
  );

  summary.setAttribute(
    "style",
    "color:black; width:35%; text-align:center; font-size:larger;"
  );

  horizontalRuleOne.setAttribute("style", "border:1px solid black; width: 35%");
  horizontalRuleTwo.setAttribute("style", "border:1px solid black; width: 35%");
}
