const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-size")
const clearButton = document.querySelector(".clear");


let heightString = "31.25px";
let widthString = "31.25px";

//creating the default grid 16x16
for(let i = 1; i <= 256; i++){
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid")
    gridBox.setAttribute("style","height: 31.25px; \
                                width: 31.25px; \
                                padding: 0; \
                                margin: 0;");
    container.appendChild(gridBox);
}


const grids = document.querySelectorAll(".grid")

//creating the grid using the prompt of the user
function makeGrid(size){
    let height = 500/size;
    let width = 500/size;

    let heightString = height.toString() + "px";
    let widthString = width.toString() +"px";

    console.log(heightString);

    for(let i = 1; i <= size**2; i++){
        grids.forEach(gridBox => {
            gridBox.setAttribute("style","height: " + heightString +";" +
                                        "width: " + widthString + ";" +
                                        "padding: 0; \
                                        margin: 0;");
        })
    }
}

//hover effect 
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.setAttribute("style","height: " + heightString +";" +
                                    "width: " + widthString + ";" +
                                    "padding: 0; \
                                    margin: 0; \
                                    background-color : black;");
    })
});


//taking the grid size as an input
gridButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the grid size");
    clear();
    makeGrid(gridSize);
});



//clearing the grid
function clear(){
    grids.forEach(grid => {
        grid.setAttribute("style","height: 31.25px; \
                                    width: 31.25px; \
                                    padding: 0; \
                                    margin: 0;\
                                    background-color: white") 
    })
}

clearButton.addEventListener("click", () => clear())

