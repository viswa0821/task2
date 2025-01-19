// JavaScript Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate Name
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Message
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// To-Do List Functionality
function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskInput}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    document.getElementById("taskInput").value = ""; // Clear input field
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
