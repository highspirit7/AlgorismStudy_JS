export default function solution(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // 1. 여는 괄호
      stack.push(s[i]);
    } else {
      if (s[i - 1] === "(") {
        // 2. 여는 닫는 괄호 한쌍
        stack.pop();
        answer += stack.length;
      } else {
        // 3. 닫는 괄호
        stack.pop();
        answer += 1;
      }
    }
  }

  return answer;
}

// __pseudo code__
// 여는 괄호가 생길 때마다 쇠막대기가 하나씩 추가 된다.
// 반대로 닫는 괄호가 생길 때마다 추가 되었던 쇠막대기가 제거 된다.
// 여는 괄호, 닫힌 괄호 인접한 쌍이 있으면 현재 추가된 쇠막대기가 잘린다는 뜻.
// 현재 추가된 쇠막대기 개수만큼 조각이 생성된다.

// 닫는 괄호로 쇠막대기가 하나 제거될 때 조각도 하나 추가된다.

// 세 가지 케이스 : 여는 괄호, 닫는 괄호, 여는 닫는 괄호 한 쌍
// 괄호를 담는 스택 필요
