
const { countNeighbors, getNextCellState, simulate } = require('./game');

describe('Game of Life Logic', () => {

    test('Should count neighbors correctly with wrapping (toroidal surface)', () => {
        
        const board = [
            ['.', 'a', '.'],
            ['.', '.', '.'],
            ['.', '.', 'x'] 
        ];
        
        const neighbors = countNeighbors(board, 0, 1);
        expect(neighbors).toBe(1);
    });

    test('Rule: Dead cell with 3 neighbors becomes alive', () => {
        const board = [
            ['x', 'x', 'x'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ];
        expect(getNextCellState(board, 1, 1)).toBe('x');
    });

    test('Rule: Live cell with < 2 neighbors dies (underpopulation)', () => {
        const board = [
            ['.', '.', '.'],
            ['.', 'x', '.'],
            ['.', '.', '.']
        ];
        expect(getNextCellState(board, 1, 1)).toBe('.');
    });

    test('Simulation: Should match the lab example output after 3 generations', () => {
        const inputBoard = [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', 'x', '.', '.', '.', '.', '.'],
            ['.', '.', 'x', '.', '.', '.', '.', '.'],
            ['.', '.', 'x', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.']
        ];

        const expectedBoard = [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', 'x', 'x', 'x', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.']
        ];

        const result = simulate(inputBoard, 3);
        
        expect(result).toEqual(expectedBoard);
    });
});