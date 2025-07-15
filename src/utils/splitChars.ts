export const splitChars = (element: HTMLElement): void => {
  if (!element) return;

  const text = element.textContent ?? "";
  element.innerHTML = "";

  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("char");
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    element.appendChild(span);
  }
};

export const splitCharsWords = (element: HTMLElement): void => {
  if (!element) return;

  const text = element.textContent ?? "";
  element.innerHTML = "";
  const parts = text.split(/\s+/);

  parts.forEach((part) => {
    const word = document.createElement("span");
    word.classList.add("word");
    word.style.display = "inline-flex";

    for (const char of part) {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.classList.add("char");
      charSpan.style.display = "inline-block";
      charSpan.style.whiteSpace = "pre";
      word.appendChild(charSpan);
    }

    element.appendChild(word);
  });
};
