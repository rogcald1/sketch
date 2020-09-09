
let container = document.getElementById("grid-container");

function sketcher(columns, rows) {
    let grid = document.createElement('div')
    grid.setAttribute('id','grid');
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-columns', columns);
    for (y = 0 ; y < (rows * columns) ; y++ ) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
    container.appendChild(grid);
}

sketcher(16,16)

const boxes = document.getElementsByClassName('box');

for (i = 0; i < boxes.length ; i++) {
    // boxes[i].addEventListener("mouseenter", function(e) {
    //     let randomColor = Math.floor(Math.random()*16777215).toString(16);
    //     this.style.backgroundColor = '#' + randomColor;
    // }) 
    boxes[i].addEventListener("mouseenter",fillin);
    boxes[i].addEventListener("mouseleave",fillout);
}

function fillin(e) {
    this.classList.add('fillin');
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = '#' + randomColor;
}

function fillout(e) {
    this.classList.remove('fillin');
    this.style.backgroundColor = '';
    this.style.filter = 'brightness(10%)';

}

function newgrid() {
    let boxes1 = document.getElementById('grid');
    container.removeChild(boxes1);
    let newg = prompt("how many squares per side?");
    sketcher(newg, newg);
    for (i = 0; i < boxes.length ; i++) {
    boxes[i].addEventListener("mouseenter",fillin);
    boxes[i].addEventListener("mouseleave",fillout);
}
}