import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'

export default function Latex() {

    const { position: { isHollow } } = useSelector(state => state)

    return (
        <div>
            <Typography variant="h5">LaTeX</Typography>
            <pre>
                {generateLatex(isHollow)}
            </pre>
        </div>
    )
}


function generateLatex(isHollowMatrix) {
    var latex = []

    latex.push("\\begin{tikzpicture}")

    isHollowMatrix.forEach( (isHollowRow, y) => {
        let reversed = isHollowRow.slice().reverse() // transpose to match tikz 
        reversed.forEach((isHollow, x) => {
            if (!isHollow){
                latex.push(`\\draw (${x},${y}) -- (${x+1},${y}) -- (${x+1},${y+1}) -- (${x},${y+1}) -- (${x},${y});`)
            }
        })
    })

    latex.push("\\end{tikzpicture}")
    return latex.join('\n');

}