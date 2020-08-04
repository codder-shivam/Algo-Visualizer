// const SECONDARY_COLOR = 'red';
// const PRIMARY_COLOR = '#0c3f0c';
// const SPEED_MS = 5;

export default (originalArr) => {
	const animations = getAnimations(originalArr);
	console.log(originalArr);
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
		heapify(mainArr, animations, 0, lastHeapNodeIdx);
		animations.push();
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
		heapify(mainArr, animations, greater, size);
	}
}
