function solution(arr) {
  let answer = arr;
  let unsortedUntilThisIndex = arr.length - 1;

  while (unsortedUntilThisIndex > 0) {
    for (let i of arr.keys()) {
      if (i >= unsortedUntilThisIndex) break;
      console.log(`${i} : ${arr[i]}`);
      console.log(`${i + 1} : ${arr[i + 1]}`);

      if (arr[i] > arr[i + 1]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
      console.log(arr);
    }

    console.log(`unsortedUntilThisIndex : ${unsortedUntilThisIndex}`);
    console.log("------------------------");
    unsortedUntilThisIndex--;
  }

  return answer;
}

// let arr = [13, 5, 11, 7, 23, 15];
let arr = [13, 5, 11, 7, 23, 15, 34, 22];
solution(arr);
