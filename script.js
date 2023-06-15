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
    let trs = document.querySelectorAll("table tr")
    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    columns++;
}

const removeColumn = document.getElementById("removeColumns");
removeColumn.onclick = () => {
    let trs = document.querySelectorAll("table tr")
    for (let tr of trs) {
      let lastCellIndex = tr.cells.length - 1;
      tr.deleteCell(lastCellIndex);
    }
    columns--;
}

const fillEmptyButton = document.getElementById("fillAllUncolored");

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

