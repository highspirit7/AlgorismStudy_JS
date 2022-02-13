/**
 * @history
 * 13th Feb 2022(ver0)
 */

// 말 사이 간의 최소 거리가 주어졌을 때 최대 수용가능한 말 마리 수 계산하는 함수
function numOfMaxHorses(stable, min_distance) {
	let max = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < stable.length; i++) {
		let count = 1;
		let current = stable[i];

		for (let j = i + 1; j < stable.length; j++) {
			if (stable[j] - current >= min_distance) {
				// console.log(`current : ${current}`);
				count++;
				current = stable[j];
				// console.log(`stable[j] : ${stable[j]}`);
			}
		}

		max = Math.max(max, count);
		count = 1;
		// console.log(`count : ${count}`);
		// console.log('-----------');
	}

	return max;
}

function solution(c, stable) {
	let answer;
	stable.sort((a, b) => a - b);

	let lt = 1;
	let rt = Math.max(...stable) - Math.min(...stable);

	while (lt <= rt) {
		const mid = parseInt((lt + rt) / 2);

		if (numOfMaxHorses(stable, mid) >= c) {
			answer = mid;
			lt = mid + 1;
		} else {
			rt = mid - 1;
		}
	}

	return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
