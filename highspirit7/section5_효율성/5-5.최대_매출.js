/**
 * @Problem
 * 연속된 k일 동안의 최대 매출액이 얼마인지 주어진 매출 기록 배열을 가지고 계산하는 문제
 */
function solution(k, arr) {
  let sumForKdays = 0,
    answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > k - 1) {
      // 반복 횟수가 k보다 커지게 되면
      // 기존의 합에서 첫째 날짜의 수치를 빼고 마지막 날짜 다음 날짜의 수치를 더해서 새로운 합을 계산.

      sumForKdays = sumForKdays - arr[i - k] + arr[i];

      console.log(`answer : ${answer}`);
      console.log(`sumFor${k}days : ${sumForKdays}`);
      console.log("--------");

      // 더 큰 숫자를 기존의 최대값(answer)과 비교하여 갱신
      answer = Math.max(answer, sumForKdays);
    } else {
      sumForKdays += arr[i];

      // k일 만큼 최초로 합이 계산되었을때 최대값(answer)에 할당.
      if (i === k - 1) answer = sumForKdays;
    }
  }

  return answer;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
