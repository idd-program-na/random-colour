
// Combine STEP 1: Randomize 3 colours (0-255)) into ...
// STEP 2: Make the button clickable (and do something) MACRO STEP

// MICRO STEPS
// A) Find the button
let randomBtn = document.querySelector('.randomize')

// B) Assign a click listener to the button
// C) Output a message to test
randomBtn.addEventListener('click', (event) => { //Assign a click listener to the button
    let colourRed =   Math.floor(Math.random() * 256); 
    let colourGreen = Math.floor(Math.random() * 256);
    let colourBlue =  Math.floor(Math.random() * 256);

console.log(`rgb(${colourRed}, ${colourGreen}, ${colourBlue})`)

let bodyElement = document.querySelector ('body')
bodyElement.style.backgroundColor = `rgb(${colourRed}, ${colourGreen}, ${colourBlue})`

})




/*  Breakdown of the random number code (the right side of = assignment):
- Math.random()
    Generates a random decimal number between 0 and 1 (aka, a percentage! 0.5 == 50%)
- Math.random() * 256
    Multiplies the random percentage by 256 (aka, a percent of 256 possible options)
- Math.floor(Math.random() * 256)
    Round the resulting number down (aka, floor! Note: "ceil" will round up) to create options 0-255
*/




// NEXT STEPS
// - Determine the remaining macro steps, write them out!
// - Once determined, break each step down into micro steps
// - Test each macro solution in isolation (console output helps)
// - Begin to combine the steps together to create a final solution (test as you go!)

/* 
.000 * 10 = 0
.1 * 10 = 1
.2 * 10 = 2
.3 * 10 = 3
.4 * 10 = 4
.5 * 10 = 5
.999 * 10 = 9.999 
*/

// 0 and 9 (10 options)

// Broken down
// let dec = Math.random() * 256;
// let int = Math.floor(dec);
// console.log(dec, int);

// Shortened
// let colourRed = Math.floor( Math.random() * 256)
// console.log(colourRed)