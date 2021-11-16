export function toggleTask(e, allDataArr) {
  console.log("remove was clicked");
  console.log(e.currentTarget);
  /*   if (e.currentTarget.checked) {
    allDataArr.checked = true;
  } */

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
