import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggle_square } from '../../actions/board/board'
import { toggle_vertical, toggle_horizontal } from '../../actions/pieces/pieces'
import { availableLocations } from '../../lib/domineering';


export default function ToolLayer({props}) {
	const { w } = props
	const dispatch = useDispatch()
	const { board, vertical, horizontal, tool } = useSelector(state => state)

	const { canToggle, toggle}  = toolFunctor(tool, board, vertical, horizontal)

	return (
		<g>
			{board.map((row, y) => {
				return (
					row.map((square, x) => {
						const onMouseEnter = () => {
							// let coor = canToggle(x, y)
							// coor && dispatch(isHover(coor[0], coor[1]), true)
						}
						const onMouseLeave = () => {
							// let coor = canToggle(x, y)
							// coor && dispatch(isHover(coor[0], coor[1]), false)
						}
						const onClick = () => { 
							let coor = canToggle(x, y)
							coor && dispatch(toggle(coor[0], coor[1]))
						}
						return (
							<g key={`t-${y}-${x}`}>
								<rect 
									x={x*w}
									y={y*w}
									width={w} 
									height={w}
									opacity="0.0" 
									onMouseEnter={onMouseEnter}
									onMouseLeave={onMouseLeave}
									onClick={onClick}
								/>
                            </g>
						)
					})
				)
			})}
		</g>
	)
}



function toolFunctor(tool, board, vertical, horizontal) {
	switch (tool) {
		case "square":
			return {
				canToggle:(x, y) => squareToggle(x, y, vertical, horizontal),
				isHover: (x, y, hovered) => false,
				toggle: (x, y) => toggle_square(x, y)
			}
		case "vertical":
			return {
				canToggle: (x, y) => verticalToggle(x, y, board, vertical, horizontal),
				isHover: (x, y, hovered) => false,
				toggle: (x, y) => toggle_vertical(x, y)
			}
		case "horizontal":
			return {
				canToggle: (x, y) => horizontalToggle(x, y, board, vertical, horizontal),
				isHover: (hovered) => false,
				toggle: (x, y) => toggle_horizontal(x, y)
			}
		default:
			return {};
	}
}


function verticalOccupied(x, y, vertical) {
	return vertical[y][x] || vertical[Math.max(y-1, 0)][x]
}

function horizontalOccupied(x, y, horizontal) {
	return horizontal[y][x] || horizontal[y][Math.max(x-1, 0)]
}

function squareToggle(x, y, vertical, horizontal) {
	let coordinate = [x, y]
	if (!(verticalOccupied(x, y, vertical) || horizontalOccupied(x, y, horizontal))) {
		return coordinate
	} 
	return null
}

function verticalToggle(x, y, board, vertical, horizontal) {
	let coordinate = [x, y]
	const available = availableLocations(board, vertical, horizontal)
	const w = available.length

	if (available[y][x] && (w > (y+1) && available[y+1][x])){
		return coordinate
	} else if (y > 0 && vertical[y-1][x]){
		return [x, y-1]
	} else if (vertical[y][x]){
		return coordinate
	}

	return null;
}

function horizontalToggle(x, y, board, vertical, horizontal) {
	let coordinate = [x, y]
	const available = availableLocations(board, vertical, horizontal)
	const w = available.length

	if (available[y][x] && (w > (x+1) && available[y][x+1])){
		return coordinate
	} else if (x > 0 && horizontal[y][x-1]){
		return [x-1, y]
	} else if (horizontal[y][x]){
		return coordinate
	}

	return null;
}




