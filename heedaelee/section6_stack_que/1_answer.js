function solution(str) {
  let stack = [];

  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  console.log(stack);
  if (stack.length === 0) return "YES";
  else return "NO";
}

let string = "(()(()))(()";

console.log(solution(string));
