/**
 * 중복순열 구하기
 * @history
 * 21th Feb 2022(ver0) : for문 돌 때마다 해당 인덱스의 원소를 제거한 배열을 
 * 재귀적으로 호출되는 함수에 넣어주는 방식으로 중복을 제거하도록 하였다.
 */

function solution(m, arr) {
	let answer = [];
	const permutation = Array.from({ length: m }, (e) => 0);

	function DFS(level, array) {
		if (level === m) {
			answer.push(permutation.slice());
		} else {
			for (let i = 0; i < array.length; i++) {
				const base = array.slice();

				permutation[level] = base[i];
				base.splice(i, 1);

				DFS(level + 1, base);
			}
		}
	}

	DFS(0, arr);

	return answer;
}

let arr = [3, 6, 9, 10, 12];
console.log(solution(3, arr));
