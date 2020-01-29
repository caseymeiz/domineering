import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Grid from '@material-ui/core/Grid';
import rootReducer from './reducers/root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Latex from './hooks/Latex'
import Outcome from './hooks/Outcome'
import ToolBar from './hooks/ToolBar';
import Board from './hooks/board/Board'

const store = createStore(
  rootReducer
)


function App() {
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h3">Domineering</Typography>
						</Grid>

						<Grid item xs={6}>
							<Board></Board>
						</Grid>

						<Grid item xs={6}>
							<Grid item xs={12}>
								<ToolBar></ToolBar>
							</Grid>
							<Grid item xs={12}>
								<Outcome></Outcome>
							</Grid>
							<Grid item xs={12}>
								<Latex></Latex>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</MuiThemeProvider>
		</Provider>
	);
}

export default App;
