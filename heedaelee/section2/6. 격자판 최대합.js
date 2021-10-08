function solution(l, arr) {
  let answer = 0,
    horizonSum = 0,
    verticalSum = 0,
    downRightSum = 0,
    upRightSum = 0;

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      horizonSum += arr[i][j];
      verticalSum += arr[j][i];
    }

    console.log(`horizonSum : ${horizonSum}`);
    console.log(`verticalSum : ${verticalSum}`);

    if (horizonSum > answer) answer = horizonSum;
    else if (verticalSum > answer) answer = verticalSum;

    horizonSum = 0;
    verticalSum = 0;

    downRightSum += arr[i][i];
    upRightSum += arr[i][l - i - 1];
  }

  if (downRightSum > answer) answer = downRightSum;
  else if (upRightSum > answer) answer = upRightSum;
  console.log(`downRightSum : ${downRightSum}`);
  console.log(`upRightSum : ${upRightSum}`);

  return answer;
}

let length = 5;
let array = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(length, array));
