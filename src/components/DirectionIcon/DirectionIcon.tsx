import React from 'react';
import { SvgIcon } from '@mui/material';

interface DirectionIconProps {
	direction: string;
}

export const DirectionIcon = ({ direction }: DirectionIconProps) => {
	
	const leftIcon = (
		<SvgIcon
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			sx={{ fontSize: '32px' }}
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M22.7071 28.7071C22.3166 29.0976 21.6834 29.0976 21.2929 28.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L21.2929 3.29289C21.6834 2.90237 22.3166 2.90237 22.7071 3.29289C23.0976 3.68342 23.0976 4.31658 22.7071 4.70711L11.4142 16L22.7071 27.2929C23.0976 27.6834 23.0976 28.3166 22.7071 28.7071Z'
				fill='#121212'
			/>
		</SvgIcon>
	);

	const rightIcon = (
		<SvgIcon
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			sx={{ fontSize: '32px' }}
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M9.29289 3.29289C9.68342 2.90237 10.3166 2.90237 10.7071 3.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L10.7071 28.7071C10.3166 29.0976 9.68342 29.0976 9.29289 28.7071C8.90237 28.3166 8.90237 27.6834 9.29289 27.2929L20.5858 16L9.29289 4.70711C8.90237 4.31658 8.90237 3.68342 9.29289 3.29289Z'
				fill='#121212'
			/>
		</SvgIcon>
	);

	return direction === 'left' ? leftIcon : direction === 'right' ? rightIcon : null;
};
