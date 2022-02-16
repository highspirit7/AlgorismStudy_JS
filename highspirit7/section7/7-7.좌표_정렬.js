/**
 * @history
 * 8th Feb 2022(ver0) : if, else 사용
 * 8th Feb 2022(ver1) : 삼항연산자로 변경
 */

function solution(arr) {
	let answer = arr;

	answer.sort((coordinateA, coordinateB) => {
		return coordinateA[0] === coordinateB[0] ? coordinateA[1] - coordinateB[1] : coordinateA[0] - coordinateB[0];
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
	[1, 3],
];
console.log(solution(arr));
