let squeak = new Audio('squeak.wav');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas3 = document.getElementById('canvas3'); // New canvas element for hexagons
const ctx3 = canvas3.getContext('2d'); // New canvas context for hexagons
const canvas4 = document.getElementById('canvas4'); // New canvas element for rhombi
const ctx4 = canvas4.getContext('2d'); // New canvas context for rhombi

const lineColor = 'rgba(0, 0, 0, 0.5)'; // Line color with transparency

function generateArt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const numLines = 81; // Number of lines
    const lineSpacing = 5; // Spacing between lines
    let lineIndex = 0;

    function drawLine() {
        if (lineIndex < numLines) {
            const x1 = 0;
            const y1 = lineIndex * lineSpacing;
            const x2 = canvas.width;
            const y2 = canvas.height / 2;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = lineColor;
            ctx.stroke();
            ctx.closePath();

            lineIndex++;
            setTimeout(drawLine, 10); // Pause for 10 milliseconds before drawing the next line
        }
    }

    drawLine(); // Start drawing lines
}

function drawRandomLines() {
    const canvasWidth = canvas2.width;
    const canvasHeight = canvas2.height;

    ctx2.clearRect(0, 0, canvasWidth, canvasHeight);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomColor() {
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        return `rgb(${r},${g},${b})`;
    }

    const minInterval = 100; // Minimum interval (in milliseconds) between lines
    const maxInterval = 300; // Maximum interval (in milliseconds) between lines

    function drawRandomLine() {
        const x1 = Math.random() * canvasWidth;
        const y1 = Math.random() * canvasHeight;
        const x2 = Math.random() * canvasWidth;
        const y2 = Math.random() * canvasHeight;
        const lineColor = getRandomColor();

        ctx2.beginPath();
        ctx2.moveTo(x1, y1);
        ctx2.lineTo(x2, y2);
        ctx2.strokeStyle = lineColor;
        ctx2.stroke();
        ctx2.closePath();

        setTimeout(drawRandomLine, getRandomInt(minInterval, maxInterval));
    }

    drawRandomLine();
}

// New function to draw generative hexagons on canvas3
function generateHexagons() {
    const canvasWidth = canvas3.width;
    const canvasHeight = canvas3.height;
    const numHexagons = 100; // Number of hexagons

    function getRandomColor() {
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        return `rgb(${r},${g},${b})`;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawHexagon(x, y, size) {
        ctx3.beginPath();
        ctx3.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

        for (let i = 1; i <= 6; i++) {
            ctx3.lineTo(
                x + size * Math.cos((i * Math.PI) / 3),
                y + size * Math.sin((i * Math.PI) / 3)
            );
        }

        ctx3.closePath();

        // Fill with a random color
        ctx3.fillStyle = getRandomColor();
        ctx3.fill();
    }

    ctx3.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < numHexagons; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const size = Math.random() * 30 + 20; // Random size between 20 and 50
        drawHexagon(x, y, size);
    }
}

// New function to draw generative rhombi on canvas4
function generateRhombi() {
    const canvasWidth = canvas4.width;
    const canvasHeight = canvas4.height;
    const numRhombi = 100; // Number of rhombi

    function getRandomColor() {
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        return `rgb(${r},${g},${b})`;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawRhombus(x, y, size) {
        ctx4.save();
        ctx4.translate(x, y);

        ctx4.beginPath();
        ctx4.moveTo(0, -size); // Top vertex
        ctx4.lineTo(size, 0); // Right vertex
        ctx4.lineTo(0, size); // Bottom vertex
        ctx4.lineTo(-size, 0); // Left vertex
        ctx4.closePath();

        ctx4.fillStyle = getRandomColor();
        ctx4.fill();

        ctx4.restore();
    }

    ctx4.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < numRhombi; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const size = Math.random() * 30 + 20; // Random size between 20 and 50
        drawRhombus(x, y, size);
    }
}

// Generate art initially and on click
generateArt();
drawRandomLines();
generateHexagons();
generateRhombi(); // Generate rhombi art initially

canvas.addEventListener("click", call);

function call() {
    generateArt();
    music();
}

canvas2.addEventListener("click", call2);

function call2() {
    drawRandomLines();
    music();
}

canvas3.addEventListener("click", call3);

function call3() {
    generateHexagons();
    music();
}

canvas4.addEventListener("click", call4);

function call4() {
    generateRhombi();
    music();
}

let step = 0;

function music() { 
    if (step <= 2) {
    squeak.play();
    step++;
    squeak.addEventListener('ended', music);
} else {
    step = 0;
}
}
