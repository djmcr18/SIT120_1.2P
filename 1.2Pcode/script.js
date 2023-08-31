// String methods
const str = 'Yeah Sure Bro.';
document.getElementById('stringMethods').innerHTML = `
    <i><b>String Phrase:</b> ${str}</i> <br>
    <br>
    <br>
    <b>Length:</b> ${str.length} <br>
    <br>
    <b>Uppercase:</b> ${str.toUpperCase()} <br>
    <br>
    <b>Lowercase:</b> ${str.toLowerCase()} <br>
    <br>
    <b>Substring:</b> ${str.substring(0, 5)} <br>
    <br>
    <b>Index of 'Bro':</b> ${str.indexOf('Bro')} <br>
`;

// Number methods
const num = 42.5678;
document.getElementById('numberMethods').innerHTML = `
    <i><b>Number being used:</b> ${num}</i> <br>
    <br>
    <br>
    <b>To Fixed (2 decimal places):</b> ${num.toFixed(2)} <br>
    <br>
    <b>Exponential notation:</b> ${num.toExponential()} <br>
    <br>
    <b>Precision (5):</b> ${num.toPrecision(5)} <br>
    <br>
    <b>Square root:</b> ${Math.sqrt(num)} <br>
    <br>
    <b>Random number between 0 and 1:</b> ${Math.random()} <br>
`;

// Array methods
const arr = [10, 25, 5, 8, 15];
document.getElementById('arrayMethods').innerHTML = `
    <i><b>Array being used:</b> [${arr.join(', ')}]</i> <br>
    <br>
    <br>
    <b>Length:</b> ${arr.length} <br>
    <br>
    <b>Join using '-':</b> ${arr.join(' - ')} <br>
    <br>
    <b>Pop last element:</b> ${arr.pop()} (Array after pop: [${arr.join(', ')}]) <br>
    <br>
    <b>Push '30':</b> ${arr.push(30)} (Array after push: [${arr.join(', ')}]) <br>
    <br>
    <b>Sort (ascending):</b> ${arr.sort((a, b) => a - b)} <br>
    <br>
    <b>Find numbers greater than 10:</b> ${arr.filter(num => num > 10)} <br>
`;



// Date methods
const date = new Date();
document.getElementById('dateMethods').innerHTML = `
    <i><b>Current date is being used: </b> ${date}</i> <br>
    <br>
    <br>
    <b>Current date:</b> ${date.toLocaleDateString()} <br>
    <br>
    <b>Current time:</b> ${date.toLocaleTimeString()} <br>
    <br>
    <b>Day of the week:</b> ${date.getDay()} <br>
    <br>
    <b>Date + 3 days:</b> ${new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()} <br>
    <br>
    <b>Weeks since start of the year:</b> ${(date - new Date('2023-01-01'))/6.048e+8} <br>
`;

// Function methods
function greet(name) {
    return `Ella ${name} re!`;
}

function multiply(x, y) {
    return x * y;
}

function calculateSquareRoot(x) {
    return Math.sqrt(x);
}

const functionOutput = document.getElementById('functionMethods');

functionOutput.innerHTML = `
    <i><b>Function:</b> greet(name)</i><br>
    <br>

    <b>greet('Diego'):</b> ${greet('Diego')} <br>
    <br>
    <b>greet('Koch'):</b> ${greet('Koch')} <br>
    <br>
    <br>
    
    <i><b>Function:</b> multiply(x, y)</i><br>
    <br>

    <b>multiply(3, 5):</b> ${multiply(3, 5)} <br>
    <br>
    <b>multiply(2, 4):</b> ${multiply(2, 4)} <br>
    <br>
    <br>

    <i><b>Function:</b> calculateSquareRoot(x)</i><br>
    <br>
    
    <b>calculateSquareRoot(9):</b> ${calculateSquareRoot(9)} <br>
    <br>
    <b>calculateSquareRoot(25):</b> ${calculateSquareRoot(25)} <br>
`;