function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      console.log(`temp : ${temp}`);
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];

        if (j === 0) arr[j] = temp;
      } else {
        arr[j + 1] = temp;

        break;
      }
    }
    // console.log(answer);
  }

  return answer;
}

let arr = [4, 11, 7, 5, 6, 10, 9, 99, 23];
console.log(solution(arr));
