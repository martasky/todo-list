export function toggleTask(e, data, allDataArr) {
  e.currentTarget.setAttribute("id", data.id);
  console.log("id???", e.currentTarget.id);

  console.log(allDataArr);
  // if the text in the tasks is the same as value in the all tasks array, toggle checked property
  allDataArr.forEach((elem) => {
    if (elem.id == e.currentTarget.id) {
      elem.checked = !elem.checked;
    }
  });
  return allDataArr;
}
