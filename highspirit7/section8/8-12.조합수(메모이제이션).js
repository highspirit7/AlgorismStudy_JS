function factorial(number) {
	if (number === 1) return 1;
	else {
		return number * factorial(number - 1);
	}
}

function solution(n, r) {
	let answer;
	let memoization = Array.from(Array(r + 1), () => Array(n + 1).fill(0));

	function DFS(total, taken) {
		if (memoization[taken][total] > 0) {
			return memoization[taken][total];
		}
		console.log(`n : ${taken}, r : ${total}`);
		if (taken === 0 || taken === total) {
			// 뽑아야할 숫자 개수가 0일 때 경우의 수는 1가지이다.
			// 주어진 숫자 개수와 뽑아야할 숫자 개수가 같으면 경우의 수는 1가지이다.

      // n과 r이 같거나 r이 0인 경우에도 제대로 값(1)을 출력하기 위한 코드
			memoization[taken][total] = 1;
			return 1;
		} else {
			// 아래와 같이 리턴하면 어떻게 되는 지 몰랐었다. 등호 좌측이든 우측이든
			// 연산된 결과값이 리턴된다!!!
			return (memoization[taken][total] = DFS(total - 1, taken - 1) + DFS(total - 1, taken));
		}
	}

	DFS(n, r);

	answer = memoization[r][n];
	console.log(memoization);
	return answer;
}

console.log(solution(4, 0));
