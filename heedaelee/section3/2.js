function solution(p) {
  let answer = "";
  //reverse() 는 array 소속이니 split과 join과정이 String에 필요.
  //split() 파라미터에 "" 컴마 뺴먹은 실수.
  let newReversedParam = p.split("").reverse().join();
  console.log(newReversedParam);
  newReversedParam === p ? (answer = "YES") : (answer = "NO");
  return answer;
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
//No 테스트
let str2 = "123";
console.log(solution(str1));
