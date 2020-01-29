

export function translate(points, xT, yT) {
    return points.map( ([x, y]) => {
        return [
            x + xT,
            y + yT
        ]
    })
}

export function scale(points, xS, yS) {
    return points.map( ([x, y]) => {
        return [
            x*xS,
            y*yS
        ]
    })
}


export function rotate(points, degrees) {
    const roation = degrees * (Math.PI/180)
    return points.map( ([x, y]) => {
        return [
            (Math.cos(roation) * x) - (Math.sin(roation) * y),
            (Math.sin(roation) * x) + (Math.cos(roation) * y)
        ]
    })
}


export function domino_original() {
    return [[0,0], [100,0], [70,20], [70,80], [100,100], [0,100], [30,80], [30,20]];
}

export function domino() {
    return scale(translate(domino_original(), -50, -50), .45, .9);
}

