function solution(string) {
	const regexp = new RegExp('[A-Za-z]');

	const filteredString = string
		.split('')
		.filter((char) => regexp.test(char))
		.join('')
		.toUpperCase();
	const reverseFilteredString = filteredString.split('').reverse().join('');
	console.log(filteredString);
	console.log(reverseFilteredString);
	return filteredString !== reverseFilteredString ? 'NO' : 'YES';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';

console.log(solution(str));
