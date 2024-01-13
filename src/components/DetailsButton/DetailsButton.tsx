import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import { globalTheme } from '../../themes/GlobalTheme';

interface DetailsButtonProps {
	disabled?: boolean;
	border: string;
	marginBottom?: string;
	children: ReactNode;
	handleNavigate: () => void;
}

export const DetailsButton = ({
	disabled = false,
	border,
	marginBottom,
	children,
	handleNavigate,
}: DetailsButtonProps) => {
	const detailsButtonStyles = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minWidth: '290px',
		height: '75px',
		backgroundColor: globalTheme.palette.secondary.main,
		color: globalTheme.palette.primary.main,
		border,
		borderRadius: '5px',
		py: '9.25px',
		mb: marginBottom,
	};

	return (
		<Button disabled={disabled} variant='contained' color='primary' onClick={handleNavigate} sx={detailsButtonStyles}>
			{children}
		</Button>
	);
};
