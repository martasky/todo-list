export function removeTask(e, allDataArr) {
  console.log("parent", e.currentTarget.parentElement.parentElement);
  const tasks = document.querySelector(".tasks");
  console.log(tasks.childNodes.length);

  // if all to do tasks has been removed, show no tasks
  if (tasks.childNodes.length === 1) {
    document.querySelector(".no-tasks").style.display = "inherit";
  }
  //find the text in the tasks, which is the same as in the all tasks arry

  e.currentTarget.parentElement.parentElement.remove();
  const toBeRemoved = e.currentTarget.parentElement.parentElement.id;
  console.log("toberemoved", toBeRemoved);
  //gets all the other objects which doesnt contain the same value as the item clicked to be removed
  return allDataArr.filter((elem) => elem.id != toBeRemoved);
}
