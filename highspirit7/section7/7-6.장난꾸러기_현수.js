/**
 * @history
 * 8th Feb 2022(ver0) : 하나의 for문은 앞에서 뒤로, 다른 하나의 for문은 뒤에서 앞으로 돌면서 현수와 짝꿍 번호를 추출
 */

function solution(arr) {
	let answer = [];
	// 첫번째 for문 : 앞에서 뒤로 가면서 순서대로 정렬되지 않은 것 찾기
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] >= arr[i + 1]) {
			answer.push(i + 1);
			break;
		}
	}

	// 두번째 for문 : 뒤에서 앞으로 가면서 순서대로 정렬되지 않은 것 찾기
	for (let i = arr.length - 1; i > 0; i--) {
		if (arr[i] <= arr[i - 1]) {
			answer.push(i + 1);
			break;
		}
	}
	return answer;
}

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
