// -- 중요 포인트 --
// 미로찾기와 유사하지만 섬이 대각선으로 연결될 수도 있기에 4방향이 아닌 8방향으로 탐색해야 한다.

function solution(board) {
	let answer = 0;

	// sx : 격자판 세로 사이즈, sy : 격자판 가로 사이즈
	const [sx, sy] = [board.length, board[0].length];
	const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
	const dy = [0, 1, 1, 1, 0, -1, -1, -1];

	function DFS(x, y) {
		// 격자판 지도 내에서 육지인 경우에만 계속해서 재귀로 탐색하도록 되어 있으므로
		// DFS 함수가 실행되자마자 해당 좌표를 0으로 세팅해주어도 문제가 없다.
		board[x][y] = 0;

		for (let i = 0; i < dx.length; i++) {
			let nx = x + dx[i];
			let ny = y + dy[i];

			// 육지인 경우에만 재귀적으로 호출하여 불필요하게 콜스택이 낭비되지 않게 된다.
			if (nx >= 0 && ny >= 0 && nx < sx && ny < sy && board[nx][ny] === 1) {
				DFS(nx, ny);
			}
		}
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 1) {
				answer++;
				// 섬 하나 찾을 때마다 그 시점의 격자판 지도 상태를 보기 위함.
				console.log(deepCopy(board));

        // 육지인 경우에만 재귀적으로 호출하여 불필요하게 콜스택이 낭비되지 않게 된다.
				DFS(i, j);
			}
		}
	}

	return answer;
}

let arr = [
	[1, 1, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 1, 0],
	[0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 1, 0, 0],
	[1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));

function deepCopy(inObject) {
	let outObject, value, key;

	if (typeof inObject !== 'object' || inObject === null) {
		return inObject;
	}

	outObject = Array.isArray(inObject) ? [] : {};

	for (key in inObject) {
		value = inObject[key];

		// Recursively (deep) copy for nested objects, including arrays
		outObject[key] = deepCopy(value);
	}

	return outObject;
}
