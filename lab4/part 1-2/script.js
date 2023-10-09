// Task 1: HTML Movement
const character1 = document.getElementById("character1");
const container1 = document.getElementById("container1");

// Calculate the initial position to start in the middle
const containerWidth = container1.clientWidth;
const containerHeight = container1.clientHeight;
const characterWidth = character1.clientWidth;
const characterHeight = character1.clientHeight;
let x1 = (containerWidth - characterWidth) / 2;
let y1 = (containerHeight - characterHeight) / 2;

// Apply the initial position
character1.style.transform = `translate(${x1}px, ${y1}px`;

document.addEventListener("keydown", (event) => {
    const step = 5;

    if (event.key === "ArrowUp") {
        y1 -= step;
    } else if (event.key === "ArrowDown") {
        y1 += step;
    } else if (event.key === "ArrowLeft") {
        x1 -= step;
    } else if (event.key === "ArrowRight") {
        x1 += step;
    }

    character1.style.transform = `translate(${x1}px, ${y1}px)`;
});

// Task 2: Canvas Movement
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x2 = 50;
let y2 = 50;

function drawCanvasSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(x2, y2, 50, 50);
}

document.addEventListener("keydown", (event) => {
    const step = 5;

    if (event.key === "w" || event.key === "W") {
        y2 -= step;
    } else if (event.key === "s" || event.key === "S") {
        y2 += step;
    } else if (event.key === "a" || event.key === "A") {
        x2 -= step;
    } else if (event.key === "d" || event.key === "D") {
        x2 += step;
    }

    drawCanvasSquare();
});

drawCanvasSquare(); // Initial draw on canvas


