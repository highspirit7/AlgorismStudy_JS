/**
 * @history
 * 7th Feb 2022(ver0) : Cache miss일 경우, 무조건 배열 제일 뒤에서부터 순회하도록 처리
 * 7th Feb 2022(ver1) : 앞 뒤 모두 0인 경우 시프트하는게 의미가 없기 때문에 제일 처음 0인 요소의 인덱스부터 순회하도록 수정
 */

function solution(size, arr) {
	// size 크기만큼 0을 집어넣어서 캐시용 배열 생성
	const cache = [...Array(size)].map((elem) => 0);

	for (let work of arr) {
		const indexOfWorkInCache = cache.indexOf(work);
		let position;
		// case 1 : 캐시 안에 작업이 존재하는 경우 ; Cache Hit
		if (indexOfWorkInCache > -1) {
			cache[indexOfWorkInCache] = 0;
			position = indexOfWorkInCache;
		} else {
			// 아래 2가지 케이스 모두 Cache Miss
			// case 2 : 캐시 안에 작업이 없고 캐시 작업 사이즈가 꽉 차 있을 때, 배열의 가장 뒤에서부터 앞으로 순회하며 시프트.
			// case 3 : 캐시 안에 작업이 없고 캐시 작업 사이즈가 주어진 사이즈보다 작을 때,
			// 제일 처음으로 0이 담겨 있는 그러니까 비어있는 인덱스부터 앞으로 순회하며 시프트.
			position = cache.indexOf(0) === -1 ? size - 1 : cache.indexOf(0);
		}

		while (position >= 0) {
			if (position === 0) cache[position] = work;
			else cache[position] = cache[position - 1];

			position--;
		}
		console.log(cache);
	}

	return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
