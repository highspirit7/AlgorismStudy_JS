function solution(size, arr) {
	// size 크기만큼 0을 집어넣어서 캐시용 배열 생성
	const cache = [...Array(size)].map((elem) => 0);

	for (let work of arr) {
		const indexOfWorkInCache = cache.indexOf(work);
		let position;
		// case 1 : 캐시 안에 작업이 존재하는 경우
		if (indexOfWorkInCache > -1) {
			cache[indexOfWorkInCache] = 0;
			position = indexOfWorkInCache;
		} else {
			if (cache[size - 1] > 0) {
				// case 2 : 캐시 안에 작업이 없고 캐시 작업 사이즈가 꽉 차 있을 때, 마지막 인덱스에 위치한 작업을 삭제하고
				cache[size - 1] = 0;
			}

			// case 3 : 캐시 안에 작업이 없고 캐시 작업 사이즈가 주어진 사이즈보다 작을 때
			position = size - 1;
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

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7, 4];
console.log(solution(5, arr));
