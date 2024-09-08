// tic_tac_toe/script.js

let board = [];
let currentPlayer = 'X';
let gameOver = false;

for (let i = 0; i < 9; i++) {
    board.push('');
    document.getElementById(`cell-${i}`).addEventListener('click', () => {
        if (!gameOver && board[i] === '') {
            board[i] = currentPlayer;
            document.getElementById(`cell-${i}`).innerText = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const combo = winningCombinations[i];
        if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== '') {
            alert(`Player ${board[combo[0]]} wins!`);
            gameOver = true;
            return;
        }
    }

    if (!board.includes('')) {
        alert("It's a tie!");
        gameOver = true;
    }
}