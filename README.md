# AnhNT_fee.exams.opt1

Front-End Essentials — Exam (Option 1). Plain HTML, CSS and JavaScript. No CSS framework is used.

## Structure

```
AnhNT_fee.exams.opt1/
├── problem01/            To-Do List app
│   ├── index.html
│   ├── css/style.css
│   └── js/script.js
└── problem02/            Spiral Matrix (bonus)
    ├── index.html
    ├── css/style.css
    └── js/
        ├── spiralMatrix.js   the spiralMatrix(n) function
        └── demo.js           renders the matrix as a table
```

## Problem 01 — To-Do List

Open `problem01/index.html` in a browser.

- **Add** — type in the input and press <kbd>Enter</kbd>, or click the ⊕ button. The input is cleared after each add. Empty/whitespace input is ignored.
- **Delete** — click the ✕ button on a task.
- **Complete** — click a task to toggle it. Completed tasks turn green (pending tasks are blue).

All DOM interaction is done with plain JavaScript (`js/script.js`). Delete and complete
are handled by a single delegated `click` listener on the list, so tasks added later
work without re-binding.

## Problem 02 — Spiral Matrix (bonus)

`spiralMatrix(n)` returns an `n × n` matrix filled with `1..n²` in spiral order.

```js
spiralMatrix(3);
// [ [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5] ]
```

Open `problem02/index.html` for an interactive demo, or run it in Node:

```bash
node -e "console.log(require('./problem02/js/spiralMatrix.js')(5))"
```
