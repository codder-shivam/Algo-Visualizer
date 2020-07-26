import React from 'react';

export const ButtonComponent = (props) => {
	return (
		<button
			style={{
				color: 'green',
				//position: 'absolute',
			}}>
			{props.buttonLabel}
		</button>
	);
};
