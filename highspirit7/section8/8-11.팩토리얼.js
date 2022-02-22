/**
 * 팩토리얼
 * @history
 * 22th Feb 2022(ver0)
 */

function solution(n) {
	let answer = 1;

	function factorial(number) {
		if (number === 1) {
			return;
		} else {
			answer = answer * number;
			factorial(number - 1);
		}
	}

	factorial(n);

	return answer;
}

console.log(solution(7));
