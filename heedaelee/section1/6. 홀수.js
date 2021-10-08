function solution(arr) {
  let sum = 0;
  let oddMin = 1000; //1000이하랬으니 초기값은 1000넣어도 됨

  for (let element of arr) {
    if (element % 2 === 1) {
      sum += element;
      if (oddMin > element) {
        oddMin = element;
      }
    }
  }

  return `${sum}\n${oddMin}`;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
