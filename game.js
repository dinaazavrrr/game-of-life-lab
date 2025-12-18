
function countNeighbors(board, r, c) {
    const rows = board.length;
    const cols = board[0].length;
    let count = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue; 

            const neighborR = (r + i + rows) % rows;
            const neighborC = (c + j + cols) % cols;

            if (board[neighborR][neighborC] === 'x') {
                count++;
            }
        }
    }
    return count;
}

function getNextCellState(board, r, c) {
    const currentState = board[r][c];
    const neighbors = countNeighbors(board, r, c);

    if (currentState === '.' && neighbors === 3) {
        return 'x'; //Народження
    }
    if (currentState === 'x' && (neighbors === 2 || neighbors === 3)) {
        return 'x'; //Виживання
    }
    
    return '.'; //Смерть
}

function nextGeneration(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    const newBoard = Array.from({ length: rows }, () => Array(cols).fill('.'));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            newBoard[i][j] = getNextCellState(board, i, j);
        }
    }
    return newBoard;
}

function simulate(board, numGenerations) {
    let currentBoard = board;
    for (let i = 0; i < numGenerations; i++) {
        currentBoard = nextGeneration(currentBoard);
    }
    return currentBoard;
}

module.exports = { countNeighbors, getNextCellState, nextGeneration, simulate };