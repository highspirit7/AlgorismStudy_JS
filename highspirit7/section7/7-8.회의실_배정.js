/**
 * @history
 * 8th Feb 2022(ver0) : 첫 회의(첫번째 인덱스)부터 회의가 끝나는 시간과 시작하는 시간에 맞추어 가능한 회의만 추출하여 최대 가능한
 * 회의 수 산출. 다음으로 두번째 인덱스의 회의로 시작해서 위와 같이 진행. 그러나 남아 있는 회의 갯수가 이미 산출된 최대 가능 회의 수랑
 * 같다면 더 이상 진행하지 않음.
 */

function solution(meeting) {
	let answer = 0;

	for (let i = 0; i < meeting.length; i++) {
		if (answer < meeting.length - i) {
			const availableMeetings = [];
			availableMeetings.push(meeting[i]);

			for (let j = i + 1; j < meeting.length; j++) {
				if (meeting[j][0] >= availableMeetings[availableMeetings.length - 1][1]) {
					availableMeetings.push(meeting[j]);
				}
			}
			answer = availableMeetings.length > answer ? availableMeetings.length : answer;
			console.log(availableMeetings);
		} else break;
	}

	return answer;
}

let arr = [
	[1, 4],
	[2, 3],
	[3, 5],
	[4, 6],
	[5, 7],
];
console.log(solution(arr));
