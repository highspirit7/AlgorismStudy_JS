function solution(n, arr) {
	let answer = [];
	const graph = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

	// 이미 방문한 정점인지 아닌지 확인하기 위한 배열F
	const check = Array.from({ length: n }, () => 0);

	// 1번 정점에서 출발하는 것이므로 경로 체크 전에 미리 아래와 같이 초기화 필요.
	check[0] = 1;
	let temp = [1];

	for (let edge of arr) {
		const [vertex1, vertex2] = edge;

		graph[vertex1 - 1][vertex2 - 1] = 1;
	}

	console.log('graph', graph);

	function DFS(vertex) {
		if (vertex === n) {
			answer.push(temp.slice());
		} else {
			for (let i = 0; i < n; i++) {
				if (graph[vertex - 1][i] === 1) {
					if (check[i] === 0) {
						temp.push(i + 1);
						check[i] = 1;

						DFS(i + 1);

						temp.pop();
						check[i] = 0;
					} else {
						// 처음에 여기서 return을 해주었는데 답이 안 나와서 return을 삭제하니
						// 답을 구할 수 있었다.
						// 여기서 리턴을 하면 안되는 이유는 예를 들어 1, 2까지 탐색한 상황에서
						// 2가 갈 수 있는 곳은 1과 3 그리고 5이다.
						// 1은 이미 방문한 곳인데 1인 경우에 이 로직 영역에 접근하게 된다.
						// 1은 이미 방문한 정점이므로 3 그리고 5로 넘어가서 계속 탐색해야 하는데
						// 여기서 리턴하면 DFS(2)가 1만 탐색하고 더 이상 탐색할 수 없게 된다.
						// 사실상 이 else문 로직은 필요없지만 이 주석을 남기기 위해 keep해두었다.
					}
				}
			}
		}
	}

	DFS(1);
	console.log('answer', answer);
	return answer.length;
}

let arr = [
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 1],
	[2, 3],
	[2, 5],
	[3, 4],
	[4, 2],
	[4, 5],
];
console.log(solution(5, arr));
