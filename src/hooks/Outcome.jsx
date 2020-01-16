import React from 'react';
import Typography from '@material-ui/core/Typography';
import { outcome } from '../lib/algebra';
import { domineeringToGame } from '../lib/domineering';
import { useSelector } from 'react-redux'


export default function Outcome() {
    const { position: { isHollow } } = useSelector(state => state)


    return (
        <div>
            <Typography variant="h5">Outcome</Typography>
            {outcome(domineeringToGame(isHollow))}
        </div>
        )
}