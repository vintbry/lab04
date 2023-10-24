   // Function to change the table's background color
   function changeBackgroundColor1() {
    const table = document.getElementById("colorChangeTable");
    const colors = ["#62e58d", "#62e58d", "#62e58d", "#62e58d", "#62e58d", "#62e58d"];
    const currentColor = table.style.backgroundColor;
    const newIndex = colors.indexOf(currentColor) + 1;
    const newColor = colors[newIndex % colors.length];
    table.style.backgroundColor = newColor;
}

function changeBackgroundColor2() {
    const table = document.getElementById("colorChangeTable");
    const colors = ["#90e5d9"];
    const currentColor = table.style.backgroundColor;
    const newIndex = colors.indexOf(currentColor) + 1;
    const newColor = colors[newIndex % colors.length];
    table.style.backgroundColor = newColor;
}

function changeBackgroundColor3() {
    const table = document.getElementById("colorChangeTable");
    const colors = ["#de85e1", "#de85e1", "#de85e1", "#de85e1", "#de85e1", "#de85e1"];
    const currentColor = table.style.backgroundColor;
    const newIndex = colors.indexOf(currentColor) + 1;
    const newColor = colors[newIndex % colors.length];
    table.style.backgroundColor = newColor;
}
function changeBackgroundColor4() {
    const table = document.getElementById("colorChangeTable");
    const colors = ["#e7d396"];
    const currentColor = table.style.backgroundColor;
    const newIndex = colors.indexOf(currentColor) + 1;
    const newColor = colors[newIndex % colors.length];
    table.style.backgroundColor = newColor;
}
// Function to reset the table's background color
function resetBackgroundColor() {
    const table = document.getElementById("colorChangeTable");
    table.style.backgroundColor = ''; // Reset to default (no background color)
    table.style.border= "";
    table.style.borderSpacing='';
    table.style.width='';
}

// Function to change the table size to 200px
function changeSizeTo200() {
    const table = document.getElementById("colorChangeTable");
    table.style.width = '200px';
}

// Function to change the table size to 500px
function changeSizeTo500() {
    const table = document.getElementById("colorChangeTable");
    table.style.width = '500px';
}

function changeBorderandSpacingWidth1(){
    const table = document.getElementById("colorChangeTable");
    table.style.border ='1px solid black';
    table.style.borderSpacing ='1px '
}

function changeBorderandSpacingWidth10(){
    const table = document.getElementById("colorChangeTable");
    table.style.border ='10px solid black';
    table.style.borderSpacing ='10px '
}

function changeBorderandSpacingWidth20(){
    const table = document.getElementById("colorChangeTable");
    table.style.border ='20px solid black';
    table.style.borderSpacing ='20px '
}


// Attach the changeBackgroundColor function to the "Change Background Color" button click event
const changeColorButton1 = document.getElementById("changeColorButton1");
changeColorButton1.addEventListener("click", changeBackgroundColor1);

// Attach the changeBackgroundColor function to the "Change Background Color" button click event
const changeColorButton2 = document.getElementById("changeColorButton2");
changeColorButton2.addEventListener("click", changeBackgroundColor2);

// Attach the changeBackgroundColor function to the "Change Background Color" button click event
const changeColorButton3 = document.getElementById("changeColorButton3");
changeColorButton3.addEventListener("click", changeBackgroundColor3);

// Attach the changeBackgroundColor function to the "Change Background Color" button click event
const changeColorButton4 = document.getElementById("changeColorButton4");
changeColorButton4.addEventListener("click", changeBackgroundColor4);

// Attach the resetBackgroundColor function to the "Reset Background Color" button click event
const resetColorButton = document.getElementById("resetColorButton");
resetColorButton.addEventListener("click", resetBackgroundColor);

// Attach the changeSizeTo200 function to the "Change Size to 200px" button click event
const changeSize200Button = document.getElementById("changeSize200Button");
changeSize200Button.addEventListener("click", changeSizeTo200);

// Attach the changeSizeTo500 function to the "Change Size to 500px" button click event
const changeSize500Button = document.getElementById("changeSize500Button");
changeSize500Button.addEventListener("click", changeSizeTo500);

const button1px = document.getElementById("1px");
button1px.addEventListener("click", changeBorderandSpacingWidth1);

const button10px = document.getElementById("10px");
button10px.addEventListener("click", changeBorderandSpacingWidth10);

const button20px = document.getElementById("20px");
button20px.addEventListener("click", changeBorderandSpacingWidth20);