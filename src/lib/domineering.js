import Game from './game';


export function domineeringToGame(isAvailableMatrix) {

    let game = new Game();

    var left = []
    var right = []

    for (var y = 0; y < isAvailableMatrix.length; y++) {
        for (var x = 0; x < isAvailableMatrix[y].length - 1; x++) {
            if (!isAvailableMatrix[y][x] && !isAvailableMatrix[y][x+1]) {
                right.push(move(isAvailableMatrix, x, y, x+1, y))
            }
        }
    }

    for (var y = 0; y < isAvailableMatrix.length - 1; y++) {
        for (var x = 0; x < isAvailableMatrix[y].length; x++) {
            if (!isAvailableMatrix[y][x] && !isAvailableMatrix[y+1][x]) {
                left.push(move(isAvailableMatrix, x, y, x, y+1))
            }        
        }
    }

    game.left = left.map(domineeringToGame)
    game.right = right.map(domineeringToGame)

    return game;
}

function move(isAvailableMatrix, x, y, x1, y1) {
    const newAvailableMatrix = []
    isAvailableMatrix.forEach( (row, index) => {
        newAvailableMatrix[index] = row.slice();
    })

    newAvailableMatrix[y][x] = true;
    newAvailableMatrix[y1][x1] = true;

    return newAvailableMatrix;
}