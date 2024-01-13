import { createTheme } from '@mui/material/styles';

// A custom theme for this ap

export const globalTheme = createTheme({
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: '#EEF4F5',
					padding: 0,
					minHeight: '100vh',
				},
			},
		},
	},
	palette: {
		primary: {
			main: '#121212',
		},
		secondary: {
			main: '#EEF4F5',
		},
	},
});
