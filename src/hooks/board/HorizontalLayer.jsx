import React from 'react'
import { useSelector } from 'react-redux'
import { translate, scale, rotate, domino } from '../../lib/geo';


export default function HorizontalLayer ({props}) {
    const { w, n } = props
    const { horizontal, horizontalHovered  } = useSelector(state => state)
    const hDomino = rotate(scale(domino(), w/n, w/n), 90)


    return (
        <g>
            {horizontal.map((row, y) => {
                return (
                    row.map((active, x) => {
                        const hovered = horizontalHovered[y][x]
                        let fill = "none"
                        if (active) {
                            fill = "#c9485b"
                        } else if (hovered) {
                            fill = "#AAF"
                        }

                        const d = translate(hDomino, x*w+w, y*w+(w*0.5));

                        return (
                            <g key={`h-${y}-${x}`}>
                                <polygon 
                                        points={d.map((p) => p.join(',')).join(' ')} 
                                        fill={fill}
                                    />
                            </g>
                        )
                    })
                )
            })}
        </g>
    )
}