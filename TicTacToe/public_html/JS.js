/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

      // JavaScript for a mobile tic tac toe app


// the internal reprsentation of the board
var board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

var winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];




// next player to play
var player = 'X';

// empty slots remaining
var empty = 9;

// game on or not
var gameOver = false;

// reset the game
function reset() {
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    player = 'X';
    empty = 9;
    gameOver = false;
    drawBoard(-1, -1);
}
function resetGame(){
    for(var i =0; i< board.length; i++){
        board[i].innerHTML = "";
    }
}

// draws the current board
function drawBoard(prow, pcol) {
    for (var row = 0; row < 3; row++)
        for (var col = 0; col < 3; col++) {
            var cell = document.getElementById("cell" + row + col);
            cell.innerHTML = board[row][col];
            cell.style["color"] = "black";
            if (row == prow && col == pcol)
                cell.style["backgroundColor"] = "paleturquoise";
            else
                cell.style["backgroundColor"] = "";
        }
    document.getElementById("player").innerHTML = player;
    document.getElementById("message").style["visibility"] = "visible";
}

// called when the user clicks a cell, to place a piece
function place(row, col) {
    if (!gameOver && board[row][col] == " ") {
        board[row][col] = player;
        if (player == "X")
            player = "O";
        else
            player = "X";
        empty--;
        drawBoard(row, col);
        checkWin();
    }
}



/* Function checkWin() is called to check all winning combinations and display results
 */
function checkWin() {

    // TODO: document all of the code from class
    for ( i = 0; i < winSets.length; i++) {
        if (board[winSets[i][0]].innerHTML == board[winSets[i][1]].innerHTML 
            && board[winSets[i][1]].innerHTML == board[winSets[i][2]].innerHTML 
            && board[winSets[i][0]].innerHTML != "") {
                document.getElementById("cell01").innerHTML + "wins!";

                
            console.log("We have a winner!");
         
        }
    }    
}





