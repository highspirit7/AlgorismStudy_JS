function solution(s) {
  let answer = "YES";
  const stack = [];

  for (let bracket of s) {
    if (bracket === "(") stack.push(bracket);
    else if (bracket === ")") {
      if (stack.length > 0) stack.pop();
      else {
        // ')' 닫는 괄호가 더 많은 경우
        answer = "NO";
        break;
      }
    } else {
      // 혹시라도 괄호말고 다른 것이 들어오는 경우 처리
      answer = "NO";
      break;
    }
  }

  // '(' 여는 괄호가 더 많은 경우
  if (stack.length > 0) answer = "NO";
  return answer;
}

let a = "(()(()))(())";
console.log(solution(a));
