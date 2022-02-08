function solution(arr) {
	let answer = arr;

	answer.sort((coordinateA, coordinateB) => {
		if (coordinateA[0] === coordinateB[0]) {
			return coordinateA[1] - coordinateB[1];
		} else {
			return coordinateA[0] - coordinateB[0];
		}
	});

	return answer;
}

let arr = [
	[2, 7],
	[1, 3],
	[1, 2],
	[2, 5],
	[3, 6],
	[2, 4],
  [1, 3]
];
console.log(solution(arr));
