import React from 'react';
import { Component } from 'react';
import './Visualizer.css';
import MergeSort from '../Algorithms/MergeSort';
import QuickSort from '../Algorithms/QuickSort';
import HeapSort from '../Algorithms/HeapSort';
import BubbleSort from '../Algorithms/BubbleSort';

class Visualizer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: [],
		};
	}

	resetArray() {
		const tmpArr = [];
		for (let i = 5; i < 300; i++) {
			tmpArr.push(randomize(10, 500));
		}

		this.setState({ arr: tmpArr });
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
							style={{
								backgroundColor: '#0c3f0c',
								height: value,
							}}></div>
					))}
				</div>
				<button className='button' onClick={() => this.resetArray()}>
					Reset
				</button>
				<button className='button' onClick={() => MergeSort(this.state.arr)}>
					Merge Sort
				</button>
				<button className='button' onClick={() => QuickSort(this.state.arr)}>
					Quick Sort
				</button>
				<button className='button' onClick={() => HeapSort(this.state.arr)}>
					Heap Sort
				</button>
				<button className='button' onClick={() => BubbleSort(this.state.arr)}>
					Bubble Sort
				</button>
			</>
		);
	}
}

function randomize(start, end) {
	return Math.floor(Math.random() * (end - start + 1) + start);
}

export default Visualizer;
