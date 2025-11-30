document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Only proceed if input is not empty
        if (taskText !== "") {
            // Create a new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";

            // Remove task when button is clicked
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };

            // Append remove button to li and li to task list
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
