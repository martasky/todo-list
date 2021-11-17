export function removeTask(e, allDataArr) {
  console.log(e.currentTarget.parentElement.parentElement);
  const tasks = document.querySelector(".tasks");
  console.log(tasks.childNodes.length);

  // if all to do tasks has been removed, show no tasks
  if (tasks.childNodes.length === 1) {
    document.querySelector(".no-tasks").style.display = "inherit";
  }
  //find the text in the tasks, which is the same as in the all tasks arry
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

  //gets all the other objects which doesnt contain the same value as the item clicked to be removed
  return allDataArr.filter(
    (elem) =>
      !(
        elem.title.trim() === title.trim() &&
        elem.description.trim() === desc.trim()
      )
  );
}
