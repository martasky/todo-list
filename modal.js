export function openModal() {
  console.log("open");
  const modal = document.querySelector("#add-task-modal");
  modal.classList.remove("hidden");

  document.querySelector(".go-back-icon").addEventListener("click", closeModal);
}

export function closeModal() {
  const modal = document.querySelector("#add-task-modal");
  modal.classList.add("hidden");
}
