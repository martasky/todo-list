import "./sass/style.scss";
import { openModal, closeModal } from "./modal.js";
import { removeTask } from "./removetask.js";
import { toggleTask } from "./toggleTask.js";
import { showDescription } from "./showDescription";

document.addEventListener("DOMContentLoaded", init);
let allDataArr = [];

function init() {
  registerButtons();
  // check if there is something in localstorage and if so get it
  if (localStorage.length != 0) {
    let tasks = JSON.parse(localStorage.getItem("task"));
    console.log("storage", tasks);
    tasks.forEach((task) => {
      createTask(task);
    });
  }
}

function registerButtons() {
  const buttons = document.querySelectorAll(".main-page-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
  const addBtn = document.querySelector(".submit");
  addBtn.addEventListener("click", getValue);
}

// get the value from input fields
function getValue(e) {
  const form = document.querySelector("form");
  const data = {
    id: Math.random(),
    title: form.elements.name.value,
    description: form.elements.description.value,
    checked: false,
  };
  console.log(data);
  closeModal();
  createTask(data);
}

//create new to do item
function createTask(data) {
  const task = `<div class="task-card">
        <div class="checkbox-wrapper">
          <input class="task" type="checkbox" name="task" />
          <div class="task-text-wrapper">
            <div class="task-title">${data.title}</div>
            <div class="description">
            ${data.description.substring(0, 25)}
            </div>
          </div>
        </div>
        <div class="remove-icon"></div>
      </div>`;

  document.querySelector(".no-tasks").style.display = "none";
  let newTask = document.createElement("section");
  newTask.innerHTML = task;
  document.querySelector(".tasks").append(newTask);

  newTask.setAttribute("id", data.id);
  console.log("newtask", newTask);

  //when item has been clicked, it returnes the array without it and sends it to localstorage
  const deleteTask = newTask.querySelector(".remove-icon");
  deleteTask.addEventListener("click", function (e) {
    allDataArr = removeTask(e, allDataArr);
    console.log("after removed", allDataArr);
    addToStorage(allDataArr);
  });

  //add ... to long descriptions
  const desc = newTask.querySelector(".description");
  if (desc.textContent.length >= 51) {
    desc.textContent = `${data.description.substring(0, 25)}...`;
  }
  //toggle description
  desc.addEventListener("click", function (e) {
    console.log("after click", desc.textContent.length);
    if (desc.textContent.length <= 54) {
      console.log(desc.textContent.length);
      showDescription(e, data);
    } else {
      console.log(desc.textContent.length);
      desc.textContent = `${data.description.substring(0, 25)}...`;
    }
  });

  //if localstorage is not empty, it checkes if some items are checked and it clickes it to change the checkbox
  const toggleCheckbox = newTask.querySelector("input[type=checkbox");
  if (data.checked) {
    toggleCheckbox.click();
  }

  //When input checkbox has been clicked, it updates the array and sends it to local storage
  toggleCheckbox.addEventListener("click", function (e) {
    allDataArr = toggleTask(e, data, allDataArr);

    addToStorage(allDataArr);
  });
  //add new item to the array of all tasks
  allDataArr.push(data);
  console.log(allDataArr);
  addToStorage(allDataArr);
}
//saves the array of all tasks in localstorage
function addToStorage(data) {
  localStorage.setItem("task", JSON.stringify(data));
}
