const container = document.querySelector(".container");

//creating the grid
for(let i = 1; i <= 256; i++){
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid")
    container.appendChild(gridBox);
}

const grids = document.querySelectorAll(".grid")

grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.setAttribute("style","background-color: black");
    })
});
