/**
 * @history
 * 10th Feb 2022(ver0)
 * 10th Feb 2022(ver1) : Math.max 사용
 */

function solution(times) {
	let answer = Number.MIN_SAFE_INTEGER;

	times.sort((comingTime, leavingTime) => {
		return comingTime[0] === leavingTime[0] ? comingTime[1] - leavingTime[1] : comingTime[0] - leavingTime[0];
	});
	console.log(times);
	for (let i = 0; i < times.length; i++) {
		let maxNumOfPeople = 1;
		for (let j = 0; j < times.length; j++) {
			if (i === j) continue;
			// 친구의 오는 시간(times[j])이 기준이 되는 친구(times[i])의 가는 시간보다는 작아야 하고
			// 오는 시간보다는 크거나 같아야 한다.
			if (times[j][0] < times[i][1] && times[j][0] >= times[i][0]) maxNumOfPeople++;
		}
		console.log(`i : ${i}`);
		console.log(`maxNumOfPeople : ${maxNumOfPeople}`);

		answer = Math.max(answer, maxNumOfPeople);
	}

	return answer;
}

let arr = [
	[14, 18],
	[12, 15],
	[15, 20],
	[20, 30],
	[5, 14],
];
console.log(solution(arr));
