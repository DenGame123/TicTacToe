let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");
let element3 = document.getElementById("element3");
let element4 = document.getElementById("element4");
let element5 = document.getElementById("element5");
let element6 = document.getElementById("element6");
let element7 = document.getElementById("element7");
let element8 = document.getElementById("element8");
let element9 = document.getElementById("element9");

let winTableBody = document.getElementById("winTableBody");
let resetButton = document.getElementById("reset");

let currentPlayer = "X";
let movesCount = 0;
let gameCount = 1;

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X"; 
}

function gameVerify() {
    if (element1.innerText == "X" && element2.innerText == "X" && element3.innerText == "X" || 
        element1.innerText == "X" && element5.innerText == "X" && element9.innerText == "X" || 
        element3.innerText == "X" && element5.innerText == "X" && element7.innerText == "X" || 
        element4.innerText == "X" && element5.innerText == "X" && element6.innerText == "X" || 
        element7.innerText == "X" && element8.innerText == "X" && element9.innerText == "X" || 
        element1.innerText == "X" && element4.innerText == "X" && element7.innerText == "X" || 
        element2.innerText == "X" && element5.innerText == "X" && element8.innerText == "X" || 
        element3.innerText == "X" && element6.innerText == "X" && element9.innerText == "X") {
        alert("Гравець №1 переміг!");
        recordResult("Гравець №1 (X)");
        resetGame();
    } else if (element1.innerText == "O" && element2.innerText == "O" && element3.innerText == "O" || 
               element1.innerText == "O" && element5.innerText == "O" && element9.innerText == "O" || 
               element3.innerText == "O" && element5.innerText == "O" && element7.innerText == "O" || 
               element4.innerText == "O" && element5.innerText == "O" && element6.innerText == "O" || 
               element7.innerText == "O" && element8.innerText == "O" && element9.innerText == "O" || 
               element1.innerText == "O" && element4.innerText == "O" && element7.innerText == "O" || 
               element2.innerText == "O" && element5.innerText == "O" && element8.innerText == "O" || 
               element3.innerText == "O" && element6.innerText == "O" && element9.innerText == "O") {
        alert("Гравець №2 переміг!");
        recordResult("Гравець №2 (0)");
        resetGame();
    } else if (movesCount === 9) {
        alert("Нічия!");
        recordResult("Нічия");
        resetGame();
    }
}

function recordResult(winner) {
    let row = document.createElement("tr");
    let gameCell = document.createElement("td");
    gameCell.textContent = gameCount++;
    
    let winnerCell = document.createElement("td");
    winnerCell.textContent = winner;
    
    let dateCell = document.createElement("td");
    dateCell.textContent = new Date().toLocaleString();
    
    row.appendChild(gameCell);
    row.appendChild(winnerCell);
    row.appendChild(dateCell);
    
    winTableBody.appendChild(row);
}

function resetGame() {
    element1.innerText = "";
    element2.innerText = "";
    element3.innerText = "";
    element4.innerText = "";
    element5.innerText = "";
    element6.innerText = "";
    element7.innerText = "";
    element8.innerText = "";
    element9.innerText = "";
    movesCount = 0;
    currentPlayer = "X";
}

function gameTest() {
    const elements = [element1, element2, element3, element4, element5, element6, element7, element8, element9];
    elements.forEach(element => {
        element.onclick = function () {
            if (element.innerText === "") {
                element.innerText = currentPlayer;
                movesCount++;
                gameVerify();
                changePlayer();
            }
        };
    });
}

gameTest();