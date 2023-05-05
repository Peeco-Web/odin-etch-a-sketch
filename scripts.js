// Create a container to hold the grids
const container = document.querySelector('.container');

// Create the row and box elements that make up the grid
const row = document.createElement('div');
const div = document.createElement('div');
row.setAttribute("class","row");
div.setAttribute("class","box");

// Append
container.append(row);
row.append(div);


// Function that creates nxn grid
n = 40;

function makeGrid(n) {
    for (i=1;i<n;i++) {
        row.append(div.cloneNode(true));
    }
    for (i=1;i<n;i++) {
        container.append(row.cloneNode(true))
    }
}

makeGrid(n);



// Function to add color attribute to boxes on hover
boxes = document.querySelectorAll('.box');

boxes.forEach(box =>{
    box.addEventListener('mouseover', function handleClick(e){
        box.setAttribute('style','background-color: black')
    })
})


// Reset Button 
reset = document.querySelector('.reset');
reset.addEventListener('click',resetGrid)

function resetGrid() {
    boxes.forEach(box => box.setAttribute('style','background-color: white'))
}


//Grid Size Button
gridSize = document.querySelector('.gridsize')
gridSize.addEventListener('click',changeGridSize)


function changeGridSize() {
    n = prompt('Enter the number of squares per side')

    if (n>100) {n=100}
    
    boxes.forEach(box => box.remove())
    rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());

    container.append(row);
    row.append(div);

    makeGrid(n);

    boxes = document.querySelectorAll('.box');

    boxes.forEach(box =>{
        box.addEventListener('mouseover', function handleClick(e){
            box.setAttribute('style','background-color: black')
        })
    })
    
}
