function solution(p) {
  let answer = "";
  //reverse() 는 array 소속이니 split과 join과정이 String에 필요.
  let newReversedParam = p.split().reverse().join();
  newReversedParam === p && (answer = "YES");
  return answer;
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
