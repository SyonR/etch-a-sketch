const DEFAULTLENGTH = 16;
let hoverState = "black";

// HOVER COLOR AND EFFECTS

const blackBtn = document.querySelector("#blackBtn");
blackBtn.addEventListener("click", () => hoverState = "black");
const rainbowBtn = document.querySelector("#rainbowBtn");
rainbowBtn.addEventListener("click", () => hoverState = "rainbow");
const darkBtn = document.querySelector("#darkBtn");
darkBtn.addEventListener("click", () => hoverState = "darken");

// GRID CREATION

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
            square.dataset.opacity = 0;

            square.style.width = `${960 / n}px`;
            square.style.height = `${960 / n}px`;

            fixBorder(row, i, j, n)

            square.style.borderStyle = "solid";
            square.style.borderTopWidth = `${row[j].top}px`;
            square.style.borderLeftWidth = `${row[j].left}px`;
            square.style.borderRightWidth = `${row[j].right}px`;
            square.style.borderBottomWidth = `${row[j].bottom}px`;

            function changeColor(hoverState) {
                if (hoverState == "black") square.style.backgroundColor = "rgb(50, 50, 50)";
                else if (hoverState == "rainbow") {
                    square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                }
                else if (hoverState == "darken") {
                    let opacity = parseFloat(square.dataset.opacity); 
                    opacity = Math.min(opacity + 0.2, 1);            
                    square.dataset.opacity = opacity;                
                    square.style.backgroundColor = `rgba(0,0,0,${opacity})`;
                }
            }

            square.addEventListener("mouseenter", () => changeColor(hoverState));
            container.appendChild(square);
        } 
        grid.push(row);
    }
}

const gridBtn = document.querySelector("#gridBtn");
gridBtn.addEventListener("click", () => {
    let inputLength;

    do {
        inputLength = Number(prompt("Enter grid dimension (Max 100)", 16));
    } while (
        !Number.isFinite(inputLength) ||
        inputLength <= 0 ||              
        inputLength >= 101               
    );

    container.textContent = "";
    createGrid(inputLength);
});

createGrid(DEFAULTLENGTH);