import React from 'react';
import { useSelector } from 'react-redux'
import Square from './Square';



export default function PositionGrid() {
    const { position: { isHollow } } = useSelector(state => state)
    const w = 10;
    const n = isHollow.length * w;
    const sw = .1;

    return (

        <svg viewBox={`0 0 ${n} ${n}`}>
            {isHollow.map((row, rowIndex) => {
                return (
                    row.map((hollow, colIndex) => {
                        return <Square props={{hollow, rowIndex, colIndex, w}}/>
                    })
                )
            })}

            {isHollow.map((row, index) => {
                return (
                    <g>
                        <line  x1={index*w} y1={0} x2={index*w} y2={n} stroke="black" strokeWidth={sw}/>
                        <line  x1={0} y1={index*w} x2={n} y2={index*w} stroke="black" strokeWidth={sw}/>
                    </g>
                    )

            })}
            <rect width={n} height={n} fill="none" stroke="black" strokeWidth={sw*2}/>

        </svg>

    )
}





