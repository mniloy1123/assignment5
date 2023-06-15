let grid = document.getElementById("grid");
let rows = 1;
let columns = 1;

function addRows() {
  let row = document.createElement("tr");
  row.classList.add("row");
  grid.appendChild(row);
  for (let i = 0; i < columns; i++) {
    let column = document.createElement("td");
    column.classList.add("column");
    row.appendChild(column);
  }
  rows++;
}

function removeRows() {
  var numRows = grid.rows.length;
  if (numRows > 0) {
    grid.deleteRow(numRows - 1);
  }
}

function clearAll() {
  let cells = grid.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.style.backgroundColor = "white";
  }
}

let colored = false;
let color = document.getElementById("color");
cell.onclick = function (event) {
  event.target.style.backgroundColor = color.value;
};
cell.onmousedown = function () {
  colored = true;
};
cell.onmouseup = function () {
  colored = false;
};
cell.onmousemove = function (event) {
  if (colored) {
    event.target.style.backgroundColor = color.value;
  }
};
