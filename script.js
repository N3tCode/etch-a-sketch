const gridGenerator = document.querySelector('.grid');

function gridGen(divs) {
    for(let i = 0; i < divs; i++) {
        let createDiv = document.createElement('div');
        createDiv.classList.add('gridGen');
        createDiv.addEventListener('mouseenter', (e) => {
            createDiv.setAttribute('id', 'gridHover');
        })
        createDiv.addEventListener('mouseleave', (e) => {
            createDiv.style.backgroundColor = 'black';
        })
        gridGenerator.appendChild(createDiv);
    }
}

gridGen(256);