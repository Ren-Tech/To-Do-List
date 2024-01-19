// DOM Elements
const taskForm = document.getElementById("taskForm");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");


taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTaskValue = newTaskInput.value.trim();

  //Add the new task to the list
  if (newTaskValue !== "") {
    addTaskToList(newTaskValue);
    taskForm.reset(); 
  }
});



function addTaskToList(task) {
 
  const listItem = document.createElement("li"); // Fix the typo here
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  listItem.innerHTML = `${task} <button class="btn btn-outline-danger btn-sm" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>`;

  taskList.appendChild(listItem);
}


function deleteTask(button) {
  const listItem = button.parentNode;
  taskList.removeChild(listItem);
}
