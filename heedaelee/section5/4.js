//연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.

//▣ 입력예제 1
//55 13123

//투포인트, 한포인터 계속 반복, sum>n일때

// function solution(a, n) {
//   let cnt = 0,
//     start = 0,
//     sum = 0;
//   for (let end = 0; end < a.length; end++) {
//     sum += a[end];
//     //sum < n
//     if (sum < n) {
//       console.log(
//         `a sum : ${sum}, start : ${start}, end : ${end},  cnt : ${cnt},`
//       );
//       cnt++;
//     }
//     if (sum >= n) {
//       while (start !== end) {
//         console.log(
//           `b-1 sum : ${sum}, start : ${start}, end : ${end},  cnt : ${cnt},`
//         );
//         if (sum <= n) cnt++;
//         sum -= a[start];
//         start += 1;
//       }
//       if (sum > n) {
//         console.log(
//           `b-2 sum : ${sum}, start : ${start}, end : ${end},  cnt : ${cnt},`
//         );
//         a[start++];
//       }
//     }
//   }
//   return cnt;
// }

// let array = [1, 3, 1, 2, 3];
// let num = 5;

// console.log(solution(array, num));

function solution(array, n) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < array.length; rt++) {
    sum += array[rt];
    while (sum > n) {
      sum -= array[lt++];
    }
    
    // lt가 0이고, rt가 0일때 갯수(중복X) -> 1개, 1일때 2개, 2-> 3개, 3-> 4개..
    //즉 rt,lt로 나타내면 rt - lt + 1, answer = rt-lt+1; 따라서 누적 합시키면
    answer += rt - lt + 1;
  }
  return answer;
}

let QuizArray = [1, 3, 1, 2, 3];
let QuizNum = 5;

console.log(solution(QuizArray, QuizNum));
