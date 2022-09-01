function solution(board) {
	let answer = 0;

	// 이미 방문한 좌표 1로 바꾸어 주어야 한다. 따로 체크용 배열은 필요 없다.
	// 길이 막혀서 돌아갈 때 다시 0으로 또 바꾸어 주어야 한다. 문제 정답에서는 특정 방향으로 갔다 올 때마다 0으로
	// 세팅해주지만 나는 동서남북 4방향 다 탐색 후 돌아올 때 0으로 세팅해주었다.
	// 문제 정답에서는 0일 때만 탐색하도록 되어 있지만 0이 아니더라도 일단 4방향으로는 다 탐색하게 로직을 짰기 때문이다.

	// DFS 재귀함수 기저 조건
	// - 좌표가 1일 때
	// - 마지막으로 도착점에 도착했을 때
	// - 격자판 경계를 벗어났을 때

	// 도착점에 도착하면 answer에 1을 더하여 카운트한다.

	function DFS(x, y) {
		const [destination_x, destination_y] = [board.length - 1, board[0].length - 1];
		if (x === board.length - 1 && y === board.length - 1) {
			console.log(`도착 : ${x}, ${y}`);
			console.log('---------');
			answer++;
			return;
		} else if (x < 0 || y < 0 || x > destination_x || y > destination_y) {
			console.log(`경계밖 : ${x}, ${y}`);
			return;
		} else if (board[x][y] === 1) {
      // 다시 출발점으로 돌아와 탐색하는 경우를 체크하고 싶어서 넣은 로그.
			if (x === 0 && y === 0) console.log(`출발 : ${x}, ${y}`);
			else console.log(`벽 : ${x}, ${y}`);
			return;
		} else {
			if (board[x][y] === 0) {
				console.log(`통로 : ${x}, ${y}`);
				board[x][y] = 1;

				DFS(x, y + 1); // 동쪽
				DFS(x, y - 1); // 서쪽
				DFS(x + 1, y); // 남쪽
				DFS(x - 1, y); // 북쪽

				board[x][y] = 0;
			}
		}
	}

	console.log(`출발 : 0, 0`);
	DFS(0, 0);

	return answer;
}

let arr = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0],
	[1, 1, 0, 1, 0, 1, 1],
	[1, 1, 0, 0, 0, 0, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
