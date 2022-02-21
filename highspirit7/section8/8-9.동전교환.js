/**
 * 동전교환
 * @history
 * 21th Feb 2022(ver0)
 */

function solution(m, arr) {
	let minCount = Number.MAX_SAFE_INTEGER;
	let count = 0;

	function DFS(count, sum) {
		if (sum > m) return;
		else if (sum === m) {
			minCount = Math.min(count, minCount);
		} else {
			for (let i = 0; i < arr.length; i++) {
				DFS(count + 1, sum + arr[i]);
			}
		}
	}

	DFS(0, 0);

	return minCount;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
