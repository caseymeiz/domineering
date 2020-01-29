import { Game, defined } from './game';


const memoizedAdd = new Map()
export function add( g, h ) {
    // let gString = g.str()
    // let hString = g.str()
    // if (memoizedAdd.has(gString+hString)){
    //     return memoizedAdd.get(gString+hString)
    // }

    const gameSum = new Game()

    const glPlusH =  g.left.map( (gl) => add( gl, h ) )
    const grPlusH = g.right.map( (gr) => add( gr, h ) )

    const hlPlusG =  h.left.map( (hl) => add( hl, g ) )
    const hrPlsuG = h.right.map( (hr) => add( hr, g ) )

    gameSum.left =  glPlusH.concat( hlPlusG )
    gameSum.right = grPlusH.concat( hrPlsuG )

    // memoizedAdd.set(gString+hString, gameSum)

    return gameSum;
}


export function inverse( game ) {
    const gameInverse = new Game()
    gameInverse.left = game.right.map( inverse )
    gameInverse.right = game.left.map( inverse )
    return gameInverse;
}

function inLeft(o) { 
    return o === "L"
}

function inRight(o) { 
    return o === "R"
}

function inNext(o) { 
    return o === "N"
}

function inZero(o) { 
    return o === "P"
}


const memoized = new Map()
export function outcome ( game ) {
    if(memoized.has(game)) {
        return memoized.get(game)
    }

    let gameOutcome = ""

    const leftOutcomes = game.left.map( outcome )
    const rightOutcomes = game.right.map( outcome )

    if (leftOutcomes.some((o) => inLeft(o)  || inZero(o) ) && 
        rightOutcomes.some((o) => inRight(o) || inZero(o) )){
        gameOutcome = "N"
    } else if (leftOutcomes.every((o) => inRight(o) || inNext(o)) &&
        rightOutcomes.some((o) => inRight(o) || inZero(o))){
        gameOutcome = "R"
    } else if (leftOutcomes.some((o) => inLeft(o)  || inZero(o)) && 
        rightOutcomes.every((o) => inLeft(o)  || inNext(o)) ){
        gameOutcome = "L"
    } else if (leftOutcomes.every((o) => inRight(o) || inNext(o)) &&
        rightOutcomes.every((o) => inLeft(o)  || inNext(o))){
        gameOutcome = "P"
    }

    memoized.set(game, gameOutcome)

    return gameOutcome
}


export function equals ( g, h ) {
    return outcome( add( g, inverse( h ) ) ) === "P"
}


export function reduce(game) {
    const reducedGame = new Game()

    reducedGame.left = game.left.map(reduce)
    reducedGame.right = game.right.map(reduce)

    reducedGame.left = dominated(reducedGame.left, "L", "R")
    reducedGame.right = dominated(reducedGame.right, "R", "L")
    return reducedGame
}


export function dominated(games, keep, remove) {
    const options = new Set(games)
    for (let i = 0;  i < games.length; i++) {
        for (let j = i+1; j < games.length; j++) {
            let gameOutcome = outcome(add(games[i], inverse(games[j])))

            if (gameOutcome === keep || gameOutcome === "P") {
                if (options.has(games[j])) {
                    options.delete(games[j])
                }
            } else if (gameOutcome === remove ) {
                if (options.has(games[i])){
                    options.delete(games[i])
                }
            }
        }
    }
    return Array.from(options)
}