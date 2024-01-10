import { makeStyles } from '@mui/styles';
import { globalTheme } from '../themes/GlobalTheme';
import { statusColors } from '../constants/statusColors';

export const useFormStyles = makeStyles(theme => ({
	returnBox: {
		display: 'flex',
		justifyContent: 'flex-start',
		minWidth: '290px',
		marginTop: '50px',
		marginBottom: '5px',
		textDecoration: 'none',
	},
	text: {
		color: globalTheme.palette.primary.main,
	},
	cardNameBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minWidth: '290px',
		marginBottom: '40px',
	},
	radioForm: {
		display: 'flex',
		flexDirection: 'row',
		width: '290px',
		marginBottom: '20px',
	},
	checkboxForm: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '290px',
	},
	formControl: {
		'& .MuiFormControlLabel-root .MuiFormControlLabelPlacementEnd-root': {
			marginTop: '0px',
		},
		'& .MuiTypography-root': {
			lineHeight: '1.25',
			marginTop: '2px',
			marginLeft: '10px',
			fontWeight: 500,
			letterSpacing: '0.6px',
		},
	},
	formControlLabel: {
		margin: '0px 10px 0px 0px',
	},
	radioBtn: {
		'& .MuiSvgIcon-root': {
			fill: '#3F7A29',
			fontSize: '20px',
		},
		padding: '0px',
		width: '20px',
		height: '20px',
	},
	checkbox: {
		width: '20px',
		height: '20px',
		display: 'flex',
		alignSelf: 'flex-start',
		'& .MuiSvgIcon-root': {
			fill: statusColors.blue,
		},
	},
}));

export const radioGroupStyles = {
	display: 'flex',
	flexDirection: 'row',
	flexShrink: '0',

	'& .MuiTypography-root': {
		marginTop: '2px',
		fontSize: '10px',
	},
};

export const radioButtonStyles = {
	'& .MuiSvgIcon-root': {
		fill: statusColors.darkGreen,
		fontSize: '20px',
	},
	padding: '0px',
	width: '20px',
	height: '20px',
};

export const radioControlStyles = {
	margin: '0px 10px 0px 0px',
};
