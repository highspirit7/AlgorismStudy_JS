// 시간 복잡도는 O(N)
// https://blog.naver.com/ndb796/221227934987
function solution(arr1, arr2) {
	let answer = [];
	let firstTarget = 0,
		secondTarget = 0;

	do {
		if (arr1[firstTarget] > arr2[secondTarget]) {
			// 아래와 같이 연산자를 뒤에 사용하면 먼저 기존 값을 사용한 다음에 1증가시킨다.
			answer.push(arr2[secondTarget++]);
		} else if (arr1[firstTarget] < arr2[secondTarget]) {
			answer.push(arr1[firstTarget++]);
		} else {
			// 비교하는 두 값이 같은 경우 or 한 쪽이 undefined인 경우
			if (arr2[secondTarget]) {
				answer.push(arr2[secondTarget++]);
			}
			if (arr1[firstTarget]) {
				answer.push(arr1[firstTarget++]);
			}
		}
	} while (firstTarget < arr1.length || secondTarget < arr2.length);
	// 두 배열 다 끝까지 순회할때까지 반복
	return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9, 11];
console.log(solution(a, b));
