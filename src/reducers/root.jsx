import { combineReducers } from 'redux'
import { board, squaresHovered} from './board/board'
import tool from './editor/editor'
import { vertical, verticalHovered, horizontal, horizontalHovered } from './pieces/pieces'





const rootReducer = combineReducers({
    board,
    squaresHovered,

    vertical,
    verticalHovered,

    horizontal,
    horizontalHovered,

    tool
})


export default rootReducer;

 