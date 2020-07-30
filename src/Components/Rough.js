import React from 'react';

function Rough() {
	return (
		<button
			className='button'
			onClick={() => {
				return (document.getElementById('alpha').innerHTML =
					"<video src='./jsbckgrnd.mp4' autoPlay='true' loop='true' width='100%' />");
			}}>
			display photo
		</button>
	);
}

export default Rough;
//import { ButtonComponent } from './button';
