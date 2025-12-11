// Function to add task
function AddTask() {
    const taskInput = document.getElementById("taskInput");
    const taskContainer = document.getElementById("taskContainer");

    // Get the input value
    const taskValue = taskInput.value.trim();

    // If the input is not empty
    if (taskValue) {
        // Create a new div for the task
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        // Add the task text to the div
        const taskText = document.createElement("span");
        taskText.textContent = taskValue;
        taskDiv.appendChild(taskText);

        // Create Done button
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("done-btn");
        doneButton.onclick = function () {
            taskDiv.style.backgroundColor = "#90EE90";  // Mark task as done (light green)
            doneButton.disabled = true;  // Disable Done button after completion
        };
        taskDiv.appendChild(doneButton);

        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function () {
            taskContainer.removeChild(taskDiv);  // Remove task
        };
        taskDiv.appendChild(deleteButton);

        // Append the task div to the taskContainer
        taskContainer.appendChild(taskDiv);

        // Clear the input box after adding the task
        taskInput.value = "";
    } else {
        // If the input is empty, alert the user
        alert("Please enter a task.");
    }
}
