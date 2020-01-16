import Game from './game';



export function add( g, h ) {
    const gameSum = new Game()

    const glPlusH =  g.left.map( (gl) => add( gl, h ) )
    const grPlusH = g.right.map( (gr) => add( gr, h ) )

    const hlPlusG =  h.left.map( (hl) => add( hl, g ) )
    const hrPlsuG = h.right.map( (hr) => add( hr, g ) )

    gameSum.left =  glPlusH.concat( hlPlusG )
    gameSum.right = grPlusH.concat( hrPlsuG )

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



export function outcome ( game ) {
    const leftOutcomes = game.left.map( outcome )
    const rightOutcomes = game.right.map( outcome )

    if (leftOutcomes.some((o) => inLeft(o)  || inZero(o) ) && 
        rightOutcomes.some((o) => inRight(o) || inZero(o) )){
        return "N"
    }

    if (leftOutcomes.every((o) => inRight(o) || inNext(o)) &&
        rightOutcomes.some((o) => inRight(o) || inZero(o))){
        return "R"
    }
    
    if (leftOutcomes.some((o) => inLeft(o)  || inZero(o)) && 
        rightOutcomes.every((o) => inLeft(o)  || inNext(o)) ){
        return "L"
    }

    if (leftOutcomes.every((o) => inRight(o) || inNext(o)) &&
        rightOutcomes.every((o) => inLeft(o)  || inNext(o))){
        return "P"
    }


}


export function equals ( g, h ) {
    return outcome( add( g, inverse( h ) ) ) === "P"
}