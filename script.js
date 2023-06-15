let colored = false;

const fillEmptyButton = document.getElementById("fillAllUncolored");
const fillAllButton = document.getElementById("fillAll");

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

const addColumn = document.getElementById("addColumns");
addColumn.onclick = () => {
  let trs = document.querySelectorAll("table tr");
  for (let tr of trs) {
    let td = document.createElement("td");
    tr.appendChild(td);
  }
  columns++;
};

const removeColumn = document.getElementById("removeColumns");
removeColumn.onclick = () => {
  let trs = document.querySelectorAll("table tr");
  for (let tr of trs) {
    let lastCellIndex = tr.cells.length - 1;
    tr.deleteCell(lastCellIndex);
  }
  columns--;
};

function getSelectedColor() {
  const colors = document.getElementById("color");
  return colors.value;
}
function isGridItem(ele) {
  return ele.target.tagName.toLowerCase() === 'td';
}

grid.addEventListener("click", (ele) => {
  if (isGridItem(ele)) {
      ele.target.style.backgroundColor = getSelectedColor();
  }
});

function clearAll() {
  let cells = grid.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (!colored) {
      cell.style.backgroundColor = "white";
    }
  }
}

grid.onclick = function (event) {
  event.target.style.backgroundColor = getSelectedColor();
};

grid.onmousedown = function () {
  colored = true;
};
grid.onmouseup = function () {
  colored = false;
};

grid.onmousemove = function (event) {
  if (colored) {
    event.target.style.backgroundColor = getSelectedColor();
  }
};

fillEmptyButton.addEventListener("click", () => {
  const dataCells = grid.getElementsByTagName('td');
  for (let i = 0; i < dataCells.length; i++) {
      let elem = dataCells[i];
      let computedStyle = window.getComputedStyle(elem);
      if (computedStyle.getPropertyValue("background-color") === "transparent") {
          elem.style.backgroundColor = getSelectedColor();
      }
  }
});