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
        const currentColor = d.style.background;
        const values = currentColor.substring(4, (currentColor.length - 1)).split(',');
        console.log(values);
        d.style.background = ("rgb(" + (values[0] + 30) + ", "
                                        + (values[1] + 30) + ", "
                                        + (values[2] + 30) + ")");
                                        // look at this, doesnt work
    })

}

createGrid();
const divs = document.querySelectorAll('.grid');
divs.forEach(d => d.addEventListener('mouseover', event => {
    changeColor();
    event.target.style.background = "rgb(0, 0, 0)";
    if (!event.target.classList.contains('colored')){
        event.target.className += " colored";
    }
    
}))