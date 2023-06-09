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

function createGrid(squares = 16){
    
    for (let i = 0; i < squares; i++){
        addRow();
        for (let i = 0; i < squares; i++){
            addDiv();
        }
    }
    squareSize(squares);
    addListener();
}

function removeGrid(){
    grids = document.querySelectorAll('.grid');
    rows = document.querySelectorAll('.row');
    grids.forEach(g => g.remove());
    rows.forEach(r => r.remove());
}

function addListener(){
    const divs = document.querySelectorAll('.grid');
    divs.forEach(d => d.addEventListener('mouseover', event => {
    changeColor();
    event.target.style.background = "rgb(0, 0, 0)";
    if (!event.target.classList.contains('colored')){
        event.target.className += " colored";
    }
    }))
}

function squareSize(squares){
    // calculate how big each gridsquare should be
    const gridWidth = 860;
    const squareSide = Math.floor((gridWidth / squares)) - 2;
    console.log(squareSide);
    const element = document.querySelectorAll('.grid');
    element.forEach(e => {
        e.style.flexBasis = squareSide + "px";
        e.style.height = squareSide + "px";
    })
    
    // document.getElementsByClassName('grid').style.flexBasis = squareSide + "px";
    // document.getElementsByClassName('grid').style.height = squareSide + "px";
    // set style to set flexbasis and height to squaresize - 2 (to give space to border)

}

function changeColor(){
    const divs = document.querySelectorAll('.colored');
    divs.forEach(d => {
        const currentColor = d.style.background;
        const values = currentColor.substring(4, (currentColor.length - 1)).split(',');
        console.log(values);
        d.style.background = "rgb(" + (parseInt(values[0], 10) + 51) +
                                 ", " + (parseInt(values[0], 10) + 51) +
                                    ", " + (parseInt(values[0], 10) + 51) + ")";
        if (values[0] === "255"){
            d.classList.remove("colored");
        }
    })
}

createGrid();
document.querySelector('#new-grid').addEventListener('click', function() {
    let newSquares = 0;
    while (newSquares < 3 || newSquares > 100){
        newSquares = prompt('Enter how many squares you want on each row/coloum');
    }
    removeGrid();
    createGrid(newSquares);
})