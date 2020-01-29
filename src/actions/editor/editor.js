

export const SELECT_TOOL = 'SELECT_TOOL'
export function select_tool(tool) {
    return {
        type: SELECT_TOOL,
        tool
    }
}

export const SET_IS_HOVER = 'SET_IS_HOVER'
export function setIsHover(x, y, isHovered) {
    return {
        type: SET_IS_HOVER,
        isHovered,
        x,
        y
    }
}