function solution(str) {
	let answer = '';

	const regexp = new RegExp('[0-9]');

	answer = str
		.split('')
		.filter((char) => regexp.test(char))
		.join('');

  // Number 메소드 같은 것 사용할 수 있지만 아래 로직으로
  // 숫자 앞에 0이 반복되는 경우를 제거해주었다.
  // 숫자 형태로 콘솔 출력하면 되는 문제라 굳이 숫자형태로 타입을 바꾸진 않았다.
	if (answer[0] === '0') {
		let startingIndexToSlice = 1;
		for (let i = 1; i < answer.length; i++) {
			if (answer[i] === answer[i - 1]) {
				startingIndexToSlice += 1;
			} else break;
		}

		return answer.slice(startingIndexToSlice);
	}

	return answer;
}

let str = 'g0e0n2T0s8eSoft';
console.log(solution(str));
