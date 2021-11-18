export function autoExpandTextarea() {
  const el = document.querySelector("textarea");
  el.style.height = el.setAttribute(
    "style",
    "height: " + el.scrollHeight + "px"
  );
  /* el.classList.add("auto"); */
  el.addEventListener("input", (e) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  });
}
