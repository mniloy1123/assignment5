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



