//못품 : 다시풀어보기
//indexOf
// function solution(param) {
//   let answer = "";

//   for (let i = 0; i < param.length; i++) {
//     if (param.indexOf(param[i]) == i) answer += param[i];
//   }

//   return answer;
// }

//set
function solution(p) {
  let answer;
  // set을 Array로 변환하기 위해 전개 연산자 사용함.
  //join은 배열의 모든 요소를 연결해 하나의 문자열로 만듦
  answer = [...new Set(p)].join("");

  return answer;
}

let str = "ksekkset";
console.log(solution(str));
