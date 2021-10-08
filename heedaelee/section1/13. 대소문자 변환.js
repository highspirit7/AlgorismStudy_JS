function solution(param) {
  let answer = "";
  for (let i = 0; i < param.length; i++) {
    if (param[i] !== param[i].toUpperCase()) {
      answer += param[i].toUpperCase();
    } else {
      answer += param[i].toLowerCase();
    }
  }

  return answer;
}
let str = "StuDY";
console.log(solution(str));
