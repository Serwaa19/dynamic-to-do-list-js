document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    loadTasks();

    // Add task when clicking the "Add Task" button
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Add task when pressing Enter in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Function to add a task
    function addTask(taskText, save = true) {
        taskText = taskText.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');

        // Create span for task text
        const span = document.createElement('span');
        span.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // Proper DOM manipulation

        // Remove task when clicked
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            taskInput.value = "";
            saveTaskToStorage(taskText);
        }
    }

    // Save task to Local Storage
    function saveTaskToStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false)); // false = do not save again
    }
});
