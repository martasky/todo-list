export function removeTask(e, allDataArr) {
  console.log("remove was clicked");
  console.log(e.currentTarget.parentElement.parentElement);
  const tasks = document.querySelector(".tasks");
  console.log(tasks.childNodes.length);
  if (tasks.childNodes.length === 1) {
    document.querySelector(".no-tasks").style.display = "inherit";
  }
  let title =
    e.currentTarget.parentElement.parentElement.querySelector(
      ".task-title"
    ).textContent;
  console.log(title);
  let desc =
    e.currentTarget.parentElement.parentElement.querySelector(
      ".description"
    ).textContent;
  e.currentTarget.parentElement.parentElement.remove();

  return allDataArr.filter(
    (elem) =>
      !(
        elem.title.trim() == title.trim() &&
        elem.description.trim() == desc.trim()
      )
  );
}
