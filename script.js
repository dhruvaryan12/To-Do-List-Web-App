// Select elements
const addButton = document.getElementById("addTask");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Add new task
addButton.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  // Add click to delete
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // Toggle completed class
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
});
