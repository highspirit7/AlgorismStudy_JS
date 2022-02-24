/**
 * 중복순열 구하기
 * @history
 * 20th Feb 2022(ver0)
 */

// 재귀와 비교해서 다중 for문으로 풀었을 때 문제
// m번 만큼 for문이 중첩되어야 하기 때문에 m(뽑는 횟수)이 바뀌면 그에 맞게 유연하게
// 대응하는 코드를 for문으로는 만들기 어렵다. 

function solution(n, m) {
	let answer = [];
	const permutation = [];

	function DFS(count) {
		if (count === m) {
			answer.push(permutation.slice());
			console.log(permutation.slice());
		} else {
			// 재귀함수를 n번 만큼 실행해줘야
			for (let i = 0; i < n; i++) {
				permutation.push(i + 1);

				DFS(count + 1);

				permutation.pop();
			}
		}
	}

	DFS(0);

	return answer.length;
}

console.log(solution(4, 3));
