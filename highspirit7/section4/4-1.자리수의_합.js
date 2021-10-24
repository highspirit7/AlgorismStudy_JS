function sumOfEachNumber(number) {
	let string = number.toString();
	let sum = 0;

	for (let i = 0; i < string.length; i++) {
		sum += parseInt(string[i]);
	}
	return sum;
}

function solution(n, arr) {
	let maxNumIndex = 0;
	let maxSum = 0;

	for (let i = 0; i < n; i++) {
		if (sumOfEachNumber(arr[i]) >= maxSum) {
			maxSum = sumOfEachNumber(arr[i]);
			maxNumIndex = i;
			console.log(`index : ${i}`);
			console.log(sumOfEachNumber(arr[i]));
		}
	}
	return arr[maxNumIndex];
}

let arr = [128, 460, 603, 40, 521, 137, 123, 845, 111];
console.log(solution(9, arr));
