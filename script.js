const a = document.getElementById("input-box");
const b = document.getElementById("list-container");
const c = document.getElementById("completed-counter");
const d = document.getElementById("uncompleted-counter");
function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  c.textContent = completedTasks;
  d.textContent = uncompletedTasks;
}
function addTask() {
  const task = a.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }
const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
  `;
  b.appendChild(li);
  a.value = "";
  updateCounters();
  const checkbox = li.querySelector("input");
  const editBtn = li.querySelector(".edit-btn");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });
editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked = false;
      updateCounters();
    }
  });deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
  });
}
document.getElementById("input-button").addEventListener("click", addTask);
