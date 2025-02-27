document.addEventListener("DOMContentLoaded", () => {
    // Select necessary DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load without saving again
    }

    // Function to add a new task
    function addTask(taskText = taskInput.value.trim(), save = true) {
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
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", () => {
            listItem.remove();
            removeTask(taskText);
        });

        // Append button to list item and item to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        }

        // Clear input field
        taskInput.value = "";
    }

    // Function to remove task from Local Storage
    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Event listeners for adding tasks
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            addTask();
        }
    });

    // Load tasks on page load
    loadTasks();
});
