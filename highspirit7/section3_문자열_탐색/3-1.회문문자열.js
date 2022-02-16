function solution(s) {
	let answer = 'YES';
	// 전부 애초부터 대문자화 시켜서 비교할 수 있도록 하였습니다.
	const chars = s.toUpperCase().split('');
	const length = chars.length;

	// for문을 문자열 길이만큼 반복하지 않아도 회문 검증을 할 수 있어서 아래와 같이 반복 횟수 제한 조건을 설정
	// 강의 솔루션 보고 Math.floor 추가
	// 문자열 길이가 홀수 일때 정가운데 문자열은 체크할 필요 없기 때문.
	for (let i = 0; i < Math.floor(length / 2); i++) {
		// console.log(`${chars[i]} : ${chars[length - 1 - i]}`);
		if (chars[i] !== chars[length - 1 - i]) {
			answer = 'NO';
			break;
		}
	}
	return answer;
}

let str = 'gooG';
console.log(solution(str));
