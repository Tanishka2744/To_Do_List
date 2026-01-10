const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    let taskText = inputBox.value.trim();
    if (taskText === '') {
        alert("You must write something");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = "";

    saveData();
}

// Toggle checked or delete task
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load from localStorage
function showTask() {
    let data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}

showTask();
