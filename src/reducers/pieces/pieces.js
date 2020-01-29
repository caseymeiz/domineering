import { defaultVertical, defaultVerticalHovered, defaultHorizontal, defaultHorizontalHovered } from './default'
import { TOGGLE_VERTICAL, TOGGLE_HORIZONTAL } from '../../actions/pieces/pieces';


export function vertical(state=defaultVertical, action) {
    let { x, y } = action;
    switch (action.type){
        case TOGGLE_VERTICAL:
            let newVertical = state.slice()
            newVertical[y][x] = !newVertical[y][x]
            return newVertical;
        default:
            return state;
    }
}


export function verticalHovered(state=defaultVerticalHovered, action) {
    return state
}


export function horizontal(state=defaultHorizontal, action) {
    let { x, y } = action;
    switch (action.type){
        case TOGGLE_HORIZONTAL:
            let newHorizontal = state.slice()
            newHorizontal[y][x] = !newHorizontal[y][x]
            return newHorizontal;
        default:
            return state;
    }
}


export function horizontalHovered(state=defaultHorizontalHovered, action) {
    return state;
}