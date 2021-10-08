// 문제 잘못 이해
function solution(arr) {
  let answer = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      // console.log(arr[i]);
      answer++;
      max = arr[i];
    }
  }

  return answer;
}
let array = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(array));
