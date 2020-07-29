// find sorted value of arr in algorithm using :
// const Arr = BubbleSort(arr.slice()); and call
// test(algoArr); to chek working of algorithm

export default (algoArr) => {
	let val = true;
	for (let i = 0; i < 100; i++) {
		const arr = [];
		const length = randomIntFromInterval(1, 1000);
		for (let i = 0; i < length; i++) {
			arr.push(randomIntFromInterval(-1000, 1000));
		}

		const jsArr = arr.slice().sort((a, b) => a - b);

		if (!compareArr(algoArr, jsArr)) {
			val = false;
			break;
		}
	}
	if (val) console.log('sexyyyy Algo !');
	else console.log('Broken Algorithm');
};

function compareArr(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
