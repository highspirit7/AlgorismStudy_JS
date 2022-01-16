/**
 * 처음에 감이 오지 않아 관련 블로그에서 살짝 힌트 참고
 */
export default function solution(s) {
  const stack = [];
  const operation = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  for (let i = 0; i < s.length; i++) {
    const convertedToNum = Number(s[i]);
    if (isNaN(convertedToNum)) {
      // 숫자가 아니고 연산부호인 경우
      const numberB = stack.pop();
      const numberA = stack.pop();
      const resultOfOperation = operation[s[i]](numberA, numberB);
      // console.log(resultOfOperation);
      stack.push(resultOfOperation);
    } else {
      // 숫자인 경우
      stack.push(convertedToNum);
    }
  }

  return stack[0];
}

// 3을 넣고 [3]
// 5를 넣고 [3, 5]
// 2를 넣고 [3, 5, 2]
// +를 만나면 필요한 개수만큼 위(뒤) 쪽에서 숫자를 빼내 계산하고 결과를 집어 넣는다. [3, 7]
// *를 만나도 위와 마찬가지. [21]
// 9를 만나면 [21, 9]
