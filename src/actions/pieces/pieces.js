
export const TOGGLE_VERTICAL = 'TOGGLE_VERTICAL'
export function toggle_vertical(x, y) {
    return {
        type: TOGGLE_VERTICAL,
        x,
        y
    }
}

export const TOGGLE_HORIZONTAL = 'TOGGLE_HORIZONTAL'
export function toggle_horizontal(x, y) {
    return {
        type: TOGGLE_HORIZONTAL,
        x,
        y
    }
}

