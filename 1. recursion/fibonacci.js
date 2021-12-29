function fibonacciRecursive(n){
	if (n < 2) {
		return n;
	}
	answer = fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
	return answer
}

fibonacciRecursive(8);

function fibonacciIterative(n) {
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i-2] + arr[i-1]);
	}
	return arr[n]
}
