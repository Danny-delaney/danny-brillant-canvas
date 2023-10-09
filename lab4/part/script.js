const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const timerDuration = 60; // Initial timer duration in seconds (adjust as needed)
let remainingTime = timerDuration;
let x2 = 50;
let y2 = 50;
let dx = 0; // Horizontal movement (0 for no movement)
let dy = 0; // Vertical movement (0 for no movement)
let score = 0; // Initialize the score to zero

function drawCanvasSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(x2, y2, 50, 50);
}

function drawTimerBar() {
    const timerWidth = (remainingTime / timerDuration) * canvas.width;
    ctx.fillStyle = "blue"; // Color of the timer bar
    ctx.fillRect(0, 0, timerWidth, 10); // Timer bar position and dimensions
}

function drawScore() {
    ctx.fillStyle = "black"; // Color of the score text
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30); // Display the score on the canvas
}

function updateTimer() {
    remainingTime -= 1;
    if (remainingTime < 0) {
        remainingTime = 0;
    }
}

function updateCanvas() {
    updateTimer();
    drawCanvasSquare();
    drawTimerBar();
    drawScore(); // Display the score

    if (remainingTime > 0) {
        requestAnimationFrame(updateCanvas);
    }
}

document.addEventListener("keydown", (event) => {
    const step = 5;

    switch (event.key) {
        case "w":
        case "W":
            dy = -step;
            break;
        case "s":
        case "S":
            dy = step;
            break;
        case "a":
        case "A":
            dx = -step;
            break;
        case "d":
        case "D":
            dx = step;
            break;
    }

    drawCanvasSquare();
    drawTimerBar();
    drawScore(); // Display the score

    // Check for collision with the canvas boundaries
    if (x2 <= 0 || x2 >= canvas.width - 50 || y2 <= 0 || y2 >= canvas.height - 50) {
        score++; // Increase the score when the box touches the walls
    }
});

document.addEventListener("keyup", (event) => {
    // Stop movement when keys are released
    if (["w", "W", "s", "S", "a", "A", "d", "D"].includes(event.key)) {
        dx = 0;
        dy = 0;
    }
});

function clickableDpadReleased() {
    // Reset movement when a button is released
    dx = 0;
    dy = 0;
}

function clickDpadYellow() {
    // Change movement direction when the "Y" button is clicked
    dy = -5;
}

function clickDpadBlue() {
    // Change movement direction when the "X" button is clicked
    dx = -5;
}

function clickDpadRed() {
    // Change movement direction when the "B" button is clicked
    dx = 5;
}

function clickDpadGreen() {
    // Change movement direction when the "A" button is clicked
    dy = 5;
}

setInterval(() => {
    // Update the box's position based on the current movement
    x2 += dx;
    y2 += dy;

    // Ensure the box stays within the canvas boundaries
    x2 = Math.min(Math.max(x2, 0), canvas.width - 50);
    y2 = Math.min(Math.max(y2, 0), canvas.height - 50);

    drawCanvasSquare();
}, 16); // Adjust the interval for smoother animation

// Call updateCanvas to start the timer and drawing
updateCanvas();
