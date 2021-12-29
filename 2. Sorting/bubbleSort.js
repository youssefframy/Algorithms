let arr1  = [99, 1, 55, 32, 15, 7, 81];

function bubbleSort (array) {
	const len = array.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (array[j] > array[j+1]) {
				// Swap numbers
				let temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
}

bubbleSort(arr1);
console.log(arr1);
