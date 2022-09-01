function merge(arr1, arr2) {
	let answer = [];
	let pointer1 = (pointer2 = 0);

	do {
		if (arr1[pointer1] > arr2[pointer2]) {
			// 아래와 같이 연산자를 뒤에 사용하면 먼저 기존 값을 사용한 다음에 1증가시킨다.
			answer.push(arr2[pointer2++]);
		} else if (arr1[pointer1] < arr2[pointer2]) {
			answer.push(arr1[pointer1++]);
		} else {
			// 비교하는 두 값이 같은 경우 or 한 쪽이 undefined인 경우
			if (arr2[pointer2]) {
				answer.push(arr2[pointer2++]);
			}
			if (arr1[pointer1]) {
				answer.push(arr1[pointer1++]);
			}
		}
	} while (pointer1 < arr1.length || pointer2 < arr2.length);
	// 두 배열 다 끝까지 순회할때까지 반복
	return answer;
}

function mergeSort(arr) {
	// 재귀 함수 기저 조건
	if (arr.length === 1) return arr;

	const middle = Math.ceil(arr.length / 2);

	const leftArr = arr.slice(0, middle);
	const rightArr = arr.slice(middle);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

let array = [2, 3, 1, 5, 10, 8, 6, 7, 4, 9, 11];
console.log(mergeSort(array));
