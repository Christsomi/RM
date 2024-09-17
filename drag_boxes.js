function showDraggableBox(boxId) {
    document.getElementById(boxId).style.display = 'block';
}

// Function to handle closing the draggable box
function closeDraggableBox(boxId) {
    document.getElementById(boxId).style.display = 'none';
}



// Function to resize the draggable box
function resizeBox(boxId, amount) {
    // Get the draggable box element
    const draggableBox = document.getElementById(boxId);

    // Get current dimensions using computed style or explicit values if already set
    let currentWidth = parseInt(draggableBox.style.width) || draggableBox.offsetWidth;
    let currentHeight = parseInt(draggableBox.style.height) || draggableBox.offsetHeight;

    console.log("Resizing box by: " + amount);
    console.log("Current width: " + currentWidth);
    console.log("Current height: " + currentHeight);

    // Define minimum and maximum dimensions
    const minWidth = 100;
    const minHeight = 10;
    const maxWidth = 500;  // Set your desired max width
    const maxHeight = 500; // Set your desired max height

    // Calculate new dimensions, ensuring they stay within bounds
    let newWidth = Math.max(minWidth, Math.min(currentWidth + amount, maxWidth));
    let newHeight = Math.max(minHeight, Math.min(currentHeight + amount, maxHeight));

    console.log("New width: " + newWidth);
    console.log("New height: " + newHeight);

    // Apply new dimensions
    draggableBox.style.width = newWidth + 'px';
    draggableBox.style.height = newHeight + 'px';

    console.log("Applied width: " + draggableBox.style.width);
    console.log("Applied height: " + draggableBox.style.height);
}




// Function to make the draggable box movable
function makeDraggable(boxId) {
    const draggableBox = document.getElementById(boxId);
    dragElement(draggableBox);
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Example usage
makeDraggable('draggableBoxWagesCountryOne');
makeDraggable('draggableBoxWagesCountryTwo');
makeDraggable('draggableBoxPricesCountryOne');
makeDraggable('draggableBoxPricesCountryTwo');
makeDraggable('draggableBoxPPFcountryOne');
makeDraggable('draggableBoxPPFcountryTwo');