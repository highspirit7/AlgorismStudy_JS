function solution(n) {
	const temp = [];
	const answer = [];

	function DFS(node) {
		if (node === n + 1) {
			answer.push(temp.slice());
			if (temp.length > 0) console.log(temp);
		} else {
			temp.push(node);
			DFS(node + 1);

			temp.pop(node);
			DFS(node + 1);
		}
	}

	DFS(1);

	return answer;
}

console.log(solution(3));
