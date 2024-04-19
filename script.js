const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-size")
const clearButton = document.querySelector(".clear");

let dimenstionString ="";
let grids;

//fucntion to make the grid of a given size
function makeGrid(size){
    
    let height = 500 / size;

    dimenstionString = height.toString(); 
    for(let i = 1; i <= size * size; i++){
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid");
        gridBox.setAttribute("style","height:" + dimenstionString + "px; \
                                    width: " + dimenstionString + "px; \
                                    padding: 0; \
                                    margin: 0;");
        container.appendChild(gridBox);
    }
    grids = document.querySelectorAll(".grid");
}

makeGrid(30);

function changeColor(grid){
    grid.setAttribute("style","height:" + dimenstionString + "px; \
                                width: " + dimenstionString + "px; \
                                padding: 0; \
                                margin: 0; \
                                background-color : black");
}


grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        changeColor(grid);
        console.log("hi");
    })
})

//clears the grid and makes the default 16x16 grid
clearButton.addEventListener("click", () => {
    clear();
    makeGrid(30);
})

//clears the grid 
function clear(){
    grids.forEach(grid => {
        container.removeChild(grid);
    });
}

gridButton.addEventListener("click", () => {
    clear();
    let size = prompt("Enter the size of the grid: ");
    makeGrid(size);
})
