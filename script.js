// Setup Event Listener for Page Load
// This ensures JavaScript code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    // Get references to the button, input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Create the addTask Function
    // This function is responsible for adding new tasks to the list
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            // Prompt the user to enter a task if input is empty
            alert("Please enter a task");
            return;
        }
        
        // Task Creation and Removal
        // Create a new li element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Assign an onclick event to the remove button that removes the li element
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append the remove button to the li element
        li.appendChild(removeButton);
        
        // Append the li to taskList
        taskList.appendChild(li);
        
        // Clear the task input field
        taskInput.value = "";
    }
    
    // Attach Event Listeners
    // Add an event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);
    
    // Add an event listener to taskInput for the 'keypress' event
    // This allows tasks to be added by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is 'Enter'
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
});

