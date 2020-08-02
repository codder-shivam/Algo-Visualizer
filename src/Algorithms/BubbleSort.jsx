const SECONDARY_COLOR = 'red';
const PRIMARY_COLOR = '#0c3f0c';
const SPEED_MS = 0;

export default (originalArr) => {
	const animations = getAnimations(originalArr);

	for (let i = 0; i < animations.length; i++) {
		const arrayBars = document.getElementsByClassName('arrayBar');
		const isColorChange = i % 4 !== 2;

		if (isColorChange) {
			const [barOneIdx, barTwoIdx] = animations[i];
			const barOneStyle = arrayBars[barOneIdx].style;
			const barTwoStyle = arrayBars[barTwoIdx].style;
			const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			setTimeout(() => {
				barOneStyle.backgroundColor = color;
				barTwoStyle.backgroundColor = color;
			}, i * SPEED_MS);
		} else {
			const [barOneIdx, barOneHeight] = animations[i++];
			const [barTwoIdx, barTwoHeight] = animations[i];
			const barOneStyle = arrayBars[barOneIdx].style;
			const barTwoStyle = arrayBars[barTwoIdx].style;
			setTimeout(() => {
				barOneStyle.height = `${barOneHeight}px`;
				barTwoStyle.height = `${barTwoHeight}px`;
			}, i * SPEED_MS);
			// if (newHeight === sorted[barOneIdx]) {
			// 	barOneStyle.backgroundColor = 'pink';
			// }
		}
	}
};

function getAnimations(arr) {
	if (arr.length <= 1) return arr;
	const animations = [];
	BubbleSort(arr, animations);
	//test();
	return animations;
}

function BubbleSort(arr, animations) {
	let swap;
	for (let i = 0; i < arr.length - 1; i++) {
		swap = false;

		for (let j = 0; j < arr.length - 1 - i; j++) {
			animations.push([j, j + 1]);
			animations.push([j, j + 1]);

			if (arr[j] > arr[j + 1]) {
				swap = true;
				const temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}

			animations.push([j, arr[j]]);
			animations.push([j + 1, arr[j + 1]]);
		}
		if (!swap) break;
	}
	return arr;
}

// function test() {
// 	let val = true;
// 	for (let i = 0; i < 100; i++) {
// 		const arr = [];
// 		const length = randomIntFromInterval(1, 1000);
// 		for (let i = 0; i < length; i++) {
// 			arr.push(randomIntFromInterval(-1000, 1000));
// 		}

// 		const jsArr = arr.slice().sort((a, b) => a - b);

// 		//change this line for different algo
// 		//..........................
// 		const algoArr = BubbleSort(arr.slice());
// 		//..........................

// 		if (!compareArr(algoArr, jsArr)) {
// 			val = false;
// 			break;
// 		}
// 	}
// 	if (val) console.log('sexyyyy Algo !');
// 	else console.log('Broken Algorithm');
// }

// function compareArr(arr1, arr2) {
// 	if (arr1.length !== arr2.length) return false;
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] !== arr2[i]) return false;
// 	}
// 	return true;
// }

// function randomIntFromInterval(min, max) {
// 	// min and max included
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }
