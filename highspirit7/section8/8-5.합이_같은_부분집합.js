/**
 * @history
 * 19th Feb 2022(ver0)
 */

// 문제를 풀이하기 위한 로직(ver0)
// 문제의 조건을 충족하는 경우에 그 두 부분집합의 각각의 합은 주어진 집합의 합의 절반이 되어야 한다.

// 만약에 주어진 배열의 합이 홀수이면 그 합의 절반은 더이상 자연수가 아니게 된다. 그런데 자연수로 구성된 집합이기에 이 경우에 문제의 조건을 만족하는 케이스가 존재하지 않게 된다.
function solution(arr) {
	const sumOfArr = arr.reduce((a, b) => a + b, 0);
	const subset = [];
	let answer = 'NO';
	const groupOfSubsets = {};

	function DFS(index) {
		if (sumOfArr % 2 !== 0) return;

		if (index === arr.length) {
			const sumOfSubset = subset.reduce((a, b) => a + b, 0);

			// 합이 같은 부분집합끼리 모아서 보기 위한 코드
			if (!groupOfSubsets[sumOfSubset]) {
				groupOfSubsets[sumOfSubset] = [];
			}

			groupOfSubsets[sumOfSubset].push(subset.slice());

			// 특정 부분집합의 합이 주어진 집합 원소의 합의 절반이라면 분명히 합해서 주어진 집합 원소의 합의 절반과 같아지는 서로소 집합이 존재할 수 밖에 없다.
			if (sumOfArr / 2 === sumOfSubset) {
				answer = 'YES';
			}
		} else {
			subset.push(arr[index]);
			DFS(index + 1);

			subset.pop(arr[index]);
			DFS(index + 1);
		}
	}

	DFS(0);

	console.log(groupOfSubsets);

	return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
