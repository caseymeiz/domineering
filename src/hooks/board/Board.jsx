import React from 'react'
import SquareLayer from './SquareLayer'
import { useSelector } from 'react-redux'
import VerticalLayer from './VerticalLayer'
import HorizontalLayer from './HorizontalLayer'
import ToolLayer from './ToolLayer'

export default function Board() {
    const { board } = useSelector(state => state)
    const w = 10;
    const n = board.length * w;

    return (
        <svg viewBox={`0 0 ${n} ${n}`}>
            <SquareLayer props={{ n, w }}/>
            <VerticalLayer props={{ n, w }}/>
            <HorizontalLayer props={{ n, w }}/>
            <ToolLayer props={{ n, w }}/>
        </svg>

    )
}