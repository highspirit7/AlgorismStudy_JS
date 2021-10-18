//내 답
// function solution(param) {
//   let paramToLowerCase = param.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < param.length; i++) {
//     param[i] !== paramToLowerCase[i] && count++;
//   }

//   let answer = count;
//   return answer;
// }

// 다른 답
function solution(param) {
  let answer = 0;
  for (let element of param) {
    //for of돌려서 대문자 변환한뒤에 비교해서, 조건식으로 같으면 ++ 해주면 카운트가 나옴.
    element === element.toUpperCase() && answer++;
  }

  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str));
