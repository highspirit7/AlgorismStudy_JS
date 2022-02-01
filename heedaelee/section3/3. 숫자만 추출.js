function solution(p) {
  let answer;
  // / / : 정규식 표현, [ ] :캐릭터 셋 의미, ^ : if not, 0-9 : 0부터 9까지
  let newStr = p.replace(/[^0-9]/g, "");
  answer = parseInt(newStr);
  return answer;
}

function anotherSolution(p) {
  let number = "";
  for (let e of p) {
    //not a number 함수
    !isNaN(e) && (number += e);
  }
  let answer = parseInt(number);
  return answer;
}

let str = "g0en2T0s8eSoft";
//console.log(solution(str));
console.log(anotherSolution(str));
