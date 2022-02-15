// 강의 정답
function lecAnswer(a, b) {
  let answer = [];
  let i = a.length;
  let j = b.length;

  let p1 = (p2 = 0);

  while (p1 < i && p2 < j) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    else {
      answer.push(b[p2++]);
    }
  }

  while (p1 < i) {
    answer.push(a[p1++]);
  }
  while (p2 < j) {
    answer.push(b[p2++]);
  }

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.time();
console.log(lecAnswer(arr1, arr2));
console.timeEnd();
