function solution(p) {
  let answer = 0,
    cnt = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === 1) {
      answer += ++cnt;
      // console.log(answer);
    } else cnt = 0;
  }

  return answer;
}
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(arr));
