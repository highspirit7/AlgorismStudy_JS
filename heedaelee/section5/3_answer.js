function solution(a, t) {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < a.length; rt++) {
    sum += a[rt];
    if (sum === t) {
      answer++;
    }
    while (sum >= t) {
      sum -= a[lt++];
      if (sum === t) {
        answer++;
      }
    }
  }
  return answer;
}

let array = [1, 2, 1, 3, 1, 1, 1, 2];
let sumA = 6;
console.log(solution(array, 6));
