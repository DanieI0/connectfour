export default function checkForWinner(gameBoard) {
    for (let column = 0; column < gameBoard.length - 3; column++) {
        for (let row = 0; row < gameBoard[column].length - 3; row++) {
            const diagonalSum = gameBoard[column][row] +
                gameBoard[column + 1][row + 1] +
                gameBoard[column + 2][row + 2] +
                gameBoard[column + 3][row + 3];


            if (diagonalSum === 4) return 'playerOne';
            if (diagonalSum === -4) return 'playerTwo';


            const reverseDiagonalSum =
                gameBoard[column + 3][row] +
                gameBoard[column + 2][row + 1] +
                gameBoard[column + 1][row + 2] +
                gameBoard[column][row + 3];

            if (reverseDiagonalSum === 4) return 'playerOne';
            if (reverseDiagonalSum === -4) return 'playerTwo';
        }
    }

    for (let column = 0; column < gameBoard.length; column++) {
        for (let row = 0; row < gameBoard[column].length - 3; row++) {
            const columnSum =
                gameBoard[column][row] +
                gameBoard[column][row + 1] +
                gameBoard[column][row + 2] +
                gameBoard[column][row + 3];


            if (columnSum === 4) return 'playerOne';
            if (columnSum === -4) return 'playerTwo';
        }
    }

    for (let column = 0; column < gameBoard.length - 3; column++) {
        for (let row = 0; row < gameBoard[column].length; row++) {
            const rowSum =
                gameBoard[column][row] +
                gameBoard[column + 1][row] +
                gameBoard[column + 2][row] +
                gameBoard[column + 3][row];


            if (rowSum === 4) return 'playerOne';
            if (rowSum === -4) return 'playerTwo';
        }
    }

    return false;
}
