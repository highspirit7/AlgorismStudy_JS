function solution(n) {
	let answer = '';

	function recursive(number) {
		const quotient = Math.floor(number / 2);

		if (quotient === 0) {
			answer += '1';
      console.log(`number : ${number}`);
			console.log(`answer : ${answer}`);
			return;
		}

		recursive(quotient);

		if (number % 2 === 0 || quotient === 2) answer += '0';
		else answer += '1';
		console.log(`number : ${number}`);
		console.log(`answer : ${answer}`);
	}

	recursive(n);

	return answer;
}

console.log(solution(555));
