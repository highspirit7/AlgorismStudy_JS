state1 = "COMPUTERPROGRAMMING";
state2 = "R";

// 내 방법
// function solution(param1, param2) {
//   let count = 0;
//   for (element of param1) {
//     if (element === param2) {
//       count += 1;
//     }
//   }
//   let answer = count;
//   return answer;
// }

//추가 답안 : 답안 응옹
function solution(param1, param2) {
  //split(토크나이저) : 문자열 끊어 배열로 반환해 주는 함수, 매개변수는 토큰나이저, " " 입력시 공백 구분 끊음, 빈값은 의미x
  let answer = param1.split(param2).length - 1; //끊은 덩어리 - 1

  return answer;
}

console.log(solution(state1, state2));
