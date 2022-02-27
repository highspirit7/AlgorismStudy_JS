function solution(n, arr) {
	let answer = 0;
	const graph = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
	return graph;
}

let arr = [
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 1],
	[2, 3],
	[2, 5],
	[3, 4],
	[4, 2],
	[4, 5],
];
console.log(solution(5, arr));
