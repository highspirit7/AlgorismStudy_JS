function solution(arr) {
  const answer = arr;

  let indexOfminValueEachTime;

  for (let i = 0; i < arr.length; i++) {
    indexOfminValueEachTime = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        indexOfminValueEachTime = j;
      }
    }

    if (i !== indexOfminValueEachTime) {
      [arr[i], arr[indexOfminValueEachTime]] = [
        arr[indexOfminValueEachTime],
        arr[i],
      ];
    }
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
