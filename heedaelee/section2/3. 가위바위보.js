//내 답
// function solution(A, B) {
//   let answer = "";
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === 1) {
//       if (B[i] === 1) answer += "D";
//       if (B[i] === 2) answer += "B";
//       if (B[i] === 3) answer += "A";
//     } else if (A[i] === 2) {
//       if (B[i] === 1) answer += "A";
//       if (B[i] === 2) answer += "D";
//       if (B[i] === 3) answer += "B";
//     } else if (A[i] === 3) {
//       if (B[i] === 1) answer += "B";
//       if (B[i] === 2) answer += "A";
//       if (B[i] === 3) answer += "D";
//     }
//     answer += "\n";
//   }
//   return answer;
// }

/**
 *  모범 답 : 좀 더 쉽게
 * 비기는 경우는 같은 경우니까 케이스 하나 무조건 D 하면되고
 * A가 이기는 경우만 조건으로 해서 A 할당해주면, 자동으로 다음 케이스는 B가 이기는 경우 밖에 없으니
 * else로 두면 된다. 코드가 확 짧아짐
 */

function solution(A, B) {
  let answer = "";
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer += "D";
    //A가 이기는 경우
    else if (
      (A[i] === 1 && B[i] === 3) ||
      (A[i] === 2 && B[i] === 1) ||
      (A[i] === 3 && B[i] === 2)
    ) {
      answer += "A";
    } else {
      answer += "B";
    }
    answer += "\n";
  }
  return answer;
}

let str = "";
let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];
console.log(solution(A, B));
