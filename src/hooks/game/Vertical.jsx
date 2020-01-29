import React, {useState} from 'react';
import { translate, scale, domino } from '../../lib/geo';
import { useDispatch, useSelector } from 'react-redux'
import { toggle_vertical } from '../../actions/pieces/pieces'


export default function Vertical({props}) {
	const {x, y, w, n} = props;
	const { selectedTool: { vertical } } = useSelector(state => state)
	const dispatch = useDispatch()

	const d = translate(scale(domino(), w/n, w/n), x*w+(w*.5), y*w+w);
	const [isHover, setIsHover] = useState(false);
	const fill = isHover ? "#AAF" : "#46b3e6"

	const onMouseEnter = () => {vertical && setIsHover(true)}
	const onMouseLeave = () => {vertical && setIsHover(false)}
	const onClick = () => {vertical && dispatch(toggle_vertical(y, x))}

	return (
		<g>
			<polygon 
				points={d.map((p) => p.join(',')).join(' ')} fill={fill}
				/>
			<rect
				x={x*w}
				y={y*w}
				width={w}
				height={w*2}
				opacity="0.0" 
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onClick}
				/>
			</g>
		)
}
