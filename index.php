<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
    
</head>


<body>
    <div class="container mt-5">
        <h2 class="text-center mb-4">To-Do List</h2>


        <div class="form-container">

            <form id="taskForm" class="text-center">
                <div class="input-group mb-3">
                    <input type="text" class="form-control mx-auto" placeholder="Add a new task" id="newTask" required>
                </div>
                <button class="btn btn-add-task" type="submit">Add Task</button>
            </form>

        </div>
       
        <p>
        <div class="list-container">
            <b>TODO LIST</b>
            <ul class="list-group" id="taskList"></ul>
        </div>



    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>

