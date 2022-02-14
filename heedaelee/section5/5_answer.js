function solution(arr, k) {
  let answer = 0,
    sum = 0;

  for (let i = 0; i < k; i++) {
    answer += arr[i];
  }
  sum = answer;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let array = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let days = 3;
console.log(solution(array, days));
