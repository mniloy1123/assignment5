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

const addColumn = document.getElementById("addColumns");
addColumn.onclick = () => {
    let trs = document.querySelectorAll("table tr")
    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
}
