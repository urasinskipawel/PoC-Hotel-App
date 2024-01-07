import React from 'react';
import { Button } from '@mui/material';
import { globalTheme } from '../../themes/GlobalTheme';

interface CustomButtonProps {
	disabled?: boolean;
	btnBackground: string;
	disabledBackground?: string;
	btnName: string;
}

export const CustomButton = ({ disabled = false, btnBackground, disabledBackground, btnName }: CustomButtonProps) => {
	const customButtonStyles = {
		backgroundColor: btnBackground,
		margin: '75px 0px 50px 0px',
		color: globalTheme.palette.secondary.main,
		paddingY: '10.25px',
		minWidth: '290px',
		'& .MuiButton-root': {
			height: 28,
		},
		'&.Mui-disabled': {
			backgroundColor: disabledBackground,
			color: globalTheme.palette.secondary.main,
		},
	};

	return (
		<Button type='submit' disabled={disabled} variant='contained' sx={customButtonStyles}>
			{btnName}
		</Button>
	);
};
