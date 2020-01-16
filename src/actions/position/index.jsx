


export const TOGGLE_SQUARE = 'TOGGLE_SQUARE'
export function toggle_square(x, y) {
    return {
        type: TOGGLE_SQUARE,
        x,
        y
    }
}