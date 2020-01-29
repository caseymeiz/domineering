import React from 'react'
import { useDisbatch, useState } from 'react-redux'


export default function ToolLayer({props}) {
    const { w, n } = props
    const disbatch = useDisbatch()
    const { board } = useState(state => state)

    return (
        <g>
            {board.map((row, y) => {
                return (
                    row.map((square, x) => {
                        return <rect 
                            x={x*w}
                            y={y*w}
                            width={w} 
                            height={w}
                            opacity="0.0" 
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            onClick={onClick}
                        />                    
                    })
                )
            })}
        </g>
    )
}