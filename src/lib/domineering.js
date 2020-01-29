import { Game } from './game';

const memoized = {}
export function domineeringToGame(board) {

    const hash = hashBoard(board)
    if (memoized[hash]) {
        return memoized[hash]
    }


    let game = new Game();

    var left = []
    var right = []


    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length - 1; x++) {
            if (board[y][x] && board[y][x+1]) {
                right.push(move(board, x, y, x+1, y))
            }
        }
    }


    for (let y = 0; y < board.length - 1; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] && board[y+1][x]) {
                left.push(move(board, x, y, x, y+1))
            }        
        }
    }


    game.left = left.map(domineeringToGame)
    game.right = right.map(domineeringToGame)

    memoized[hash] = game

    return game;
}


export function convert(board) {
    return genGame(transform(board))
}

function transform(board) {
    return hashBoard(board)
}

const known = {}
export function genGame(board) {

    if (known[board]) {
        return known[board]
    }

    let game = new Game();

    var left = []
    var right = []


    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < (5 - 1); x++) {
            if (board & 2**((y*5) + x) && board & 2**((y*5) + (x+1))) {
                right.push(genMove(board, x, y, x+1, y))
            }
        }
    }


    for (let y = 0; y < (5 - 1); y++) {
        for (let x = 0; x < 5; x++) {
            if (board & 2**((y*5) + x) && board & 2**(((y+1)*5) + (x))) {
                left.push(genMove(board, x, y, x, y+1))
            }        
        }
    }


    game.left = left.map(genGame)
    game.right = right.map(genGame)

    known[board] = game

    return game;
}


function genMove(board, x, y, x1, y1) {
    let newBoard = board
    newBoard ^= 2**(y*5 + x)
    newBoard ^= 2**(y1*5 + x1)
    return newBoard
}


function move(board, x, y, x1, y1) {
    const newBoard = []
    board.forEach( (row, index) => {
        newBoard[index] = row.slice();
    })

    newBoard[y][x] = false;
    newBoard[y1][x1] = false;

    return newBoard;
}



export function availableLocations(board, vertical, horizontal) {
    const available = board.map((row)=>row.slice())

    for (var y = 0; y < vertical.length; y++) {
        for (var x = 0; x < vertical[y].length; x++) {
            if (vertical[y][x]) {
                available[y][x] = false
                available[y+1][x] = false
            }
            if (horizontal[y][x]) {
                available[y][x] = false
                available[y][x+1] = false
            }
        }
    }
    return available
} 

function inverseHash(hash) {
    let board = new Array(5);
    for (let y = 0; y < 5; y++) {
        board[y] = new Array(5)
        board[y].fill(false)
        for (let x = 0; x < 5; x++) {
            if (hash & 2**(y*5 + x)){
                board[y][x] = true
            }
        }
    }
    return board
}

function hashBoard(board) {
    let hash = 0;
    for (var y = 0; y < 5; y++) {
        for (var x = 0; x < 5; x++) {
            if (board[y][x]){
                hash ^= 2**(y*5 + x)
            }
        }
    }
    return hash
}







