function solution(board) {
	let answer = 0;
	let queue = [];

	// sx : 격자판 세로 사이즈, sy : 격자판 가로 사이즈
	const [sx, sy] = [board.length, board[0].length];
	const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
	const dy = [0, 1, 1, 1, 0, -1, -1, -1];

	queue.push([0, 0]);

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 1) {
				answer++;
				queue.push([i, j]);

				// 섬 하나 찾을 때마다 그 시점의 격자판 지도 상태를 보기 위함.
				// console.log(deepCopy(board));

				while (queue.length > 0) {
					let [cx, cy] = queue.shift();
					board[cx][cy] = 0;
					console.log(deepCopy(queue));
					for (let i = 0; i < 8; i++) {
						let nx = cx + dx[i];
						let ny = cy + dy[i];

						if (nx >= 0 && ny >= 0 && nx < sx && ny < sy && board[nx][ny] === 1) {
							queue.push([nx, ny]);
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
