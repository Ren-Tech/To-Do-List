<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Add Task
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $taskName = $_POST["taskName"];
    $completed = false;

    $stmt = $conn->prepare("INSERT INTO tasks (task_name, completed) VALUES (?, ?)");
    $stmt->bind_param("si", $taskName, $completed);
    $stmt->execute();
    $stmt->close();
}

// Retrieve Tasks
$tasks = [];
$result = $conn->query("SELECT id, task_name, completed FROM tasks");
while ($row = $result->fetch_assoc()) {
    $tasks[] = $row;
}

// Delete Task
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    parse_str(file_get_contents("php://input"), $deleteVars);
    $taskId = $deleteVars["taskId"];

    $conn->query("DELETE FROM tasks WHERE id = $taskId");
}

$conn->close();

echo json_encode($tasks);

