import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface CustomButtonProps {
	disabled?: boolean;
	btnBackground: string;
	disabledBackground?: string;
	btnName: string;
}

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: (props: CustomButtonProps) => props.btnBackground,
		margin: '75px 0px 50px 0px',
		color: '#EEF4F5',
		paddingY: '10.25px',
		minWidth: '290px',
		'& .MuiButton-root': {
			height: 28,
		},
		'&.Mui-disabled': {
			backgroundColor: (props: CustomButtonProps) => props.disabledBackground,
			color: '#EEF4F5',
		},
	},
}));

export const CustomButton = ({ disabled, btnBackground, disabledBackground, btnName }: CustomButtonProps) => {
	const classes = useStyles({ btnBackground, disabledBackground, btnName });

	return (
		<Button type='submit' disabled={disabled} variant='contained' className={classes.root}>
			{btnName}
		</Button>
	);
};
