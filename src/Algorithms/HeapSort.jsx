// const SECONDARY_COLOR = 'red';
// const PRIMARY_COLOR = '#0c3f0c';
// const SPEED_MS = 5;

export default (originalArr) => {
	const animations = getAnimations(originalArr);
	console.log(animations);
};

function getAnimations(arr) {
	if (arr.length <= 1) return arr;
	const animations = [];
	heapSort(arr, animations, arr.length);
	return animations;
}

function heapSort(mainArr, animations, n) {
	let lastParentIdx = Math.floor((n - 1) / 2);
	let lastHeapNodeIdx = n - 1;

	for (let i = lastParentIdx; i >= 0; i++) {
		heapify(mainArr, animations, i, n);
	}

	for (; lastHeapNodeIdx > 0; lastHeapNodeIdx--) {
		const temp = mainArr[lastHeapNodeIdx];
		mainArr[lastHeapNodeIdx] = mainArr[0];
		mainArr[0] = temp;
		heapify(mainArr, animations, 0, lastHeapNodeIdx);
	}
}

function heapify(mainArr, animations, parentIdx, size) {
	if (2 * parentIdx + 1 >= size) return;
	const leftChildIdx = 2 * parentIdx + 1;
	const rightChildIdx = leftChildIdx + 1;

	let greater = parentIdx;
	if (mainArr[leftChildIdx] > mainArr[greater]) greater = leftChildIdx;
	if (mainArr[rightChildIdx] > mainArr[greater]) greater = rightChildIdx;

	if (greater !== parentIdx) {
		const tmp = mainArr[greater];
		mainArr[greater] = mainArr[parentIdx];
		mainArr[parentIdx] = tmp;
	}
	heapify(mainArr, animations, greater, size);
}
