import "./sass/style.scss";
import { openModal, closeModal } from "./modal.js";
import { removeTask } from "./removetask.js";
import { toggleTask } from "./toggleTask.js";

document.addEventListener("DOMContentLoaded", init);
let allDataArr = [];

function init() {
  registerButtons();
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

export function getValue(e) {
  console.log("was clicked");
  const form = document.querySelector("form");
  const data = {
    id: Date.now(),
    title: form.elements.name.value,
    description: form.elements.description.value,
    checked: false,
  };
  console.log(data);
  closeModal();
  createTask(data);
}

function createTask(data) {
  const task = `<div class="task-card">
        <div class="checkbox-wrapper">
          <input id="task" type="checkbox" name="task" />
          <div class="task-text-wrapper">
            <div class="task-title">${data.title}</div>
            <div class="description">
            ${data.description}
            </div>
          </div>
        </div>
        <div class="remove-icon"><img src="/assets/remove-icon.svg" /></div>
      </div>`;

  document.querySelector(".no-tasks").style.display = "none";
  let newTask = document.createElement("section");
  newTask.innerHTML = task;
  document.querySelector(".tasks").append(newTask);

  const deleteTasks = document.querySelectorAll(".remove-icon");
  deleteTasks.forEach((deleteTask) => {
    deleteTask.addEventListener("click", function (e) {
      allDataArr = removeTask(e, allDataArr);
      addToStorage(allDataArr);
    });
  });

  const toggleCheckbox = newTask.querySelector("input[type=checkbox");
  if (data.checked) {
    toggleCheckbox.click();
  }
  toggleCheckbox.addEventListener("click", function (e) {
    allDataArr = toggleTask(e, allDataArr);
    addToStorage(allDataArr);
  });

  allDataArr.push(data);
  console.log(allDataArr);
  addToStorage(allDataArr);
}

function addToStorage(data) {
  localStorage.setItem("task", JSON.stringify(data));
}
