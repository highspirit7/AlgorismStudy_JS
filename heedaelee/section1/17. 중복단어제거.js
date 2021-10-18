// 내 답
// function solution(p) {
//   let answer = [];

//   for (let i = 0; i < p.length; i++) {
//     p.indexOf(p[i]) === i && answer.push(p[i]);
//   }
//   return answer;
// }

// 원래 답
function solution(p) {
  let answer;
  answer = p.filter((v, i) => {
    //2번째, 3번째 파라미터가 같으면 answer
    // console.log(v, i, p.indexOf(v));
    if (p.indexOf(v) === i) return v;
  });

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
