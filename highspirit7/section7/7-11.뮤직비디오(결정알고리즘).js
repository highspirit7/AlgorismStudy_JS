/**
 * @history
 * 12th Feb 2022 : 결정 알고리즘에 대해 검색해서 거의 강의 정답과 비슷한 로직을 발견했다. 난이도가 어렵게 느껴져서 그 로직을 상당히 참고해서 시도했으나 완성은 못 했다.
 * 12th Feb 2022(ver0) : 커밋에 반영은 안 되어있지만 while문 내부 로직 중 부등호 파트에 문제가 있었다. DVD 갯수가 주어진 것과 같으면서 용량이 더 커질 수 있지만
 * 최소 용량을 찾는 것이 목표이기에 더 용량을 높이면서 탐색할 필요는 없다. 그리고 answer 삽입하는 위치도 수정하였다.
 */

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

function solution(m, songs) {
	let answer;
	let start = Math.max(...songs);
	let end = songs.reduce((a, b) => a + b);

	while (start <= end) {
		const mid = parseInt((start + end) / 2);

		console.log(`start: ${start}`);
		console.log(`mid: ${mid}`);
		console.log(`end: ${end}`);
		console.log(`answer: ${answer}`);
		console.log(`numOfDVDsByCapacity : ${numOfDVDsByCapacity(songs, mid)}`);
		console.log('======');
		if (numOfDVDsByCapacity(songs, mid) <= m) {
			// 계산된 필요 DVD 갯수가 주어진 것보다 작거나 같은 케이스

			// 예를 들어 계산된 필요 DVD 갯수가 2장이라면 3장, 4장 등 2장보다 많은 갯수에도 가능하다.
			// 그래서 답이 될 수도 있기 때문에 계산된 필요 DVD 갯수가 주어진 것보다 작아도 answer를 업데이트해준다.
			answer = mid;

			// 용량이 더 커질수록 필요 DVD 갯수는 작아졌으면 작아졌지 커지지는 않는다. 그래서 end값을 재조정
			end = mid - 1;
		} else if (numOfDVDsByCapacity(songs, mid) > m) {
			// 계산된 필요 DVD 갯수가 주어진 것보다 큰 경우
			// 큰 경우에는 당연히 용량이 더 크게 해서 탐색해야 한다. 
      // 예를 들어 계산된 필요 DVD 갯수가 4장이라면, 어떻게 재구성해도 3장만 사용할 순 없다.
			// 그래서 start값 재조정
			start = mid + 1;
		}
	}

	return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
