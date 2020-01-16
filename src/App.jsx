import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Grid from '@material-ui/core/Grid';
import rootReducer from './reducers/root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PositionGrid from './hooks/game/PositionGrid';
import Latex from './hooks/Latex'
import Outcome from './hooks/Outcome'


const store = createStore(
  rootReducer
)


function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h3">Domineering</Typography>
						</Grid>

						<Grid item xs={6}>
							<PositionGrid></PositionGrid>
						</Grid>

						<Grid item xs={6}>
							<Grid item xs={12}>
								<Outcome></Outcome>
							</Grid>
							<Grid item xs={12}>
								<Latex></Latex>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
