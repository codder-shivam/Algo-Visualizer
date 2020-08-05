const SECONDARY_COLOR = 'red';
const PRIMARY_COLOR = '#0c3f0c';
const FINAL_COLOR = 'blue';
const SPEED_MS = 5;

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
				if (animations[i].length === 5)
					barTwoStyle.backgroundColor = FINAL_COLOR;
				barOneStyle.height = `${barOneHeight}px`;
				barTwoStyle.height = `${barTwoHeight}px`;
			}, i * SPEED_MS);
		}
	}
};

function getAnimations(arr) {
	if (arr.length <= 1) return arr;
	const animations = [];
	heapSort(arr, animations, arr.length);
	return animations;
}

function heapSort(mainArr, animations, length) {
	let lastParentIdx = Math.floor(length / 2 - 1);
	let lastHeapNodeIdx = length - 1;

	for (let i = lastParentIdx; i >= 0; i--) {
		heapify(mainArr, animations, i, length);
	}

	for (; lastHeapNodeIdx > 0; lastHeapNodeIdx--) {
		[mainArr[0], mainArr[lastHeapNodeIdx]] = [
			mainArr[lastHeapNodeIdx],
			mainArr[0],
		];
		animations.push([0, lastHeapNodeIdx]);
		animations.push([0, lastHeapNodeIdx]);
		animations.push([
			0,
			lastHeapNodeIdx,
			mainArr[0],
			mainArr[lastHeapNodeIdx],
			0,
		]);

		heapify(mainArr, animations, 0, lastHeapNodeIdx);
	}
}

function heapify(mainArr, animations, parentIdx, size) {
	let leftChildIdx = 2 * parentIdx + 1;
	let rightChildIdx = leftChildIdx + 1;

	let greater = parentIdx;

	if (leftChildIdx < size && mainArr[leftChildIdx] > mainArr[greater])
		greater = leftChildIdx;
	if (rightChildIdx < size && mainArr[rightChildIdx] > mainArr[greater])
		greater = rightChildIdx;

	if (greater !== parentIdx) {
		[mainArr[greater], mainArr[parentIdx]] = [
			mainArr[parentIdx],
			mainArr[greater],
		];

		animations.push([parentIdx, greater]);
		animations.push([parentIdx, greater]);
		animations.push([parentIdx, greater, mainArr[parentIdx], mainArr[greater]]);

		heapify(mainArr, animations, greater, size);
	}
}
