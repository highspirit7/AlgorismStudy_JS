function isPrime(num) {
	if (num < 1) return false;
	if (num === 1) return false;
	if (num % 2 === 0) {
		return num === 2 ? true : false;
	}
	for (let i = 1; i < num; i += 2) {
		if (i !== 1 && num % i === 0) {
			return false;
		}
	}

	return true;
}

function solution(arr) {
	let answer = [];
	for (let i = 0; i < arr.length; i++) {
		const reversedNum = Number(arr[i].toString().split('').reverse().join(''));

		if (isPrime(reversedNum)) answer.push(reversedNum);
	}
	return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100, 98, 88];
console.log(solution(arr));
