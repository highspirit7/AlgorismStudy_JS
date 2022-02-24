function combination(n, r) {
	let answer;
	let memoization = Array.from(Array(r + 1), () => Array(n + 1).fill(0));

	function DFS(total, taken) {
		if (memoization[taken][total] > 0) {
			return memoization[taken][total];
		}

		if (taken === 0 || taken === total) {
			memoization[taken][total] = 1;
			return 1;
		} else {
			return (memoization[taken][total] = DFS(total - 1, taken - 1) + DFS(total - 1, taken));
		}
	}

	DFS(n, r);

	answer = memoization[r][n];

	return answer;
}

// --강의 로직 아이디어--
// 1. 1부터 N까지 순열을 다 구하지 않고 그때그때마다 구해서 따져보고 정답을 찾게되면 더 이상
// 순열 생성 작업을 할 필요가 없다.(시간 복잡도 면에서 내 로직보다 유리한 점)
// 2. 하나 하나 더해서 파스칼 삼각형을 만들어나가는 작업을 하지 않고 이항계수를 활용하여
// 각 숫자에 곱할 값을 미리 계산해놓는다.
// 예를 들어, 1 2 3 4를 파스칼 삼각형을 만들어서 계산해보면 최종적으로 20이 나온다.
// 하지만, (a + b)의 3승을 풀어서 썼을 때 이항 계수는 1 3 3 1 이 나오고
// 1 * 1 + 3 * 2 + 3 * 3 + 4 * 1 = 20 이렇게 이항계수를 적용해서 구할 수도 있다.

function solution(n, f) {
	let answer,
		flag = 0;

	// 순열 구하는 데 사용하기 위한 베이스 배열
	const base = Array.from({ length: n }, (e, i) => i + 1);

	// 이항계수 담는 배열
	const binomial_coefficient = [];

	// 순열 제작용 배열
	const permutation = Array.from({ length: n }, (e) => 0);

	// 순열 생성시 중복을 피하기 위한 확인용 배열
	const check = Array.from({ length: n }, (e) => 0);

	// 항의 개수가 n일 때 이항계수를 구한다.
	for (let i = 0; i < n; i++) {
		binomial_coefficient.push(combination(n - 1, i));
	}

	function DFS(level) {
		if (flag) return;
		if (level === n) {
			const sum = permutation.slice().reduce((a, b, i) => a + b * binomial_coefficient[i], 0);
			console.log(`sum : ${sum}`);
			console.log(permutation.slice());
			console.log('========');
			if (sum === f) {
				answer = permutation.slice();
				flag = 1;
			}
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

console.log(solution(4, 16));
