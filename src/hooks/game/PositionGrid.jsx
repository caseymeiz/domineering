import React from 'react';
import { useSelector } from 'react-redux'
import Square from './Square';
import Vertical from './Vertical';
import Horizontal from './Horizontal';


export default function PositionGrid() {
    const { board, vertical, horizontal } = useSelector(state => state)
    const w = 10;
    const n = board.length * w;
    const sw = .1;

    return (

        <svg viewBox={`0 0 ${n} ${n}`}>
            
            {board.map((row, y) => {
                return (
                    row.map((square, x) => {
                        return <Square props={{square, y, x, w, n}} key={`squares-${y}-${x}`}/>
                    })
                )
            })}

            {board.map((row, index) => {
                return (
                    <g key={`lines-${index}`}>
                        <line  x1={index*w} y1={0} x2={index*w} y2={n} stroke="black" strokeWidth={sw}/>
                        <line  x1={0} y1={index*w} x2={n} y2={index*w} stroke="black" strokeWidth={sw}/>
                    </g>
                )
            })}


            {vertical.map((row, y) => {
                return (
                    row.map((hasVerticalPiece, x) => {
                        if (hasVerticalPiece) {
                            return <Vertical props={{x, y, w, n}}/>
                        }
                        return <g></g>
                    })
                )
            })}

            {horizontal.map((row, y) => {
                return (
                    row.map((hasHorizontalPiece, x) => {
                        if (hasHorizontalPiece) {
                            return <Horizontal props={{x,y, w,n}}/>
                        }
                        return <g></g>
                    })
                )
            })}

            


            <rect width={n} height={n} fill="none" stroke="black" strokeWidth={sw*2}/>

        </svg>

    )
}





