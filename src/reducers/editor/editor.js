import defaultSelectedTool from './default';

import { SELECT_TOOL } from '../../actions/editor/editor';


export default function tool(state=defaultSelectedTool, action) {
    let { tool } = action;
    switch (action.type){
        case SELECT_TOOL:
            return tool;
        default:
            return state;
    }
}