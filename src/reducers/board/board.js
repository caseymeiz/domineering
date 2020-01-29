import { defaultActive, defaultHovered } from './default';

import { TOGGLE_SQUARE } from '../../actions/board/board';


export function board(state=defaultActive, action) {
	let { x, y } = action;
	switch (action.type){
		case TOGGLE_SQUARE:
			let newBoard = state.slice()
			newBoard[y][x] = !newBoard[y][x]
			return newBoard;
		default:
			return state;
	}
}

export function squaresHovered(state=defaultHovered, action) {
    return state
}