/**
 * 동전교환
 * @history
 * 21th Feb 2022(ver0)
 * 21th Feb 2022(ver1) : Cut edge 코드 추가(불필요한 호출 줄이기 위함)
 */

function solution(m, arr) {
	let minCount = Number.MAX_SAFE_INTEGER;
	let count = 0;

	function DFS(count, sum) {
		if (sum > m) return;

		if (count >= minCount) return;

		if (sum === m) {
			console.log(`level : ${count}, sum : ${sum}, answer : ${minCount}`);
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
