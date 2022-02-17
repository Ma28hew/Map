// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
	document.getElementById("currentTile").innerHTML = "Sand" // Set output text
    } else { document.getElementById("currentTile").innerHTML = "Water"
    }
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2) {
	document.getElementById("currentTile").innerHTML = "Hill"; // Set output text
    } else if (column <= 7) { document.getElementById("currentTile").innerHTML = "Sand" 
    } else { document.getElementById("currentTile").innerHTML = "Water"
    }
}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 3 && column <= 7) {
    document.getElementById("currentTile").innerHTML = "Sand";
    } else { document.getElementById("currentTile").innerHTML = "Hill";
    }
}


function level4Solution() {
	// USE BINARY IF STATEMENT

    if (row <= 2) {
		document.getElementById("currentTile").innerHTML = "Hill";
		} else { document.getElementById("currentTile").innerHTML = "Sand";
		}
	}

function level5Solution() {
	// USE CHAINED IF STATEMENT
        if (row <= 2) {
		document.getElementById("currentTile").innerHTML = "Hill"; // Set output text
		} else if (row<= 5) { document.getElementById("currentTile").innerHTML = "Sand" 
		} else { document.getElementById("currentTile").innerHTML = "Water"
		}
	}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row >= 2 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "Sand";
		} else { document.getElementById("currentTile").innerHTML = "Water";
		}
	}


function level7Solution() {
	// USE BINARY IF STATEMENT
    if (column === 7 && row === 4) {
	document.getElementById("currentTile").innerHTML = "Water"; // Set output text
    } else {document.getElementById("currentTile").innerHTML = "Sand";
    }
}

function level8Solution() {
	// USE BINARY IF STATEMENT
    if (column === 2 || row === 5) {
	document.getElementById("currentTile").innerHTML = "Tree"; // Set output text
    } else {document.getElementById("currentTile").innerHTML = "Sand";
    }
}

function level9Solution() {
	// USE BINARY IF STATEMENT
    if (column <= 5 && row <= 5) { 
	document.getElementById("currentTile").innerHTML = "Water"; // Set output text
    } else {document.getElementById("currentTile").innerHTML = "Sand";
    }
} 

function level10Solution() {
	// USE CHAINED IF STATEMENT
    if (column <= 1) {
	document.getElementById("currentTile").innerHTML = "Hill"; // Set output text
    } else if (column === 2 && column === 1) {document.getElementById("currentTile").innerHTML = "Tree";
    } else if (column >= 4 && column <= 7) {document.getElementById("currentTile").innerHTML = "Sand";
	} else (column >= 8) {document.getElementById("currentTile").innerHTML = "Water";
    }
}

function level11Solution() {
	// USE CHAINED IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level12Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level13Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level14Solution() {
	// USE CHAINED IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}
