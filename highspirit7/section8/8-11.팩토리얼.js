/**
 * 팩토리얼
 * @history
 * 22th Feb 2022(ver0)
 * 22th Feb 2022(ver1) : 재귀함수 값을 return하여 변수에 저장하는 방식을 
 * 강의 정답에서 배우게 되었고 해당 방식으로 코드 수정
 */

function solution(n) {
	let answer;

	function factorial(number) {
		if (number === 1) return 1;
		else {
			return number * factorial(number - 1);
		}
	}

	answer = factorial(n);

	return answer;
}

console.log(solution(5));
