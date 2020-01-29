import React, {useState} from 'react';
import { translate, scale, rotate, domino } from '../../lib/geo';
import { useDispatch, useSelector } from 'react-redux'
import { toggle_horizontal } from '../../actions/pieces/pieces'


export default function Horizontal({props}) {
    const {x, y, w, n} = props;
    const { selectedTool: { horizontal } } = useSelector(state => state)
    const dispatch = useDispatch()

    const d = translate(rotate(scale(domino(), w/n, w/n), 90), x*w+w, y*w+(w*0.5));
    const [isHover, setIsHover] = useState(false);
    const fill = isHover ? "#AAF" : "#c9485b"

    const onMouseEnter = () => {horizontal && setIsHover(true)}
    const onMouseLeave = () => {horizontal && setIsHover(false)}
    const onClick = () => {horizontal && dispatch(toggle_horizontal(y, x))}

    return (
        <g>
            <polygon 
                points={d.map((p) => p.join(',')).join(' ')} fill={fill}
                />
            <rect
                x={x*w}
                y={y*w}
                width={w*2}
                height={w}
                opacity="0.0" 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                />
        </g>
    )
}
