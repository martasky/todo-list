export function toggleTask(e, allDataArr) {
  console.log(e.currentTarget);

  let title =
    e.currentTarget.parentElement.parentElement.querySelector(
      ".task-title"
    ).textContent;
  console.log(title);
  let desc =
    e.currentTarget.parentElement.parentElement.querySelector(
      ".description"
    ).textContent;

  console.log(allDataArr);
  // if the text in the tasks is the same as value in the all tasks array, toggle checked property
  allDataArr.forEach((elem) => {
    if (
      elem.title.trim() == title.trim() &&
      elem.description.trim() == desc.trim()
    ) {
      elem.checked = !elem.checked;
    }
  });
  return allDataArr;
}
