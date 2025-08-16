const DEFAULTLENGTH = 16;

function createGrid(n) {
    const container = document.querySelector("#container");

    // i: number of rows (the rows)
    // j: number of columns (the elements inside of the rows)
    // n: the width of the square
    // grid: the grid
    function fixBorder(row, i, j, n) {

        let square = row[j];

        square.top = (i === 0) ? 2 : 1;
        square.left = (j === 0) ? 2 : 1;
        square.right = (j === n - 1) ? 2 : 1;
        square.bottom = (i === n - 1) ? 2 : 1;
    }

    // generate the grid and 2D array to fix borders
    const grid = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push({ top: 1, left: 1, right: 1, bottom: 1 });
            const square = document.createElement("div");
            square.classList.add("squares");

            square.style.width = `${960 / n}px`;
            square.style.height = `${960 / n}px`;

            fixBorder(row, i, j, n)

            square.style.borderStyle = "solid";
            square.style.borderTopWidth = `${row[j].top}px`;
            square.style.borderLeftWidth = `${row[j].left}px`;
            square.style.borderRightWidth = `${row[j].right}px`;
            square.style.borderBottomWidth = `${row[j].bottom}px`;

            square.addEventListener("mouseenter", () => square.style.backgroundColor = "rgb(50, 50, 50)");

            container.appendChild(square);
        } 
        grid.push(row);
    }
}


const gridBtn = document.querySelector("#gridBtn");
gridBtn.addEventListener("click", () => {
    let inputLength;

    do {
        inputLength = Number(prompt("Enter grid dimension (Max 100)"));
    } while (
        !Number.isFinite(inputLength) ||
        inputLength <= 0 ||              
        inputLength >= 101               
    );

    container.textContent = "";
    createGrid(inputLength);
});

createGrid(DEFAULTLENGTH);

