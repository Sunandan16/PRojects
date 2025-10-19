let inp = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

function createTask(task) {
  let li = document.createElement("li");
  li.textContent = task;
  li.classList.add("task-list-item");
  taskList.appendChild(li);
  // Smoothly scroll the newly added task into view
  li.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

addBtn.addEventListener("click", function () {
  let task = inp.value.trim();
  if (task !== "") {
    createTask(task);
    inp.value = "";
  }
});

taskList.addEventListener("click", function (e) {
  // Only toggle when an LI (task) is clicked
  let li = e.target.closest(".task-list-item");
  if (!li) return;
  li.classList.toggle("task-list-completed");
});
