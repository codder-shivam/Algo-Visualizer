import React from 'react';
import { Component } from 'react';
import './Visualizer.css';
//import { ButtonComponent } from './button';

class Visualizer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: [],
		};
	}

	resetArray() {
		const arr = [];
		for (let i = 5; i < 300; i++) {
			arr.push(randomize(10, 200));
		}
		this.setState({ arr });
	}

	componentDidMount() {
		this.resetArray();
	}

	render() {
		const { arr } = this.state;

		return (
			<>
				<div className='barContainer'>
					{arr.map((value, index) => (
						<div
							className='arrayBar'
							key={index}
							style={{ height: value }}></div>
					))}
				</div>
				<button className='button' onClick={() => this.resetArray()}>
					Reset
				</button>
				<button className='button' onClick={() => this.mergeSort()}>
					Merge Sort
				</button>
				<button className='button' onClick={() => this.quickSort()}>
					Quick Sort
				</button>
				<button className='button' onClick={() => this.heapSort()}>
					Heap Sort
				</button>
				<button className='button' onClick={() => this.bubbleSort()}>
					Bubble Sort
				</button>
				<button className='button'>Sort !</button>
			</>
		);
	}
}

function randomize(start, end) {
	return Math.floor(Math.random() * (end - start + 1) + start);
}

export default Visualizer;
