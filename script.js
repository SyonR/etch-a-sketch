// i: number of rows (the rows)
// j: number of columns (the elements inside of the rows)
// n: the width of the square
// grid: the grid
function fixBorder(row, i, j, n) {

    let square = row[j];
    console.log(square); 

    square.top = (i === 0) ? 2 : 1;
    square.left = (j === 0) ? 2 : 1;
    square.right = (j === n - 1) ? 2 : 1;
    square.bottom = (i === n - 1) ? 2 : 1;

    console.log(square);

}

const container = document.querySelector("#container");
const grid = [];
let n = 16

for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
        row.push({ top: 1, left: 1, right: 1, bottom: 1 });
        const square = document.createElement("div");
        square.classList.add("squares");

        fixBorder(row, i, j, n)

        square.style.borderStyle = "solid";
        square.style.borderTopWidth = `${row[j].top}px`;
        square.style.borderLeftWidth = `${row[j].left}px`;
        square.style.borderRightWidth = `${row[j].right}px`;
        square.style.borderBottomWidth = `${row[j].bottom}px`;

        container.appendChild(square);
    } 
    grid.push(row);
}



