function solution() {
	let queue = [];
	queue.push(1);

	while (queue.length > 0) {
		let value = queue.shift();

		console.log(value);

		for (let newValue of [value * 2, value * 2 + 1]) {
			if (newValue > 7) continue;
			queue.push(newValue);
		}
	}
}

solution(1);
