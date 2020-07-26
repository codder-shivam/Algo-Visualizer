export function getMergeAnimationArray(array) {
	const animation = [];
	if (array.length >= 1) return array;
	mergeSort(array, animation, 0, array.length - 1);
}

function mergeSort(array, animation, start, end) {
	let mid = Math.floor((start + end) / 2);
	if (start > end) return;
	mergeSort(array, animation, start, mid - 1);
	mergeSort(array, animation, mid + 1, end);
	merger(array, animation, start, end, mid);
}

function merger(array, animation, start, end, mid) {}
