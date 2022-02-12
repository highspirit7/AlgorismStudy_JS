// 우선 DVD용량이 정해졌을 때 몇 개의 DVD로 필요한지 계산 함수
function numOfDVDsByCapacity(songs, capacity) {
	let count = 1;
	let sumOfSongs = 0;

	for (let song of songs) {
		if (song > capacity) return null;

		sumOfSongs += song;

		if (sumOfSongs > capacity) {
			count++;
			sumOfSongs = song;
		}
	}

	return count;
}

// 제일 길이가 긴 노래의 용량을 최소값(start)으로
// 전체 노래 용량 다 합한 것을 최대값(end)으로 하여 이분탐색(왜냐하면 정렬되어 있으니까)
//

function solution(m, songs) {
	let answer = Number.MAX_SAFE_INTEGER;
	let start = Math.max(...songs);
	let end = songs.reduce((a, b) => a + b);

	while (start <= end) {
		const mid = parseInt((start + end) / 2);
		answer = mid;
		console.log(`start: ${start}`);
		console.log(`mid: ${mid}`);
		console.log(`end: ${end}`);
		console.log(`answer: ${answer}`);
		console.log(`numOfDVDsByCapacity : ${numOfDVDsByCapacity(songs, mid)}`);
		console.log('======');
		if (numOfDVDsByCapacity(songs, mid) <= m) {
			// 계산된 필요 DVD 갯수가 주어진 것보다 작은 케이스
			// 용량이 더 커질수록 필요 DVD 갯수는 작아졌으면 작아졌지 커지지는 않는다. 그래서 end값을 재조정
			end = mid - 1;
		} else if (numOfDVDsByCapacity(songs, mid) > m) {
			// 계산된 필요 DVD 갯수가 주어진 것보다 크거나 같은 경우
			// 큰 경우에는 당연히 용량이 더 크게 해서 탐색해야 하고
			// 같다고 해도 현재 용량보다 더 큰 용량에서도 같은 DVD 갯수가 나올 수 있기 때문에 용량 늘려서 더 탐색해야 한다.
			// 그래서 start값 재조정
			start = mid + 1;

			// if (numOfDVDsByCapacity(songs, mid) === m) answer = mid;
		}
	}

	return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8];
console.log(solution(3, arr));
