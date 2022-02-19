/**
 * @history
 * 19th Feb 2022(ver0)
 */

function solution(m, ps, pt) {
	let maxScoreSum = Number.MIN_SAFE_INTEGER;

	function DFS(index, scoreSum, timeSum) {
		if (timeSum > m) return;

		if (index === ps.length) {
			maxScoreSum = Math.max(maxScoreSum, scoreSum);
		} else {
			DFS(index + 1, scoreSum + (ps[index] ?? 0), timeSum + (pt[index] ?? 0));
			DFS(index + 1, scoreSum, timeSum);
		}
	}

	DFS(0, 0, 0);

	return maxScoreSum;
}

let ps = [10, 25, 15, 6, 7]; // 문제별 점수(포인트)
let pt = [5, 12, 8, 3, 4]; // 문제별 걸리는 시간
console.log(solution(20, ps, pt));
