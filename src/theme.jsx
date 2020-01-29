import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
	typography: {
		fontFamily: "Courier",
	},
	overrides: {
		MuiButton: {

			outlinedPrimary: {
				color: "#111",
				borderColor: "gray",
				backgroundColor: "white",
				'&:hover': {
					color: "#111",
					borderColor: "gray",
					backgroundColor: "white",
				},
			},
			outlinedSecondary: {
				color: "#111",
				borderColor: "white",
				backgroundColor: "white",
				'&:hover': {
					color: "#111",
					borderColor: "gray",
					backgroundColor: "white",
				},
			},


		}
	}
});