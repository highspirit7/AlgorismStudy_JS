//강의 정답

function solution(arr1, arr2) {
  let answer = [];

  arr1.sort();
  arr2.sort();
  // console.log(arr1, arr2);

  let p1 = (p2 = 0);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

console.time();
console.log(solution(a, b));
console.timeEnd();
