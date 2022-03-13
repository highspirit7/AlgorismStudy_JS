function solution(s, e) {
	let answer = 0;
	let jumpCount = [],
		queue = [];

	// 배열은 검색에 O(N)이 걸리므로 check용 배열은 좌표 수만큼 0으로 초기화.
	let check = Array.from({ length: 10001 }, () => 0);

	queue.push(s);
	check.push(s);
	jumpCount[s] = 0;

	while (answer === 0) {
		let currentCoordinate = queue.shift();

		for (let nextCoordinate of [currentCoordinate + 1, currentCoordinate - 1, currentCoordinate + 5]) {
			if (!check[nextCoordinate - 1]) {
				if (nextCoordinate === e) {
					answer = jumpCount[currentCoordinate] + 1;
					// 이미 단계를 하나하나 올리면서(이 문제에서는 점프를 한 번씩 하면서)
					// 송아지 위치로 가는 경우를 탐색하고 있기 때문에 처음 송아지 위치로 가는 경우를
					// 찾아냈을 때 그때의 단계(점프 횟수)가 최소 점프 횟수이다.
					break;
				} else {
					if (nextCoordinate > 0 && nextCoordinate <= 10000) {
						queue.push(nextCoordinate);
						check[nextCoordinate - 1] = 1;
						jumpCount[nextCoordinate] = jumpCount[currentCoordinate] + 1;
					}
				}
			}
		}
	}

	console.log(`check : ${check}`);
	console.log(`count : ${jumpCount}`);
	return answer;
}

console.log(solution(8, 3));
