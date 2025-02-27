document.addEventListener("DOMContentLoaded", () => {
    // Select necessary DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input value and trim whitespace
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new task list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.onclick = () => listItem.remove(); // Remove task on button click

        // Append button to list item and item to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";
    }

    // Event listeners for adding tasks
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
