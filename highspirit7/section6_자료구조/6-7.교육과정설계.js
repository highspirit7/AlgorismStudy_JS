export function firstSolution(need, plan) {
  let answer = "YES";
  const queue = [];

  for (let className of plan) {
    if (need.includes(className)) {
      queue.push(className);
    }
  }

  if (queue.join("") !== need) answer = "NO";
  return answer;
}

// 처음에 제대로 queue를 이용해서 풀지 않음... 필수과목 큐로 만들어 shift로 첫요소를
// 제거하는 방식으로 재시도 필요. 내가 위에서 짠 코드는 무조건 반복문이 전부 다 돌아야 해서
// 효율성이 떨어진다.
export default function queueSolution(need, plan) {
  let answer = "YES";

  // 필수과목을 큐 형태로 저장
  const queue = need.split("");

  for (let className of plan) {
    if (queue.includes(className)) {
      // __배운 점__
      // 배열의 shift메소드는 제일 첫 요소를 제거하면서 그 첫 요소를 리턴해준다
      if (className !== queue.shift()) {
        answer = "NO";
        break;
      }
    }
  }

  // 반복문이 다 실행됬는데도 큐에 뭔가가 남아있다면 필수과목을 다 이수하지 않은 상태이다.
  if (queue.length > 0) answer = "NO";
  return answer;
}
