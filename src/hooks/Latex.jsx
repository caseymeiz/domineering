import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'

export default function Latex() {

    const { board } = useSelector(state => state)

    return (
        <div>
            <Typography variant="h5">LaTeX</Typography>
            <pre>
                {generateLatex(board)}
            </pre>
        </div>
    )
}


function generateLatex(board) {
    var latex = []

    latex.push("\\begin{tikzpicture}")

    board.forEach( (row, y) => {
        let reversed = row.slice().reverse() // transpose to match tikz 
        reversed.forEach((square, x) => {
            if (square){
                latex.push(`\\draw (${x},${y}) -- (${x+1},${y}) -- (${x+1},${y+1}) -- (${x},${y+1}) -- (${x},${y});`)
            }
        })
    })

    latex.push("\\end{tikzpicture}")
    return latex.join('\n');

}