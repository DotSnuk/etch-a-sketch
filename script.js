function addDiv(){
    const newDiv = document.createElement('div');
    const rowContainer = document.querySelector('.row:last-child');
    newDiv.className = 'grid';
    rowContainer.appendChild(newDiv);
}

function addRow(){
    const newDiv = document.createElement('div');
    const gridContainer = document.querySelector('#div-container');
    newDiv.className = 'row';
    gridContainer.appendChild(newDiv);
}

function createGrid(){
    for (let i = 0; i < 16; i++){
        addRow();
        for (let i = 0; i < 16; i++){
            addDiv();
        }
    }
}

function changeColor(){
    const divs = document.querySelectorAll('.colored');
    divs.forEach(d => {

    })

}

const colorArray = ["#000", "#333", "#666", "#999", "#ccc", "#fff"];
createGrid();
const divs = document.querySelectorAll('.grid');
divs.forEach(d => d.addEventListener('mouseover', event => {
    event.target.style.background = colorArray[0];
    if (!event.target.classList.contains('colored')){
        event.target.className += " colored";
    }
    
}))