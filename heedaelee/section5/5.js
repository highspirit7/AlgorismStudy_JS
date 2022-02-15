function solution(a, k) {
  let lt = 0,
    answer = 0;

  let cnt = 0;

  for (let rt = k - 1; rt < a.length; rt++) {
    let sum = 0;

    lt = rt - (k - 1);
    for (let i = lt; i <= rt; i++) {
      sum += a[i];
    }

    console.log(`[${cnt++}] lt : ${lt}, rt: ${rt}, sum=${sum} `);

    if (sum > answer) answer = sum;
  }

  return answer;
}

let array = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let day = 3;
console.log(solution(array, day));
