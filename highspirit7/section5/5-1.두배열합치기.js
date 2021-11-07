function solution(arr1, arr2) {
  let answer = [];
  let firstTarget = 0,
    secondTarget = 0;

  do {
    if (arr1[firstTarget] > arr2[secondTarget]) {
      answer.push(arr2[secondTarget]);
      secondTarget += 1;
    } else if (arr1[firstTarget] < arr2[secondTarget]) {
      answer.push(arr1[firstTarget]);
      firstTarget += 1;
    } else {
      // 비교하는 두 값이 같은 경우 or 한 쪽이 undefined인 경우
      if (arr2[secondTarget]) {
        answer.push(arr2[secondTarget]);
        secondTarget += 1;
      }
      if (arr1[firstTarget]) {
        answer.push(arr1[firstTarget]);
        firstTarget += 1;
      }
    }
  } while (firstTarget < arr1.length || secondTarget < arr2.length);
  // 두 배열 다 끝까지 순회할때까지 반복
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6];
console.log(solution(a, b));
