const canvas = document.querySelector("#my-canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const sliderEl = document.querySelector("#color-slider")

sliderEl.addEventListener("input", changeColor)

// Get the width of the canvas
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let numSquaresX = 25;
let numSquaresY = 25;
let size = canvasWidth / numSquaresX; // Adjust the size

let red =  0

function changeColor() {
    
    ctx.clearRect(0,0,canvasWidth,canvasHeight)

    red = sliderEl.value;
    console.log(red);

    let counter = 0; // Initialize the counter
    ctx.save();
    ctx.translate(size / 2, size / 2);
    for (let i = 0; i < numSquaresX; i++) {
        for (let j = 0; j < numSquaresY; j++) {
            counter++; // Increment the counter

            // console.log(`Drawing square: ${counter} (${i + 1}, ${j+1}) at ${i * squareSize}px ${j * squareSize}px ${squareSize} ${squareSize}`);

            ctx.fillStyle = `rgb(${i * 10}, ${j * 10}, ${red}`; // Adjusting color for each square
            fillCircle(i * size, j * size, size / 2);
        }
    }
    ctx.restore();

}

changeColor()

// Helper functions

function fillCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}