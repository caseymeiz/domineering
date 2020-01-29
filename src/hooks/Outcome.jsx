import React from 'react';
import Typography from '@material-ui/core/Typography';
import { outcome, reduce } from '../lib/algebra';
import { domineeringToGame, availableLocations, convert } from '../lib/domineering';
import { useSelector } from 'react-redux'


export default function Outcome() {
    const { board, vertical, horizontal } = useSelector(state => state)
    const available = availableLocations(board, vertical, horizontal)

    console.log('=======================================')
    
    console.time('build game')
    let game = convert(available)
    console.timeEnd('build game')

    console.time('reduce')
    //game = reduce(game)
    console.timeEnd('reduce')
    
    console.time('outcome')
    const gameOutcome = outcome(game)
    console.timeEnd('outcome')

    console.time('game str')
    const gameStr = ""//game.str()
    console.timeEnd('game str')


    return (
        <div>
            <Typography variant="h5">Outcome</Typography>
            <p>{gameOutcome}</p>
            <p>{gameStr}</p>
        </div>
        )
}