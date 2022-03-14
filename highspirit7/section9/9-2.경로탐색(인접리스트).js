function solution(n, arr) {
	let answer = [];
	const adjacency_list = Array.from({ length: n }, () => []);

	// 이미 방문한 정점인지 아닌지 확인하기 위한 배열
	const check = Array.from({ length: n }, () => 0);

	// 1번 정점에서 출발하는 것이므로 경로 체크 전에 미리 아래와 같이 초기화 필요.
	check[0] = 1;
	let path = [1];

	for (let edge of arr) {
		const [vertex1, vertex2] = edge;

		adjacency_list[vertex1 - 1].push(vertex2);
	}

	console.log('인접리스트', adjacency_list);

	function DFS(vertex) {
		if (vertex === n) {
			answer.push(path.slice());
		} else {
			for (let i = 0; i < adjacency_list[vertex - 1].length; i++) {
				const nextVertex = adjacency_list[vertex - 1][i];

				if (check[nextVertex - 1] === 0) {
					path.push(nextVertex);
					check[nextVertex - 1] = 1;

					DFS(nextVertex);

					path.pop();
					check[nextVertex - 1] = 0;
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
