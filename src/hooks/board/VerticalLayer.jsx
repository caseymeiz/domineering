import React from 'react'
import { useSelector } from 'react-redux'
import { translate, scale, rotate, domino } from '../../lib/geo';


export default function HorizontalLayer ({props}) {
    const { w, n } = props
    const { vertical, verticalHovered  } = useSelector(state => state)
    const vDomino = rotate(scale(domino(), w/n, w/n), 0)


    return (
        <g>
            {vertical.map((row, y) => {
                return (
                    row.map((active, x) => {
                        const hovered = verticalHovered[y][x]
                        let fill = "none"
                        if (active) {
                            fill = "#46b3e6"
                        } else if (hovered) {
                            fill = "#AAF"
                        }

                        const d = translate(vDomino, x*w+(w*.5), y*w+w);

                        return <polygon 
                                    points={d.map((p) => p.join(',')).join(' ')} 
                                    fill={fill}
                                    key={`v-${y}-${x}`}
                                />
                    })
                )
            })}
        </g>
    )
}