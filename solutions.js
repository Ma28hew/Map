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
	if (column >= 3 <= 7) {
    document.getElementById("currentTile").innerHTML = "Sand";
    } else { document.getElementById("currentTile").innerHTML = "Hill";
    }
}


function level4Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level5Solution() {
	// USE CHAINED IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level6Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level7Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level8Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level9Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level10Solution() {
	// USE CHAINED IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
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
