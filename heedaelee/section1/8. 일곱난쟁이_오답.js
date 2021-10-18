let input = [20, 7, 23, 19, 10, 15, 8, 13];

function solution(arr) {
  let subSum = 0,
    sum = 0,
    diff = 0;
  let otherThanAnswrArr = [];

  for (let element of arr) {
    sum += element;
    diff = sum - 100;
  }

  console.log(diff);

  let min = 100;
  for (let element of arr) {
    subSum += element;
    otherThanAnswrArr.push(element);
    if (subSum > diff) {
      for (let i = 0; i < otherThanAnswrArr.length; i++) {
        if (min > otherThanAnswrArr[i]) {
          min = otherThanAnswrArr[i];
        }
      }
      subSum -= min;
      otherThanAnswrArr = otherThanAnswrArr.filter((value) => value != min);
    }
    if (subSum === diff) {
      break;
    }
  }
  let flag = false;

  let answer = arr.filter((value) => {
    for (let i = 0; i < otherThanAnswrArr.length; i++) {
      if (value === otherThanAnswrArr[i]) {
      } else {
        flag = true;
      }
    }
    if (flag) {
      return value;
    }
  });

  return answer;
}

console.log(solution(input));
