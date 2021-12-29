function findFactorialRecursive(number) {
	if (number === 2) {
		return 2
	}
	answer = number * findFactorialRecursive(number-1);
	console.log(answer);
	return answer
}

function findFactorialIterative(number) {
	let answer = 1;
	if (number === 2 ) {
		answer = 2;
	}
	for (let i = 2; i <= number ; i++) {
		answer = answer * i ;
	}
	console.log(answer);
	return answer;
}

findFactorialRecursive(5);