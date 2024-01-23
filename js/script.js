const taskForm = document.getElementById("taskForm");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTaskValue = newTaskInput.value.trim();

  if (newTaskValue !== "") {
    addTaskToDatabase(newTaskValue);
  }
});

function addTaskToDatabase(taskName) {
  fetch("tasks.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "taskName=" + encodeURIComponent(taskName),
  })
    .then((response) => response.json())
    .then(renderTasks)
    .catch((error) => console.error("Error adding task:", error));
}

function deleteTaskFromDatabase(taskId, listItem) {
  fetch("tasks.php", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "taskId=" + encodeURIComponent(taskId),
  })
    .then((response) => response.json())
    .then(() => {
      listItem.remove();
    })
    .catch((error) => console.error("Error deleting task:", error));
}

function renderTasks(tasks) {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const taskText = document.createElement("span");
    taskText.textContent = task.task_name;
    taskText.classList.add("mr-2");

    const checkButton = document.createElement("button");
    checkButton.className = "btn btn-outline-success btn-sm order-2";
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.addEventListener("click", function () {
      listItem.classList.toggle("completed");
      toggleTaskStyle(
        taskText,
        listItem.classList.contains("completed"),
        checkButton
      );
    });

    const trashButton = document.createElement("button");
    trashButton.className =
      "btn btn-outline-danger btn-sm order-1 ml-auto mr-3";
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.addEventListener("click", function () {
      deleteTaskFromDatabase(task.id, listItem); 
    });

    listItem.appendChild(taskText);
    listItem.appendChild(checkButton);
    listItem.appendChild(trashButton);

    taskList.appendChild(listItem);
  });
}

function retrieveTasksFromDatabase() {
  fetch("tasks.php")
    .then((response) => response.json())
    .then(renderTasks)
    .catch((error) => console.error("Error retrieving tasks:", error));
}

retrieveTasksFromDatabase();

function toggleTaskStyle(taskText, completed, checkButton) {
  if (completed) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "grey";
    checkButton.style.backgroundColor = "green";
  } else {
    taskText.style.textDecoration = "none";
    taskText.style.color = "inherit";
    checkButton.style.backgroundColor = "";
  }
}
