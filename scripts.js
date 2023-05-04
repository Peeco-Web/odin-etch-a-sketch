// Create a container to hold the grids
const container = document.querySelector('.container');

// Create the row and box elements that make up the grid
const row = document.createElement('div');
const div = document.createElement('div');
row.setAttribute("class","row")
div.setAttribute("class","box")

// Append
container.append(row);
row.append(div);


// Function that creates n number of boxes per row
function makeGrid(n) {
    for (i=1;i<n;i++) {
        row.append(div.cloneNode(true));
    }
    for (i=1;i<n;i++) {
        container.append(row.cloneNode(true))
    }
}


makeGrid(64)





//Function that creates n number of rows based on number of boxes











// Create a flexbox of 16 horizontal grids


// Create a flexbox of 16 rows of the same grid line