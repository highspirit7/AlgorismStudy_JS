//내답 : 정규식 사용
function solution(arr) {
  let answer = arr.replace(/A/g, "#");
  //다 바꾸려면 정규식 활용, g는 전체를 뜻함, i는 대소문자 분별(사용안했음)
  return answer;
}

let arr = "BANANA";
console.log(solution(arr));

//정답지
// function solution(arr) {
//   let answer = [];

//   /**1. for 문 사용 */
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] === "A") {
//   //       answer += "#";
//   //     } else {
//   //       answer += arr[i];
//   //     }
//   //   }

//   /**2. for .. of 사용 */
//   // for (element of arr) {
//   //   if (element === "A") {
//   //     answer += "#";
//   //   } else {
//   //     answer += element;
//   //   }
//   // }

//   return answer;
// }