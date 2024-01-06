import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

interface DetailsButtonProps {
	disabled?: boolean;
	border: string;
	marginBottom?: string;
	children: ReactNode;
	handleNavigate: () => void;
}

export const DetailsButton = ({ disabled, border, marginBottom, children, handleNavigate }: DetailsButtonProps) => {
	return (
		<Button
			disabled={disabled}
			variant='contained'
			color='primary'
			onClick={handleNavigate}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				minWidth: '290px',
				height: '75px',
				border: { border },
				borderRadius: '5px',
				py: '9.25px',
				mb: { marginBottom },
			}}>
			{children}
		</Button>
	);
};
