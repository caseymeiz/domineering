import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { select_tool } from '../actions/editor/editor'
import { translate, scale, rotate, domino_original } from '../lib/geo';

const useStyles = makeStyles(theme => ({
  root: {
	'& > *': {
	  margin: theme.spacing(1),
	},
  },
}));

export default function ToolBar() {
    const dispatch = useDispatch()
    const { tool } = useSelector(state => state)

	const classes = useStyles();

	const vPoints = translate(scale(translate(domino_original(), -50, -50), .5, .8), 50, 50);
	const hPoints = translate(rotate(translate(vPoints, -50, -50), 90), 50, 50)


	return (
		<Grid container spacing={3}>
			<Grid item xs={12}> 
				<Typography variant="h5">Editor</Typography>
				<div className={classes.root}>

					<Button 
						disableRipple
						variant="outlined"
						color={tool === "square" ? "primary" : "secondary"}
						startIcon={
							<SvgIcon>
								<svg viewBox="0 0 100 100">
									<rect x="0" y="0" width="100" height="100" fill="#AAF" />
								</svg>
							</SvgIcon>
						}
						onClick={() => {
							dispatch(select_tool("square"))
						}}
						> Edit Squares
					</Button>


					<Button
						disableRipple
						variant="outlined" 
						color={tool === "vertical" ? "primary" : "secondary"}
						startIcon={
							<SvgIcon>
								<svg viewBox="0 0 100 100">
									<polygon x="0" y="0" points={vPoints.map((p) => p.join(',')).join(' ')} fill="#46b3e6" />
								</svg>
							</SvgIcon>
						}
						onClick={() => {
							dispatch(select_tool("vertical"))
						}}
					> Edit Vertical
					</Button>


					<Button 
						disableRipple	
						variant="outlined"
						color={tool === "horizontal" ? "primary" : "secondary"}
						startIcon={
							<SvgIcon>
								<svg viewBox="0 0 100 100">
									<polygon x="0" y="0" points={hPoints.map((p) => p.join(',')).join(' ')} fill="#c9485b" />
								</svg>
							</SvgIcon>
						}
						onClick={() => {
							dispatch(select_tool("horizontal"))
						}}
					> Edit Horizontal
					</Button>
				</div>
			</Grid>
		</Grid>
		)
}
