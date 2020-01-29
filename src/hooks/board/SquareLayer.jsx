import React from 'react'
import { useSelector } from 'react-redux'


export default function SquareLayer({props}) {
	const { n, w } = props
	const { board, squaresHovered  } = useSelector(state => state)
	const sw = 1/w;

	return (
		<g>
			{board.map((row, y) => {
				return (
					row.map((active, x) => {
						const hovered = squaresHovered[y][x]
						let fill = "#DDD"
						if (active) {
							fill = "#FFF"
						} else if (hovered) {
							fill = "#AAF"
						}
						return <rect
							x={x*w}
							y={y*w}
							width={w} 
							height={w} 
							fill={fill}
                            key={`s-${y}-${x}`}
						/>
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
            <rect width={n} height={n} fill="none" stroke="black" strokeWidth={sw*2}/>
		</g>
	)
}
