const SECONDARY_COLOR = 'red';
const PRIMARY_COLOR = '#0c3f0c';
const SPEED_MS = 0.5;

export default (originalArr) => {
	let arr = originalArr;
	const animations = getMergeSortAnimations(arr);

	for (let i = 0; i < animations.length; i++) {
		const arrayBars = document.getElementsByClassName('arrayBar');
		const isColorChange = i % 3 !== 2;

		if (isColorChange) {
			const [barOneIdx, barTwoIdx] = animations[i];
			const barOneStyle = arrayBars[barOneIdx].style;
			const barTwoStyle = arrayBars[barTwoIdx].style;
			const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			setTimeout(() => {
				barOneStyle.backgroundColor = color;
				barTwoStyle.backgroundColor = color;
			}, i * SPEED_MS);
		} else {
			setTimeout(() => {
				const [barOneIdx, newHeight] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				barOneStyle.height = `${newHeight}px`;
			}, i * SPEED_MS);
		}
	}
};

function getMergeSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return array;
	const auxiliaryArray = array.slice();
	mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
	return animations;
}

function mergeSortHelper(
	mainArray,
	startIdx,
	endIdx,
	auxiliaryArray,
	animations
) {
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
	mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
	doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
	mainArray,
	startIdx,
	middleIdx,
	endIdx,
	auxiliaryArray,
	animations
) {
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while (i <= middleIdx && j <= endIdx) {
		animations.push([i, j]);
		animations.push([i, j]);

		if (auxiliaryArray[i] <= auxiliaryArray[j]) {
			animations.push([k, auxiliaryArray[i]]);
			mainArray[k++] = auxiliaryArray[i++];
		} else {
			animations.push([k, auxiliaryArray[j]]);
			mainArray[k++] = auxiliaryArray[j++];
		}
	}
	while (i <= middleIdx) {
		animations.push([i, i]);
		animations.push([i, i]);
		animations.push([k, auxiliaryArray[i]]);
		mainArray[k++] = auxiliaryArray[i++];
	}
	while (j <= endIdx) {
		animations.push([j, j]);
		animations.push([j, j]);
		animations.push([k, auxiliaryArray[j]]);
		mainArray[k++] = auxiliaryArray[j++];
	}
}

// export function getMergeAnimationArray(array) {
// 	const animation = [];
// 	if (array.length >= 1) return array;
// 	mergeSort(array, animation, 0, array.length - 1);
// }

// function mergeSort(array, animation, start, end) {
// 	let mid = Math.floor((start + end) / 2);
// 	if (start > end) return;
// 	mergeSort(array, animation, start, mid - 1);
// 	mergeSort(array, animation, mid + 1, end);
// 	merger(array, animation, start, end, mid);
// }

// function merger(array, animation, start, end, mid) {}
