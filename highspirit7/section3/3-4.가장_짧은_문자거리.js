// 문자열 내 각 문자들로부터 두번째 인자로 주어진 문자와의 최소거리를 구해야 한다.
// 주어진 문자는 e라고 가정하고 설명.
function solution(s, t) {
  // **문제 풀이 전 수도 코드 로직 설명**
	// 두번째 인자로 주어진 문자들의 인덱스만 추출
	// 주어진 문자가 문자열에 없는 경우 에러 메시지
	// 주어진 문자가 e라고 가정
	// 두 개의 e 사이에 있는 문자들은 좌우 양쪽의 e와 떨어진 거리를 비교하여
	// 작은 쪽을 출력햐여야 한다.(최소 거리 구하는거니까)
	// 문자열 내에 몇 개의 e가 있게 될지는 모르지만 적어도 하나 혹은 두 개의 e의 인덱스를
	// 변수에 담아 비교
	// e가 문자열 내에 2개를 초과하여 존재한다면 변수에 담겨지는 두 개의 e의 인덱스는
	// 지속적으로 적절하게 업데이트되어야 한다.
	// 더 이상 e가 없게 되는 시점에는 첫번째 변수는 마지막 e의 인덱스가 되고
	// 두번째 변수는 null 처리(애초에 처음부터 두번째 e용 변수는 null로 생성)
	let answer = [];
	const index = str.indexOf(t);
	let firstIndexOfLetter = str.indexOf(t);
	let secondIndexOfLetter = null;

	if (firstIndexOfLetter < 0) alert('2번째 인자가 주어진 문자열에 없습니다!');
	else {
		for (let i = 0; i < str.length; i++) {
			if (i <= firstIndexOfLetter) {
				// 주어진 문자열에서 제일 첫번째 e의 인덱스와 같은 인덱스를 가지는 구간까지는
				// 최소거리 같은 개념을 생각할 필요 없으므로 단순 거리 계산.
				answer.push(firstIndexOfLetter - i);
			} else {
				if (!secondIndexOfLetter && str.slice(firstIndexOfLetter + 1).indexOf(t) > -1) {
					// 첫번째 e 뒤에 e가 또 있는 경우
					// 그 두번째 e의 인덱스를 찾아 넣어준다.
					secondIndexOfLetter = str.slice(firstIndexOfLetter + 1).indexOf(t) + firstIndexOfLetter + 1;

          // 첫번째 e의 바로 다음에 위치한 문자열이므로 첫번째 e와의 거리가 곧 최소거리.
					answer.push(i - firstIndexOfLetter);
				} else if (secondIndexOfLetter) {
          // 두번째 e의 인덱스가 있는 경우 첫번째 e의 인덱스에서부터 그리고 두번째 e의 인덱스에서부터
          // 거리를 계산하여 작은 쪽을 택한다.
					const shortestDistance =
						secondIndexOfLetter - i > Math.abs(firstIndexOfLetter - i)
							? Math.abs(firstIndexOfLetter - i)
							: secondIndexOfLetter - i;

					answer.push(shortestDistance);
					console.log(`presentIndex : ${i}`);
					console.log(`firstIndex : ${firstIndexOfLetter}`);
					console.log(`secondIndex : ${secondIndexOfLetter}`);
				} else {
          // 두번째 e의 인덱스가 없는(null)인 경우 첫번째 e의 인덱스로부터의 거리를 계산하여 넣어준다.
					answer.push(i - firstIndexOfLetter);
				}

				if (secondIndexOfLetter === i) {
          // 두번째 e의 인덱스를 순회하게 되면 첫번째 e의 인덱스를 기존의 두번째 e의 인덱스로 대체하고
          // 이후에 추가로 e가 있으면 두번째 e의 인덱스를 업데이트하고 
          // 아니면 null값을 넣어준다.
					firstIndexOfLetter = secondIndexOfLetter;
					if (str.slice(secondIndexOfLetter + 1).indexOf(t) > -1) {
						secondIndexOfLetter = str.slice(secondIndexOfLetter + 1).indexOf(t) > -1 + firstIndexOfLetter + 1;
					} else {
						secondIndexOfLetter = null;
					}
				}
			}
		}
	}

	return answer;
}

let str = 'etpuiodfyegoin';
console.log(solution(str, 'e'));
