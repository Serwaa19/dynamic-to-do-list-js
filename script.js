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
    removeBtn.classList.add('remove-btn'); // <-- use classList.add

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
