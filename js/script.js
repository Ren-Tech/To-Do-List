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
 const listItem = document.createElement("li");
 listItem.className="list-group-item d-flex justify-content-between align-items-center";
 

 const taskText = document.createElement("span");
 taskText.textContent = task;
 taskText.classList.add("mr-2");

 const checkButton = document.createElement("button");
 checkButton.className = "btn btn-outline-success btn-sm order-2";
 checkButton.innerHTML = '<i class="fas fa-check"></i>';
 checkButton.addEventListener("click", function(){
  listItem.classList.toggle("completed");
 });

 const trashButton = document.createElement("button");
 trashButton.className = "btn btn-outline-danger btn-sm order-1 ml-auto mr-3";
 trashButton.innerHTML = '<i class="fas fa-trash"></i>';
 trashButton.addEventListener("click", function(){
  deleteTask(listItem);
 });

 
 listItem.appendChild(taskText);
 listItem.appendChild(checkButton);
 listItem.appendChild(trashButton);

 taskList.appendChild(listItem);
}


function deleteTask(button) {
  const listItem = button.parentNode;
  taskList.removeChild(listItem);
}
