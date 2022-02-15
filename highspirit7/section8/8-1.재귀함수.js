function solution(n) {
	if (n === 0) return;
	else {
		console.log(n);
		solution(n - 1);
	}
}

solution(10);
