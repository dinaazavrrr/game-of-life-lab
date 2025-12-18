
const fs = require('fs');
const { simulate } = require('./game');

function runGameOfLife(inputPath, outputPath) {
    try {
        const data = fs.readFileSync(inputPath, 'utf8');
        const lines = data.trim().split('\n');

        const numGenerations = parseInt(lines[0].trim());
        
        const board = lines.slice(2).map(line => line.trim().split(''));

        if (!board.length || !board[0].length) {
            throw new Error("Некоректний формат вхідного поля.");
        }

        const finalBoard = simulate(board, numGenerations);

        const outputContent = finalBoard.map(row => row.join('')).join('\n');

        fs.writeFileSync(outputPath, outputContent + '\n', 'utf8');
        
        console.log(`Симуляція завершена. Результат записано у файл: ${outputPath}`);

    } catch (error) {
        console.error("Помилка виконання симуляції:", error.message);
    }
}

runGameOfLife('input.txt', 'output.txt');