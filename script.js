const resizeBtn = document.getElementById("resizeButton");
const gridContainer = document.getElementById("gridContainer");


resizeBtn.addEventListener("click", promptfn)

console.log("Hello World");

function promptfn() {
  const gridSize = prompt("Enter the number of squares per side:");
  console.log(`User entered: ${gridSize}`);
}