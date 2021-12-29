let numbers = [1, 2, 33, 4, 28, 12];

function insertionSort(array) {
	const len = array.length;
	for (let i = 0; i < len; i++) {
		if (array[i] < array[0]) {
			// move number to the first position
			array.unshift(array.splice(i,1)[0]);
		} else {
			// find where number should go
			for (let j = 1; j<i ; j++) {
				if (array[i] > array[j-1] && array[i] < array[j]) {
					// move number to the right spot
					array.splice(j,0,array.splice(i,1)[0]);
				}
			}
		}
	}
}

insertionSort(numbers);
console.log(numbers);