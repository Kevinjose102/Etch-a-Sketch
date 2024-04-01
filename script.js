const container = document.querySelector(".container");

//creating the grid
for(let i = 1; i <= 256; i++){
    const gridBox = document.createElement("div");
    container.appendChild(gridBox);
}