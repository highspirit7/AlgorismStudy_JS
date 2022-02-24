function solution(n, m) {
	const base = Array.from({ length: n }, (e, i) => i + 1);
	let answer = [];
	let temp = [];

	function DFS(level, starter) {
		if (level === m) {
			answer.push(temp.slice());
			console.log(temp.slice());
		} else {
			for (let i = starter; i < n; i++) {
				temp.push(base[i]);

				DFS(level + 1, i + 1);

				temp.pop();
			}
		}
	}

	DFS(0, 0);

	return answer.length;
}

console.log(solution(4, 2));
