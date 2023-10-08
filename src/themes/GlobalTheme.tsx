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
					height: '100vh',
				},
			},
		},
	},
	palette: {
		primary: {
			main: '#EEF4F5',
		},
		background: {
			default: '#3F7A29',
		},
	},
});
