// JavaScript source code
// below I declare an array of different colours
let size = ["200px", "300px", "10px", "1000000px", "19px"]
let colours = ["green", "blue", "red", "orange", "pink"]

// defines box as box and adds an event for clicking said box
let box = document.getElementById("box");
let find = document.getElementById("find");
let text = document.getElementById("text");
box.addEventListener("mouseover", changeBoxSize)
find.addEventListener("mouseover", hell)
box.addEventListener("click", changeBoxColour)

function changeBoxSize() {
    //randomises the colour and sets it to new colour
    let newSize = size[Math.floor(Math.random() * size.length)];
    //logs the record of what colour the box has changed to
    console.log("new box colour is:")
    console.log(newSize);
    //sets box to the colour
    box.style.width = newSize;
    box.style.height = newSize;
}

function changeBoxColour() {
    //randomises the colour and sets it to new colour
    let newColour = colours[Math.floor(Math.random() * colours.length)];
    //logs the record of what colour the box has changed to
    console.log("new box colour is:")
    console.log(newColour);
    //sets box to the colour
    box.style.backgroundColor = newColour;
}

function hell() {
    let newColour = "white";
    console.log("box went to hell")
    find.style.backgroundColor = newColour;
    find.style.Colour = newColour;
    text.style.color = newColour
}