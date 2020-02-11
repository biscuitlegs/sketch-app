/*Sketch Pad*/

function createSquares(gridArea) {
    for (let i = 0; i < gridArea; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        let squareGrid = document.getElementById('square-grid');
        squareGrid.appendChild(gridSquare);

        gridSquare.addEventListener('mouseover', () => gridSquare.classList.add('filled'));
    }
}

function clearGrid() {
    let squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => square.classList.remove('filled'));

    let squareGrid = document.getElementById('square-grid');
    let userInput = prompt('How many squares per side should the new grid have? Caution: Entering large numbers will cause a delay.');
    if (!userInput) userInput = 16; 
    squareGrid.innerHTML = '';
    createSquares(userInput**2);

    let newSquares = document.querySelectorAll('.grid-square');
    let newSquareHeight = 400 / userInput;
    let newSquareWidth = 400 / userInput;
    newSquares.forEach(square => square.style.cssText = `height: ${newSquareHeight}px; width: ${newSquareWidth}px`);

    squareGrid.style.cssText = `grid-template-columns: repeat(${userInput}, ${newSquareWidth}px); grid-template-rows: repeat(${userInput}, ${newSquareHeight}px)`;

    if (rgbOn) {
        enableRGB();
    }
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);
createSquares(256);


/* RGB */

rgbOn = false;
const rgbButton = document.querySelector('#rgb-button');

function enableRGB() {
    function getRandomNum() {
        return Math.floor(Math.random()*255);
    }
    const squares = document.querySelectorAll('.grid-square');

    squares.forEach(square => square.addEventListener('mouseover', () => square.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`));

    rgbOn = true;
}

function disableRGB() {
    const squares = document.querySelectorAll('.grid-square');

    squares.forEach(square => square.addEventListener('mouseover', () => square.style.backgroundColor = 'rgb(134, 134, 134)'));

    rgbOn = false;
}

rgbButton.addEventListener('click', () => {
    if (rgbOn && buttonOn) {
        disableRGB();
    } else {
        enableRGB();
    }

    if (buttonOn) {
        slideOff(rgbButton);
    } else {
        slideOn(rgbButton);
    }
});




/* Settings Window */

function slideOn(button) {
    button.style.transform = 'translateX(100px)'
    slider.style.backgroundColor = '#B1CC74';
    buttonOn = true;
}

function slideOff(button) {
    button.style.transform = ''
    slider.style.backgroundColor = '#D8DBE2';
    buttonOn = false;
}

const settingsWindow = document.querySelector('.settings-window');
const settingsButton = document.querySelector('.settings-button');
const slider = document.querySelector('.slider');

buttonOn = false;

settingsButton.addEventListener('click', () => {
    settingsWindow.classList.toggle('invisible');
})