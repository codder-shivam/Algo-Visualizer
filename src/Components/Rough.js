import React from 'react';

function solve(arr) {
	for (let i = 0; i < arr.length; i++) {
		//setTimeout(() => {
		console.log(arr[i]);
		//}, 1000);
	}
}

function Rough() {
	const arr = [1, 2, 3, 4, 5];

	return <button onClick={solve(arr)}> click me</button>;
}

export default Rough;
//import { ButtonComponent } from './button';
