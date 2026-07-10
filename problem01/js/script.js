// To-Do List — all DOM interaction is done with plain JavaScript.

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

// Builds one <li> task: the text on the left, the delete (X) button on the right.
function createTodoItem(text) {
  const item = document.createElement("li");
  item.className = "todo-item";

  const label = document.createElement("span");
  label.className = "todo-item__text";
  label.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "todo-item__delete";
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.textContent = "✕"; // ✕

  item.appendChild(label);
  item.appendChild(deleteBtn);
  return item;
}

// Adds a task, ignoring input that is empty or only whitespace.
function addTodo(text) {
  const value = text.trim();
  if (value === "") {
    return;
  }
  todoList.appendChild(createTodoItem(value));
}

// ADD: fires when the user presses Enter in the input or clicks the (+) button.
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = ""; // clear the input after adding
  todoInput.focus();
});

// One delegated listener handles both DELETE and COMPLETE for every task,
// including tasks added later.
todoList.addEventListener("click", function (event) {
  const item = event.target.closest(".todo-item");
  if (!item) {
    return;
  }

  // DELETE: clicking the X removes the task (and must not toggle it).
  if (event.target.closest(".todo-item__delete")) {
    item.remove();
    return;
  }

  // COMPLETE: clicking the task toggles its completed state.
  item.classList.toggle("todo-item--completed");
});
