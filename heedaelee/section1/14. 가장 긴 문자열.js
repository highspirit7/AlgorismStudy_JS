function solution(param) {
  let strLength = 0;
  let answer = "";
  for (element of param) {
    if (strLength < element.length) {
      strLength = element.length;
      answer = element;
    }
  }

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
