const gameBoard = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleCellClick = (event) => {
    const cellIndex = event.target.getAttribute('data-index');

    if (gameState[cellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[cellIndex] = currentPlayer;
    event.target.innerText = currentPlayer;

    checkForWinner();
};

const checkForWinner = () => {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!gameState.includes('')) {
        message.innerText = 'Game is a Draw!';
        gameActive = false;
        return;const gameBoard = document.querySelectorAll('.cell');
        const message = document.getElementById('message');
        const resetButton = document.getElementById('reset');
        
        let currentPlayer = 'X';
        let gameState = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;
        
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        const handleCellClick = (event) => {
            const cellIndex = event.target.getAttribute('data-index');
        
            if (gameState[cellIndex] !== '' || !gameActive) {
                return;
            }
        
            gameState[cellIndex] = currentPlayer;
            event.target.innerText = currentPlayer;
            event.target.classList.add(currentPlayer);
        
            checkForWinner();
        };
        
        const checkForWinner = () => {
            let roundWon = false;
        
            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                    roundWon = true;
                    break;
                }
            }
        
            if (roundWon) {
                message.innerText = `Player ${currentPlayer} Wins!`;
                gameActive = false;
                return;
            }
        
            if (!gameState.includes('')) {
                message.innerText = 'Game is a Draw!';
                gameActive = false;
                return;
            }
        
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.innerText = `Player ${currentPlayer}'s turn`;
        };
        
        const resetGame = () => {
            currentPlayer = 'X';
            gameState = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            message.innerText = `Player ${currentPlayer}'s turn`;
        
            gameBoard.forEach(cell => {
                cell.innerText = '';
                cell.classList.remove('X', 'O');
            });
        };
        
        gameBoard.forEach(cell => cell.addEventListener('click', handleCellClick));
        resetButton.addEventListener('click', resetGame);
        
        message.innerText = `Player ${currentPlayer}'s turn`;
        
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerText = `Player ${currentPlayer}'s turn`;
};

const resetGame = () => {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    message.innerText = `Player ${currentPlayer}'s turn`;

    gameBoard.forEach(cell => cell.innerText = '');
};

gameBoard.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

message.innerText = `Player ${currentPlayer}'s turn`;
