function solution(need, plan) {
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

let a = "CBAE";
let b = "CDBAGE";
console.log(solution(a, b));
