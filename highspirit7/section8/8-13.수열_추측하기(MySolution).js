/**
 * 수열 추측하기
 * @history
 * 23th Feb 2022(ver0) : 순열 구했던 로직 약간 수정하여 활용
 */

function getPermutation(m) {
  // 1부터 m까지 차례대로 구성되는 베이스용 배열 제작
	const base = Array.from({ length: m }, (e, i) => i + 1);
	const answer = [];
	const permutation = Array.from({ length: m }, (e) => 0);

  // 중복 허용하게하지 않기 위한 확인용 배열 제작
	const check = Array.from({ length: m }, (e) => 0);

	function DFS(level) {
		if (level === m) {
			answer.push(permutation.slice());
		} else {
			for (let i = 0; i < base.length; i++) {
				if (check[i] === 0) {
					check[i] = 1;

					permutation[level] = base[i];

					DFS(level + 1);

					check[i] = 0;
				}
			}
		}
	}

	DFS(0);

	return answer;
}

// --핵심 로직 아이디어--
// 삼각형 가장 윗줄에 위치한 숫자의 개수는 주어진다. 예를 들어 4라면, 1 2 3 4 이렇게 4가지 숫자로
// 가장 윗줄이 구성된다. 이 숫자들이 어떤식으로 수열을 구성하고 있을 때 삼각형의 제일 아래에서 두번째로 
// 주어진 매개변수 값에 도달할 수 있을지 알아내야 한다.
// 1부터 N까지의 숫자를 나열하는 모든 경우의 수(순열)를 계산하여 각 경우가 위 조건을 충족하는지 따져본다.
function solution(n, f) {
	const permutation = getPermutation(n);

	let topOfPascalTriangle;

	for (let p of permutation) {
    // 두 개의 값을 더하여 파스칼 삼각형의 아랫줄을 구성하는 재귀 함수
		function nextLevelOfPascalTriangle(base) {
			if (base.length === 1) return base;

			let array = [];

			for (let i = 0; i < base.length - 1; i++) {
				array.push(base[i] + base[i + 1]);
			}
			return nextLevelOfPascalTriangle(array);
		}

		// console.log(nextLevelOfPascalTriangle(p));
		// console.log('-------------');
		topOfPascalTriangle = nextLevelOfPascalTriangle(p)[0];

		if (topOfPascalTriangle === f) return p;
	}
}

console.log(solution(4, 16));
