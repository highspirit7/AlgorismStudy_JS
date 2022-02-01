function sumOfEachNumber(number) {
  let string = number.toString();
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += parseInt(string[i]);
  }
  return sum;
}

function solution(n, arr) {
  let maxNumIndex = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    if (sumOfEachNumber(arr[i]) >= maxSum) {
      if (sumOfEachNumber(arr[i]) === maxSum) {
        // 자릿수 합이 같은 경우 더 큰 숫자를 답으로 출력하기 위함.
        if (arr[i] < arr[maxNumIndex]) continue;
      }
      maxSum = sumOfEachNumber(arr[i]);
      maxNumIndex = i;
      console.log(`index : ${i}`);
      console.log(sumOfEachNumber(arr[i]));
    }
  }
  return arr[maxNumIndex];
}

let arr = [137, 460, 603, 40, 521, 128, 123, 111];
console.log(solution(8, arr));
