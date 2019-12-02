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
    let newSquareHeight = 800 / userInput;
    let newSquareWidth = 800 / userInput;
    newSquares.forEach(square => square.style.cssText = `height: ${newSquareHeight}px; width: ${newSquareWidth}px`);

    squareGrid.style.cssText = `grid-template-columns: repeat(${userInput}, ${newSquareWidth}px); grid-template-rows: repeat(${userInput}, ${newSquareHeight}px)`;
}

function enableRGB() {
    function getRandomNum() {
        return Math.floor(Math.random()*255);
    }
    const squares = document.querySelectorAll('.grid-square');

    squares.forEach(square => square.addEventListener('mouseover', () => square.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`));
}

const rgbButton = document.querySelector('#rgb-button');
rgbButton.addEventListener('click', () => enableRGB());

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);
createSquares(256);