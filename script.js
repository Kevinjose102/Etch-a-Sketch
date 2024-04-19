const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-size")
const clearButton = document.querySelector(".clear");

let dimenstionString ="";
let size = 30;
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

        gridBox.addEventListener("mouseover", changeColor);
        gridBox.addEventListener("mousedown", changeColor);

    }
}

//for the drag effect
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//creates the default grid
makeGrid(30);

//changes the color of the grid element when the mouse is down and dragged over
function changeColor(e){
    //mouse is down and it is hovering
    if (e.type === 'mouseover' && !mouseDown) return
    else{
        e.target.style.backgroundColor = "black";
    }
}

//clears the grid and makes the default 16x16 grid
clearButton.addEventListener("click", () => {
    clear();
    makeGrid(size);
})

//clears the grid 
function clear(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        container.removeChild(grid);
    });
}

//changing the grid size according to the user
gridButton.addEventListener("click", () => {
    size = prompt("Enter the size of the grid: ");
    if(size){
        clear();
        makeGrid(size);
    }
    else{
        size = 30;
    }
})
