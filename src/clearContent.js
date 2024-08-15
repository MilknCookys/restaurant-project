function clearContent() {
  const content = document.querySelector("#content");

  content.replaceChildren();
}

export { clearContent };
