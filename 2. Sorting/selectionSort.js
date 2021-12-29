let arr1  = [99, 1, 55, 32, 15, 7, 81];

function selectionSort(array) {
	let len = array.length;
	for (let i = 0; i < len; i++) {
		// current index as minimum
		let min = i;
		let temp = array[i];
		for (let j = i+1;j < len; j++) {
			if (array[j] < array[min]) {
				// update minimum if current is smaller than it
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

console.log(selectionSort(arr1));


