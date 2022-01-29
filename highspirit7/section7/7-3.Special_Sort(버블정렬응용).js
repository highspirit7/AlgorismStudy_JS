/**
 * @history
 * 29th Jan 2022(ver0) : 기존에 버블 정렬 문제에 사용했던 로직 구조 가져다 활용.
 * 29th Jan 2022(ver1) : 강의 정답 참고하여 이중 for문 사용.
 */

function solution(arr) {
  let answer = arr;

  // 로직 ver0
  // let unsortedUntilThisIndex = arr.length - 1;

  // while (unsortedUntilThisIndex > 0) {
  //   for (let i of arr.keys()) {
  //     if (i >= unsortedUntilThisIndex) break;
  //     // console.log(`${i} : ${arr[i]}`);
  //     // console.log(`${i + 1} : ${arr[i + 1]}`);

  //     if (arr[i] > 0 && arr[i + 1] < 0) {
  //       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  //       console.log(arr);
  //     }
  //   }

  //   console.log(`unsortedUntilThisIndex : ${unsortedUntilThisIndex}`);
  //   console.log("------------------------");
  //   unsortedUntilThisIndex--;
  // }

  // 로직 ver1
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
