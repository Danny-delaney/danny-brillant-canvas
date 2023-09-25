// JavaScript source code
// Get the canvas element by its id
const canvas = document.getElementById("myCanvas");

// get the 2d drawing context
const context = canvas.getContext("2d");

//variables for my timers
let timerInterval;
let startTime;

// set the fill color to red
context.fillStyle = "blue";

// set the square size
var squareSize = 50;

// add blue squares in each corner
context.fillRect(0, 0, squareSize, squareSize); 
context.fillRect(canvas.width - squareSize, 0, squareSize, squareSize); 
context.fillRect(0, canvas.height - squareSize, squareSize, squareSize); 
context.fillRect(canvas.width - squareSize, canvas.height - squareSize, squareSize, squareSize); 

// adds a circle
context.beginPath(); 
context.arc(300, 100, 30, 0, 2 * Math.PI); 
context.fillStyle = "red";
context.fill(); 
context.closePath();

// adds a triangle
context.beginPath();

context.moveTo(500, 250);
context.lineTo(510, 275);  
context.lineTo(490, 275);
context.closePath();  
context.strokeStyle = "green";
context.stroke();

// adds a spiral
context.strokeStyle = "blue";
context.lineWidth = 2; 

// spiral properties
var centerX = canvas.width / 4;
var centerY = canvas.height / 2;
var endRadius = 100;  
var numSpiralLines = 250; 
var angleIncrement = 0.1; 

// draw the spiral
context.beginPath();
for (var i = 0; i < numSpiralLines; i++) {
    var radius = (i / numSpiralLines) * (endRadius);
    var angle = i * angleIncrement;

    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);

    context.lineTo(x, y);
}
context.stroke();

// add an ellipse
context.strokeStyle = "peach";
context.beginPath();
context.ellipse(200, 400, 80, 40, 0, 0, 2 * Math.PI);
context.stroke();

//add a part of a bowtie
context.beginPath();
context.moveTo(canvas.width - 100, canvas.height - 150);
context.lineTo(canvas.width - 100, canvas.height - 50);
context.lineTo(canvas.width - 150, canvas.height - 100); 
context.closePath();
context.fill();

//add a part of a bowtie
context.beginPath();
context.moveTo(canvas.width - 150, canvas.height - 100); 
context.lineTo(canvas.width - 200, canvas.height - 50);  
context.lineTo(canvas.width - 200, canvas.height - 150);
context.closePath();
context.fill();

//add text 
context.fill();
const medievalFont1 = "30px 'Old English Text MT', serif";
const medievalFont2 = "bold 24px 'Goudy Old Style', serif";
const medievalFont3 = "italic 36px 'Uncial Antiqua', serif";
const textColor = "darkred";

//1st text
context.fillStyle = textColor;
context.font = medievalFont1;
context.fillText("Medieval", 55, 80);

//2nd text
context.fillStyle = textColor;
context.font = medievalFont2;
context.fillText("Aesthetic", canvas.width - 160, 40);

//3rd text
context.fillStyle = textColor;
context.font = medievalFont3;
context.fillText("is cool", canvas.width / 2 - 100, canvas.height - 20);

function startTimer() {
    startTime = Date.now(); // get the current time
    timerInterval = setInterval(updateTimer, 1000); // update
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Convert milliseconds to seconds

    // Display the timer inside the canvas
    context.clearRect(10, 5, 200, 40); // Clear the entire canvas
    context.font = "20px Arial";
    context.fillStyle = "magenta";
    context.fillText(`Time: ${elapsedTime} seconds`, 10, 30);

    // Display the timer outside the canvas
    const timerOutsideCanvas = document.getElementById("timerOutsideCanvas");
    timerOutsideCanvas.textContent = `${elapsedTime} seconds`;
}

// Start the timer  and the examples when the page loads
window.onload = function () {
    startTimer();
    varExample();
    letExample();
    constExample();
};


/*var declarations are function-scoped or globally-scoped, but not block-scoped.
They can be redeclared within the same scope.
They can be accessed before they are declared,  which makes "hoisting." */

function varExample() {
    if (true) {
      x = 10;
    }
    console.log(x); // Outputs 10 (var is function-scoped)
    var x = 20; // This redeclaration is allowed
  }

/*let declarations are block-scoped, which means they are confined to the block in which they are declared.
They cannot be redeclared within the same scope.
They are not hoisted.*/

function letExample() {
    if (true) {
      let y = 10;
    }
    console.log(y); // Throws an error: "ReferenceError: y is not defined"
    let y = 20; // Error: "Identifier 'y' has already been declared"
  }

  /*const declarations are also block-scoped.
They must be initialized when declared and cannot be reassigned 
after initialization, although their properties can be modified (in the case of objects and arrays).*/

function constExample() {
    const z = 10;
    z = 20; // Error: "Assignment to constant variable"
    
    const person = {
      name: "Alice"
    };
    person.name = "Bob"; // This is allowed, as it modifies the object's property
  }
  
