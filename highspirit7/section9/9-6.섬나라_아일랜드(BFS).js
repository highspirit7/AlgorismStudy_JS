/**
 * @history
 * 17th Mar 2022(ver0)
 * 17th Mar 2022(ver1) : 강의 참고하여 로직 일부 개선(queue에 좌표 값 중복으로 들어가는
 * 비효율성 해결)
 */

function solution(board) {
	let answer = 0;
	let queue = [];

	// sx : 격자판 세로 사이즈, sy : 격자판 가로 사이즈
	const [sx, sy] = [board.length, board[0].length];

	// 탐색 시 방향값(북쪽에서부터 시작하여 시계방향으로 탐색)
	const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
	const dy = [0, 1, 1, 1, 0, -1, -1, -1];

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 1) {
				answer++;
				queue.push([i, j]);
				board[i][j] = 0;

				while (queue.length > 0) {
					console.log(deepCopy(queue));
					let [cx, cy] = queue.shift();

					for (let i = 0; i < 8; i++) {
						let nx = cx + dx[i];
						let ny = cy + dy[i];

						if (nx >= 0 && ny >= 0 && nx < sx && ny < sy && board[nx][ny] === 1) {
							queue.push([nx, ny]);
							board[nx][ny] = 0;
						}
					}
				}
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
