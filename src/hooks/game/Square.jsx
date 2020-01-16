import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { toggle_square } from '../../actions/position/index'

export default function Square({props}) {
    const dispatch = useDispatch()
    const {hollow, rowIndex, colIndex, w} = props;

    const [isHover, setIsHover] = useState(false);
    let fill = hollow ? "#DDD" : "#FFF";

    fill = isHover ? "#AAF" : fill;

    return (
        <rect x={colIndex*w}
              y={rowIndex*w}
              width={w} 
              height={w} 
              fill={fill}
              onMouseEnter={()=>{setIsHover(true)}}
              onMouseLeave={()=>{setIsHover(false)}}
              onClick={()=>{
                dispatch(toggle_square(rowIndex, colIndex))
                setIsHover(false)
            }}/>
        )
    
}