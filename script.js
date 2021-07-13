const container = document.getElementById('grid-container');
const sizeButton = document.getElementById('size-button');
const clearButton = document.getElementById('clear-button');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', randomColour)
    container.appendChild(cell).className = 'grid-element';
  };
};

makeRows(16, 16);

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((div) => {container.removeChild(div)});
}

function changeSize() {
    let userChoice = prompt('Please, enter new size');

    if(userChoice !== null) {
        userChoice = parseInt(userChoice);
        if(userChoice < 1 || userChoice > 100 || Number.isNaN(userChoice)) {
            alert('Please, enter a number between 1 and 100');
            changeSize()
        } else {
            clearGrid()
            makeRows(userChoice, userChoice);
        }
    }
};

function clearBackground() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((div) => {
        div.style.setProperty('background-color', 'rgb(230, 230, 230)')
    });

}

function randomColour(e) {
    function getRandColour() {
            let colour = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            return colour;
        }
         e.target.style.backgroundColor = getRandColour();
    }

sizeButton.addEventListener('click', changeSize);
clearButton.addEventListener('click', clearBackground);