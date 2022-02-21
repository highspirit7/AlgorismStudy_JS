/**
 * 중복순열 구하기
 * @history
 * 21th Feb 2022(ver0) : for문 돌 때마다 해당 인덱스의 원소를 제거한 배열을
 * 재귀적으로 호출되는 함수에 넣어주는 방식으로 중복을 제거하도록 하였다.
 * 21th Feb 2022(ver1) : 강의 정답 로직이 더 이해하기도 쉽고 깔끔한 
 * 해결책이라고 판단했고, 강의 정답처럼 check용 배열을 하나 더 만들어서 수정하였다.
 */

function solution(m, arr) {
	let answer = [];
	const permutation = Array.from({ length: m }, (e) => 0);
	const check = Array.from({ length: arr.length }, (e) => 0);

	function DFS(level) {
		if (level === m) {
			answer.push(permutation.slice());
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (check[i] === 0) {
					check[i] = 1;

					permutation[level] = arr[i];

					DFS(level + 1);

					check[i] = 0;
				}
			}
		}
	}

	DFS(0);

	return answer;
}

let arr = [3, 6, 9, 11];
console.log(solution(2, arr));
