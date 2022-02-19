/**
 * @history
 * 19th Feb 2022(ver0)
 * 19th Feb 2022(ver1) : sum이 주어진 무게 제한보다 커지는 경우 함수를 종료시켜서 불필요한 작업을 줄이면서 정답을 구할 수 있도록 수정(강의 참고하여)
 */

function solution(c, arr) {
	let maxWeight = Number.MIN_SAFE_INTEGER;

	function DFS(index, sum) {
		if (sum > c) return;

		console.log(`index : ${index}`);
		console.log(`sum : ${sum}`);
		console.log('-------');

		if (index === arr.length) {
			maxWeight = Math.max(sum, maxWeight);
		} else {
			// sum계산 시 NaN이 나오지 않게 하기 위해 주어진 배열의 인덱스를 벗어나는 값을 조회할 때
			// 0이 대신 들어가도록 처리
			DFS(index + 1, sum + (arr[index] ?? 0));

			DFS(index + 1, sum);
		}
	}

	// 원래 첫번째 원소에 해당하는 무게를 넣어주었었다.
	// 그렇게 해도 문제 해결하는데는 문제가 없지만, 모든 경우에 첫번째 원소 무게가 포함되는 문제가 있었다.
	// 그래서 모든 경우에서 무게의 합을 구하는 로직이 더 적절할 것이라고 생각하여 강의 보고 수정하였다.
	DFS(0, 0);

	return maxWeight;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
