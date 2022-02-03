//A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.
function solution(a, b) {
  let answer = [];

  let m = a.length;
  let n = b.length;

  a.sort((next, prev) => next - prev);
  b.sort((next, prev) => next - prev);
  

  //arr1이 작거나 같을경우, arr2와 비교해
  if (m <= n) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        //a[i]이 b[j]보다 작을때
        if (a[i] < b[j]) break;
        //a[i]이 b[j]와 같을때
        else if (a[i] === b[j]) {
          answer.push(a[i]);
          // console.log(answer);
          break;
        }
      }
    }
  } else {
    //arr2가 작을경우
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        //b[i]가 a[j]보다 작을때
        if (b[i] < a[j]) break;
        //b[i]와 a[j]가 같을때
        else if (arr2[i] === arr1[j]) {
          answer.push(arr2[i]);
          break;
        }
      }
    }
  }
  return answer;
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.time();
console.log(solution(arr1, arr2));
console.timeEnd();