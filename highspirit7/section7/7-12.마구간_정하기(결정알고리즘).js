/**
 * @history
 * 13th Feb 2022(ver0) : numOfMaxHorses 함수 만들 때 첫 번째 마구간보다 뒤에서 말 배치를
 * 시작하더라도 첫 번째 마구간에서 시작하는 경우보다 더 큰 말 마릿수가 나올수도 있다고 생각.
 * 13th Feb 2022(ver1) : 그러나 강의 정답 보면서 위 문제를 발견했고, 다시 생각해보니 첫 번째 마구간
 * 보다 뒤에서 시작해서 첫번째 마구간의 경우와 동일한 숫자가 나올 수는 있지만 더 큰 숫자가 나올 수는
 * 없다는 것을 깨닫고 로직 수정.
 */

// 말 사이 간의 최소 거리가 주어졌을 때 최대 수용가능한 말 마릿수 계산하는 함수
function numOfMaxHorses(stable, min_distance) {
	let count = 1;
	let current = stable[0];

	// 이미 위에서 1을 count하였기에 1번 인덱스부터 탐색 시작.
	for (let i = 1; i < stable.length; i++) {
		if (stable[i] - current >= min_distance) {
			count++;
			current = stable[i];
		}
	}

	return count;
}

function solution(c, stable) {
	let answer;
	stable.sort((a, b) => a - b);

	// rt는 제일 큰 좌표에서 제일 작은 좌표를 뺀 값이 말 사이에 가능한 최대 거리이기에 이렇게 설정.
	// 강의 정답에서는 정렬된 배열 제일 마지막 값을 사용했는데 내 로직과 다른 부분.
	// 그런데 제일 작은 좌표 값이 1보다 매우 크고 큰 좌표 값이라면 이진 탐색 시작하는 처음 범위 자체가
	// 줄어들기 때문에 더 탐색 단계가 조금 더 줄어들수 있다고 생각한다.
	let lt = 1;
	let rt = Math.max(...stable) - Math.min(...stable);

	while (lt <= rt) {
		const mid = parseInt((lt + rt) / 2);

		if (numOfMaxHorses(stable, mid) >= c) {
			// 마구간에 주어진 마릿수 혹은 그 이상으로 말을 채울 수 있는 상황.
			// 현 상태보다 더 큰 숫자가 말 사이 간의 최소 거리로 가능한지 계속해서 이진 탐색해야한다.
			answer = mid;
			lt = mid + 1;
		} else {
			// 말 사이 간의 최소 거리가 너무 커서 마구간에 주어진 마릿수를 못 채우는 상황.
			// rt를 mid보다 작은 수로 줄여서 다시 이진 탐색해야 한다.
			rt = mid - 1;
		}
	}

	return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
