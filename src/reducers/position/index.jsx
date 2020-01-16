import positionState from './default';

import { TOGGLE_SQUARE } from '../../actions/position/index';



export default function position(state=positionState, action) {
	let { x, y } = action;
	switch (action.type){
		case TOGGLE_SQUARE:
			let newPositionState = {isHollow: state.isHollow.slice()}
			newPositionState.isHollow[x][y] = !newPositionState.isHollow[x][y]
			return newPositionState;
		default:
			return state;
	}
}




