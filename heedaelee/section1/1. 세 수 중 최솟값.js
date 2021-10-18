let array = [6, 5, 11];

function solution(arr) {
  let min = arr[0];
  for (let i = 1; i < array.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

console.log(solution(array));
