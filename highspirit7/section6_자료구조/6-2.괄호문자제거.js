function solution(s) {
  const answer = [];

  for (let str of s) {
    if (str !== ")") answer.push(str);
    else {
      const lastIndexOfOpenBracket = answer.lastIndexOf("(");

      while (lastIndexOfOpenBracket < answer.length) {
        answer.pop();
      }
    }
    console.log(answer);
    console.log("--------");
  }

  return answer.join("");
}

// 괄호가 양쪽으로 짝이 맞지 않게 들어오는 경우 "(" 혹은 ")" 괄호가 더 많이 들어오는 경우도
// 핸들링하게 하려 했으나 복잡해져서 포기.
// 문제에서 주어진것처럼 양쪽으로 짝이 맞게 괄호가 들어가는 경우만 핸들링하도록 하였다.
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)Z(DB)";
console.log(solution(str));
