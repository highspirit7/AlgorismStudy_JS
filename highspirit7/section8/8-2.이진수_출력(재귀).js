/**
 * @history
 * 17th Feb 2022(ver0)
 * 17th Feb 2022(ver1) : 강의 참고하여 로직 일부 개선
 */

function solution(n) {
	let answer = '';

	function recursive(number) {
		if (Math.floor(number / 2) === 0) {
			answer += '1';
			// console.log(`number : ${number}`);
			// console.log(`answer : ${answer}`);
			return;
		}

		recursive(Math.floor(number / 2));

		answer += String(number % 2);
		// console.log(`number : ${number}`);
		// console.log(`answer : ${answer}`);
	}

	recursive(n);

	return answer;
}

console.log(solution(11));
