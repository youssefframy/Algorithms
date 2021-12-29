breadthFirstSearch(() => {
	let currentNode = this.root;
	let list = [];
	let queue = [];
	queue.push(currentNode);

	while (queue.length > 0) {
		currentNode = queue.shift();
	}
})