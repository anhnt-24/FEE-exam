// Renders the result of spiralMatrix(n) as a table.

const spiralForm = document.querySelector("#spiralForm");
const sizeInput = document.querySelector("#sizeInput");
const output = document.querySelector("#output");

function renderMatrix(matrix) {
  const table = document.createElement("table");
  table.className = "matrix";

  matrix.forEach(function (row) {
    const tr = document.createElement("tr");
    row.forEach(function (cell) {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  output.innerHTML = "";
  output.appendChild(table);
}

spiralForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const n = Number(sizeInput.value);
  if (!Number.isInteger(n) || n < 1) {
    return;
  }
  renderMatrix(spiralMatrix(n));
});

// Show the n = 5 example from the exam on first load.
renderMatrix(spiralMatrix(Number(sizeInput.value)));
