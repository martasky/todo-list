export function showDescription(e, data) {
  console.log("desc was clicked");
  console.log(e.currentTarget);
  e.currentTarget.textContent = data.description;
}
