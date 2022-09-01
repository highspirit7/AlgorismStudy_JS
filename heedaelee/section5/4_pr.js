function solution(n, arr) {
  let count = 0;
  let sum = 0;
  let l = 0;
  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];

    while (n < sum) {
      sum -= arr[l];
      ++l;
    }

    console.log(`현재 배열중 선택 범위 arr[${l}] ~ arr[${r}]`);
    count += r - l + 1;
  }
  return count;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
