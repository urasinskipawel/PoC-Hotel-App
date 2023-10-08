import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
	disabled: boolean;
	btnBackground: string;
	disabledBackground?: string;
	btnName: string;
}

export const CustomButton = ({ disabled, btnBackground, disabledBackground, btnName }: ButtonProps) => {
	return (
		<Button
			type='submit'
			disabled={disabled}
			variant='contained'
			sx={{
				backgroundColor: btnBackground,
				margin: '75px 0px 50px 0px',
				color: '#EEF4F5',
				py: '10.25px',
				minWidth: '290px',
				'& .MuiButton-root': {
					height: 28,
				},
				'&.Mui-disabled': {
					background: disabledBackground,
					color: '#EEF4F5',
				},
			}}
		>
			{btnName}
		</Button>
	);
};
