/**
 * @history
 * 12th Feb 2022(ver0)
 */

function solution(target, arr) {
	let answer;

	arr.sort((a, b) => a - b);
	console.log(arr);

	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);
	console.log(`start : ${start}`);
	console.log(`mid : ${mid}`);
	console.log(`end : ${end}`);

	while (!answer) {
		if (arr[mid] < target) {
			start = mid;

			if (end === arr.length - 1 && end - mid === 1) {
				mid = Math.ceil((start + end) / 2);
			} else {
				mid = Math.floor((start + end) / 2);
			}
		} else if (arr[mid] > target) {
			end = mid;
			mid = Math.floor((start + end) / 2);
		} else if (arr[mid] === target) {
			answer = mid;
			break;
		}
		console.log(`start : ${start}`);
		console.log(`mid : ${mid}`);
		console.log(`end : ${end}`);
	}

	return answer + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81, 77];
console.log(solution(12, arr));
