/**
 * @history
 * 8th Feb 2022(ver0) : 첫 회의(첫번째 인덱스)부터 회의가 끝나는 시간과 시작하는 시간에 맞추어 가능한 회의만 추출하여 최대 가능한
 * 회의 수 산출. 다음으로 두번째 인덱스의 회의로 시작해서 위와 같이 진행. 그러나 남아 있는 회의 갯수가 이미 산출된 최대 가능 회의 수랑
 * 같다면 더 이상 진행하지 않음.
 * 9th Feb 2022(ver1) : 회의 시작시간을 기준으로 그리고 시작시간이 같으면 끝나는 시간 기준으로 정렬을 먼저 하도록 설정. 문제의 
 * 첫 입력예제는 정렬이 되어 있었지만 그렇지 않은 입력(아래 주석 처리한 입력 예제와 같은)이 들어오면 제대로 대응하지 못하기 때문.
 */

function solution(meeting) {
	let answer = 0;

	meeting.sort((startTime, endTime) => {
		return startTime[0] === endTime[0] ? startTime[1] - endTime[1] : startTime[0] - endTime[0];
	});

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

// let arr = [
// 	[3, 3],
// 	[1, 3],
// 	[2, 3],
// ];
let arr = [
	[1, 4],
	[2, 3],
	[3, 5],
	[4, 6],
	[5, 7],
];
console.log(solution(arr));
