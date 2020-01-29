import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggle_square } from '../../actions/board/board'

export default function Square({props}) {
	const {square, y, x, w} = props;
	const dispatch = useDispatch()
	const { selectedTool: { square: tool } } = useSelector(state => state)

	const [isHover, setIsHover] = useState(false);
	let fill = square ? "#FFF" : "#DDD";

	fill = isHover ? "#AAF" : fill;

    const onMouseEnter = () => {tool && setIsHover(true)}
    const onMouseLeave = () => {tool && setIsHover(false)}
    const onClick = () => {tool && dispatch(toggle_square(y, x)) && setIsHover(false)}

	return (
		<g>
			<rect 
				x={x*w}
				y={y*w}
				width={w} 
				height={w} 
				fill={fill}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onClick}
			/>
		</g>
	)
		
}