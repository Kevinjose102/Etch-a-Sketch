const container = document.querySelector(".container");
const sizeSlider = document.getElementById("sizeSlider")
const clearButton = document.querySelector(".clear");
const colorModeButton = document.querySelector(".color-mode");
const rainbowModeButton = document.querySelector(".rainbow-mode");
const eraserButton = document.querySelector(".eraser");
const sizeValue = document.querySelector(".grid-size-display")

let DEFAULT_COLOR = "#333333";
let DEFAULT_SIZE = 30;
let currentMode = "color-mode";
let currentColor = DEFAULT_COLOR;
let dimenstionString ="";
let size = DEFAULT_SIZE;

//for the drag effect
let mouseDown = false
container.onmousedown = () => (mouseDown = true)
container.onmouseup = () => (mouseDown = false)

//changing the grid size according to the user
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value);

function updateSizeValue(value){
    sizeValue.innerHTML = `${value} x ${value}`;
}

function changeSize(value){
    clear();
    makeGrid(value)
    size = value;
}

//fucntion to make the grid of a given size
function makeGrid(size){
    
    let height = 700 / size;

    dimenstionString = height.toString(); 
    for(let i = 1; i <= size * size; i++){
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid");
        gridBox.setAttribute("style","height:" + dimenstionString + "px; \
                                    width: " + dimenstionString + "px; \
                                    padding: 0; \
                                    margin: 0;\
                                    background-color: white");
        container.appendChild(gridBox);

        gridBox.addEventListener("mousemove", changeColor);
        gridBox.addEventListener("mousedown", changeColor);
    }
}

//creates the default grid
makeGrid(DEFAULT_SIZE);

//changes the color of the grid element when the mouse is down and dragged over
function changeColor(e){
    //mouse is down and it is hovering
    if (e.type === 'mousemove' && !mouseDown) return
    if(currentMode == "color-mode"){
        currentColor = document.getElementById("color-picker").value
        e.target.style.backgroundColor = currentColor;
    }
    else if(currentMode == "rainbow-mode"){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else if(currentMode == "eraser"){
        e.target.style.backgroundColor = "white";
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

//DIFFERENT MODES
colorModeButton.addEventListener("click", () => {
    document.querySelector(".button-active")?.classList.remove("button-active");
    colorModeButton.classList.add("button-active");
    currentMode = "color-mode";
})

rainbowModeButton.addEventListener("click", () => {
    document.querySelector(".button-active")?.classList.remove("button-active");
    rainbowModeButton.classList.add("button-active")
    currentMode = "rainbow-mode";
})

eraserButton.addEventListener("click", () => {
    document.querySelector(".button-active")?.classList.remove("button-active");
    eraserButton.classList.add("button-active")
    currentMode = "eraser";
})