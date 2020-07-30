const SECONDARY_COLOR = 'red';
const PRIMARY_COLOR = '#0c3f0c';
const SPEED_MS = 2;

export default (originalArr) => {
	const animations = getAnimations(originalArr);
	let color = PRIMARY_COLOR;

	for (let i = 0; i < animations.length; i++) {
		const arrayBars = document.getElementsByClassName('arrayBar');
		const barOneStyle = arrayBars[animations[i][0]].style;
		const barTwoStyle = arrayBars[animations[i][1]].style;

		if (animations[i].length <= 2) {
			const cur_color =
				color === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR;
			setTimeout(() => {
				barOneStyle.backgroundColor = cur_color;
				barTwoStyle.backgroundColor = cur_color;
			}, i * SPEED_MS);
			color = cur_color;
		} else {
			const [barOneHeight, barTwoHeight] = [animations[i][2], animations[i][3]];
			setTimeout(() => {
				barOneStyle.height = `${barOneHeight}px`;
				barTwoStyle.height = `${barTwoHeight}px`;
			}, i * SPEED_MS);
		}
	}
};

function getAnimations(arr) {
	const animations = [];
	if (arr.length <= 1) return arr;
	quickSort(arr, 0, arr.length - 1, animations);
	console.log(arr);
	return animations;
}

function quickSort(mainArr, start, end, animations) {
	if (start >= end) return;
	const pivot = findPivotBetween(mainArr, start, end, animations);
	quickSort(mainArr, start, pivot - 1, animations);
	quickSort(mainArr, pivot + 1, end, animations);
}

function findPivotBetween(mainArr, start, end, animations) {
	const pivotVal = mainArr[end];
	let i = start - 1;
	for (let j = start; j < end; j++) {
		animations.push([i + 1, j]);
		animations.push([i + 1, j]);

		if (mainArr[j] <= pivotVal) {
			const tempVal = mainArr[++i];
			mainArr[i] = mainArr[j];
			mainArr[j] = tempVal;
			animations.push([i, j, mainArr[i], mainArr[j]]);
		}
	}
	const tempVal = mainArr[++i];
	mainArr[i] = pivotVal;
	mainArr[end] = tempVal;
	animations.push([i, end, mainArr[i], mainArr[end]]);
	return i; //pivotId
}

// function test() {
// 	let val = true;
// 	for (let i = 0; i < 100; i++) {
// 		const arr = [];
// 		const length = randomIntFromInterval(1, 1000);
// 		for (let i = 0; i < length; i++) {
// 			arr.push(randomIntFromInterval(-1000, 1000));
// 		}

// 		//change this line for different algo
// 		//..........................
// 		const algoArr = arr.slice();
// 		quickSort(algoArr, 0, arr.length - 1, []);
// 		const jsArr = arr.slice().sort((a, b) => a - b);

// 		//..........................

// 		if (!compareArr(algoArr, jsArr)) {
// 			val = false;
// 		}
// 		if (val) console.log('sexyyyy Algo !');
// 		else console.log('Broken Algorithm');
// 	}
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
