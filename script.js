// grid

const gridGenerator = document.querySelector('.grid');
const gridGenerated = document.querySelector('.gridGen');

const defaultGridSize = 256;
const defaultColor = 'black';

let gridSize = defaultGridSize;
let color = defaultColor;

function chooseColor(e) {
    if(color == defaultColor) {
        return e.target.style.backgroundColor = 'black';
    } else if (color == 'rainbow') {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return e.target.style.backgroundColor = '#' + randomColor;
    }
}

gridGenerator.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);'); 
gridGen(gridSize);

function gridGen(gridSize) {
    while(gridGenerator.hasChildNodes()) {
        gridGenerator.removeChild(gridGenerator.firstChild);
      }
    for(let i = 0; i < gridSize; i++) {
        let createDiv = document.createElement('div');
        createDiv.classList.add('gridGen');
        createDiv.addEventListener('mouseenter', chooseColor);
        createDiv.addEventListener('mouseleave', chooseColor);
        gridGenerator.appendChild(createDiv);
    }
}

// buttons

const buttonRainbow = document.querySelector('#butRainbow');

buttonRainbow.addEventListener('click', () => {
    return color = 'rainbow';
});

const buttonBlack = document.querySelector('#butBlack');

buttonBlack.addEventListener('click', () => {
    return color = defaultColor;
});

const button16 = document.querySelector('#but16');

button16.addEventListener('click', () => {
    gridGenerator.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);'); 
    gridGen(256, 16);
})

const button32 = document.querySelector('#but32');

button32.addEventListener('click', () => {
    gridGenerator.setAttribute('style', 'grid-template-columns: repeat(32, 1fr);'); 
    gridGen(1024, 32);
})

const button64 = document.querySelector('#but64');

button64.addEventListener('click', () => {
    gridGenerator.setAttribute('style', 'grid-template-columns: repeat(64, 1fr);'); 
    gridGen(4096, 64);
})