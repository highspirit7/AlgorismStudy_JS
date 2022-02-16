/**
 * @history
 * 25th Jan 2022(ver0) : 이중 for 문 활용하여 풀이.
 * 26th Jan 2022(ver1) : '누구나 자료구조와 알고리즘' 책 파이선 코드 참고하여 변경.
 */

function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let position = i;
    const temp = arr[i];

    // for (let j = i - 1; j >= 0; j--) {
    //   console.log(`temp : ${temp}`);
    //   if (arr[j] > temp) {
    //     arr[j + 1] = arr[j];

    //     if (j === 0) arr[j] = temp;
    //   } else {
    //     arr[j + 1] = temp;

    //     break;
    //   }
    // }

    while (position > 0 && arr[position - 1] > temp) {
      arr[position] = arr[position - 1];
      position--;
    }

    arr[position] = temp;
  }

  return answer;
}

let arr = [4, 11, 7, 5, 6, 10, 9, 99, 23];
console.log(solution(arr));
