export default function solution(n, k) {
  let answer;

  answer = [...Array(n).keys()].map((i) => i + 1);

  for (let i = 0; i < n - 1; i++) {
    if (answer.length < k) {
      const indexToRemove = (k % answer.length) - 1;

      answer.splice(indexToRemove, 1);
    } else {
      const sliced = answer.slice(0, k - 1);
      answer.splice(0, k);
      answer = answer.concat(sliced);
    }
    console.log(answer);
  }

  return answer[0];
}

/**
 * 그저 매번 왕자가 제거 될때마다 배열이 어떻게 되는지 적어보다가
 * 몇번에서부터 다시 숫자 외치기를 시작하는지 보기가 어려워
 * 아래의 화살표 오른쪽 파트처럼 바꾸어보았다. 그래서 매번 왕자가 제거될 때마다
 * 배열을 항상 새롭게 숫자외치는 왕자 번호부터해서 새롭게 배치하고
 * k번째에 위치한 왕자 번호를 제거하고 이런 식으로 풀면 되겠다고 생각했다.
 * 나중에 답안 강의를 확인해보니 이렇게 하는 방식이 '큐' 자료구조를 사용하는 것이었다.
 */

// 화살표 왼쪽 파트 : 배열 순서 바꾸지 않고 해당되는 왕자의 번호를 계속해서 제거
// 화살표 오른쪽 파트 : 새롭게 숫자를 외치는 왕자의 번호부터 배치한 배열
// 1 2 4 5 6 7 8 => 4 5 6 7 8 1 2
// 1 2 4 5 7 8 => 7 8 1 2 4 5
// 2 4 5 7 8 => 2 4 5 7 8
// 2 4 7 8 => 7 8 2 4
// 4 7 8
// 4 7
// 7

// k가 5인 경우 시뮬레이션(새 시작 지점에 ''표시)
// 1 2 3 4 '6' 7 8
// 1 '3' 4 6 7 8
// '1' 3 4 6 7  -> k와 사이즈가 같아지는 시점
// '1' 3 4 6
// '3' 4 6
// 3 '6'
// 6
