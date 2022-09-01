//output: 235
//타임 복잡도 : n

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

function solution(a, b) {
  a.sort();
  b.sort();

  let l = 0,
    r = 0;
  const answer = [];

  while (l < arr1.length && r < arr2.length) {
    console.log(l);
    console.log(r);
    if (a[l] === b[r]) {
      answer.push(a[l]);
      ++l;
      ++r;
    }
    if (b[r] < a[l]) {
      r++;
    }
    if (a[l] < b[r]) {
      l++;
    }
  }

  return answer;
}

console.log(solution(arr1, arr2));
