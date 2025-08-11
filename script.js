const resizeBtn = document.getElementById("resizeButton");
const gridContainer = document.getElementById("gridContainer");


resizeBtn.addEventListener("click", promptfn)

function promptfn() {
  const gridSize = prompt("Enter the number of squares per side:");
  console.log(`User entered: ${gridSize}`);

    if (gridSize >= 1 && gridSize <= 100) {
      createGrid(gridSize); 
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  
}

function createGrid(){

gridContainer.innerHTML = "";

const squareSize = 960 / gridSize;

for (let i = 0; i < gridSize*gridSize; i++) {
     const square = document.createElement("div");
     square.classList.add("grid-square");
}



}