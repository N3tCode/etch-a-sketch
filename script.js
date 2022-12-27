const gridGenerator = document.querySelector('.grid');
const remove = document.querySelector('.gridGen')

function gridGen(divs, size) {
    while(gridGenerator.hasChildNodes()) {
        gridGenerator.removeChild(gridGenerator.firstChild);
      }
    for(let i = 0; i < divs; i++) {
        let createDiv = document.createElement('div');
        createDiv.classList.add('gridGen' + size);
        createDiv.addEventListener('mouseenter', (e) => {
            createDiv.setAttribute('id', 'gridHover');
        })
        createDiv.addEventListener('mouseleave', (e) => {
            createDiv.style.backgroundColor = 'black';
        })
        gridGenerator.appendChild(createDiv);
    }
}

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
