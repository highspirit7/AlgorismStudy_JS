let array = [5, 3, 7, 11, 2, 15, 17];

function solution(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log(solution(array));
