function solution(n, k, arr, m) {
	let answer = [];
	let temp = [];

	function DFS(level, starter) {
		if (level === k) {
			const sum = temp.slice().reduce((a, b) => a + b, 0);

			if (sum % m === 0) {
				answer.push(temp.slice());
				console.log(temp.slice());
			}
		} else {
			for (let i = starter; i < n; i++) {
				temp.push(arr[i]);

				DFS(level + 1, i + 1);

				temp.pop();
			}
		}
	}

	DFS(0, 0);
	return answer.length;
}

let arr = [2, 4, 5, 8, 12];

// 5개의 숫자(arr)가 주어지고 3개를 뽑는 경우에 그 합이 6의 배수가 되는 경우를 찾는 문제
console.log(solution(5, 3, arr, 6));
